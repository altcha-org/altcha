import './global';
import type { CodeChallenge, ServerVerificationResult, State, WidgetAttributes } from './';
export {};
interface AltchaWidgetSvelte extends WidgetAttributes {
    oncodechallenge?: (ev: CustomEvent<{
        codeChallenge: CodeChallenge;
    }>) => void;
    onexpired?: (ev: CustomEvent<unknown>) => void;
    onload?: (ev: CustomEvent<unknown>) => void;
    onstatechange?: (e: CustomEvent<{
        payload?: string;
        state: State;
    }>) => void;
    onserververification?: (e: CustomEvent<ServerVerificationResult>) => void;
    onverified?: (e: CustomEvent<{
        payload: string;
    }>) => void;
    style?: string;
}
declare global {
    namespace svelteHTML {
        interface IntrinsicElements {
            'altcha-widget': AltchaWidgetSvelte;
        }
    }
}
