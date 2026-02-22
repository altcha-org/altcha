<script lang="ts">
	import { onMount } from 'svelte';
	import { createChallenge } from '../../pow';
	import * as argon2id from '../../algorithms/argon2id';
	import * as pbkdf2 from '../../algorithms/pbkdf2';
	import * as sha from '../../algorithms/sha';
	import * as scrypt from '../../algorithms/scrypt';
	import {
		State,
		type Challenge,
		type CreateChallengeOptions,
		type CodeChallenge,
		type Solution
	} from '../../types/';
	import Options from '../components/Options.svelte';
	import { log } from '../helpers';
	import { ALGOS } from '../tests';
	import { getDefaultWidgetOptions, widgetOptions, submitUrl } from '../stores';

	// I18n
	import '../../i18n/all';

	// Themes
	import '../../themes/aqua.css';
	import '../../themes/business.css';
	import '../../themes/caramel.css';
	import '../../themes/cupcake.css';
	import '../../themes/cyberpunk.css';
	import '../../themes/lime.css';
	import '../../themes/wireframe.css';

	const languages = [
		'en',
		'ar',
		'bg',
		'be',
		'bs',
		'ca',
		'cs',
		'da',
		'de',
		'el',
		'es-es',
		'es-419',
		'et',
		'eu',
		'fa',
		'lb',
		'fi',
		'fr-ca',
		'fr-fr',
		'ga',
		'hr',
		'hu',
		'is',
		'it',
		'lt',
		'lv',
		'mt',
		'nb',
		'nl',
		'pl',
		'pt-pt',
		'pt-br',
		'ro',
		'ru',
		'sk',
		'sl',
		'sq',
		'sr',
		'sv',
		'tr',
		'uk',
		'af',
		'am',
		'sw',
		'yo',
		'bn',
		'he',
		'hi',
		'id',
		'ja',
		'ko',
		'kk',
		'mr',
		'ta',
		'te',
		'th',
		'ur',
		'uz',
		'vi',
		'zh-cn',
		'zh-tw'
	].sort();
	const themes = ['aqua', 'business', 'caramel', 'cupcake', 'cyberpunk', 'lime', 'wireframe'];

	let challenge = $state<Challenge | string>();
	let codeChallenge = $state<CodeChallenge>();
	let payload = $state<string | null>(null);
	let solution = $state<Solution | null>(null);
	let tab = $state<string>('widget');
	let widgetState = $state<State>(State.UNVERIFIED);

	$effect(() => {
		if (challenge) {
			log('Challenge', challenge);
		}
	});

	$effect(() => {
		if (solution) {
			log('Solution', solution);
		}
	});

	$effect(() => {
		if (payload) {
			log('Payload', payload);
		}
	});

	$effect(() => {
		globalThis.$altcha.defaults.set({
			...$widgetOptions,
			challenge: challenge || null,
			codeChallenge: codeChallenge || null
		});
	});

	$effect(() => {
		document.body.setAttribute('data-altcha-theme', $widgetOptions.theme);
	});

	onMount(() => {
		globalThis.$altcha.defaults.set('verifyFunction', async (payload, code) => {
			await new Promise((resolve) => setTimeout(resolve, 300));
			if (code && code.toLowerCase() !== '6cnkn') {
				return {
					reason: 'Wrong verification code entered.'
				};
			}
			console.warn('Calling mock server verification (verifyFunction)');
			return {
				payload: '',
				signature: '',
				verified: true,
				algorithm: '',
				verificationData: ''
			};
		});
		onChallengeOptionsChange();
	});

	function getAlgorithmOptions(alg: string): Partial<CreateChallengeOptions> {
		switch (alg) {
			case 'ARGON2ID':
				return {
					deriveKey: argon2id.deriveKey
				};
			case 'SHA-256':
			case 'SHA-384':
			case 'SHA-512':
				return {
					deriveKey: sha.deriveKey
				};
			case 'PBKDF2/SHA-256':
			case 'PBKDF2/SHA-384':
			case 'PBKDF2/SHA-512':
				return {
					deriveKey: pbkdf2.deriveKey
				};
			case 'SCRYPT':
				return {
					deriveKey: scrypt.deriveKey
				};
			default:
				throw new Error(`Unsupported algorithm ${alg}.`);
		}
	}

	const onAlgorithmChange = () => {
		switch ($widgetOptions.algorithm) {
			case 'ARGON2ID':
				$widgetOptions.cost = 2;
				$widgetOptions.keyLength = 32;
				$widgetOptions.memoryCost = 65_536;
				$widgetOptions.counter = 100;
				$widgetOptions.parallelism = 1;
				break;
			case 'SCRYPT':
				$widgetOptions.cost = 65_536;
				$widgetOptions.keyLength = 32;
				$widgetOptions.memoryCost = 8;
				$widgetOptions.counter = 100;
				$widgetOptions.parallelism = 1;
				break;
			case 'SHA-256':
			case 'SHA-384':
			case 'SHA-512':
				$widgetOptions.cost = 1_000;
				$widgetOptions.memoryCost = undefined;
				$widgetOptions.parallelism = undefined;
				$widgetOptions.counter = 1_000;
				if ($widgetOptions.algorithm.endsWith('SHA-256')) {
					$widgetOptions.keyLength = 32;
				} else if ($widgetOptions.algorithm.endsWith('SHA-384')) {
					$widgetOptions.keyLength = 48;
				} else if ($widgetOptions.algorithm.endsWith('SHA-512')) {
					$widgetOptions.keyLength = 64;
				}
				break;
			default:
				$widgetOptions.cost = 5_000;
				$widgetOptions.keyLength = 32;
				$widgetOptions.memoryCost = undefined;
				$widgetOptions.parallelism = undefined;
				$widgetOptions.counter = 5_000;
				break;
		}
	};

	async function onChallengeOptionsChange() {
		if (!$widgetOptions.mockChallenge) {
			challenge = $widgetOptions.challenge;
		} else {
			challenge = await createChallenge({
				...$widgetOptions,
				...getAlgorithmOptions($widgetOptions.algorithm),
				counter: $widgetOptions.randomEffort ? undefined : $widgetOptions.counter,
				hmacKeySignatureSecret: $widgetOptions.hmacKeySignatureSecret,
				hmacSignatureSecret: $widgetOptions.hmacSignatureSecret
			} as CreateChallengeOptions);
			if ($widgetOptions.mockCodeChallenge) {
				codeChallenge = {
					image:
						'data:image/jpeg;base64,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',
					audio: '/code-challenge.wav',
					length: 5
				};
			} else {
				codeChallenge = undefined;
			}
		}
	}

	function onResetOptions() {
		if (confirm('Reset settings?')) {
			$widgetOptions = getDefaultWidgetOptions();
			onChallengeOptionsChange();
		}
	}
