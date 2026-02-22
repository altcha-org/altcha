<!-- svelte-ignore custom_element_props_identifier -->
<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends HTMLInputAttributes {
		loading?: boolean;
	}

	let { loading, ...rest }: Props = $props();
</script>

<label class="altcha-checkbox" data-loading={loading}>
	<input type="checkbox" {...rest} />
	<svg width="12" height="9" viewBox="0 0 12 9">
		<polyline points="1 5 4 8 11 1"></polyline>
	</svg>
	<div class="altcha-spinner altcha-checkbox-spinner" aria-hidden="true"></div>
</label>
