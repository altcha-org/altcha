import { webcrypto } from 'node:crypto';

// https://github.com/jsdom/jsdom/issues/1612
Object.defineProperty(globalThis, 'crypto', {
  value: webcrypto,
});
