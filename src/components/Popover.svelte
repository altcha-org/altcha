<!-- svelte-ignore custom_element_props_identifier -->
<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { onMount, tick, type Snippet } from 'svelte';

	interface Props extends HTMLAttributes<any> {
		anchor: HTMLElement;
		backdrop?: boolean;
		children?: Snippet;
		display?: 'overlay' | 'bottomsheet' | 'standard';
		onClickOutside?: () => void;
		onClickOutsideDelay?: number;
		onClose?: () => void;
		variant?: 'error' | 'neutral';
	}

	let {
		anchor,
		children,
		display = 'standard',
		backdrop = false,
		onClickOutside,
		onClickOutsideDelay = 600,
		onClose,
		variant = 'neutral',
		...rest
	}: Props = $props();
	let el = $state<HTMLElement>();
	let elBackdrop = $state<HTMLElement>();
	let top = $state(false);
	let mountedAt = $state(0);

	onMount(() => {
		const moveToBody = display === 'bottomsheet' || display === 'overlay';
		if (moveToBody) {
			elBackdrop && document.body.append(elBackdrop);
			el && document.body.append(el);
		}
		reposition();
		tick().then(() => {
			mountedAt = Date.now();
		});
		return () => {
			if (moveToBody) {
				elBackdrop && document.body.removeChild(elBackdrop);
				el && document.body.removeChild(el);
			}
		};
	});

	function onCloseClick() {
		onClose?.();
	}

	function onWindowClick(ev: MouseEvent) {
		const target = ev.target as HTMLElement;
		if (!el?.contains(target) && mountedAt && mountedAt + onClickOutsideDelay < Date.now()) {
			onClickOutside?.();
		}
	}

	function onWindowResize() {
		reposition();
	}

	function onWindowScroll() {
		reposition();
	}

	function reposition() {
		if (anchor && el) {
			const boundary = anchor.getBoundingClientRect();
			const bottomGap = document.documentElement.clientHeight - (boundary.top + boundary.height);
			const newTop = bottomGap < el.clientHeight;
			if (top !== newTop) {
				top = newTop;
			}
		}
	}
</script>

<svelte:window onclick={onWindowClick} onresize={onWindowResize} onscroll={onWindowScroll} />

{#if backdrop}
	<div bind:this={elBackdrop} class="altcha-popover-backdrop" data-backdrop></div>
{/if}

<div
	bind:this={el}
	{...rest}
	class="altcha-popover {rest.class || ''}"
	data-popover
	data-variant={variant}
	data-top={top}
	data-display={display}
>
	{#if display === 'standard'}
		<div class="altcha-popover-arrow"></div>
	{/if}

	{#if display !== 'standard'}
		<!-- svelte-ignore a11y_interactive_supports_focus -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<div role="button" class="altcha-popover-close" onclick={onCloseClick}>&times;</div>
	{/if}

	<div class="altcha-popover-content">
		{@render children?.()}
	</div>
</div>
