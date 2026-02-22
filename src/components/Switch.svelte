<!-- svelte-ignore custom_element_props_identifier -->
<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends HTMLInputAttributes {
		loading?: boolean;
	}

	let { loading, ...rest }: Props = $props();
</script>

<label class="altcha-switch" data-loading={loading}>
	<input type="checkbox" {...rest} />
	<div class="altcha-switch-toggle">
		<div class="altcha-spinner altcha-switch-spinner"></div>
	</div>
</label>
