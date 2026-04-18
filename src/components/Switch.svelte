<!-- svelte-ignore custom_element_props_identifier -->
<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends HTMLInputAttributes {
		loading?: boolean;
	}

	let { loading, ...rest }: Props = $props();

	let inputEl: HTMLInputElement;

	function onClick() {
		inputEl?.click();
	}
</script>

<div class="altcha-switch" data-loading={loading}>
	<input bind:this={inputEl} type="checkbox" {...rest} />
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="altcha-switch-toggle" onclick={onClick}>
		<div class="altcha-spinner altcha-switch-spinner"></div>
	</div>
</div>
