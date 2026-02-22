<script lang="ts">
	import { onMount } from 'svelte';
	import { html } from '../about.md';
	import { logsOpen } from '../stores';

	onMount(() => {
		$logsOpen = false;
	});
</script>

<article class="prose mx-auto my-6 max-w-4xl">
	{@html html}
</article>
