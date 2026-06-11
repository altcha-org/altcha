import './global';
import type { CSSVariables, WidgetAttributes } from './';

export {};

interface AltchaWidgetJSX extends WidgetAttributes {
	class?: string;
	className?: string;
	hidden?: boolean;
	id?: string;
	role?: string;
	slot?: string;
	style?: string | Partial<CSSVariables>;
	tabindex?: number | string;
	tabIndex?: number;
	title?: string;
}

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'altcha-widget': AltchaWidgetJSX;
		}
	}
}
