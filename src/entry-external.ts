import './altcha.css';
import './worker?worker';
import Altcha from './Altcha.svelte';

declare global {
  var createAltchaWorker: (url?: string) => Worker;
}

globalThis.createAltchaWorker = (url?: string) => new Worker(new URL(url || './worker.js', import.meta.url));

export { Altcha };
