import { describe, expect, test } from 'vitest';
import { ab2hex, hashChallenge, createTestChallenge, solveChallenge } from '../src/helpers';

const alg = 'SHA-256';
const salt = 'randomstring';
const num = 123;

describe('ab2hex', () => {
  test('should return hex-encoded string', () => {
    expect(ab2hex(new TextEncoder().encode('Hello world'))).toBe('48656c6c6f20776f726c64');
  });
});

describe('hashChallenge', () => {
  test('should return a new hex-encoded challenge', async () => {
    const challenge = await hashChallenge(salt, num, alg);
    expect(challenge).toBe(ab2hex(await crypto.subtle.digest(alg, new TextEncoder().encode(salt + num))));
  });
});

describe('createTestChallenge', () => {
  test('should return a test challenge object', async () => {
    const data = await createTestChallenge(num, alg);
    expect(data.algorithm).toBe(alg);
    expect(data.signature).toBe('');
    expect(data.salt).toBeDefined();
    expect(data.challenge).toBeDefined();
  });
});

describe('solveChallenge', () => {
  test('should solve challenge and return number', async () => {
    const data = await createTestChallenge(10, alg);
    const solution = await solveChallenge(data.challenge, data.salt, data.algorithm);
    expect(solution?.number).toBeDefined();
    expect(solution?.took).toBeDefined();
    const challenge = await hashChallenge(data.salt, solution!.number, alg);
    expect(data.challenge).toBe(challenge);
  });
});