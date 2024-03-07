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
  auto?: 'onload' | 'onsubmit'; 
  challenge?: Challenge;
  debug?: boolean;
  expire?: number;
  hidefooter?: boolean;
  hidelogo?: boolean;
  maxnumber?: number;
  mockerror?: boolean;
  name?: string;
  strings?: Partial<Strings>;
  test?: boolean;
}

export interface Solution {
  number: number;
  took: number;
  worker?: boolean;
}

export interface Challenge {
  algorithm: string;
  challenge: string;
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
};
