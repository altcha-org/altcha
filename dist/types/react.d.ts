import './global';
import type { CSSProperties, HTMLAttributes, Ref } from 'react';
import type { CSSVariables, WidgetAttributes } from './';
export {};
interface AltchaWidgetReact extends WidgetAttributes, HTMLAttributes<HTMLElement> {
    ref?: Ref<HTMLElement>;
    style?: CSSProperties & Partial<CSSVariables>;
    suppressHydrationWarning?: boolean;
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
