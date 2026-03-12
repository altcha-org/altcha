export interface AltchaGlobal {
	algorithms: Map<string, () => Worker | Promise<Worker>>;
	defaults: Store<Partial<Configuration>>;
	i18n: Store<Record<string, Record<string, string>>>;
	instances: Set<HTMLElement>;
	plugins: Set<new (host: HTMLElement & WidgetMethods) => any>;
}

export enum AudioState {
	ERROR = 'error',
	LOADING = 'loading',
	PLAYING = 'playing',
	PAUSED = 'paused',
	READY = 'ready'
}

export interface Configuration {
	/**
	 * Forces a specific language for audio-based challenges.
	 */
	audioChallengeLanguage: string;

	/**
	 * Determines when verification triggers automatically.
	 * @default 'off'
	 */
	auto: 'off' | 'onfocus' | 'onload' | 'onsubmit';

	/**
	 * Vertical position of the widget when `display` is set to `bar`.
	 */
	barPlacement: 'bottom' | 'top';

	/**
	 * The challenge data or the URL to fetch a new challenge from.
	 */
	challenge: Challenge | string | null;

	/**
	 * A specific code-challenge object. Overrides values provided in the `challenge` property.
	 */
	codeChallenge: CodeChallenge | null;

	/**
	 * The UI layout used for the code-challenge modal.
	 */
	codeChallengeDisplay: 'standard' | 'overlay' | 'bottomsheet';

	/**
	 * Defines how credentials (cookies/auth headers) are handled during the challenge request.
	 */
	credentials: RequestCredentials | null;

	/**
	 * Enables verbose logging in the browser console for debugging.
	 */
	debug: boolean;

	/**
	 * The minimum verification time in milliseconds (adds an artificial delay if the PoW is faster).
	 * @default 500
	 */
	minDuration: number;

	/**
	 * Prevents the code-challenge modal from stealing focus when opened.
	 */
	disableAutoFocus: boolean;

	/**
	 * The visual layout mode of the widget.
	 */
	display: 'standard' | 'bar' | 'floating' | 'overlay' | 'invisible';

	/**
	 * A custom `fetch` implementation for network requests.
	 */
	fetch: typeof fetch;

	/**
	 * The element or CSS selector the floating UI attaches to.
	 * Defaults to the first `submit` button in the parent form.
	 */
	floatingAnchor: string | HTMLElement | null;

	/**
	 * Vertical offset (in pixels) between the floating UI and its anchor.
	 * @default 12
	 */
	floatingOffset: number;

	/**
	 * Controls whether the floating widget remains visible after successful verification.
	 */
	floatingPersist: boolean | 'focus';

	/**
	 * Preferred position of the floating widget relative to the anchor.
	 */
	floatingPlacement: 'auto' | 'bottom' | 'top';

	/**
	 * Hides the "ALTCHA" attribution link.
	 */
	hideFooter: boolean;

	/**
	 * Hides the ALTCHA logo icon.
	 */
	hideLogo: boolean;

	/**
	 * The ISO alpha-2 language code for localization (requires corresponding i18n file).
	 */
	language: string;

	/**
	 * Forces the widget into a failed state with a mock error for UI testing.
	 */
	mockError: boolean;

	/**
	 * The `name` attribute of the hidden input field containing the payload.
	 * @default 'altcha'
	 */
	name: string;

	/**
	 * CSS selector for an element to be mirrored inside the overlay modal.
	 */
	overlayContent: string | null;

	/**
	 * Automatically attempts to restart verification with fewer workers if the browser runs out of memory (Argon2 and Scrypt only).
	 */
	retryOnOutOfMemoryError: boolean;

	/**
	 * Includes other form field values in the server-side verification request.
	 */
	serverVerificationFields: boolean;

	/**
	 * Includes the user's time zone in the server-side verification request.
	 */
	serverVerificationTimeZone: boolean;

	/**
	 * When set, the widget will set a configured cookie for the payload instead of sending it as form field.
	 */
	setCookie: SetCookieOptions | null;

	/**
	 * Mocks a successful verification. Useful for testing environments without network access.
	 */
	test: boolean;

