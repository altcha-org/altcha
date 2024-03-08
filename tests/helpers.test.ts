import { describe, expect, test, vi } from 'vitest';
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
    const solution = await solveChallenge(data.challenge, data.salt, data.algorithm).promise;
    expect(solution?.number).toBeDefined();
    expect(solution?.took).toBeDefined();
    const challenge = await hashChallenge(data.salt, solution!.number, alg);
    expect(data.challenge).toBe(challenge);
  });

  test('should solve challenge with max number', async () => {
    const data = await createTestChallenge(10, alg);
    const solution = await solveChallenge(data.challenge, data.salt, data.algorithm, 10, 0).promise;
    expect(solution?.number).toEqual(10);
  });

  test('should return null if start is greater than random number', async () => {
    const data = await createTestChallenge(10, alg);
    const solution = await solveChallenge(data.challenge, data.salt, data.algorithm, 100, 20).promise;
    expect(solution).toEqual(null);
  });

  test('should abort and return null', async () => {
    const data = await createTestChallenge(100, alg);
    const { controller, promise } = solveChallenge(data.challenge, data.salt, data.algorithm);
    process.nextTick(() => {
      controller.abort();
    });
    const solution = await promise;
    expect(controller.signal.aborted).toEqual(true)
    expect(solution).toEqual(null);
  });
});