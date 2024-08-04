import type { Solution } from './types';

const encoder = new TextEncoder();

export function ab2hex(ab: ArrayBuffer) {
  return [...new Uint8Array(ab)]
    .map((x) => x.toString(16).padStart(2, '0'))
    .join('');
}

export async function createTestChallenge(
  num?: number,
  algorithm: string = 'SHA-256',
  max: number = 1e5
) {
  const salt = Date.now().toString(16);
  if (!num) {
    num = Math.round(Math.random() * max);
  }
  const challenge = await hashChallenge(salt, num, algorithm);
  return {
    algorithm,
    challenge,
    salt,
    signature: '',
  };
}

export async function hashChallenge(
  salt: string,
  num: number,
  algorithm: string
) {
  return ab2hex(
    await crypto.subtle.digest(
      algorithm.toUpperCase(),
      encoder.encode(salt + num)
    )
  );
}

export function solveChallenge(
  challenge: string,
  salt: string,
  algorithm: string = 'SHA-256',
  max: number = 1e6,
  start: number = 0
): { promise: Promise<Solution | null>; controller: AbortController } {
  const controller = new AbortController();
  const startTime = Date.now();
  const fn = async () => {
    for (let n = start; n <= max; n += 1) {
      if (controller.signal.aborted) {
        return null;
      }
      const t = await hashChallenge(salt, n, algorithm);
      if (t === challenge) {
        return {
          number: n,
          took: Date.now() - startTime,
        };
      }
    }
    return null;
  }
  return {
    promise: fn(),
    controller,
  };
}

export function getTimeZone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    // noop
  }
  return undefined;
}

