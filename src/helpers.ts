import type { Solution } from './types';

const encoder = new TextEncoder();

/**
 * Converts an ArrayBuffer to a hexadecimal string.
 * 
 * @param {ArrayBuffer} ab - The ArrayBuffer to convert.
 * @returns {string} - The hexadecimal representation of the ArrayBuffer.
 */
export function ab2hex(ab: ArrayBuffer): string {
  return [...new Uint8Array(ab)]
    .map((x) => x.toString(16).padStart(2, '0'))
    .join('');
}

/**
 * Creates a test challenge by generating a hash based on a salt and a number.
 * 
 * @param {number} [num] - Optional number to include in the challenge. If not provided, a random number will be used.
 * @param {string} [algorithm='SHA-256'] - The hashing algorithm to use (e.g., 'SHA-256').
 * @param {number} [max=1e5] - The maximum value for the random number.
 * @returns {Promise<{ algorithm: string, challenge: string, salt: string, signature: string }>} - An object containing the algorithm, challenge, salt, and an empty signature.
 */
export async function createTestChallenge(
  num?: number,
  algorithm: string = 'SHA-256',
  max: number = 1e5
): Promise<{ algorithm: string; challenge: string; salt: string; signature: string; }> {
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

/**
 * Generates a hash based on a salt and a number using a specified algorithm.
 * 
 * @param {string} salt - The salt to include in the hash.
 * @param {number} num - The number to include in the hash.
 * @param {string} algorithm - The hashing algorithm to use (e.g., 'SHA-256').
 * @returns {Promise<string>} - The hexadecimal representation of the hash.
 */
export async function hashChallenge(
  salt: string,
  num: number,
  algorithm: string
): Promise<string> {
  if (typeof crypto === 'undefined' || !('subtle' in crypto) || !('digest' in crypto.subtle)) {
    throw new Error('Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).');
  }
  return ab2hex(
    await crypto.subtle.digest(
      algorithm.toUpperCase(),
      encoder.encode(salt + num)
    )
  );
}

/**
 * Attempts to solve a challenge by finding the number that produces the correct hash.
 * 
 * @param {string} challenge - The hash that needs to be matched.
 * @param {string} salt - The salt used to generate the original hash.
 * @param {string} [algorithm='SHA-256'] - The hashing algorithm to use.
 * @param {number} [max=1e6] - The maximum number to try when solving the challenge.
 * @param {number} [start=0] - The starting number to try when solving the challenge.
 * @returns {{ promise: Promise<Solution | null>, controller: AbortController }} - An object containing a promise that resolves to the solution and an AbortController to cancel the operation.
 */
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

/**
 * Retrieves the user's current time zone.
 * 
 * @returns {string | undefined} - The time zone string or undefined if it cannot be determined.
 */
export function getTimeZone(): string | undefined {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    // noop
  }
  return undefined;
}

/**
 * Converts a Base64-encoded string to a Uint8Array.
 * 
 * @param {string} encoded - The Base64-encoded string to convert.
 * @returns {Uint8Array} - The resulting Uint8Array.
 */
export function base64ToUint8Array(encoded: string): Uint8Array {
  const str = atob(encoded);
  const ua = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) {
    ua[i] = str.charCodeAt(i);
  }
  return ua;
}

/**
 * Converts a number to a Uint8Array of a specified length.
 * 
 * @param {number} num - The number to convert.
 * @param {number} [len=12] - The length of the resulting Uint8Array.
 * @returns {Uint8Array} - The resulting Uint8Array.
 */
export function numberToUint8Array(num: number, len: number = 12): Uint8Array {
  const ua = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    ua[i] = num % 256;
    num = Math.floor(num / 256);
  }
  return ua;
}

/**
 * Attempts to decrypt data using a brute-force approach by trying different initialization vectors (IVs).
 * 
 * @param {string} encrypted - The Base64-encoded encrypted data.
 * @param {string} [key=''] - The key used to attempt decryption.
 * @param {number} [max=1e6] - The maximum IV to try.
 * @param {number} [start=0] - The starting IV to try.
 * @returns {{ promise: Promise<{ clearText: string; took: number } | null>, controller: AbortController }} - An object containing a promise that resolves to the clear text if decrypted and an AbortController to cancel the operation.
 */
export async function clarifyData(
  encrypted: string,
  key: string = '',
  max: number = 1e6,
  start: number = 0
): Promise<{ promise: Promise<{ clearText: string; took: number; } | null>; controller: AbortController; }> {
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