import type { Solution } from './types';

const MAX = 1e7;

const encoder = new TextEncoder();

export function ab2hex(ab: ArrayBuffer) {
  return [...new Uint8Array(ab)].map(x => x.toString(16).padStart(2, '0')).join('');
}

export async function createTestChallenge(max: number = 1e5, algorithm: string = 'SHA-256') {
  const salt = Date.now().toString(16);
  const challenge = await hashChallenge(salt, Math.round(Math.random() * max), algorithm); 
  return {
    algorithm,
    challenge,
    salt,
    signature: '',
  };
}

export async function hashChallenge(salt: string, num: number, algorithm: string) {
  return ab2hex(await crypto.subtle.digest(algorithm, encoder.encode(salt + num))); 
}

export async function solveChallenge(challenge: string, salt: string, algorithm: string = 'SHA-256', max: number = MAX): Promise<Solution | null> {
  const start = Date.now();
  for (let i = 0; i <= max; i ++) {
    const t = await hashChallenge(salt, i, algorithm);
    if (t === challenge) {
      return {
        number: i,
        took: Date.now() - start,
      };
    }
  } 
  return null;
}
