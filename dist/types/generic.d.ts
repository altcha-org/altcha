import './global';
import type { Configuration, State, VerifyOptions, VerifyResult } from './';
export {};
export declare class AltchaWidgetElement extends HTMLElement {
    auto?: Configuration['auto'];
    challenge?: string;
    configuration?: string;
    display?: Configuration['display'];
    language?: string;
    name?: string;
    theme?: string;
    type?: Configuration['type'];
    workers?: number;
    configure: (config: Partial<Configuration>) => Promise<void>;
    getConfiguration: () => Configuration;
    getState: () => State;
    hide: () => void;
    reset: (newState?: State, err?: string | null) => void;
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