	/**
	 * The visual style of the interaction element.
	 */
	type: 'native' | 'checkbox' | 'switch';

	/**
	 * Custom validation message for the HTML5 `setCustomValidity` API.
	 */
	validationMessage: string;

	/**
	 * A custom verification handler. Overrides the default network-based verification.
	 */
	verifyFunction:
		| ((payload: string, code?: string) => Promise<ServerVerificationResult | null>)
		| null;

	/**
	 * The endpoint URL for server-side verification.
	 */
	verifyUrl: string | null;

	/**
	 * The number of Web Workers to spawn for proof-of-work calculations.
	 */
	workers: number;
}

export interface Challenge {
	codeChallenge?: CodeChallenge;
	parameters: ChallengeParameters;
	signature?: string;
}

export interface ChallengeParameters {
	algorithm: string;
	nonce: string;
	salt: string;
	cost: number;
	keyLength: number;
	keyPrefix: string;
	keySignature?: string;
	memoryCost?: number;
	parallelism?: number;
	expiresAt?: number;
	data?: Record<string, string | number | boolean | null>;
}

export interface ChallengeV1 {
	algorithm: string;
	challenge: string;
	codeChallenge?: CodeChallenge;
	salt: string;
	maxnumber?: number;
	maxNumber?: number;
	signature: string;
}

export interface CodeChallenge {
	image: string;
	audio?: string;
	length?: number;
}

export interface CreateChallengeOptions {
	algorithm: string;
	counter?: number;
	counterMode?: 'uint32' | 'string';
	cost: number;
	data?: Record<string, string | number | boolean | null>;
	deriveKey: DeriveKeyFunction;
	expiresAt?: number | Date;
	hmacAlgorithm?: HmacAlgorithm;
	hmacKeySignatureSecret?: string;
	hmacSignatureSecret?: string;
	keyLength?: number;
	keyPrefix?: string;
	keyPrefixLength?: number;
	memoryCost?: number;
	parallelism?: number;
}

export interface CSSVariables {
	'--altcha-border-color': string;
	'--altcha-border-width': string;
	'--altcha-border-radius': string;
	'--altcha-color-base': string;
	'--altcha-color-base-content': string;
	'--altcha-color-error': string;
	'--altcha-color-error-content': string;
	'--altcha-color-neutral': string;
	'--altcha-color-neutral-content': string;
	'--altcha-color-primary': string;
	'--altcha-color-primary-content': string;
	'--altcha-color-success': string;
	'--altcha-color-success-content': string;
	'--altcha-checkbox-border-color': string;
	'--altcha-checkbox-border-radius': string;
	'--altcha-checkbox-border-width': string;
	'--altcha-checkbox-outline': string;
	'--altcha-checkbox-outline-offset': string;
	'--altcha-checkbox-size': string;
	'--altcha-checkbox-transition-duration': string;
	'--altcha-input-background-color': string;
	'--altcha-input-border-radius': string;
	'--altcha-input-border-width': string;
	'--altcha-max-width': string;
	'--altcha-padding': string;
	'--altcha-popover-arrow-size': string;
	'--altcha-popover-color': string;
	'--altcha-shadow': string;
	'--altcha-spinner-color': string;
	'--altcha-switch-background-color': string;
	'--altcha-switch-border-radius': string;
	'--altcha-switch-height': string;
	'--altcha-switch-padding': string;
	'--altcha-switch-width': string;
	'--altcha-switch-toggle-border-radius': string;
	'--altcha-switch-toggle-color': string;
	'--altcha-switch-toggle-size': string;
	'--altcha-transition-duration': string;
	'--altcha-z-index': string | number;
	'--altcha-z-index-popover': string | number;
}

export type DeriveKeyFunction = (
	parameters: ChallengeParameters,
	salt: Uint8Array,
	password: Uint8Array
) => Promise<DeriveKeyFunctionResult>;

export interface DeriveKeyFunctionResult {
	parameters?: Partial<ChallengeParameters>;
	derivedKey: Uint8Array;
}

export enum HmacAlgorithm {
	SHA_256 = 'SHA-256',
	SHA_384 = 'SHA-384',
	SHA_512 = 'SHA-512'
}

