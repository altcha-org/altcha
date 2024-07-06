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
  auto?: 'onfocus' | 'onload' | 'onsubmit';
  challenge?: Challenge;
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
  refetchonexpire?: boolean;
  spamfilter?: boolean | SpamFilter;
  strings?: Partial<Strings>;
  test?: boolean | number | 'delay';
  verifyurl?: string;
  workers?: number;
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

export enum State {
  ERROR = 'error',
  VERIFIED = 'verified',
  VERIFYING = 'verifying',
  UNVERIFIED = 'unverified',
  EXPIRED = 'expired',
}
