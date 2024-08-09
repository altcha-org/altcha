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
  };
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

export function base64ToUint8Array(encoded: string) {
  const str = atob(encoded);
  const ua = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) {
    ua[i] = str.charCodeAt(i);
  }
  return ua;
}

export function numberToUint8Array(num: number, len: number = 12) {
  const ua = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    ua[i] = num % 256;
    num = Math.floor(num / 256);
  }
  return ua;
}

export async function clarifyData(
  encrypted: string,
  key: string = '',
  max: number = 1e6,
  start: number = 0
) {
  const algorithm = 'AES-GCM';
  const controller = new AbortController();
  const startTime = Date.now();
  const fn = async () => {
    for (let n = start; n <= max; n += 1) {
      if (controller.signal.aborted || !cryptoKey || !encryptedData) {
        return null;
      }
      try {
        const decryptedData = await crypto.subtle.decrypt(
          {
            name: algorithm,
            iv: numberToUint8Array(n),
          },
          cryptoKey,
          encryptedData,
        );
        if (decryptedData) {
          return {
            clearText: new TextDecoder().decode(decryptedData),
            took: Date.now() - startTime,
          };
        }

      } catch {
        // noop
      }
    }
    return null;
  };
  let cryptoKey: CryptoKey | null = null;
  let encryptedData: Uint8Array | null = null;
  try {
    encryptedData = base64ToUint8Array(encrypted);
    const keyHash = await crypto.subtle.digest(
      'SHA-256',
      encoder.encode(key)
    );
    cryptoKey = await crypto.subtle.importKey(
      'raw',
      keyHash,
      algorithm,
      false,
      ['decrypt']
    );
  } catch {
    return {
      promise: Promise.reject(),
      controller,
    };
  }
  return {
    promise: fn(),
    controller,
  };
}