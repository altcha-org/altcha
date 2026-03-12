<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { AudioState, type CodeChallenge, type Configuration } from '../types/';

	interface Props {
		audioUrl?: string;
		codeChallenge: CodeChallenge;
		config: Configuration;
		imageUrl?: string;
		onCancel?: () => void;
		onReload?: () => void;
		onSubmit?: (code: string) => void;
		strings: Record<string, string>;
	}

	let { audioUrl, codeChallenge, config, imageUrl, onCancel, onReload, onSubmit, strings }: Props =
		$props();

	let audioState = $state<AudioState>();
	let elAudio = $state<HTMLAudioElement>();
	let elInput = $state<HTMLInputElement>();
	let loading = $state(false);
	let code = $state('');
	let playAudio = $state(false);

	onMount(() => {
		if (!config.disableAutoFocus) {
			tick().then(() => {
				elInput?.focus();
			});
		}
		return () => {
			if (elAudio) {
				elAudio.pause();
				elAudio = undefined;
			}
		};
	});

	/**
	 * Handles the `ended` event on the audio element
	 */
	function onAudioEnded() {
		audioState = AudioState.PAUSED;
	}

	/**
	 * Handles the `error` event on the audio element
	 */
	function onAudioError(ev: Event) {
		audioState = AudioState.ERROR;
	}

	/**
	 * Handles the `canplay` event on the audio element
	 */
	function onAudioCanPlay() {
		audioState = AudioState.READY;
	}

	/**
	 * Handles the `loadstart` event on the audio element
	 */
	function onAudioLoadStart() {
		audioState = AudioState.LOADING;
	}

	/**
	 * Handles the `playing` event on the audio element
	 */
	function onAudioPlaying() {
		audioState = AudioState.PLAYING;
	}

	/**
	 * Handles the `pause` event on the audio element
	 */
	function onAudioPause() {
		audioState = AudioState.PAUSED;
	}

	function onInputKeyDown(ev: KeyboardEvent) {
		if (ev.code === 'Space') {
			ev.preventDefault();
			ev.stopPropagation();
			onPlayAudio();
		} else if (ev.code === 'Escape') {
			ev.preventDefault();
			ev.stopPropagation();
			onCancel?.();
		}
	}

	function onSubmitCapture(ev: SubmitEvent) {
		ev.preventDefault();
		ev.stopPropagation();
		onSubmit?.(code);
	}

	function onPlayAudio() {
		if (elAudio) {
			if (audioState === AudioState.LOADING) {
				// noop
			} else if (!elAudio.paused) {
				elAudio.pause();
			} else {
				if (audioUrl && elAudio.src !== audioUrl) {
					elAudio.src = audioUrl;
				}
				elAudio.currentTime = 0;
				elAudio.play();
			}
		} else {
			playAudio = true;
			// required for safari
			requestAnimationFrame(() => {
				if (elAudio && audioUrl) {
					elAudio.src = audioUrl;
					elAudio.play();
				}
			});
		}
	}
</script>

<div class="altcha-code-challenge">
	<form data-code-challenge="true" onsubmitcapture={onSubmitCapture}>
		{#if config.codeChallengeDisplay !== 'standard'}
			<div class="altcha-code-challenge-title">
				{strings.verificationRequired}
			</div>
		{/if}

		<div class="altcha-code-challenge-text">
			{strings.enterCodeFromImage}
		</div>

		<img class="altcha-code-challenge-image" src={imageUrl} alt="" />

		<div class="altcha-code-challenge-row">
			<input
				bind:this={elInput}
				bind:value={code}
				type="text"
				class="altcha-input"
				autocomplete="off"
				disabled={loading}
				name=""
				minlength={codeChallenge.length || 1}
				maxlength={codeChallenge.length}
				onkeydown={onInputKeyDown}
				placeholder={strings.enterCode}
				required
				aria-label={audioState === AudioState.LOADING
					? strings.loading
					: audioState === AudioState.PLAYING
						? ''
						: strings.enterCodeAria}
				aria-live={audioState ? 'assertive' : 'polite'}
				aria-busy={audioState === AudioState.LOADING}
			/>

			{#if codeChallenge.audio}
				<button
					type="button"
					class="altcha-button altcha-button-secondary"
					title={strings.getAudioChallenge}
					disabled={audioState === AudioState.LOADING || audioState === AudioState.ERROR}
					aria-label={audioState === AudioState.LOADING
						? strings.loading
						: strings.getAudioChallenge}
					onclick={() => onPlayAudio()}
				>
					{#if audioState === AudioState.LOADING}
						<div class="altcha-spinner"></div>
					{:else if audioState === AudioState.ERROR}
						<svg
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							><path
								d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"
							></path></svg
						>
					{:else if audioState === AudioState.PLAYING}
						<svg
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							><path
								d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"
							></path></svg
						>
					{:else}
						<svg
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							><path
								d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
							></path></svg
						>
					{/if}
				</button>
			{/if}

			<button
				type="button"
				class="altcha-button altcha-button-secondary"
				title={strings.reload}
				aria-label={strings.reload}
				onclick={() => onReload?.()}
			>
				<svg
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					><path
						d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"
					></path></svg
				>
			</button>
		</div>

		<div class="altcha-code-challenge-buttons">
			<button type="submit" class="altcha-button" aria-label={strings.verify}
				>{strings.verify}</button
			>

			<button
				type="button"
				class="altcha-button altcha-button-secondary"
				aria-label={strings.cancel}
				onclick={() => onCancel?.()}>{strings.cancel}</button
			>
		</div>
	</form>

	{#if playAudio}
		<audio
			bind:this={elAudio}
			hidden
			autoplay
			onerror={onAudioError}
			onloadstart={onAudioLoadStart}
			oncanplay={onAudioCanPlay}
			onpause={onAudioPause}
			onplaying={onAudioPlaying}
			onended={onAudioEnded}
		></audio>
	{/if}
</div>