</script>

<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
	<div class="bg-base-200 border-base-content/20 flex flex-col gap-3 rounded-lg border p-3 lg:p-12">
		<form class="flex flex-col gap-3" method="post" action={$submitUrl}>
			<div class="font-medium">Example Form</div>

			<fieldset class="fieldset">
				<legend class="fieldset-legend">Submit URL</legend>
				<label class="input w-full">
					<input
						type="text"
						class="grow"
						name="url"
						aria-label="Submit URL"
						placeholder="https://..."
						bind:value={$submitUrl}
						defaultValue={'https://httpbin.org/post'}
					/>
					<span class="badge badge-neutral badge-xs">POST</span>
				</label>
			</fieldset>

			<altcha-widget
				onstatechange={(ev: CustomEvent<any>) => {
					payload = ev.detail.payload;
					solution = ev.detail.solution;
					widgetState = ev.detail.state;
				}}
			></altcha-widget>

			<div class="flex gap-3">
				<button type="submit" class="btn btn-primary">Submit</button>
				<button type="reset" class="btn btn-ghost">Reset</button>
			</div>

			<div class="text-sm opacity-70">
				State: <span class="font-bold">{widgetState}</span>
			</div>
		</form>
	</div>

	<div class="border-base-content/20 flex flex-col gap-3 rounded-lg border p-3">
		<div class="bg-base-200 flex flex-wrap items-center gap-3 rounded-md">
			<div role="tablist" class="tabs tabs-border grow">
				<button
					type="button"
					role="tab"
					class="tab"
					class:tab-active={tab === 'widget'}
					onclick={() => (tab = 'widget')}>Widget</button
				>
				<button
					type="button"
					role="tab"
					class="tab"
					class:tab-active={tab === 'challenge'}
					onclick={() => (tab = 'challenge')}>Challenge</button
				>
				<button
					type="button"
					role="tab"
					class="tab"
					class:tab-active={tab === 'customization'}
					onclick={() => (tab = 'customization')}>Customization</button
				>
			</div>

			<div>
				<button type="button" class="btn btn-ghost btn-sm" onclick={() => onResetOptions()}>
					<span class="lg:hidden">R</span>
					<span class="hidden lg:inline-block">Reset options</span>
				</button>
			</div>
		</div>

		{#if tab === 'widget'}
			<Options
				title="Basic Options"
				options={{
					type: {
						label: 'type',
						type: 'string',
						options: ['checkbox', 'native', 'switch']
					},
					display: {
						label: 'display',
						type: 'string',
						options: ['standard', 'bar', 'floating', 'overlay', 'invisible'],
						onChange: () => {
							if ($widgetOptions.display !== 'standard') {
								$widgetOptions.auto = 'onsubmit';
								$widgetOptions.codeChallengeDisplay = 'bottomsheet';
							} else {
								$widgetOptions.auto = 'off';
							}
						}
					},
					codeChallengeDisplay: {
						label: 'codeChallengeDisplay',
						type: 'string',
						options: ['standard', 'bottomsheet', 'overlay']
					},
					auto: {
						label: 'auto',
						type: 'string',
						options: ['off', 'onfocus', 'onload', 'onsubmit']
					}
				}}
				bind:value={$widgetOptions}
			/>

			<Options
				title="Testing"
				options={{
					debug: {
						label: 'debug',
						type: 'boolean'
					},
					mockError: {
						label: 'mockError',
						type: 'boolean'
					}
				}}
				bind:value={$widgetOptions}
			/>
		{:else if tab === 'customization'}
			<Options
				title="Language & Theme"
				options={{
					language: {
						label: 'language',
						type: 'string',
						options: languages
					},
					theme: {
						label: 'theme',
						type: 'string',
						options: ['default', ...themes]
					}
				}}
				bind:value={$widgetOptions}
			/>

			<Options
				title="Branding"
				options={{
					hideFooter: {
						label: 'hideFooter',
						type: 'boolean'
					},
					hideLogo: {
						label: 'hideLogo',
						type: 'boolean'
					}
				}}
				bind:value={$widgetOptions}
			/>
		{:else if tab === 'challenge'}
			<Options
				onChange={onChallengeOptionsChange}
				options={{
					challenge: {
						label: `challenge`,
						isDisabled: ({ mockChallenge }) => mockChallenge,
						type: 'string'
					},
					mockChallenge: {
						label: 'mockChallenge',
						type: 'boolean'
					},
					algorithm: {
						default: 'PBKDF2/SHA-256',
						label: `algorithm`,
						type: 'string',
						isDisabled: ({ mockChallenge }) => !mockChallenge,
						onChange: onAlgorithmChange,
						options: ALGOS
					},
					cost: {
						default: 5_000,
						isDisabled: ({ mockChallenge }) => !mockChallenge,
						label: `cost`,
						type: 'number'
					},
					memoryCost: {
						default: 0,
						isDisabled: ({ algorithm, mockChallenge }) =>
							!mockChallenge || !['ARGON2ID', 'SCRYPT'].includes(algorithm),
						label: `memoryCost`,
						type: 'number'
					},
					parallelism: {
						default: 1,
						isDisabled: ({ algorithm, mockChallenge }) =>
							!mockChallenge || !['ARGON2ID', 'SCRYPT'].includes(algorithm),
						label: `parallelism`,
						type: 'number'
					},
					counter: {
						default: 5_000,
						isDisabled: ({ mockChallenge, randomEffort }) => !mockChallenge || !!randomEffort,
						label: `counter`,
						type: 'number'
					},
					hmacKey: {
						default: 'secret.key',
						label: 'hmacKey',
						isDisabled: ({ mockChallenge }) => !mockChallenge,
						onChange: onChallengeOptionsChange,
						type: 'string'
					},
					randomEffort: {
						label: 'randomEffort',
						isDisabled: ({ mockChallenge }) => !mockChallenge,
						onChange: onChallengeOptionsChange,
						type: 'boolean'
					},
					mockCodeChallenge: {
						label: 'mockCodeChallenge',
						isDisabled: ({ mockChallenge }) => !mockChallenge,
						onChange: onChallengeOptionsChange,
						type: 'boolean'
					}
				}}
				bind:value={$widgetOptions}
			/>
		{/if}
	</div>
</div>
