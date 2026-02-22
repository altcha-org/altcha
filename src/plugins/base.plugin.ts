import type {
	Challenge,
	ServerVerificationResult,
	VerifyOptions,
	VerifyResult,
	WidgetMethods
} from '../types';

export abstract class BasePlugin {
	static register(pluginClass: new (host: HTMLElement & WidgetMethods) => BasePlugin) {
		if ('$altcha' in globalThis && !globalThis.$altcha.plugins.has(pluginClass)) {
			globalThis.$altcha.plugins.add(pluginClass);
		}
	}

	constructor(readonly host: HTMLElement & WidgetMethods) {}

	abstract activate(): void;

	abstract destroy(): void;

	async onFetchChallenge(source: string | Challenge | null): Promise<Challenge | null | void> {}

	async onRequestServerVerification(
		payload: string,
		code?: string
	): Promise<ServerVerificationResult | null | void> {}

	async onVerify(value: VerifyOptions): Promise<VerifyResult | null | void> {}
}
