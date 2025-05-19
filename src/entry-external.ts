import './altcha.css';
import './worker?worker';
import Altcha from './Altcha.svelte';

globalThis.altchaCreateWorker = (url?: string) => new Worker(new URL(url || './worker.js', import.meta.url));

export { Altcha };
