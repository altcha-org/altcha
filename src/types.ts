export interface Strings {
  ariaLinkLabel: string;
  enterCode: string;
  enterCodeAria: string;
  error: string;
  expired: string;
  footer: string;
  getAudioChallenge: string;
  label: string;
  loading: string;
  reload: string;
  verified: string;
  verificationRequired: string;
  verifying: string;
  waitAlert: string;
}

export interface Configure {
  auto?: 'off' | 'onfocus' | 'onload' | 'onsubmit';
  /** @deprecated */
  blockspam?: boolean;
  challenge?: Challenge | string;
  challengeurl?: string;
  credentials?: 'omit' | 'same-origin' | 'include' | boolean | undefined;
  customfetch?: string | CustomFetchFunction;
  debug?: boolean;
  delay?: number;
  disableautofocus?: boolean;
  expire?: number;
  floating?: 'auto' | 'top' | 'bottom';
  floatinganchor?: string;
  floatingoffset?: number;
  hidefooter?: boolean;
  hidelogo?: boolean;
  language?: string;
  maxnumber?: number;
  mockerror?: boolean;
  name?: string;
  obfuscated?: string;
  overlay?: boolean;
  overlaycontent?: string;
  refetchonexpire?: boolean;
  sentinel?: Sentinel;
  /** @deprecated */
  spamfilter?: boolean | 'ipAddress' | SpamFilter;
  strings?: Partial<Strings> | string;
  test?: boolean | number | 'delay';
  verifyurl?: string;
  workers?: number;
  workerurl?: string;
}

/** @deprecated */
export interface SpamFilter {
  blockedCountries?: string[];
  classifier?: string;
  disableRules?: string[];
  email?: string | false;
  expectedCountries?: string[];
  expectedLanguages?: string[];
  fields?: string[] | false;
  ipAddress?: string | false;
  text?: string | string[];
  timeZone?: string | false;
}

export interface Sentinel {
  fields?: boolean;
  timeZone?: boolean;
}

export interface ServerVerificationPayload {
  blockedCountries?: string[];
  classifier?: string;
  disableRules?: string[];
  email?: string;
  expectedCountries?: string[];
  expectedLanguages?: string[];
  fields?: Record<string, string>;
  ipAddress?: string;
  payload: string;
  text?: string | string[];
  timeZone?: string;
}

export interface SentinelVerificationPayload {
  code?: string;
  email?: string;
  fields?: Record<string, string>;
  ipAddress?: string;
  payload: string;
  text?: string | string[];
  timeZone?: string;
}

export interface SentinelVerificationResponse {
  algorithm: Algorithm;
  apiKey: string;
  reason?: string;
  score: number;
  signature: string;
  verificationData: string;
  verified: boolean;
}

export interface Solution {
  number: number;
  took: number;
  worker?: boolean;
}

export interface Challenge {
  codeChallenge?: {
    audio?: string;
    image: string;
    length?: number;
  };
  algorithm: string;
  challenge: string;
  maxnumber?: number;
  maxNumber?: number;
  salt: string;
  signature: string;
}

export interface Payload {
  algorithm: string;
  challenge: string;
  number: number;
  salt: string;
  signature: string;
  test?: boolean;
  took: number;
}

export interface Obfuscated {
  obfuscated: string;
  key?: string;
  maxnumber?: number;
  maxNumber?: number;
}

export interface ClarifySolution {
  clearText: string;
  took: number;
  worker?: boolean;
}

export interface PluginContext {
  el: HTMLElement;
  clarify(): Promise<void>;
  dispatch: <T>(event: string, detail?: T) => void;
  getConfiguration(): Configure;
  getFloatingAnchor(): HTMLElement | null;
  getState(): State;
  log(...args: unknown[]): void;
  reset(state?: State, err?: string | null): void;
  solve(data: Challenge | Obfuscated): Promise<{
    data: Challenge | Obfuscated;
    solution: Solution | ClarifySolution | null;
  }>;
  setFloatingAnchor(el: HTMLElement): void;
  setState(state: State, err?: string | null): void;
  verify(): Promise<void>;
}

export enum State {
  CODE = 'code',
  ERROR = 'error',
  VERIFIED = 'verified',
  VERIFYING = 'verifying',
  UNVERIFIED = 'unverified',
  EXPIRED = 'expired',
}

export enum AudioState {
  ERROR = 'error',
  LOADING = 'loading',
  PLAYING = 'playing',
  PAUSED = 'paused',
  READY = 'ready',
}

export type CustomFetchFunction = (url: string, init?: RequestInit) => Promise<Response>;