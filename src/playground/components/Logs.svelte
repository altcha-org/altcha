<script lang="ts">
	import { logs, logsOpen } from '../stores';

	interface Props {}

	let {}: Props = $props();

	let elScroll = $state<HTMLElement>();
	let fullscreen = $state(false);

	$effect(() => {
		if (!$logsOpen && fullscreen) {
			fullscreen = false;
		}
	});

	$effect(() => {
		if ($logs.length) {
			elScroll?.scrollTo({
				top: elScroll?.scrollHeight
			});
		}
	});

	function onFullscreenClick() {
		fullscreen = !fullscreen;
		if (!$logsOpen && fullscreen) {
			$logsOpen = true;
		}
	}
</script>

<div
	class="bg-base-300 border-base-content/15 right-0 bottom-0 left-0 z-50 flex flex-col border-t backdrop-blur-xs"
	class:fixed={fullscreen}
	class:inset-0={fullscreen}
	class:h-full={fullscreen}
>
	<div class="bg-base-content/5 flex items-center px-3 py-2">
		<div class="grow">
			<div class="text-xs font-medium">Logs</div>
		</div>

		<div class="flex items-center gap-3">
			<button type="button" class="link text-xs" onclick={() => ($logs = [])}> Clear </button>

			<button type="button" class="link text-xs" onclick={() => onFullscreenClick()}>
				Fullscreen
			</button>

			<button type="button" class="link text-xs" onclick={() => ($logsOpen = !$logsOpen)}>
				{#if $logsOpen}
					Close
				{:else}
					Open
				{/if}
			</button>
		</div>
	</div>

	{#if $logsOpen}
		<div
			bind:this={elScroll}
			class="grow overflow-auto px-3 py-3 font-mono text-xs"
			class:h-50={!fullscreen}
		>
			{#each $logs as [msg, data]}
				<div class="whitespace-pre-wrap">
					{msg}
					{#if data}
						<pre
							class="border-base-content/10 mt-1 mb-3 ml-6 max-h-32 overflow-auto rounded-md border p-2"><code
								>{typeof data === 'string' ? data : JSON.stringify(data, null, 2)}</code
							></pre>
					{/if}
				</div>
			{/each}
		</div>
	{/if}
</div>