export interface Payload {
	challenge: Omit<Challenge, 'codeChallenge'>;
	solution: Solution;
}

export interface PayloadV1 {
	algorithm: string;
	challenge: string;
	number: number;
	salt: string;
	signature?: string;
	took: number;
}

export interface SetCookieOptions {
	domain?: string;
	name?: string;
	maxAge?: number;
	path?: string;
	sameSite?: string;
	secure?: boolean;
}

export type ServerClassification = 'BAD' | 'GOOD' | 'NEUTRAL';

export interface ServerSignaturePayload {
	algorithm: string;
	apiKey?: string;
	id?: string;
	signature: string;
	verificationData: string;
	verified: boolean;
}

export interface ServerSignatureVerificationData {
	[key: string]: string | unknown;
	classification?: ServerClassification;
	email?: string;
	expire?: number;
	fields?: string[];
	fieldsHash?: string;
	id?: string;
	ipAddress?: string;
	reasons?: string[];
	score?: number;
	time?: number;
	verified?: boolean;
}

export interface ServerVerificationResult {
	algorithm?: string;
	apiKey?: string;
	id?: string;
	payload?: string;
	reason?: string;
	score?: number;
	signature?: string;
	verificationData?: string;
	verified?: boolean;
}

export interface SolveChallengeOptions {
	challenge: Challenge;
	controller?: AbortController;
	counterStart?: number;
	counterStep?: number;
	counterMode?: 'uint32' | 'string';
	deriveKey: DeriveKeyFunction;
	timeout?: number;
}

export interface Strings {
	ariaLinkLabel: string;
	enterCode: string;
	enterCodeAria: string;
	error: string;
	expired: string;
	footer: string;
	getAudioChallenge: string;
	label: string;
	loading: string;
	reload: string;
	verify: string;
	verificationRequired: string;
	verified: string;
	verifying: string;
	waitAlert: string;
}

export enum State {
	CODE = 'code',
	ERROR = 'error',
	VERIFIED = 'verified',
	VERIFYING = 'verifying',
	UNVERIFIED = 'unverified',
	EXPIRED = 'expired'
}

export interface Solution {
	counter: number;
	derivedKey: string;
	time?: number;
}

export type Store<T extends object, K extends keyof T = keyof T> = {
	get: (name: K) => T[K];
	set: <N extends K>(name: N | T, value?: T[N]) => void;
	store: Writable<T>;
};

export interface VerifyOptions {
	concurrency?: number;
	controller?: AbortController;
	minDuration?: number;
}

export interface VerifyResult {
	challenge?: Challenge;
	payload: string;
	solution?: Solution;
}

export interface VerifyServerSignatureResult extends VerifySolutionResult {
	verificationData?: ServerSignatureVerificationData | null;
}

export interface VerifySolutionOptions {
	challenge: Challenge;
	counterMode?: 'uint32' | 'string';
	deriveKey: DeriveKeyFunction;
	hmacAlgorithm?: HmacAlgorithm;
	hmacKeySignatureSecret?: string;
	hmacSignatureSecret: string;
	solution: Solution;
}

export interface VerifySolutionResult {
	expired: boolean;
	invalidSignature: boolean | null;
	invalidSolution: boolean | null;
	time: number;
	verified: boolean;
}

export interface WidgetAttributes extends Partial<
	Pick<Configuration, 'auto' | 'display' | 'language' | 'name' | 'type'>
> {
	challenge?: string;
	configuration?: string;
}

export interface WidgetMethods {
	configure: (config: Partial<Configuration>) => Promise<void>;
	getConfiguration: () => Configuration;
	getState: () => State;
	hide: () => void;
	reset: (newState: State) => void;
	setState: (newState: State, err?: string | null) => void;
	show: () => void;
	updateUI: () => void;
	verify: (options?: VerifyOptions) => Promise<VerifyResult | null>;
}

export type Writable<T = Record<string, Record<string, string>>> = {
	set(this: void, value: T): void;
	update(this: void, updater: (value: T) => T): void;
	subscribe(this: void, run: (value: T) => void, invalidate?: () => void): () => void;
};
