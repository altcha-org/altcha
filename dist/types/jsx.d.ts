import './global';
import type { CSSVariables, WidgetAttributes } from './';
export {};
interface AltchaWidgetJSX extends WidgetAttributes {
    style?: Partial<CSSVariables>;
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'altcha-widget': AltchaWidgetJSX;
        }
    }
}
