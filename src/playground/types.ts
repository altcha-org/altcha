import type { createChallenge, verifySolution } from '../pow';
import type { Challenge, Configuration, CreateChallengeOptions, Solution } from '../types';

export type WidgetOptions = Omit<CreateChallengeOptions, 'deriveKey'> &
	Partial<Configuration> & {
		challenge: string;
		mockCodeChallenge: boolean;
		mockChallenge: boolean;
		mockError: boolean;
		theme: string;
		randomEffort: boolean;
		hmacKeySignatureSecret: string;
		hmacSignatureSecret: string;
	};

export interface Option {
	default?: any;
	isDisabled?: (settings: any) => boolean;
	label: string;
	options?: string[];
	type: string;
	onChange?: (settings: any) => void;
}

export interface Test {
	id: string;
	name: string;
	description?: string;
	options: Record<string, Option>;
	fn: (ctx: TestCtx, settings: any, controller: AbortController) => Promise<TestResult>;
	setup?: (settings: any) => Promise<any>;
	teardown?: (ctx: TestCtx, result: TestResult, settings: any) => Promise<TestTeardownResult>;
}

export interface TestCtx {
	challenge: Awaited<ReturnType<typeof createChallenge>>;
}

export interface TestResult {
	solution: Solution | null;
	challenge: Challenge;
}

export interface TestTeardownResult {
	verification: Awaited<ReturnType<typeof verifySolution>> | null;
}

export interface Benchmark {
	benchmarkId: string;
	name: string;
	settings: any;
}
