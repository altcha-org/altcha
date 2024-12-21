export {};

declare module 'altcha';

declare global {
  var altchaCreateWorker: (url?: string) => Worker;
  var altchaPlugins: any[];

  type AltchaState = 'error' | 'expired' | 'verified' | 'verifying' | 'unverified';

  interface AltchaStateChangeEvent extends CustomEvent<{
    payload?: string;
    state: AltchaState;
  }> {}

  interface AltchaVerifiedEvent extends CustomEvent<{
    payload: string;
  }> {}

  interface AltchaServerVerificationEvent extends CustomEvent<Record<string, unknown>> {}

  interface AltchaWidgetOptions {
    auto?: 'off' | 'onfocus' | 'onload' | 'onsubmit';
    blockspam?: boolean;
    challengeurl?: string;
    challengejson?: string;
    customfetch?: string | ((url: string, init?: RequestInit) => Promise<Response>);
    debug?: boolean;
    delay?: number;
    expire?: number;
    floating?: 'auto' | 'top' | 'bottom' | 'false' | '' | boolean;
    floatinganchor?: string;
    floatingoffset?: number;
    hidefooter?: boolean;
    hidelogo?: boolean;
    maxnumber?: number;
    mockerror?: boolean;
    name?: string;
    obfuscated?: string;
    oncleartext?: (ev: CustomEvent) => void;
    onload?: (ev: CustomEvent) => void;
    onstatechange?: (ev: CustomEvent) => void;
    onverified?: (ev: CustomEvent) => void;
    onserververification?: (ev: CustomEvent) => void;
    onupload?: (ev: CustomEvent) => void;
    onuploadprogress?: (ev: CustomEvent) => void;
    plugins?: string;
    refetchonexpire?: boolean;
    spamfilter?: boolean | 'ipAddress';
    strings?: string;
    test?: boolean | number;
    verifyurl?: string;
    workers?: number;
    workerurl?: string;
  }

  interface AltchaWidgetMethods {
    configure: (options: AltchaWidgetOptions) => void;
    clarify: () => Promise<void>;
    getConfiguration: () => AltchaWidgetOptions;
    getFloatingAnchor: () => HTMLElement | null;
    getPlugin: <T = unknown>(name: string) => T;
    getState: () => AltchaState;
    reset: (newState: AltchaState = 'unverified', err: string | null = null) => void;
    setFloatingAnchor: (el: HTMLElement) => void; 
    setState: (newState: AltchaState, err: string | null = null) => void; 
    verify: () => Promise<void>;
  }

  interface AltchaWidget extends AltchaWidgetOptions extends AltchaWidgetMethods {
  }

  declare namespace svelteHTML {
    interface IntrinsicElements {
      'altcha-widget': AltchaWidgetSvelte;
    }

    interface AltchaWidgetSvelte extends AltchaWidget {
      'on:statechange'?: (event: AltchaStateChangeEvent) => void;
      'on:serververification'?: (event: AltchaServerVerificationEvent) => void; 
      'on:verified'?: (event: AltchaVerifiedEvent) => void; 
      style?: string;
    }
  }

  namespace JSX {
    interface IntrinsicElements {
      'altcha-widget': AltchaWidgetReact;
    }

    interface AltchaWidgetCSSProperties extends React.CSSProperties {
      '--altcha-border-width'?: string;
      '--altcha-border-radius'?: string;
      '--altcha-color-base'?: string;
      '--altcha-color-border'?: string;
      '--altcha-color-text'?: string;
      '--altcha-color-border-focus'?: string;
      '--altcha-color-error-text'?: string;
      '--altcha-color-footer-bg'?: string;
      '--altcha-max-width'?: string;
    }

    interface AltchaWidgetReact extends AltchaWidget extends React.HTMLAttributes<HTMLElement> {
      children?: React.ReactNode;
      ref?: React.RefObject<HTMLElement>;
      style?: AltchaWidgetCSSProperties;
    }
  }
}