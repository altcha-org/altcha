import './global';
import './i18n/en';
import Widget from './Widget.svelte';
import WorkerPbkdf2 from './workers/pbkdf2?worker&inline';
import WorkerSha from './workers/sha?worker&inline';
import { injectCss } from './helpers';
import css from './widget.scss?inline';

// Import to make sure vite builds all workers to separate files
import './workers/argon2id?worker';
import './workers/pbkdf2?worker';
import './workers/sha?worker';
import './workers/scrypt?worker';

injectCss(css);

$altcha.algorithms.set('SHA-256', () => new WorkerSha());
$altcha.algorithms.set('SHA-384', () => new WorkerSha());
$altcha.algorithms.set('SHA-512', () => new WorkerSha());
$altcha.algorithms.set('PBKDF2/SHA-256', () => new WorkerPbkdf2());
$altcha.algorithms.set('PBKDF2/SHA-384', () => new WorkerPbkdf2());
$altcha.algorithms.set('PBKDF2/SHA-512', () => new WorkerPbkdf2());

export { Widget };
