export interface Strings {
  error: string;
  expired: string;
  footer: string;
  label: string;
  verified: string;
  verifying: string;
  waitAlert: string;
}

export interface Configure {
  auto?: 'off' | 'onfocus' | 'onload' | 'onsubmit';
  blockspam?: boolean;
  challenge?: Challenge | string;
  challengeurl?: string;
  debug?: boolean;
  delay?: number;
  expire?: number;
  floating?: 'auto' | 'top' | 'bottom';
  floatinganchor?: string;
  floatingoffset?: number;
  autorenew?: boolean;
  hidefooter?: boolean;
  hidelogo?: boolean;
  maxnumber?: number;
  mockerror?: boolean;
  name?: string;
  obfuscated?: string;
  refetchonexpire?: boolean;
  spamfilter?: boolean | 'ipAddress' | SpamFilter;
  strings?: Partial<Strings> | string;
  test?: boolean | number | 'delay';
  verifyurl?: string;
  workers?: number;
  workerurl?: string;
}

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

export interface Solution {
  number: number;
  took: number;
  worker?: boolean;
}

export interface Challenge {
  algorithm: string;
  challenge: string;
  maxnumber?: number;
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
  ERROR = 'error',
  VERIFIED = 'verified',
  VERIFYING = 'verifying',
  UNVERIFIED = 'unverified',
  EXPIRED = 'expired',
}
