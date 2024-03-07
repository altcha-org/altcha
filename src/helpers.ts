import type { Solution } from './types';

const encoder = new TextEncoder();

export function ab2hex(ab: ArrayBuffer) {
  return [...new Uint8Array(ab)].map(x => x.toString(16).padStart(2, '0')).join('');
}

export async function createTestChallenge(max: number = 1e5, algorithm: string = 'SHA-256') {
  const salt = Date.now().toString(16);
  const num = Math.round(Math.random() * max);
  const challenge = await hashChallenge(salt, num, algorithm); 
  return {
    algorithm,
    challenge,
    salt,
    signature: '',
  };
}

export async function hashChallenge(salt: string, num: number, algorithm: string) {
  return ab2hex(await crypto.subtle.digest(algorithm.toUpperCase(), encoder.encode(salt + num))); 
}

export function solveChallenge(challenge: string, salt: string, algorithm: string = 'SHA-256', max: number = 1e6, start: number = 0): { promise: Promise<Solution | null>; controller: AbortController } {
  const controller = new AbortController();
  const promise = new Promise((resolve, reject) => {
    const startTime = Date.now();
    const next = (n: number) => {
      if (controller.signal.aborted || n >= max) {
        resolve(null);
      } else {
        hashChallenge(salt, n, algorithm).then((t) => {
          if (t === challenge) {
            resolve({
              number: n,
              took: Date.now() - startTime,
            });
          } else {
            next(n + 1);
          }
        }).catch(reject);
      }
    };
    next(start);
  }) as Promise<Solution | null>;
  return {
    promise,
    controller,
  };
}
