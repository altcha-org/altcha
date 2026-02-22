# Migration from v2

## Summary

Version 3 is a complete rewrite of the widget, featuring a redesigned proof-of-work mechanism and an updated architecture.

## Breaking Changes

- `challengeurl` and `challengejson` have been replaced by `challenge`, which accepts either a URL or a JSON-encoded challenge.
- `floating` and `overlay` have been removed in favor of a unified `display` attribute.
- Only a limited set of configuration options can be provided via HTML attributes. Use the programmatic API for advanced configuration.
- CSS structure and custom properties have been refactored. If you applied custom styles or variables, update them accordingly.

## Client

Basic usage remains unchanged. Importing the `altcha` npm package registers the Web Component.

```html
<script>
	import 'altcha';
</script>

<altcha-widget challenge="https://api.example.com/challenge"></altcha-widget>
```

### Algorithms

ALTCHA supports multiple algorithms. `PBKDF2/*` and `SHA-*` are bundled with the main widget (unless using `altcha/external`). `Argon2` and `Scrypt` workers must be imported separately.

Supported algorithms:

- `PBKDF2/SHA-256`
- `PBKDF2/SHA-384`
- `PBKDF2/SHA-512`
- `SHA-256`
- `SHA-384`
- `SHA-512`
- `ARGON2ID`
- `SCRYPT`

Example (Vite with `altcha/external`):

```ts
import 'altcha/external';
import Argon2idWorker from 'altcha/workers/argon2id?worker';
import Pbkdf2Worker from 'altcha/workers/pbkdf2?worker';
import ScryptWorker from 'altcha/workers/scrypt?worker';
import ShaWorker from 'altcha/workers/sha?worker';

$altcha.algorithms.set('PBKDF2/SHA-256', () => new Pbkdf2Worker());
$altcha.algorithms.set('PBKDF2/SHA-384', () => new Pbkdf2Worker());
$altcha.algorithms.set('PBKDF2/SHA-512', () => new Pbkdf2Worker());
$altcha.algorithms.set('SHA-256', () => new ShaWorker());
$altcha.algorithms.set('SHA-384', () => new ShaWorker());
$altcha.algorithms.set('SHA-512', () => new ShaWorker());
$altcha.algorithms.set('ARGON2ID', () => new Argon2idWorker());
$altcha.algorithms.set('SCRYPT', () => new ScryptWorker());
```

If you are not using `Argon2` or `Scrypt`, and you are not importing `altcha/external`, no additional setup is required—`PBKDF2/*` and `SHA-*` are included by default.

The widget provides a global `$altcha` object to register algorithms, or to manage default configurations.

## Server-Side Rendering (SSR)

SSR support has been improved. The widget no longer throws errors in environments without `customElements`.

### SvelteKit

```html
<script lang="ts">
	import 'altcha';
	import type {} from 'altcha/types/svelte';
</script>

<altcha-widget></altcha-widget>
```

### Next.js

```jsx
'use client'

import { useSyncExternalStore } from 'react';
import 'altcha';
import type {} from 'altcha/types/react';

export default function Altcha() {
	const isClient = useSyncExternalStore(
		() => () => {},
		() => true,
		() => false
	);

	return isClient
		? <altcha-widget></altcha-widget>
		: <span>Loading...</span>;
}
```

### Nuxt

```html
<script setup lang="ts">
	import 'altcha';
	import type { WidgetAttributes } from 'altcha/types';
	import type { DefineComponent } from 'vue';

	declare module 'vue' {
		interface GlobalComponents {
			'altcha-widget': DefineComponent<WidgetAttributes>;
		}
	}
</script>

<template>
	<div>
		<altcha-widget></altcha-widget>
	</div>
</template>
```

## TypeScript

Framework-specific type definitions are no longer included automatically. Import them explicitly as needed:

- `altcha/types/jsx`
- `altcha/types/react`
- `altcha/types/svelte`

Example:

```ts
import type {} from 'altcha/types/react'; // or /svelte, /jsx
import type { WidgetAttributes, Challenge } from 'altcha/types';
```

## Server

### Challenge & Verification

The main `altcha` package can now be used in JavaScript and TypeScript server environments. It includes utilities for creating and verifying challenges.

```ts
import { createChallenge, solveChallenge, verifySolution, pbkdf2 } from 'altcha/lib';

const HMAC_SIGNATURE_SECRET = 'secret.key';
const HMAC_KEY_SIGNATURE_SECRET = 'second.secret.key';

const challenge = await createChallenge({
	algorithm: 'PBKDF2/SHA-256',
	cost: 5_000,
	deriveKey: pbkdf2.deriveKey,
	hmacKeySignatureSecret: HMAC_KEY_SIGNATURE_SECRET,
	hmacSignatureSecret: HMAC_SIGNATURE_SECRET
});

const solution = await solveChallenge({
	challenge,
	deriveKey: pbkdf2.deriveKey
});

const result = await verifySolution({
	challenge,
	deriveKey: pbkdf2.deriveKey,
	hmacKeySignatureSecret: HMAC_KEY_SIGNATURE_SECRET,
	hmacSignatureSecret: HMAC_SIGNATURE_SECRET,
	solution
});
```

Key server-side changes:

- **Probabilistic and deterministic modes:** When creating a challenge, you can pass a `counter` parameter to generate a **deterministic** challenge. If `counter` is omitted, a **probabilistic** challenge is created. See the [PoW documentation](https://playground.altcha.org/#/about) for details.
- **Two HMAC secrets:** In **deterministic** mode, you may provide a second HMAC secret (`hmacKeySignatureSecret`) to sign the derived key during challenge creation. This enables fast HMAC-only verification in the `verifySolution` function.
