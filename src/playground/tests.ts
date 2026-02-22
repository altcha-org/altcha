import * as argon2id from '../algorithms/argon2id';
import * as pbkdf2 from '../algorithms/pbkdf2';
import * as sha from '../algorithms/sha';
import * as scrypt from '../algorithms/scrypt';
import Argon2idWorker from '../workers/argon2id?worker';
import ScryptWorker from '../workers/scrypt?worker';
import Pbkdf2Worker from '../workers/pbkdf2?worker';
import ShaWorker from '../workers/sha?worker';
import * as PoW from '../pow';
import { log } from './helpers';
import type { Test, TestCtx, TestResult } from './types';

const HMAC_SIGNATURE_SECRET = 'signature.secret';
const HMAC_KEY_SECRET = 'key.secret';

export const ALGOS = [
	'SHA-256',
	'SHA-384',
	'SHA-512',
	'PBKDF2/SHA-256',
	'PBKDF2/SHA-384',
	'PBKDF2/SHA-512',
	'ARGON2ID',
	'SCRYPT'
];

function getDeriveKeyFunction(alg: string) {
	switch (alg) {
		case 'SHA-256':
		case 'SHA-384':
		case 'SHA-512':
			return sha.deriveKey;
		case 'PBKDF2/SHA-256':
		case 'PBKDF2/SHA-384':
		case 'PBKDF2/SHA-512':
			return pbkdf2.deriveKey;
		case 'ARGON2ID':
			return argon2id.deriveKey;
		case 'SCRYPT':
			return scrypt.deriveKey;
		default:
			throw new Error(`Unsupported algorithm ${alg}.`);
	}
}

function getWorkerClass(alg: string) {
	switch (alg) {
		case 'SHA-256':
		case 'SHA-384':
		case 'SHA-512':
			return ShaWorker;
		case 'PBKDF2/SHA-256':
		case 'PBKDF2/SHA-384':
		case 'PBKDF2/SHA-512':
			return Pbkdf2Worker;
		case 'ARGON2ID':
			return Argon2idWorker;
		case 'SCRYPT':
			return ScryptWorker;
		default:
			throw new Error(`Unsupported algorithm ${alg}.`);
	}
}

// @ts-expect-error non-standard property
const deviceMemory = navigator.deviceMemory || 0;
const workerConcurrency = Math.min(
	deviceMemory && deviceMemory <= 4 ? 4 : 8,
	navigator.hardwareConcurrency || 6
);

const onAlgorithmChange = (settings: {
	algorithm: string;
	cost: number;
	counter?: number;
	keyLength?: number;
	memoryCost?: number;
	parallelism?: number;
}) => {
	switch (settings.algorithm) {
		case 'ARGON2ID':
			settings.cost = 2;
			settings.keyLength = 32;
			settings.memoryCost = 65_536;
			settings.parallelism = 1;
			if (settings.counter) {
				settings.counter = 100;
			}
			break;
		case 'SCRYPT':
			settings.cost = 65_536;
			settings.keyLength = 32;
			settings.memoryCost = 8;
			settings.parallelism = 1;
			if (settings.counter) {
				settings.counter = 100;
			}
			break;
		case 'SHA-256':
		case 'SHA-384':
		case 'SHA-512':
			settings.cost = 1_000;
			settings.memoryCost = undefined;
			settings.parallelism = undefined;
			if (settings.counter) {
				settings.counter = 1_000;
			}
			if (settings.algorithm.endsWith('SHA-256')) {
				settings.keyLength = 32;
			} else if (settings.algorithm.endsWith('SHA-384')) {
				settings.keyLength = 48;
			} else if (settings.algorithm.endsWith('SHA-512')) {
				settings.keyLength = 64;
			}
			break;
		default:
			settings.cost = 5_000;
			settings.keyLength = 32;
			settings.memoryCost = undefined;
			settings.parallelism = undefined;
			if (settings.counter) {
				settings.counter = 5_000;
			}
			break;
	}
};

