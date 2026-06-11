import './global';
import type { HTMLAttributes } from 'svelte/elements';
import type { CodeChallenge, ServerVerificationResult, State, WidgetAttributes } from './';

export {};

interface AltchaWidgetSvelte extends WidgetAttributes, HTMLAttributes<HTMLElement> {
	oncodechallenge?: (ev: CustomEvent<{ codeChallenge: CodeChallenge }>) => void;
	onexpired?: (ev: CustomEvent<unknown>) => void;
	onstatechange?: (
		e: CustomEvent<{
			payload?: string;
			state: State;
		}>
	) => void;
	onserververification?: (e: CustomEvent<ServerVerificationResult>) => void;
	onverified?: (e: CustomEvent<{ payload: string }>) => void;
}

declare global {
	namespace svelteHTML {
		interface IntrinsicElements {
			'altcha-widget': AltchaWidgetSvelte;
		}
	}
}
