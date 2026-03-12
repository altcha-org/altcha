<svelte:options
	customElement={{
		tag: 'altcha-widget',
		shadow: 'none',
		props: {
			auto: {
				type: 'String'
			},
			challenge: {
				type: 'String'
			},
			configuration: {
				type: 'String'
			},
			display: {
				type: 'String'
			},
			language: {
				type: 'String'
			},
			name: {
				type: 'String'
			},
			theme: {
				type: 'String'
			},
			type: {
				type: 'String'
			},
			workers: {
				type: 'Number'
			}
		}
	}}
/>

<script lang="ts">
	import { onMount, tick } from 'svelte';
	import Checkbox from './components/Checkbox.svelte';
	import CheckboxNative from './components/CheckboxNative.svelte';
	import Footer from './components/Footer.svelte';
	import Switch from './components/Switch.svelte';
	import Code from './components/Code.svelte';
	import Popover from './components/Popover.svelte';
	import Logo from './components/Logo.svelte';
	import {
		State,
		type Challenge,
		type ChallengeParameters,
		type ChallengeV1,
		type CodeChallenge,
		type Configuration,
		type PayloadV1,
		type ServerVerificationResult,
		type SetCookieOptions,
		type Solution,
		type Strings,
		type VerifyOptions,
		type VerifyResult,
		type WidgetMethods
	} from './types/';
	import { solveChallengeWorkers } from './pow';
	import { bufferToHex } from './helpers';
	import type { BasePlugin } from './plugins/base.plugin';

	// -----------------------------------------------------------------------------
	// Props
	// -----------------------------------------------------------------------------

	interface Props extends Partial<
		Pick<Configuration, 'auto' | 'challenge' | 'display' | 'language' | 'name' | 'type' | 'workers'>
	> {
		/** JSON string of additional configuration options */
		configuration?: string;
		/** Unique identifier for this widget instance */
		id?: string;
	}

	// -----------------------------------------------------------------------------
	// Constants
	// -----------------------------------------------------------------------------

	/** Selector for text inputs/textareas that should be included in server verification */
	const fieldsSelector =
		'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])';

	/** Selector for form submit buttons (used as floating anchor fallback) */
	const submitButtonSelector =
		'input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])';

	/** Languages that use right-to-left text direction */
	const rtlLanguages = ['ar', 'fa', 'he', 'ur'];

	/** Whether the page is the secure context (HTTPS, required for crypto APIs) */
	const { isSecureContext } = globalThis;

	/** Global ALTCHA default configuration store */
	const { store: altchaDefaults } = globalThis.$altcha.defaults;

	/** Number of logical CPU cores (fallback: 2) */
	const hardwareConcurrency = navigator.hardwareConcurrency || 2;

	/** Device memory in GB (non-standard, 0 if unavailable) */
	// @ts-expect-error non-standard property
	const deviceMemory = navigator.deviceMemory || 0;

	/** Default worker count — capped at 4 on low-memory devices */
	const defaultWorkers =
		deviceMemory && deviceMemory <= 4 ? Math.min(4, hardwareConcurrency) : hardwareConcurrency;

	/** Global i18n string store */
	const altchaI18nStore = globalThis.$altcha.i18n.store;

	/** Reference to this custom element's host node */
	const instance = $host<HTMLElement & WidgetMethods>();

	/**
	 * Dispatch a CustomEvent from the host element on the next tick.
	 * Using tick() ensures Svelte has finished updating the DOM first.
	 */
	const dispatch = <T,>(event: string, detail?: T) => {
		tick().then(() => {
			instance?.dispatchEvent(
				new CustomEvent(event, {
					detail
				})
			);
		});
	};

	// -----------------------------------------------------------------------------
	// Reactive State
	// -----------------------------------------------------------------------------

	let { ...props }: Props = $props();

	let baseUrl = $state<URL>(new URL(location.origin));
	let checked = $state(false);
	let codeChallenge = $state<CodeChallenge | null>(null);
	let currentController = $state<AbortController | null>(null);
	let currentState = $state<State>(State.UNVERIFIED);
	let elAnchorArrow = $state<HTMLElement | null>();
	let elFloatingAnchor = $state<HTMLElement | null>();
	let elForm = $state<HTMLFormElement | null>(null);
	let elRoot = $state<HTMLElement>();
	let elSubmitter = $state<HTMLElement | null>(null);
	let error = $state<string | null>(null);
	let expirationTimeout = $state<ReturnType<typeof setTimeout> | null>(null);
	let payload = $state<string | null>(null);
	let plugins = $state<BasePlugin[]>([]);
	/** User/runtime overrides merged on top of defaults */
	let userConfig = $state<Partial<Configuration>>({});
	/** Whether the widget is visible (relevant for floating/bar/overlay modes) */
	let visible = $state(true);

	// -----------------------------------------------------------------------------
	// Derived State
	// -----------------------------------------------------------------------------

	/** Merged configuration: defaults <- global store <- user overrides */
	const config = $derived<Configuration>({
		fetch: (input: RequestInfo | URL, init?: RequestInit) => fetch(input, init),
		audioChallengeLanguage: '',
		auto: 'off',
		barPlacement: 'bottom',
		challenge: '',
		codeChallenge: null,
		codeChallengeDisplay: 'standard',
		credentials: null,
		debug: false,
		disableAutoFocus: false,
		display: 'standard',
		floatingAnchor: '',
		floatingOffset: 8,
		floatingPersist: false,
		floatingPlacement: 'auto',
		hideFooter: false,
		hideLogo: false,
		language: '',
		mockError: false,
		minDuration: 500,
		overlayContent: '',
		name: 'altcha',
		retryOnOutOfMemoryError: true,
		setCookie: null,
		serverVerificationFields: false,
		serverVerificationTimeZone: false,
		test: false,
		type: 'checkbox',
		validationMessage: '',
		verifyFunction: null,
		verifyUrl: '',
		workers: defaultWorkers,
		...$altchaDefaults,
		...userConfig
	});

	/** Unique ID for the checkbox input element */
	const checkboxId = $derived(
		`altcha-checkbox-${props.id || Math.floor(Math.random() * 1e12).toString(16)}`
	);

	/** Resolves the correct checkbox component based on config.type */
	const CheckboxComponent = $derived(getCheckboxComponent(config.type));

	const loading = $derived(currentState === State.VERIFYING);
	const showFooter = $derived(!config.hideFooter);
	const showLogo = $derived(!config.hideLogo && config.display !== 'bar');

	/** Resolved i18n locale and string map based on language preferences */
	const locale = $derived(
		getI18nStrings($altchaI18nStore, [
			config.language,
			document.documentElement.lang,
			...navigator.languages
		])
	);

	/** Text direction — 'rtl' for Arabic, Hebrew, etc. */
	const dir = $derived(rtlLanguages.includes(locale.language) ? 'rtl' : undefined);

	const strings = $derived({
		...locale.strings
	});

	/** Absolute URL for the code challenge audio (if provided as a relative path) */
	const codeChallengeAudioUrl = $derived(
		codeChallenge?.audio?.match(/^(https?:)?\//)
			? getUrl(codeChallenge.audio, baseUrl, {
					language: config.audioChallengeLanguage || locale.language
				}).toString()
			: codeChallenge?.audio
	);

	/** Absolute URL for the code challenge image (if provided as a relative path) */
	const codeChallengeImageUrl = $derived(
		codeChallenge?.image?.match(/^(https?:)?\//)
			? getUrl(codeChallenge.image, baseUrl)
			: codeChallenge?.image
	);

	// -----------------------------------------------------------------------------
	// Effects
	// -----------------------------------------------------------------------------

	/** Sync HTML attribute props into the configuration */
	$effect(() => {
		configure({
			auto: props.auto,
			challenge: props.challenge,
			display: props.display,
			language: props.language,
			name: props.name,
			type: props.type,
			workers: props.workers
		});
	});

	/** Parse and apply the JSON `configuration` attribute */
	$effect(() => {
		if (props.configuration) {
			try {
				configure(JSON.parse(props.configuration));
			} catch {
				log('unable to parse the `configuration` attribute (JSON expected)');
			}
		}
	});

	/** Update visibility whenever display mode changes */
	$effect(() => {
		setDisplay(config.display);
	});

	/** Uncheck the checkbox while verification is in progress */
	$effect(() => {
		if (checked && currentState === State.VERIFYING) {
			checked = false;
		}
	});

	/** Re-check the checkbox once verification succeeds */
	$effect(() => {
		if (!checked && currentState === State.VERIFIED) {
			checked = true;
		}
	});

	/** Keep the native checkbox element in sync with the `checked` state */
	$effect(() => {
		if (!checked) {
			const checkbox = getCheckboxElement();
			if (checkbox && checkbox.checked) {
				checkbox.checked = false;
			}
		}
	});

	/** Clear any validation error once verified */
	$effect(() => {
		if (currentState === State.VERIFIED) {
			getCheckboxElement()?.setCustomValidity('');
		}
	});

	/** Auto-verify on page load if configured */
	$effect(() => {
		if (config.auto === 'onload') {
			const tm = setTimeout(() => {
				verify();
			}, 1);
			return () => {
				if (tm) {
					clearTimeout(tm);
				}
			};
		}
	});

	/** Log errors to the console when they occur */
	$effect(() => {
		if (error) {
			log('error:', error);
		}
	});

	/** Sets the payload cookie if enabled */
	$effect(() => {
		if (payload && config.setCookie) {
			setCookie(payload, config.setCookie);
		}
	});

	// -----------------------------------------------------------------------------
	// Lifecycle
	// -----------------------------------------------------------------------------

	onMount(() => {
		log('mounted', ALTCHA_VERSION);

		// Register this instance in the global set
		if (instance) {
			globalThis.$altcha.instances.add(instance);
		}

		// Find and attach to the parent form
		elForm = elRoot?.closest('form') as HTMLFormElement | null;
		elForm?.addEventListener('reset', onFormReset);
		elForm?.addEventListener('submit', onFormSubmit);
		elForm?.addEventListener('focusin', onFormFocusIn);

		activatePlugins();
		dispatch('load');

		if (!isSecureContext) {
			log('secure context (HTTPS) required');
		}

		// Cleanup on unmount
		return () => {
			destroyPlugins();
			if (instance) {
				globalThis.$altcha.instances.delete(instance);
			}
			if (expirationTimeout) {
				clearTimeout(expirationTimeout);
			}
			elForm?.removeEventListener('reset', onFormReset);
			elForm?.removeEventListener('submit', onFormSubmit);
			elForm?.removeEventListener('focusin', onFormFocusIn);
		};
	});

	// -----------------------------------------------------------------------------
	// Plugin System
	// -----------------------------------------------------------------------------

	/** Instantiate and activate all registered global plugins */
	function activatePlugins() {
		plugins = [...globalThis.$altcha.plugins].map((PluginCls) => new PluginCls(instance));
		log(
			'activating plugins',
			plugins.map((plugin) => plugin.constructor.name)
		);
		for (const plugin of plugins) {
			plugin.activate();
		}
	}

	/**
	 * Call a named hook on every active plugin in order.
	 * Returns the result from the last plugin that provides one.
	 */
	async function callHook<
		K extends 'onFetchChallenge' | 'onRequestServerVerification' | 'onVerify',
		R extends Awaited<ReturnType<(typeof BasePlugin.prototype)[K]>>
	>(hook: K, ...args: any[]): Promise<R | undefined> {
		let result: R | undefined = undefined;
		for (const plugin of plugins) {
			// @ts-expect-error mixing types
			result = await plugin[hook].call(plugin, ...args);
		}
		return result;
	}

	/** Tear down all active plugins */
	function destroyPlugins() {
		for (const plugin of plugins) {
			plugin.destroy();
		}
	}

	// -----------------------------------------------------------------------------
	// Challenge Handling
	// -----------------------------------------------------------------------------

	/**
	 * Convert a legacy v1 challenge format into the current Challenge shape.
	 * Extracts query parameters from the salt and maps fields accordingly.
	 */
	function createChallengeFromV1(challenge: ChallengeV1): Challenge {
		const [_, queryParams] = challenge.salt.split('?');
		const data: Record<string, string> = {};
		if (queryParams) {
			try {
				Object.assign(data, Object.fromEntries(new URLSearchParams(queryParams).entries()));
			} catch {}
		}
		const result = {
			codeChallenge: challenge.codeChallenge,
			parameters: {
				algorithm: challenge.algorithm,
				cost: 1,
				data,
				expiresAt: data?.expires ? parseInt(data.expires, 10) : undefined,
				keyLength:
					challenge.algorithm === 'SHA-512' ? 64 : challenge.algorithm === 'SHA-384' ? 48 : 32,
				nonce: bufferToHex(new TextEncoder().encode(challenge.salt)),
				keyPrefix: challenge.challenge,
				salt: ''
			} satisfies ChallengeParameters,
			signature: challenge.signature
		} satisfies Challenge;

		// Attach hidden metadata for payload creation and version detection
		Object.defineProperties(result, {
			_originalSalt: {
				enumerable: false,
				value: challenge.salt,
				writable: false
			},
			_version: {
				enumerable: false,
				value: 1,
				writable: false
			}
		});
		return result;
	}

	/**
	 * Build the v1 payload format from a challenge and its solution.
	 * Used when the challenge was originally in v1 format.
	 */
	function createPayloadV1(challenge: Challenge, solution: Solution): PayloadV1 {
		return {
			algorithm: challenge.parameters.algorithm,
			challenge: challenge.parameters.keyPrefix,
			number: solution.counter,
			salt:
				'_originalSalt' in challenge
					? (challenge._originalSalt as string)
					: challenge.parameters.nonce,
			signature: challenge.signature,
			took: solution.time || 0
		};
	}

	/** Simple promise-based delay utility */
	async function delay(ms: number) {
		await new Promise((resolve) => setTimeout(resolve, ms));
	}

	/**
	 * Fetch or parse a challenge from the configured source.
	 * Supports: URL string (fetched via HTTP), JSON string (parsed), or object (cloned).
	 * Plugins can intercept via the `onFetchChallenge` hook.
	 */
	async function fetchChallenge(
		source: string | Challenge | null = config.challenge
	): Promise<Challenge | null> {
		// Let plugins handle the fetch if they want
		const hook = await callHook('onFetchChallenge', source);
		if (hook !== undefined) {
			return hook;
		}

		if (typeof source === 'string') {
			let challenge = null;

			if (source.match(/^(https?:)?\//)) {
				// Source is a URL — fetch from server
				log('fetching challenge from', source);
				baseUrl = new URL(source, location.origin);
				const resp = await config.fetch(source, {
					credentials: config.credentials || undefined
				});
				validateResponse(resp);

				// Server may send extra config via response header
				const configHeader = resp.headers.get('x-altcha-config');
				if (configHeader) {
					processConfigHeader(configHeader);
				}
				challenge = await resp.json();
			} else {
				// Source is a JSON string — parse directly
				log('parsing JSON challenge');
				try {
					challenge = JSON.parse(source);
				} catch {
					throw new Error(`Unable to parse JSON challenge.`);
				}
			}

			// Handle legacy v1 challenge format
			if (typeof challenge === 'object' && 'challenge' in challenge) {
				challenge = createChallengeFromV1(challenge as ChallengeV1);
			}

			if (!isChallengeValid(challenge)) {
				throw new Error(`Challenge validation failed.`);
			}
			return challenge;
		} else if (source && typeof source === 'object') {
			// Source is an object — deep clone to avoid mutation
			return JSON.parse(JSON.stringify(source));
		}
		return null;
	}

	/** Validate that a challenge object has all required fields */
	function isChallengeValid(challenge: any) {
		return (
			!!challenge &&
			typeof challenge === 'object' &&
			'parameters' in challenge &&
			'signature' in challenge &&
			!!challenge.parameters &&
			typeof challenge.parameters === 'object' &&
			'algorithm' in challenge.parameters &&
			'nonce' in challenge.parameters &&
			'salt' in challenge.parameters &&
			'keyPrefix' in challenge.parameters
		);
	}

	// -----------------------------------------------------------------------------
	// DOM Helpers
	// -----------------------------------------------------------------------------

	/** Get the hidden checkbox input element by its generated ID */
	function getCheckboxElement() {
		return document.getElementById(checkboxId) as HTMLInputElement | null;
	}

	/** Map config.type to the appropriate Svelte checkbox component */
	function getCheckboxComponent(type: string) {
		switch (type) {
			case 'checkbox':
				return Checkbox;
			case 'switch':
				return Switch;
			case 'native':
			default:
				return CheckboxNative;
		}
	}

	/**
	 * Resolve i18n strings by matching the best available language.
	 */
	function getI18nStrings(
		i18n: Record<string, any>,
		languages: string[]
	): {
		language: string;
		strings: Strings;
	} {
		const codes = Object.keys(i18n).map((code) => code.toLowerCase());
		let language = languages.reduce(
			(acc, lang) => {
				lang = lang.toLowerCase();
				return (
					acc ||
					(i18n[lang] ? lang : null) ||
					codes.find((code) => lang.split('-')[0] === code.split('-')[0]) ||
					null
				);
			},
			null as string | null
		);
		if (!i18n[language || '']) {
			language = 'en';
		}
		return {
			language: language!,
			strings: i18n[language!]
		};
	}

	/** Map display mode to its placement value */
	function getPlacement(display: Configuration['display']) {
		switch (display) {
			case 'bar':
				return config.barPlacement || 'bottom';
			case 'floating':
				return config.floatingPlacement || 'auto';
			default:
				return undefined;
		}
	}

	/**
	 * Collect text field values from the parent form.
	 * Used for server-side spam verification. Normalizes line endings to CRLF.
	 */
	function getTextFields(names?: string[]) {
		const elInputs = [
			...(elForm?.querySelectorAll(
				names?.length ? names.map((name) => `input[name="${name}"]`).join(', ') : fieldsSelector
			) || [])
		] as HTMLInputElement[];
		return elInputs.reduce(
			(acc, el) => {
				const name = el.name;
				const value = el.value;
				if (name && value) {
					acc[name] = /\n/.test(value) ? value.replace(/(?<!\r)\n/g, '\r\n') : value;
				}
				return acc;
			},
			{} as Record<string, string>
		);
	}

	/** Get the user's timezone (e.g. "America/New_York") for server verification */
	function getTimeZone(): string | undefined {
		try {
			return Intl.DateTimeFormat().resolvedOptions().timeZone;
		} catch {}
		return undefined;
	}

	/**
	 * Build an absolute URL from a relative URI, inheriting search params from baseUrl.
	 * Optionally appends additional query parameters.
	 */
	function getUrl(uri: string, baseUrl: URL, params?: Record<string, string | undefined | null>) {
		const result = new URL(uri, baseUrl);
		if (!result.search) {
			result.search = baseUrl.search;
		}
		if (params) {
			for (const key in params) {
				if (params[key] !== undefined && params[key] !== null) {
					result.searchParams.set(key, params[key]);
				}
			}
		}
		return result.toString();
	}

	// -----------------------------------------------------------------------------
	// Event Handlers
	// -----------------------------------------------------------------------------

	/** Handle checkbox click — triggers verification or reset */
	function onCheckboxChange(
		ev: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) {
		if (!checked && ev.currentTarget.checked) {
			ev.preventDefault();
			ev.currentTarget.checked = false;
			if (currentState !== State.VERIFYING) {
				verify();
			}
		} else if (!ev.currentTarget.checked) {
			ev.preventDefault();
			reset();
		}
	}

	/** Set custom validation message when checkbox is invalid */
	function onCheckboxInvalid(
		ev: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) {
		if (currentState === State.VERIFYING) {
			ev.currentTarget.setCustomValidity(strings.waitAlert);
		} else if (config.validationMessage) {
			ev.currentTarget.setCustomValidity(config.validationMessage);
		}
	}

	/** Handle close button click — abort verification and reset */
	function onCloseClick() {
		if (currentController) {
			currentController.abort();
		}
		setDisplay(config.display);
		reset();
	}

	/** Reposition floating widget on scroll */
	function onDocumentScroll() {
		updateUI();
	}

	/** Close floating widget when clicking outside of it */
	function onDocumentClick(ev: MouseEvent) {
		const target = ev.target as HTMLElement;
		if (
			config.display === 'floating' &&
			target &&
			!instance?.contains(target) &&
			!target.hasAttribute('data-backdrop') &&
			!target.closest('[data-popover]') &&
			currentState !== State.VERIFIED &&
			!config.floatingPersist
		) {
			hide();
		}
	}

	/** Auto-verify when any form field receives focus (if auto='onfocus') */
	function onFormFocusIn(ev: FocusEvent) {
		if (config.auto === 'onfocus' && currentState === State.UNVERIFIED) {
			verify();
		}
	}

	/** Reset widget when the parent form is reset */
	function onFormReset() {
		if (currentController) {
			currentController.abort();
		}
		setDisplay(config.display);
		reset();
	}

	/**
	 * Intercept form submission when auto='onsubmit'.
	 * Prevents submission, runs verification, then re-submits on success.
	 */
	function onFormSubmit(ev: SubmitEvent) {
		elSubmitter = ev.submitter as HTMLElement | null;
		if (config.auto === 'onsubmit' && currentState === State.UNVERIFIED) {
			ev.preventDefault();
			ev.stopPropagation();
			show();
			verify().then((result) => {
				if (result && !codeChallenge) {
					tick().then(() => {
						requestSubmit(elSubmitter);
					});
				}
			});
		}
	}

	/** Reset state when navigating back to the page (bfcache) */
	function onWindowPageshow() {
		reset();
	}

	/** Reposition floating widget on window resize */
	function onWindowResize() {
		updateUI();
	}

	// -----------------------------------------------------------------------------
	// Configuration & Server Communication
	// -----------------------------------------------------------------------------

	/** Apply configuration received in the `x-altcha-config` response header */
	function processConfigHeader(jsonConfig: string) {
		try {
			const json = JSON.parse(jsonConfig);
			if (json && typeof json === 'object') {
				configure({
					// Backward compatibility mappings
					serverVerificationFields: json?.sentinel?.fields,
					serverVerificationTimeZone: json?.sentinel?.timeZone,
					verifyUrl: json.verifyurl,
					...json
				});
			}
		} catch (err) {
			log('unable to configure from x-altcha-config header', err);
		}
	}

	/**
	 * Position the widget relative to its anchor element in floating mode.
	 * Determines whether to show above or below based on available viewport space.
	 */
	function repositionFloating(viewportOffset: number = 20) {
		if (!elRoot) {
			return;
		}
		const floatingPlacement = config.floatingPlacement;

		// Resolve the anchor element (submit button, custom selector, or form)
		if (!elFloatingAnchor) {
			elFloatingAnchor =
				(config.floatingAnchor instanceof HTMLElement
					? config.floatingAnchor
					: config.floatingAnchor
						? document.querySelector<HTMLElement>(config.floatingAnchor)
						: elForm?.querySelector<HTMLElement>(submitButtonSelector)) || elForm;
			if (!elFloatingAnchor) {
				log('unable to find floating anchor element');
				return;
			}
		}

		const offsetY = parseInt(config.floatingOffset as any, 10) || 12;
		const anchorBoundry = elFloatingAnchor.getBoundingClientRect();
		const elBoundary = elRoot.getBoundingClientRect();
		const docHeight = document.documentElement.clientHeight;
		const docWidth = document.documentElement.clientWidth;

		// Auto-detect placement: show on top if not enough room below
		const showOnTop =
			!floatingPlacement || floatingPlacement === 'auto'
				? anchorBoundry.bottom + elBoundary.height + offsetY + viewportOffset > docHeight
				: floatingPlacement === 'top';

		// Center horizontally on the anchor, clamped to viewport edges
		const left = Math.max(
			viewportOffset,
			Math.min(
				docWidth - viewportOffset - elBoundary.width,
				anchorBoundry.left + anchorBoundry.width / 2 - elBoundary.width / 2
			)
		);

		elRoot.style.setProperty('--altcha-floating-left', `${left}px`);
		elRoot.style.setProperty(
			'--altcha-floating-top',
			showOnTop
				? `${anchorBoundry.top - (elBoundary.height + offsetY)}px`
				: `${anchorBoundry.bottom + offsetY}px`
		);
		elRoot.setAttribute('data-floating-position', showOnTop ? 'top' : 'bottom');

		// Position the arrow indicator
		if (elAnchorArrow) {
			const anchorArrowBoundry = elAnchorArrow.getBoundingClientRect();
			elAnchorArrow.style.left =
				anchorBoundry.left - left + anchorBoundry.width / 2 - anchorArrowBoundry.width / 2 + 'px';
		}
	}

	/**
	 * Send the PoW payload (and optional code) to the server for verification.
	 * Plugins can intercept via `onRequestServerVerification`.
	 */
	async function requestServerVerification(
		verificationPayload: string,
		code?: string
	): Promise<ServerVerificationResult | null> {
		const hook = await callHook('onRequestServerVerification', verificationPayload, code);
		if (hook !== undefined) {
			return hook;
		}
		log('requesting server verification from', config.verifyUrl);
		if (!config.verifyUrl) {
			throw new Error(`Parameter verifyUrl must be set for server verification.`);
		}
		const resp = await config.fetch(getUrl(config.verifyUrl, baseUrl), {
			body: JSON.stringify({
				code,
				fields: config.serverVerificationFields ? getTextFields() : undefined,
				payload: verificationPayload,
				timeZone: config.serverVerificationTimeZone ? getTimeZone() : undefined
			}),
			credentials: config.credentials || undefined,
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST'
		});
		validateResponse(resp);
		const json = await resp.json();
		if (json && typeof json === 'object' && 'payload' in json && !!json.payload) {
			dispatch('serververification', json);
		}
		return json;
	}

	/**
	 * Submit the parent form programmatically.
	 * Falls back to click/submit for browsers without requestSubmit (e.g. iOS 16).
	 */
	function requestSubmit(submitter?: HTMLElement | null) {
		if (elForm && 'requestSubmit' in elForm) {
			elForm.requestSubmit(submitter);
			// @ts-ignore
		} else if (elForm?.reportValidity()) {
			if (submitter) {
				submitter.click();
			} else {
				// @ts-ignore
				elForm.submit();
			}
		}
	}

	/**
	 * Set a cookie with specified value and options.
	 */
	function setCookie(value: string, options: SetCookieOptions = {}) {
		const { domain, name = config.name, maxAge, path, sameSite, secure } = options;
		let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
		if (domain) cookie += `; Domain=${domain}`;
		if (maxAge != null) cookie += `; Max-Age=${maxAge}`;
		if (path) cookie += `; Path=${path}`;
		if (sameSite) cookie += `; SameSite=${sameSite}`;
		if (secure) cookie += `; Secure`;
		document.cookie = cookie;
	}

	/**
	 * Apply display mode — hides widget for bar/floating/overlay modes
	 * and defaults to auto='onsubmit' if no auto mode is set.
	 */
	function setDisplay(value: Configuration['display']) {
		switch (value) {
			case 'bar':
			case 'floating':
			case 'overlay':
				hide();
				if (!config.auto || config.auto === 'off') {
					userConfig.auto = 'onsubmit';
				}
				break;
			case 'standard':
				show();
			default:
		}
	}

	/**
	 * Set a timeout to expire the challenge at the given Unix timestamp.
	 * Transitions to EXPIRED state and dispatches an 'expired' event.
	 */
	function setChallengeExpiration(expiresAt: number) {
		if (expirationTimeout) {
			clearTimeout(expirationTimeout);
		}
		const onExpired = () => {
			if (currentState !== State.UNVERIFIED) {
				checked = false;
				setState(State.EXPIRED);
			} else {
				reset();
			}
			dispatch('expired');
		};
		const duration = expiresAt * 1_000 - Date.now();
		if (duration >= 1) {
			expirationTimeout = setTimeout(onExpired, duration);
		} else {
			onExpired();
		}
	}

	/** Validate that a server response is OK and returns JSON */
	function validateResponse(resp: Response) {
		if (resp.status >= 400) {
			throw new Error(`Server responded with ${resp.status}.`);
		}
		const contentType = resp.headers.get('content-type');
		if (!contentType || !contentType.includes('/json')) {
			throw new Error(
				`Server responded with invalid content-type. Expected application/json, received ${contentType}.`
			);
		}
	}

	/**
	 * Verify a code challenge by sending it to the server.
	 * On success, transitions to VERIFIED and auto-submits if configured.
	 */
	async function verifyServer(code?: string) {
		if (!payload) {
			setState(State.ERROR, 'Cannot verify code challenge without PoW payload.');
			return;
		}
		setState(State.VERIFYING);
		let result: ServerVerificationResult | null = null;
		if (config.verifyUrl) {
			result = await requestServerVerification(payload, code);
		} else if (config.verifyFunction) {
			result = await config.verifyFunction(payload, code);
		} else {
			setState(State.ERROR, 'Parameter verifyUrl is required for code challenge verification.');
			return;
		}
		if (result?.payload) {
			payload = result.payload;
			log('server payload', payload);
		}
		if (result?.verified === true) {
			log('verified');
			setState(State.VERIFIED);
			dispatch('verified', { payload });
			if (config.auto === 'onsubmit') {
				tick().then(() => {
					requestSubmit(elSubmitter);
				});
			}
		} else {
			setState(State.ERROR, result?.reason || 'Verification failed.');
		}
		if (!config.disableAutoFocus) {
			getCheckboxElement()?.focus();
		}
	}

	// -----------------------------------------------------------------------------
	// Public API — Methods exposed on the custom element
	// -----------------------------------------------------------------------------

	/** Merge new configuration options into the current config */
	export function configure(newConfig: Partial<Configuration>) {
		Object.assign(userConfig, {
			...Object.fromEntries(Object.entries(newConfig).filter(([_, value]) => value !== undefined))
		});
	}

	/** Get a snapshot of the current merged configuration */
	export function getConfiguration() {
		return {
			...config
		};
	}

	/** Get the current widget state (UNVERIFIED, VERIFYING, VERIFIED, etc.) */
	export function getState() {
		return currentState;
	}

	/** Hide the widget (used in floating/bar/overlay modes) */
	export function hide() {
		visible = false;
	}

	/** Log messages to the console (only when debug mode is enabled, or for errors) */
	export function log(...args: unknown[]) {
		if (config.debug || args.some((a) => a instanceof Error)) {
			console[args[0] instanceof Error ? 'error' : 'log'](
				'ALTCHA',
				`[name=${config.name}]`,
				...args
			);
		}
	}

	/** Reset the widget to its initial unverified state */
	export function reset(newState: State = State.UNVERIFIED, err: string | null = null) {
		checked = false;
		error = err;
		payload = null;
		if (expirationTimeout) {
			clearTimeout(expirationTimeout);
			expirationTimeout = null;
		}
		setState(newState);
	}

	/** Update the widget state and dispatch a 'statechange' event */
	export function setState(newState: State, err: string | null = null) {
		currentState = newState;
		error = err;
		dispatch('statechange', {
			payload,
			state: currentState
		});
	}

	/** Show the widget and update its position */
	export function show() {
		visible = true;
		tick().then(() => {
			updateUI();
		});
	}

	/** Update UI positioning */
	export function updateUI() {
		switch (config.display) {
			case 'floating':
				return repositionFloating();
			default:
			// noop
		}
	}

	// -----------------------------------------------------------------------------
	// Main Verification Flow
	// -----------------------------------------------------------------------------

	/**
	 * Run the full verification process:
	 * 1. Fetch or parse the cryptographic challenge
	 * 2. Solve the proof-of-work using web workers
	 * 3. Encode the solution as a base64 JSON payload
	 * 4. Optionally verify with the server or present a code challenge
	 *
	 * Returns the challenge, payload, and solution on success, or null on failure.
	 */
	export async function verify(options: VerifyOptions = {}): Promise<VerifyResult | null> {
		const {
			concurrency = Math.max(1, config.workers),
			controller = new AbortController(),
			minDuration = config.minDuration
		} = options;
		const start = performance.now();
		let challenge: Challenge | null = null;
		let solution: Solution | null = null;
		let isChallengeV1 = false;

		// Allow plugins to override the entire verification flow
		const hook = await callHook('onVerify', options);
		if (hook !== undefined) {
			return hook;
		}

		currentController = controller;
		reset(State.VERIFYING);

		try {
			if (!isSecureContext) {
				throw new Error('Secure context (HTTPS) required.');
			}
			if (config.mockError) {
				throw new Error('Mock error.');
			}

			// Test mode — skip PoW, return a dummy payload
			if (config.test) {
				log('running test mode with null challenge');
				await delay(Math.max(0, minDuration - (performance.now() - start)));
				payload = btoa(
					JSON.stringify({
						challenge: null,
						solution: null,
						test: true
					})
				);
				log('verified');
				setState(State.VERIFIED);
				dispatch('vefified', { payload });
				return {
					payload
				};
			}

			// Step 1: Fetch the challenge
			challenge = await fetchChallenge();
			if (!challenge) {
				throw new Error('Failed to fetch challenge.');
			}
			log('challenge', challenge);

			// Additional configuration options from the challenge
			if ('configuration' in challenge) {
				log('re-configuring from challenge', challenge.configuration);
				configure(challenge.configuration as Partial<Configuration>);
			}

			// Start expiration timer if the challenge has a TTL
			if (challenge.parameters.expiresAt) {
				setChallengeExpiration(challenge.parameters.expiresAt);
			}

			isChallengeV1 = '_version' in challenge && challenge._version === 1;

			// Step 2: Get the worker factory for the specified algorithm
			const createWorker = globalThis.$altcha.algorithms.get(challenge.parameters.algorithm);
			if (!createWorker) {
				throw new Error(`Unsupported algorithm ${challenge.parameters.algorithm}.`);
			}

			// Step 3: Solve the PoW challenge using web workers
			solution = await solveChallengeWorkers({
				challenge,
				concurrency,
				controller,
				createWorker,
				counterMode: isChallengeV1 ? 'string' : 'uint32',
				onOutOfMemory: (c) => {
					log('out of memory error received');
					dispatch('outofmemory');
					// Retry with fewer workers if configured
					if (config.retryOnOutOfMemoryError && c > 1) {
						const retryConcurrency = Math.floor(c / 2);
						log(`retrying with ${retryConcurrency} workers...`);
						return retryConcurrency;
					}
				}
			});

			// Check if verification was aborted
			if (currentController?.signal.aborted) {
				reset();
				return null;
			}

			if (!solution) {
				throw new Error('Failed to find solution.');
			}
			log('solution', solution);

			// Ensure minimum visual feedback time
			await delay(Math.max(0, minDuration - (performance.now() - start)));

			// Step 4: Encode the payload
			codeChallenge = challenge.codeChallenge || config.codeChallenge || null;
			if (isChallengeV1) {
				payload = btoa(JSON.stringify(createPayloadV1(challenge, solution)));
			} else {
				payload = btoa(
					JSON.stringify({
						challenge: {
							...challenge,
							codeChallenge: undefined
						},
						solution
					})
				);
			}

			// Step 5: Finalize — code challenge, server verify, or done
			if (codeChallenge) {
				log('requesting code verification');
				setState(State.CODE);
				dispatch('codechallenge', { codeChallenge });
			} else if (config.verifyUrl) {
				await verifyServer();
			} else {
				log('verified');
				setState(State.VERIFIED);
				dispatch('vefified', { payload });
			}
		} catch (err) {
			log('verification failed', err);
			setState(State.ERROR, String(err));
			return null;
		} finally {
			currentController = null;
		}

		return {
			challenge,
			payload,
			solution
		};
	}
</script>

<svelte:document onscroll={onDocumentScroll} onclick={onDocumentClick} />
<svelte:window onpageshow={onWindowPageshow} onresize={onWindowResize} />

{#if config.display === 'overlay' && visible}
	<div class="altcha-overlay-backdrop" data-backdrop></div>
{/if}

<div
	bind:this={elRoot}
	class="altcha"
	data-state={currentState}
	data-display={config.display || undefined}
	data-placement={getPlacement(config.display)}
	data-visible={visible || undefined}
	{dir}
>
	{#if config.display === 'overlay' && visible}
		<!-- svelte-ignore a11y_interactive_supports_focus -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<div role="button" class="altcha-overlay-close" onclick={onCloseClick}>&times;</div>

		{#if config.overlayContent}
			<div class="altcha-overlay-content">
				{@html document.querySelector(config.overlayContent)?.innerHTML}
			</div>
		{/if}
	{/if}

	<div class="altcha-main">
		<div>
			<div class="altcha-checkbox-wrap">
				<CheckboxComponent
					id={checkboxId}
					name=""
					required={(config.display === 'standard' && config.auto !== 'onsubmit') ||
						currentState === State.VERIFYING}
					{loading}
					{checked}
					onchange={onCheckboxChange}
					oninvalid={onCheckboxInvalid}
				/>
				<label for={checkboxId}>
					{#if currentState === State.CODE && codeChallenge}
						{strings.verificationRequired}
					{:else if currentState === State.VERIFYING}
						{strings.verifying}
					{:else if currentState === State.VERIFIED}
						{strings.verified}
					{:else}
						{strings.label}
					{/if}
				</label>
			</div>

			{#if showLogo}
				<Logo {strings} />
			{/if}
		</div>

		{#if showFooter}
			<Footer logo={config.display === 'bar' && showLogo} {strings} />
		{/if}

		{#if config.display === 'floating'}
			<div bind:this={elAnchorArrow} class="altcha-floating-arrow"></div>
		{/if}

		{#if !config.setCookie}
			<input type="hidden" name={config.name} value={payload} />
		{/if}
	</div>

	{#if error || currentState === State.EXPIRED || !isSecureContext}
		<Popover
			anchor={elRoot}
			onClickOutside={() => {
				if (isSecureContext) {
					reset();
				}
			}}
			role="alert"
			variant="error"
			{dir}
		>
			{#if !error && !isSecureContext}
				<div class="altcha-error">Secure context (HTTPS) required.</div>
			{:else if !error && currentState === State.EXPIRED}
				<div class="altcha-error">
					{strings.expired}
				</div>
			{:else}
				<div class="altcha-error" title={error}>
					{strings.error}
				</div>
			{/if}
		</Popover>
	{:else if codeChallenge && currentState === State.CODE}
		{#key codeChallenge}
			<Popover
				anchor={elRoot}
				backdrop={config.codeChallengeDisplay !== 'standard'}
				display={config.codeChallengeDisplay}
				onClose={() => {
					reset();
				}}
				role="dialog"
				aria-label={strings.verificationRequired}
				{dir}
			>
				<Code
					audioUrl={codeChallengeAudioUrl}
					imageUrl={codeChallengeImageUrl}
					onCancel={() => reset()}
					onReload={() => verify()}
					onSubmit={(code) => verifyServer(code)}
					{codeChallenge}
					{config}
					{strings}
				/>

				{#if showFooter && config.codeChallengeDisplay !== 'standard'}
					<Footer logo={showLogo} {strings} />
				{/if}
			</Popover>
		{/key}
	{/if}
</div>
