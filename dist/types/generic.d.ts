import './global';
import type { Configuration, State, VerifyOptions, VerifyResult } from './';
export {};
export declare class AltchaWidgetElement extends HTMLElement {
    auto?: Configuration['auto'];
    challenge?: string;
    display?: Configuration['display'];
    language?: string;
    name?: string;
    type?: Configuration['type'];
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
declare global {
    interface HTMLElementTagNameMap {
        'altcha-widget': AltchaWidgetElement;
    }
}
