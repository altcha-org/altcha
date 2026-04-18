<script lang="ts">
	import type { Strings } from '../types/';
	import Logo from './Logo.svelte';

	interface Props {
		logo?: boolean;
		strings: Strings;
	}

	let { logo, strings }: Props = $props();
</script>

<div class="altcha-footer">
	<p>{@html strings.footer}</p>

	{#if logo}
		<Logo {strings} />
	{/if}
</div>
