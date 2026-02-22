<script lang="ts">
	import TestCmp from '../components/Test.svelte';
	import Benchmark from '../components/Benchmark.svelte';
	import { tests } from '../tests';

	interface Props {}

	let {}: Props = $props();

	let elBenchmarksDialog = $state<HTMLDialogElement>();
</script>

<div class="flex flex-col gap-3 lg:gap-6">
	<div
		class="border-primary/20 bg-primary/5 flex flex-wrap items-center gap-y-2 rounded-lg border p-3"
	>
		<div class="grow">
			<button
				type="button"
				class="btn btn-sm btn-neutral"
				onclick={() => elBenchmarksDialog?.showModal()}>Benchmark</button
			>
		</div>

		<div class="text-xs">
			For accurate results, close the Developer Console, as it may negatively impact performance.
		</div>
	</div>

	<div class="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
		{#each tests as test}
			<TestCmp {test} />
		{/each}
	</div>
</div>

<dialog bind:this={elBenchmarksDialog} class="modal">
	<div class="modal-box flex h-dvh w-full max-w-3xl flex-col gap-3 p-3 lg:w-3xl">
		<div class="flex items-center">
			<div class="grow">Benchmark</div>
			<div>
				<form method="dialog">
					<button class="btn btn-sm btn-ghost btn-circle text-lg">&times;</button>
				</form>
			</div>
		</div>

		<Benchmark />

		<div class="modal-action">
			<form method="dialog" class="w-full">
				<button class="btn w-full">Close</button>
			</form>
		</div>
	</div>
</dialog>
