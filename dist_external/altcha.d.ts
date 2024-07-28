export {};

declare module 'altcha';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'altcha-widget': AltchaWidget;
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

    interface AltchaWidget extends React.HTMLAttributes<HTMLElement> {
      auto?: 'onfocus' | 'onload' | 'onsubmit';
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
      style?: AltchaWidgetCSSProperties;
      test?: boolean | number;
      verifyurl?: string;
      workers?: number;
      workerurl?: string;

      ref?: React.RefObject<HTMLElement>;
    }
  }
}