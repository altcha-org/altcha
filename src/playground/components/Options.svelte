<script lang="ts">
	import type { Option } from '../types';

	interface Props {
		disabled?: boolean;
		onChange?: (value: Record<string, any>) => void;
		options: Record<string, Option>;
		readonly?: boolean;
		title?: string;
		value: Record<string, any>;
	}

	let {
		disabled,
		onChange,
		options,
		readonly = false,
		title,
		value = $bindable()
	}: Props = $props();

	const optionsEntries = $derived(Object.entries(options));

	function onOptionChange(option: Option) {
		option.onChange?.(value);
		onChange?.(value);
	}
</script>

<div class="bg-base-200 flex flex-col gap-3 rounded-md p-3">
	{#if title}
		<div class="border-base-300 border-b pb-1 font-medium">
			{title}
		</div>
	{/if}

	<div class="grid grid-cols-1 gap-3 text-sm lg:grid-cols-2">
		{#each optionsEntries as [key, option]}
			{@const optionDisabled = !!disabled || option.isDisabled?.(value)}
			<div class="flex flex-col gap-1">
				<div>{option.label || key}:</div>
				<div class="flex grow items-center">
					{#if option.type === 'number'}
						<input
							type="number"
							class="input input-sm"
							bind:value={value[key]}
							disabled={optionDisabled}
							{readonly}
							onchange={() => onOptionChange(option)}
						/>
					{:else if option.type === 'string' && option.options}
						<select
							class="select select-sm"
							bind:value={value[key]}
							disabled={optionDisabled}
							onchange={() => onOptionChange(option)}
						>
							{#each option.options as opt}
								<option value={opt} selected={opt === option.default}>{opt}</option>
							{/each}
						</select>
					{:else if option.type === 'string'}
						<input
							type="text"
							class="input input-sm"
							bind:value={value[key]}
							disabled={optionDisabled}
							{readonly}
							onchange={() => onOptionChange(option)}
						/>
					{:else if option.type === 'boolean'}
						<input
							type="checkbox"
							class="toggle toggle-sm bg-base-100"
							bind:checked={value[key]}
							disabled={optionDisabled}
							{readonly}
							onchange={() => onOptionChange(option)}
						/>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
