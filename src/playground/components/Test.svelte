<script lang="ts">
	import { log } from '../helpers';
	import type { Test, TestResult, TestTeardownResult } from '../types';
	import Options from './Options.svelte';

	interface Props {
		test: Test;
		editable?: boolean;
		name?: string;
		runnable?: boolean;
		settings?: Record<string, any>;
	}

	let {
		test,
		editable = true,
		name,
		runnable = true,
		settings = $bindable(getDefaultSettings(test.options))
	}: Props = $props();

	let controller = $state<AbortController>();
	let el = $state<HTMLElement>();
	let error = $state('');
	let timeElapsed = $state(0);
	let running = $state(false);
	let result = $state<TestResult | null>(null);
	let elapsedInterval = $state<ReturnType<typeof setInterval>>();
	let teardownResult = $state<TestTeardownResult | null | undefined>(null);

	function getDefaultSettings(options: Test['options']) {
		return Object.entries(options).reduce(
			(acc, [key, option]) => {
				acc[key] = option!.default || '';
				return acc;
			},
			{} as Record<string, any>
		);
	}

	function reset() {
		error = '';
		timeElapsed = 0;
		running = false;
		result = null;
		teardownResult = null;
	}

	export function scrollIntoView() {
		return el?.scrollIntoView({
			behavior: 'smooth'
		});
	}

	export async function run(ctrl?: AbortController) {
		reset();
		controller = ctrl || new AbortController();
		running = true;
		log(
			`Running "${test.name}" (${Object.entries(settings)
				.map(([k, v]) => `${k}: ${v}`)
				.join(', ')})...`
		);
		try {
			const ctx = (await test.setup?.(settings)) || {};
			const start = performance.now();
			elapsedInterval = setInterval(() => {
				timeElapsed = performance.now() - start;
			}, 50);
			result = await test.fn(ctx, settings, controller);
			timeElapsed = performance.now() - start;
			clearInterval(elapsedInterval);
			elapsedInterval = undefined;
			teardownResult = await test.teardown?.(ctx, result, settings);
		} catch (err: any) {
			error = String(err);
			console.error(err);
			log(`[ERROR] ${err}`);
		} finally {
			running = false;
			if (settings.workers && result?.solution?.time) {
				log(
					`Executed in ${Math.floor(timeElapsed)} ms; worker start overhead ${Math.floor(timeElapsed - result.solution.time)} ms`
				);
			} else {
				log(`Executed in ${Math.floor(timeElapsed)} ms`);
			}
			if (elapsedInterval) {
				clearInterval(elapsedInterval);
				elapsedInterval = undefined;
			}
		}
		return result;
	}
</script>

<div bind:this={el} class="border-base-content/15 flex grow flex-col gap-3 rounded-2xl border p-3">
	<Options
		options={test.options}
		readonly={!editable}
		title={name || test.name}
		bind:value={settings}
	/>

	<div class="bg-base-200 flex flex-col gap-3 rounded-lg p-3">
		<div class="flex items-center">
			<div class="grow">
				<button
					type="button"
					class="btn btn-primary btn-sm gap-3"
					onclick={() => run()}
					disabled={running || !runnable}
				>
					{#if running}
						<span class="loading loading-spinner loading-xs"></span>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="size-4"
							><path
								d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"
							></path></svg
						>
					{/if}
					<span>Run</span>
				</button>

				{#if running}
					<button type="button" class="btn btn-ghost btn-sm" onclick={() => controller?.abort()}>
						Abort
					</button>
				{/if}
			</div>

			<div class="font-mono text-xs">
				{Math.floor(timeElapsed)} ms
			</div>
		</div>
	</div>

	{#if error}
		<div class="bg-error/20 relative flex flex-col gap-3 rounded-lg p-3">
			<div class="text-xs">{error}</div>
		</div>
	{/if}

	<div class="bg-base-200 relative flex flex-col gap-3 rounded-lg p-3">
		<div class="overflow-auto text-xs">
			{#if result === null}
				<div class="italic opacity-60">
					{#if running}
						Running...
					{:else}
						Press Run...
					{/if}
				</div>
			{:else}
				<pre>{JSON.stringify(result, null, 2)}</pre>
			{/if}
		</div>

		{#if result && result.solution === null}
			<div class="absolute top-2 right-2 text-xs">❌ Unable to find solution</div>
		{:else if result?.solution?.counter !== undefined}
			<div class="absolute top-2 right-2 text-xs">✅ Solution found</div>
		{/if}
	</div>

	{#if teardownResult}
		<div class="bg-base-200 relative flex flex-col gap-3 rounded-lg p-3">
			<div class="overflow-auto text-xs">
				{#if teardownResult}
					<pre>{JSON.stringify(teardownResult, null, 2)}</pre>
				{/if}
			</div>

			{#if !teardownResult?.verification?.verified}
				<div class="absolute top-2 right-2 text-xs">❌ Unable to verify</div>
			{:else}
				<div class="absolute top-2 right-2 text-xs">✅ Verified</div>
			{/if}
		</div>
	{/if}
</div>
