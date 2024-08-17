import InlineWorker from './worker?worker&inline';
import Altcha from './Altcha.svelte';

globalThis.altchaCreateWorker = (url?: string) => url ? new Worker(new URL(url)) : new InlineWorker();
globalThis.altchaPlugins = globalThis.altchaPlugins || [];

export { Altcha };
