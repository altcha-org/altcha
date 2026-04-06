<script lang="ts">
	import { ObfuscationPlugin } from '../../plugins/obfuscation.plugin';
	import Options from '../components/Options.svelte';
	import { log } from '../helpers';

	let obfuscationOptions = $state({
		data: 'mailto:hello@example.com'
	});
	let obfuscated = $state('');

	$effect(() => {
		ObfuscationPlugin.obfuscate(obfuscationOptions.data).then((result) => {
			obfuscated = result;
			log('obfuscated data', result);
		});
	});
</script>

<div class="flex flex-col gap-3">
	<div class="bg-base-200 flex flex-col gap-2 rounded-xl p-3 lg:p-12">
		<div class="font-medium">Obfuscation</div>

		<div class="grid grid-cols-1 gap-3 lg:grid-cols-2">
			<div class="bg-base-100 border-base-content/20 rounded-lg border p-3 lg:p-12">
				<div class="flex flex-col gap-3 [&_a]:underline">
					<altcha-widget data-obfuscated={obfuscated}>
						<button type="button" class="cursor-pointer underline">Click to reveal</button>
					</altcha-widget>
				</div>
			</div>

			<div class="bg-base-100 border-base-content/20 flex flex-col gap-3 rounded-lg border p-3">
				<Options
					options={{
						data: {
							label: 'Obfuscated Data',
							type: 'string'
						}
					}}
					bind:value={obfuscationOptions}
				/>

				<div class="text-xs opacity-70">
					The options available in the Widget tab also apply to this section. Set the "display"
					option to make the widget invisible.
				</div>
			</div>
		</div>
	</div>
</div>
