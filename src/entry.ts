import InlineWorker from './worker?worker&inline';
import Altcha from './Altcha.svelte';

declare global {
  var createAltchaWorker: (url?: string) => Worker;
}

globalThis.createAltchaWorker = (url?: string) => url ? new Worker(new URL(url)) : new InlineWorker();

export { Altcha };
