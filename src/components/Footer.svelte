<script lang="ts">
	import type { Strings } from '../types/';
	import Logo from './Logo.svelte';

	interface Props {
		logo?: boolean;
		strings: Strings;
	}

	let { logo, strings }: Props = $props();

	const website = 'https://altcha.org';
</script>

<div class="altcha-footer">
	<div>{@html strings.footer}</div>

	{#if logo}
		<Logo {strings} />
	{/if}
</div>
