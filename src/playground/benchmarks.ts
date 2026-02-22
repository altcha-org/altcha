import type { Benchmark } from './types';

const workerConcurrency = Math.min(8, navigator.hardwareConcurrency || 6);

export const benchmarks: Benchmark[] = [
	{
		benchmarkId: 'fixed',
		name: 'Fixed: PBKDF2/SHA-256, cost=1000, counter=5000',
		settings: {
			algorithm: 'PBKDF2/SHA-256',
			cost: 1_000,
			counter: 5_000,
			workers: true,
			workerConcurrency
		}
	},
	{
		benchmarkId: 'fixed',
		name: 'Fixed: PBKDF2/SHA-256, cost=1000, counter=10000',
		settings: {
			algorithm: 'PBKDF2/SHA-256',
			cost: 1_000,
			counter: 10_000,
			workers: true,
			workerConcurrency
		}
	},
	{
		benchmarkId: 'fixed',
		name: 'Fixed: PBKDF2/SHA-256, cost=5000, counter=10000',
		settings: {
			algorithm: 'PBKDF2/SHA-256',
			cost: 5_000,
			counter: 10_000,
			workers: true,
			workerConcurrency
		}
	},
	{
		benchmarkId: 'fixed',
		name: 'Fixed: PBKDF2/SHA-384, cost=1000, counter=5000',
		settings: {
			algorithm: 'PBKDF2/SHA-384',
			cost: 1_000,
			counter: 5_000,
			workers: true,
			workerConcurrency
		}
	},
	{
		benchmarkId: 'fixed',
		name: 'Fixed: PBKDF2/SHA-512, cost=1000, counter=5000',
		settings: {
			algorithm: 'PBKDF2/SHA-512',
			cost: 1_000,
			counter: 5_000,
			workers: true,
			workerConcurrency
		}
	},
	{
		benchmarkId: 'random',
		name: 'Random: PBKDF2/SHA-256, cost=1000, keyPrefix=00',
		settings: {
			algorithm: 'PBKDF2/SHA-256',
			cost: 1_000,
			keyPrefix: '00',
			workers: true,
			workerConcurrency
		}
	},
	{
		benchmarkId: 'random',
		name: 'Random: PBKDF2/SHA-256, cost=5000, keyPrefix=00',
		settings: {
			algorithm: 'PBKDF2/SHA-256',
			cost: 5_000,
			keyPrefix: '00',
			workers: true,
			workerConcurrency
		}
	},
	{
		benchmarkId: 'random',
		name: 'Random: PBKDF2/SHA-256, cost=5000, keyPrefix=000',
		settings: {
			algorithm: 'PBKDF2/SHA-256',
			cost: 5_000,
			keyPrefix: '000',
			workers: true,
			workerConcurrency
		}
	},
	{
		benchmarkId: 'random',
		name: 'Random: PBKDF2/SHA-384, cost=5000, keyPrefix=00',
		settings: {
			algorithm: 'PBKDF2/SHA-384',
			cost: 5_000,
			keyPrefix: '00',
			workers: true,
			workerConcurrency
		}
	},
	{
		benchmarkId: 'random',
		name: 'Random: PBKDF2/SHA-512, cost=5000, keyPrefix=00',
		settings: {
			algorithm: 'PBKDF2/SHA-512',
			cost: 5_000,
			keyPrefix: '00',
			workers: true,
			workerConcurrency
		}
	},
	{
		benchmarkId: 'fixed',
		name: 'Fixed: SHA-256, cost=1000, counter=1000',
		settings: {
			algorithm: 'SHA-256',
			cost: 1_000,
			counter: 1_000,
			workers: true,
			workerConcurrency
		}
	},
	{
		benchmarkId: 'fixed',
		name: 'Fixed: SHA-384, cost=1000, counter=1000',
		settings: {
			algorithm: 'SHA-384',
			cost: 1_000,
			counter: 1_000,
			workers: true,
			workerConcurrency
		}
	},
	{
		benchmarkId: 'fixed',
		name: 'Fixed: SHA-512, cost=1000, counter=1000',
		settings: {
			algorithm: 'SHA-512',
			cost: 1_000,
			counter: 1_000,
			workers: true,
			workerConcurrency
		}
	},
	{
		benchmarkId: 'fixed',
		name: 'Fixed: ARGON2ID, cost=2, counter=100, memoryCost=65536',
		settings: {
			algorithm: 'ARGON2ID',
			cost: 2,
			counter: 100,
			memoryCost: 65536,
			workers: true,
			workerConcurrency
		}
	},
	{
		benchmarkId: 'fixed',
		name: 'Fixed: SCRYPT, cost=65536, counter=100, memoryCost=8',
		settings: {
			algorithm: 'SCRYPT',
			cost: 65536,
			counter: 100,
			memoryCost: 8,
			workers: true,
			workerConcurrency
		}
	}
];
