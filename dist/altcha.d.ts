export {};

declare module 'altcha';

declare global {
  type AltchaState = 'error' | 'expired' | 'verified' | 'verifying' | 'unverified';

  interface AltchaStateChangeEvent extends CustomEvent<{
    payload?: string;
    state: AltchaState;
  }> {}

  interface AltchaVerifiedEvent extends CustomEvent<{
    payload: string;
  }> {}

  interface AltchaServerVerificationEvent extends CustomEvent<Record<string, unknown>> {}

  interface AltchaWidget {
    analytics?: boolean | string;
    auto?: 'onfocus' | 'onload' | 'onsubmit';
    beaconurl?: string;
    blockspam?: boolean;
    challengeurl?: string;
    challengejson?: string;
    debug?: boolean;
    delay?: number;
    expire?: number;
    floating?: 'auto' | 'top' | 'bottom' | 'false' | '' | boolean;
    floatinganchor?: string;
    floatingoffset?: number;
    hidefooter?: boolean;
    hidelogo?: boolean;
    name?: string;
    maxnumber?: number;
    mockerror?: boolean;
    refetchonexpire?: boolean;
    spamfilter?: boolean | 'ipAddress';
    strings?: string;
    test?: boolean | number;
    verifyurl?: string;
    workers?: number;
    workerurl?: string;
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
      ref?: React.RefObject<HTMLElement>;
      style?: AltchaWidgetCSSProperties;
    }
  }
}