export const tests: Test[] = [
	{
		id: 'random',
		name: `Random Effort`,
		options: {
			algorithm: {
				default: 'PBKDF2/SHA-256',
				label: `algorithm`,
				type: 'string',
				options: ALGOS,
				onChange: onAlgorithmChange
			},
			cost: {
				default: 5_000,
				label: `cost`,
				type: 'number'
			},
			memoryCost: {
				default: 0,
				isDisabled: ({ algorithm }: { algorithm: string }) =>
					!['ARGON2ID', 'SCRYPT'].includes(algorithm),
				label: `memoryCost`,
				type: 'number'
			},
			parallelism: {
				default: 1,
				isDisabled: ({ algorithm }: { algorithm: string }) =>
					!['ARGON2ID', 'SCRYPT'].includes(algorithm),
				label: `parallelism`,
				type: 'number'
			},
			keyPrefix: {
				default: '00',
				label: `keyPrefix`,
				type: 'string'
			},
			workerConcurrency: {
				default: workerConcurrency,
				label: `workerConcurrency`,
				type: 'number'
			}
		},
		fn: async (
			ctx: TestCtx,
			settings: { workerConcurrency: number },
			controller: AbortController
		) => {
			return {
				solution: await PoW.solveChallengeWorkers({
					challenge: ctx.challenge,
					concurrency: settings.workerConcurrency,
					controller,
					createWorker: () => new (getWorkerClass(ctx.challenge.parameters.algorithm))(),
					onOutOfMemory(c) {
						log('out of memory error received');
						if (c > 1) {
							const retryConcurrency = Math.floor(c / 2);
							log(`retrying with ${retryConcurrency} workers...`);
							return retryConcurrency;
						}
					}
				}),
				challenge: ctx.challenge
			};
		},
		setup: async (settings: {
			algorithm: string;
			cost: number;
			memoryCost?: number;
			keyLength?: number;
			parallelism?: number;
			keyPrefix: string;
		}) => {
			const { algorithm, cost, memoryCost, keyLength, parallelism, keyPrefix } = settings;
			return {
				challenge: await PoW.createChallenge({
					algorithm,
					cost,
					deriveKey: getDeriveKeyFunction(algorithm),
					hmacKeySignatureSecret: HMAC_KEY_SECRET,
					hmacSignatureSecret: HMAC_SIGNATURE_SECRET,
					keyLength,
					memoryCost: ['ARGON2ID', 'SCRYPT'].includes(algorithm) ? memoryCost : undefined,
					parallelism: ['ARGON2ID', 'SCRYPT'].includes(algorithm) ? parallelism : undefined,
					keyPrefix
				})
			};
		},
		teardown: async (ctx: TestCtx, result: TestResult) => {
			return {
				verification: result?.solution
					? await PoW.verifySolution({
							challenge: ctx.challenge,
							deriveKey: getDeriveKeyFunction(ctx.challenge.parameters.algorithm),
							hmacKeySignatureSecret: HMAC_KEY_SECRET,
							hmacSignatureSecret: HMAC_SIGNATURE_SECRET,
							solution: result.solution
						})
					: null
			};
		}
	},
	{
		id: 'fixed',
		name: `Deterministic Effort`,
		options: {
			algorithm: {
				default: 'PBKDF2/SHA-256',
				label: `algorithm`,
				type: 'string',
				options: ALGOS,
				onChange: onAlgorithmChange
			},
			cost: {
				default: 5_000,
				label: `cost`,
				type: 'number'
			},
			memoryCost: {
				default: 0,
				isDisabled: ({ algorithm }: { algorithm: string }) =>
					!['ARGON2ID', 'SCRYPT'].includes(algorithm),
				label: `memoryCost`,
				type: 'number'
			},
			parallelism: {
				default: 1,
				isDisabled: ({ algorithm }: { algorithm: string }) =>
					!['ARGON2ID', 'SCRYPT'].includes(algorithm),
				label: `parallelism`,
				type: 'number'
			},
			counter: {
				default: 5_000,
				label: `counter`,
				type: 'number'
			},
			workerConcurrency: {
				default: workerConcurrency,
				label: `workerConcurrency`,
				type: 'number'
			}
		},
		fn: async (
			ctx: TestCtx,
			settings: { workerConcurrency: number },
			controller: AbortController
		) => {
			return {
				solution: await PoW.solveChallengeWorkers({
					challenge: ctx.challenge,
					concurrency: settings.workerConcurrency,
					controller,
					createWorker: () => new (getWorkerClass(ctx.challenge.parameters.algorithm))(),
					onOutOfMemory(c) {
						log('out of memory error received');
						if (c > 1) {
							const retryConcurrency = Math.floor(c / 2);
							log(`retrying with ${retryConcurrency} workers...`);
							return retryConcurrency;
						}
					}
				}),
				challenge: ctx.challenge
			};
		},
		setup: async (settings: {
			algorithm: string;
			counter: number;
			cost: number;
			keyLength?: number;
			memoryCost?: number;
			parallelism?: number;
		}) => {
			const { algorithm, counter, cost, memoryCost, keyLength, parallelism } = settings;
			const challenge = await PoW.createChallenge({
				algorithm,
				counter,
				cost,
				deriveKey: getDeriveKeyFunction(algorithm),
				hmacKeySignatureSecret: HMAC_KEY_SECRET,
				hmacSignatureSecret: HMAC_SIGNATURE_SECRET,
				memoryCost: ['ARGON2ID', 'SCRYPT'].includes(algorithm) ? memoryCost : undefined,
				parallelism: ['ARGON2ID', 'SCRYPT'].includes(algorithm) ? parallelism : undefined,
				keyLength
			});
			return {
				challenge
			};
		},
		teardown: async (ctx: TestCtx, result: TestResult) => {
			return {
				verification: result?.solution
					? await PoW.verifySolution({
							challenge: ctx.challenge,
							deriveKey: getDeriveKeyFunction(ctx.challenge.parameters.algorithm),
							hmacKeySignatureSecret: HMAC_KEY_SECRET,
							hmacSignatureSecret: HMAC_SIGNATURE_SECRET,
							solution: result.solution
						})
					: null
			};
		}
	}
];
