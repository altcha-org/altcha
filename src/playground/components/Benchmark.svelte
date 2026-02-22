<script lang="ts">
	import { tick } from 'svelte';
	import TestCmp from './Test.svelte';
	import { benchmarks } from '../benchmarks';
	import { tests } from '../tests';
	import type { Test } from '../types';

	const workerConcurrency = Math.min(8, navigator.hardwareConcurrency);

	interface Props {}

	let {}: Props = $props();

	let controller = $state<AbortController>();
	let el = $state<HTMLElement>();
	let elBench = $state<TestCmp[]>([]);
	let elResults = $state<HTMLElement>();
	let suiteBenchmarks = $state<
		{
			test: Test;
			name: string;
			settings: any;
		}[]
	>([]);
	let running = $state(false);
	let percent = $state(0);
	let output = $state('');

	async function run() {
		controller = new AbortController();
		running = true;
		suiteBenchmarks = [];
		output = `User Agent: ${navigator.userAgent}\r\nHardware Concurrency: ${navigator.hardwareConcurrency}\r\nWorkers: ${workerConcurrency}\r\n\r\n`;
		percent = 0;
		const start = performance.now();
		try {
			for (let i = 0; i < benchmarks.length; i++) {
				if (controller?.signal.aborted) {
					output = output + `[Aborted]\r\n`;
					break;
				}
				const { benchmarkId, name, settings } = benchmarks[i];
				const test = tests.find(({ id }) => id === benchmarkId);
				if (test) {
					suiteBenchmarks = [
						...suiteBenchmarks,
						{
							test,
							name,
							settings
						}
					];
					await tick();
					elBench[i]?.scrollIntoView();
					await new Promise((resolve) => setTimeout(resolve, 3_000));
					const result = await elBench[i]?.run(controller);
					percent = (suiteBenchmarks.length / benchmarks.length) * 100;
					output = output + `${i + 1}. ${name} ` + `[${result?.solution?.time || '-'} ms]\r\n`;
				}
			}
		} finally {
			running = false;
			output = output + `\r\nBenchmark Time: ${Math.floor(performance.now() - start)} ms`;
			elResults?.scrollIntoView();
		}
	}
</script>

<div bind:this={el} class="flex flex-col gap-3">
	<div
		class="bg-base-300 border-base-content/10 sticky top-0 z-50 flex flex-col gap-3 rounded-lg border p-3 shadow-md"
	>
		<div class="flex items-center gap-3">
			<div class="grow">
				<button
					type="button"
					class="btn btn-primary btn-sm"
					disabled={running}
					onclick={() => run()}
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
					<button type="button" class="btn btn-sm btn-ghost" onclick={() => controller?.abort()}
						>Abort</button
					>
				{/if}
			</div>

			<div class="text-xs">
				<span>{suiteBenchmarks.length} / {benchmarks.length}</span>
			</div>
		</div>

		<div>
			<progress
				class="progress w-full"
				class:progress-success={percent === 100}
				value={percent}
				max="100"
			></progress>
		</div>
	</div>

	{#each suiteBenchmarks as { test, name, settings }, i}
		<TestCmp bind:this={elBench[i]} {test} {settings} {name} editable={false} runnable={false} />
	{/each}

	{#if output.length}
		<div bind:this={elResults} class="bg-base-300 flex flex-col gap-3 rounded-lg p-3 text-xs">
			<div class="font-medium">Bechmark Results</div>

			<div class="overflow-auto whitespace-pre-line">{output}</div>

			<div class="border-base-300 border-t">
				<button
					type="button"
					class="btn btn-xs btn-outline"
					disabled={running}
					onclick={() => {
						navigator.clipboard.writeText(elResults?.textContent || '');
					}}>Copy</button
				>
			</div>
		</div>
	{:else}
		<div class="text-center text-xs italic opacity-70">
			<p>The benchmark runs several pre-configured tests. Press Run to start.</p>
		</div>
	{/if}
</div>
