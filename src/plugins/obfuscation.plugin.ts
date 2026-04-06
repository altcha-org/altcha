import { BasePlugin } from './base.plugin';
import { deriveKey as derivedKeyPBKDF2 } from '../algorithms/pbkdf2';
import { createChallenge, solveChallenge, solveChallengeWorkers } from '../pow';
import { bufferToHex, hexToBuffer } from '../helpers';
import {
	State,
	type Challenge,
	type ChallengeParameters,
	type CreateChallengeOptions,
	type DeriveKeyFunction,
	type Solution,
	type VerifyOptions,
	type VerifyResult
} from '../types';

async function deobfuscate(
	obfuscatedData: string,
	options: {
		concurrency?: number;
		createWorker?: (algorithm: string) => Worker | Promise<Worker>;
		deriveKey?: DeriveKeyFunction;
	} = {}
) {
	let {
		concurrency = Math.max(1, Math.min(4, navigator.hardwareConcurrency)),
		createWorker,
		deriveKey = derivedKeyPBKDF2
	} = options;
	let challenge:
		| (Challenge & {
				cipher: {
					iv: string;
					data: string;
				};
		  })
		| null = null;
	try {
		challenge = JSON.parse(atob(obfuscatedData));
	} catch {
		throw new Error(`Unable to parse obfuscated data.`);
	}
	if (
		!challenge ||
		typeof challenge !== 'object' ||
		!('parameters' in challenge) ||
		!('cipher' in challenge)
	) {
		throw new Error(`Invalid obfuscated data format.`);
	}
	const cipher = challenge.cipher as {
		iv: string;
		data: string;
	};
	let solution: Solution | null = null;
	if (!createWorker && '$altcha' in globalThis) {
		createWorker = globalThis.$altcha.algorithms.get(challenge.parameters.algorithm);
	}
	if (createWorker) {
		solution = await solveChallengeWorkers({
			challenge,
			concurrency,
			createWorker
		});
	} else {
		solution = await solveChallenge({
			challenge,
			deriveKey
		});
	}
	if (!solution) {
		throw new Error('Unable to find solution.');
	}
	const key = await crypto.subtle.importKey(
		'raw',
		hexToBuffer(solution.derivedKey) as Uint8Array<ArrayBuffer>,
		{ name: 'AES-GCM' },
		false,
		['decrypt']
	);
	const result = await crypto.subtle.decrypt(
		{
			name: 'AES-GCM',
			iv: hexToBuffer(cipher.iv) as Uint8Array<ArrayBuffer>
		},
		key,
		hexToBuffer(cipher.data) as Uint8Array<ArrayBuffer>
	);
	return new TextDecoder().decode(result);
}

async function obfuscate(
	str: string,
	options: Partial<CreateChallengeOptions> & {
		counterMax?: number;
		counterMin?: number;
		deriveKey?: DeriveKeyFunction;
	} = {}
) {
	const { deriveKey = derivedKeyPBKDF2 } = options;
	const counterMin = options?.counterMin || 20;
	const counterMax = options?.counterMax || 200;
	const { parameters } = await createChallenge({
		algorithm: 'PBKDF2/SHA-256',
		cost: 5000,
		deriveKey,
		counter: Math.floor(Math.random() * (counterMax - counterMin + 1)) + counterMin,
		keyPrefixLength: 32,
		...options
	});
	const key = await crypto.subtle.importKey(
		'raw',
		hexToBuffer(parameters.keyPrefix) as Uint8Array<ArrayBuffer>,
		{ name: 'AES-GCM' },
		false,
		['encrypt']
	);
	const iv = crypto.getRandomValues(new Uint8Array(12));
	const data = await crypto.subtle.encrypt(
		{ name: 'AES-GCM', iv: iv },
		key,
		new TextEncoder().encode(str)
	);
	return btoa(
		JSON.stringify({
			parameters: {
				...parameters,
				// Return only half the derived key
				keyPrefix: parameters.keyPrefix.slice(0, parameters.keyLength || 32)
			} satisfies ChallengeParameters,
			cipher: {
				iv: bufferToHex(iv),
				data: bufferToHex(data)
			}
		})
	);
}

export class ObfuscationPlugin extends BasePlugin {
	static deobfuscate = deobfuscate;

	static obfuscate = obfuscate;

	elTrigger: HTMLElement | null = null;

	activate() {
		this.elTrigger = this.host.querySelector('button');
		if (this.elTrigger) {
			this.elTrigger.addEventListener('click', this.onTriggerClick.bind(this));
			this.host.configure({
				floatingAnchor: this.elTrigger
			});
		}
	}

	destroy() {}

	async onVerify(options: VerifyOptions): Promise<VerifyResult | null | void> {
		const { minDuration = 500 } = options;
		const start = performance.now();
		const obfuscated = this.host.getAttribute('data-obfuscated');
		if (obfuscated) {
			this.host.reset(State.VERIFYING);
			try {
				const text = await deobfuscate(obfuscated);
				await this.#wait(Math.max(0, minDuration - (performance.now() - start)));
				this.#renderClearText(text);
			} catch (err) {
				this.host.setState(State.ERROR, String(err));
			} finally {
				this.host.setState(State.VERIFIED);
			}
			return null;
		}
	}

	onTriggerClick(ev: MouseEvent) {
		ev.preventDefault();
		this.host.show();
		this.host.verify().then(() => {
			this.host.hide();
		});
	}

	#renderClearText(clearText: string) {
		const match = clearText.match(/^(mailto|tel|sms|https?):/);
		let el: HTMLAnchorElement | Text;

		// If the clear text is a link (mailto, tel, sms, or https), create an anchor element
		if (match) {
			const [contact] = clearText
				.slice(clearText.indexOf(':') + 1)
				.replace(/^\/\//, '')
				.split('?');
			el = document.createElement('a');
			el.href = clearText;
			el.innerText = contact;
		} else {
			// Otherwise, create a text node with the clear text
			el = document.createTextNode(clearText);
		}

		// Insert the clear text element after the button and remove the button from the DOM
		if (this.elTrigger && el) {
			this.elTrigger.after(el);
			this.elTrigger.parentElement?.removeChild(this.elTrigger);
		}
	}

	async #wait(ms: number) {
		await new Promise((resolve) => setTimeout(resolve, ms));
	}
}

BasePlugin.register(ObfuscationPlugin);
