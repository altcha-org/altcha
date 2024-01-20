export interface Strings {
  error: string;
  footer: string;
  label: string;
  verified: string;
  verifying: string;
  waitAlert: string;
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
};
