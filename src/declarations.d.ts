export {};

declare module 'altcha';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'altcha-widget': AltchaWidget;
    }

    interface AltchaWidget {
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
      test?: boolean | number;
      verifyurl?: string;
      workers?: number;
      workerurl?: string;
    }
  }
}