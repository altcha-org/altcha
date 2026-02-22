import './global';
import type { CSSVariables, WidgetAttributes } from './';

export {};

interface AltchaWidgetReact extends WidgetAttributes {
	children?: any;
	ref?: AltchaWidgetReactRefObject<HTMLElement>;
	style?: Partial<CSSVariables>;
	suppressHydrationWarning?: boolean;
}

interface AltchaWidgetReactRefObject<T> {
	current: T | null;
}

declare global {
	namespace React {
		namespace JSX {
			interface IntrinsicElements {
				'altcha-widget': AltchaWidgetReact;
			}
		}
	}
}

declare module 'react' {
	namespace JSX {
		interface IntrinsicElements {
			'altcha-widget': AltchaWidgetReact;
		}
	}
}

declare module 'react/jsx-runtime' {
	namespace JSX {
		interface IntrinsicElements {
			'altcha-widget': AltchaWidgetReact;
		}
	}
}
