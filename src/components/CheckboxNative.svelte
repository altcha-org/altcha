<!-- svelte-ignore custom_element_props_identifier -->
<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends HTMLInputAttributes {
		loading?: boolean;
	}

	let { loading, ...rest }: Props = $props();
</script>

<div class="altcha-checkbox-native" data-loading={loading}>
	<input type="checkbox" {...rest} />
	<div class="altcha-spinner altcha-checkbox-native-spinner"></div>
</div>
