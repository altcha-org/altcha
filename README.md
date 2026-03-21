# ALTCHA

ALTCHA is a self-hosted, privacy-first security solution that protects your websites, APIs, and online services from spam and abuse through an innovative proof-of-work mechanism. Unlike traditional CAPTCHAs that depend on intrusive methods like cookies or fingerprinting, ALTCHA delivers robust protection while respecting user privacy.

ALTCHA is fully compliant with:

- **Global privacy regulations**: GDPR, HIPAA, CCPA, PIPEDA/CPPA, LGPD, DPDPA, and PIPL
- **Accessibility standards**: [WCAG 2.2 AA-level](https://altcha.org/docs/v2/compliance/wcag/) and the [European Accessibility Act](https://altcha.org/docs/v2/compliance/european-accessibility-act-2025/)

For more details, visit [altcha.org](https://altcha.org).

## Playground

Want to see it in action? Visit the official ALTCHA Playground to experiment with widget configurations, fine-tune the Proof-of-Work (PoW) settings, and see how the security mechanisms hold up in real-time.

[Open ALTCHA Playground](https://playground.altcha.org)

## Features

- **Frictionless Experience**: Eliminates frustrating visual puzzles by using background **Proof-of-Work (PoW)** for a seamless user journey.
- **Hardware-Resistant Security**: Leverages **Argon2 and Scrypt** memory-bound algorithms to neutralize hardware acceleration (ASICs/GPUs) and sophisticated bot farms.
- **Accessible Code Challenges**: Provides "Enter code from image" fallbacks with built-in **audio support** for visually impaired users.
- **Privacy by Design**: Fully **GDPR compliant** and cookie-free—no tracking, no fingerprinting, and no data collection.
- **Universal Accessibility**: Engineered to exceed **WCAG 2.2 AA** standards, ensuring compliance with the **European Accessibility Act (EAA)**.
- **Lightweight**: Minimal footprint, optimized for rapid page loads and high-performance environments.
- **100% Self-Hosted**: Maintain full sovereignty over your infrastructure with no reliance on third-party API availability.

## What’s New in v3

- **Next-Gen PoW**: Significant performance gains and reduced CPU overhead through an optimized verification mechanism.
- **Advanced Bot Defense**: Native support for **Argon2 and Scrypt**, raising the cost of attack for automated scripts and specialized hardware.
- **Modern UI**: Refined styling options, including a suite of new built-in themes and improved CSS custom property support.
- **Developer Experience**: Improved TypeScript support and streamlined integration.

### Migrating from v2

See [MIGRATION-v2.md](https://github.com/altcha-org/altcha/blob/v3/MIGRATION-v2.md).

## Examples

Explore starter templates for popular frameworks:

- [React](https://github.com/altcha-org/altcha-starter-react-ts)
- [Vue](https://github.com/altcha-org/altcha-starter-vue-ts)
- [Svelte](https://github.com/altcha-org/altcha-starter-svelte-ts)
- [Solid](https://github.com/altcha-org/altcha-starter-solid-ts)
- [Lit](https://github.com/altcha-org/altcha-starter-lit-ts)
- [Angular](https://github.com/altcha-org/altcha-starter-angular)

## Server Integrations

- [TypeScript](https://github.com/altcha-org/altcha-lib)
- [PHP](https://github.com/altcha-org/altcha-lib-php)
- [Go](https://github.com/altcha-org/altcha-lib-go)
- [Python](https://github.com/altcha-org/altcha-lib-py)
- [Java](https://github.com/altcha-org/altcha-lib-java)
- [Ruby](https://github.com/altcha-org/altcha-lib-rb)
- [Elixir](https://github.com/altcha-org/altcha-lib-ex)

## Plugins & CMS

- [Libraries and plugins](https://altcha.org/docs/v2/libraries/)

## Usage

The ALTCHA widget is distributed as a **Web Component**.

### 1. Install ALTCHA

```sh
npm install altcha
```

Import in your main file:

```js
import 'altcha';
```

Or load via `<script>` tag:

```html
<script async defer src="/altcha.js" type="module"></script>
```

### 2. Add `<altcha-widget>` to Your Forms

```html
<form>
	<altcha-widget challenge="https://..."></altcha-widget>
</form>
```

See [configuration options](#configuration) or the [website integration docs](https://altcha.org/docs/v2/widget-integration).

### 3. Integrate with Your Server

Refer to the [server documentation](https://altcha.org/docs/v2/server-integration) for implementation details.

## Supported Browsers

ALTCHA works on modern browsers with **Web Crypto API** support (specifically `crypto.subtle` - [caniuse.com](https://caniuse.com/?search=subtle)).

**Supported**:

- Chrome 67+ (desktop & Android)
- Edge 79+
- Firefox 63+ (desktop & Android)
- Safari 11+ (macOS & iOS)
- Any browser supporting Web Components + Web Crypto

**Not Supported**:

- Internet Explorer 11 (or older)

## Bundle Size

ALTCHA is optimized for performance:

| Distribution                 | Size (GZIPped) |
| ---------------------------- | -------------- |
| ALTCHA                       | 34 kB          |
| ALTCHA with all translations | 49 kB          |
| Cloudflare Turnstile         | 85+ kB         |
| hCaptcha                     | 250+ kB        |
| reCAPTCHA                    | 300+ kB        |

When GZIPped, it totals about 34 kB, making ALTCHA’s widget about ~90% smaller than reCAPTCHA.

## Content Security Policy (CSP)

The default bundle includes styles and workers in a single file. For strict CSP compliance, use scripts from `/dist/external`. Learn more in the [documentation](https://altcha.org/docs/v2/widget-integration).

## Configuration

### Programmatic Configuration

The widget provides a global `$altcha` object to manage defaults, register new algorithms, or add custom translations.

To update an existing widget instance, use the `.configure()` [method](). This is the preferred way to handle complex objects or functions that cannot be passed via HTML attributes.

```ts
// Set defaults for all future widget instances:
$altcha.defaults.set({
	challenge: 'https://api.example.com/challenge',
	debug: true
});

// Update a specific instance dynamically:
const widget = document.querySelector('altcha-widget');
widget.configure({
	workers: 2,
	language: 'fr'
});
```

### Attribute Configuration

For simple implementations, the widget supports a subset of configuration options directly as HTML attributes. For more advanced properties, use the programmatic approach above.

**Supported Attributes:**

```html
<altcha-widget
	auto="off"
	challenge="https://api.example.com/challenge"
	configuration='{"delay": 500}'
	display="standard"
	language="en"
	name="altcha"
	theme="default"
	type="checkbox"
	workers="4"
></altcha-widget>
```

> [!TIP]
> The `configuration` attribute accepts a JSON-encoded string, allowing you to pass complex settings directly in your HTML markup.

### Core Settings

- **`name`**: The `name` attribute of the hidden input field containing the payload. (Default: `"altcha"`)
- **`challenge`**: The challenge data or the URL to fetch a new challenge from.
- **`type`**: Visual style of the interaction element (`'native'`, `'checkbox'`, or `'switch'`).
- **`language`**: The ISO alpha-2 language code for localization (requires corresponding i18n file).
- **`workers`**: The number of Web Workers to spawn for proof-of-work calculations.

### Automation & Timing

- **`auto`**: Determines when verification triggers automatically (`'off'`, `'onfocus'`, `'onload'`, or `'onsubmit'`).
- **`minDuration`**: The minimum verification time in milliseconds; adds an artificial delay if the PoW is faster. (Default: `500`)
- **`retryOnOutOfMemoryError`**: Automatically attempts to restart verification with fewer workers if the browser runs out of memory (Argon2 and Scrypt only).

### UI & Display

- **`display`**: The visual layout mode (`'standard'`, `'bar'`, `'floating'`, `'overlay'`, or `'invisible'`).
- **`barPlacement`**: Vertical position of the widget when `display` is set to `bar` (`'bottom'` or `'top'`).
- **`hideLogo`**: Hides the ALTCHA logo icon.
- **`hideFooter`**: Hides the "ALTCHA" attribution link.
- **`validationMessage`**: Custom validation message for the HTML5 `setCustomValidity` API.

### Floating Widget Settings

- **`floatingAnchor`**: The element or CSS selector the floating UI attaches to. Defaults to the first submit button.
- **`floatingPlacement`**: Preferred position relative to the anchor (`'auto'`, `'bottom'`, or `'top'`).
- **`floatingOffset`**: Vertical offset in pixels between the UI and its anchor. (Default: `12`)
- **`floatingPersist`**: Whether the floating widget remains visible after successful verification.
- **`popoverPlacement`**: Preferred position of popovers relative to the widget (`'auto'`, `'bottom'`, or `'top'`).

### Modal & Challenge Settings

- **`codeChallengeDisplay`**: UI layout for the code-challenge modal (`'standard'`, `'overlay'`, or `'bottomsheet'`).
- **`overlayContent`**: CSS selector for an element to be mirrored inside the overlay modal.
- **`audioChallengeLanguage`**: Forces a specific language for audio-based challenges.
- **`disableAutoFocus`**: Prevents the code-challenge modal from stealing focus when opened.

### Advanced & Debugging

- **`debug`**: Enables verbose logging in the browser console.
- **`test`**: Mocks a successful verification for testing environments.
- **`mockError`**: Forces the widget into a failed state for UI testing.
- **`fetch`**: A custom `fetch` implementation for network requests.
- **`humanInteractionSignature`**: Whether the collector for HIS is enabled (Default: `true`).
- **`setCookie`**: When configured, sends the payload as a cookie.
- **`timeout`**: Verification timeout in milliseconds (Default: `90_000`).
- **`verifyFunction`**: A custom verification handler that overrides default network verification.

## Cookies

By default, the widget sends the ALTCHA payload as a form field by creating a hidden input. It can also be configured to send the payload via a cookie.

To enable this behavior, use the `setCookie` configuration option:

```ts
widget.configure({
	setCookie: {
		name: 'altcha',
		path: '/'
	}
});
```

`setCookie` accepts the following cookie options:

```ts
interface SetCookieOptions {
	domain?: string;
	name?: string;
	maxAge?: number;
	path?: string;
	sameSite?: string;
	secure?: boolean;
}
```

## Server Configuration

When the widget fetches a challenge from the server, the server can override widget configuration using either the `X-Altcha-Config` response header or the `configuration` property in the challenge response.

Example using the `configuration` property in the challenge JSON response to force cookie usage:

```json
{
	"configuration": {
		"setCookie": {
			"name": "altcha",
			"path": "/submit"
		}
	},
	"parameters": {
		// ...
	},
	"signature": "..."
}
```

The `X-Altcha-Config` header must contain a JSON-encoded object with configuration options.

## Internationalization (i18n)

ALTCHA supports **50+ languages**. You can import individual language translations or a bundle that includes all of them.

### Importing Translations

To import all translations:

```js
import 'altcha/i18n/all';
```

To import specific languages only:

```js
import 'altcha/i18n/de';
import 'altcha/i18n/fr-fr';
```

Alternatively, you can import the combined bundle, which includes both the widget and all translations:

```js
import 'altcha/i18n';
```

### Language Detection

The widget automatically detects the language from:

- The `<html lang="...">` attribute
- The user's browser settings (`navigator.languages`)

To override the language manually, use the `language` attribute:

```html
<altcha-widget language="de"></altcha-widget>
```

### Customizing Translations

You can override default translations by updating the global `$altcha` registry (`globalThis.$altcha.i18n`):

```js
import 'altcha/i18n/de';

$altcha.i18n.set('de', {
	...$altcha.i18n.get('de'),
	label: 'Ich bin ein Mensch' // Custom label
});
```

## Code Challenges

For additional verification, ALTCHA supports **image/audio code challenges** (e.g., "Enter the code from the image"). This feature requires [ALTCHA Sentinel](https://altcha.org/docs/v2/sentinel) or a custom server implementation.

## Data Obfuscation

[Data obfuscation]() is supported via an official plugin, which must be imported alongside the widget. This is ideal for protecting sensitive information, such as email addresses, from scrapers until the challenge is solved.

### Programmatic Usage

The plugin exports `obfuscate` and `deobfuscate` functions for manual data handling:

```ts
import { obfuscate } from 'altcha/plugins/obfuscation';

const obfuscatedData = await obfuscate('mailto:hello@example.com');
```

### Widget Integration

To use the plugin with the widget, ensure `altcha/plugins/obfuscation` is imported **after** the main library. Use the `data-obfuscated` attribute to provide the Base64-encoded payload:

```html
<script>
	import 'altcha';
	import 'altcha/plugins/obfuscation';
</script>

<altcha-widget data-obfuscated="${obfuscatedData}" display="floating"></altcha-widget>
```

## Methods

- `configure(options)` - Configures the widget with the given options. See Configuration options above.
- `getConfiguration()` - Returns the current configuration.
- `getState()` - Returns the current `state` of the widget.
- `show()` - Displays the widget (used in some display modes).
- `hide()` - Hides the widget (used in some display modes).
- `reset(state?, err?)` - Resets the internal `state`, optionally with an error.
- `setState(state, err?)` - Manually sets the specified `state`, optionally with an error.
- `updateUI()` - Force UI update or reposition, for example for the floating display mode.
- `verify()` - Initiates the verification process.

## Events

- **codechallenge** - Triggers when code-challenge verification is requested.
- **expired** - Triggers when the challenge expires.
- **load** - Triggers when the widget loads. The exported methods become available after this event.
- **outofmemory** - Triggers when an Out-Of-Memory error is received (Argon2 and Scrypt only).
- **serververification** -Triggers upon a server verification.
- **statechange** - Triggers whenever an internal `state` changes.
- **verified** - Triggers when the challenge is verified.

```ts
enum State {
	CODE = 'code',
	ERROR = 'error',
	VERIFIED = 'verified',
	VERIFYING = 'verifying',
	UNVERIFIED = 'unverified',
	EXPIRED = 'expired'
}
```

Using events:

```js
document.querySelector('altcha-widget').addEventListener('statechange', (ev) => {
	// See enum State above
	console.log('state:', ev.detail.state);
});
```

> [!IMPORTANT]  
> Both programmatic configuration and event listeners have to called/attached after the ALTCHA script loads, such as within `window.addEventListener('load', ...)`.

## Contributing

See [Contributing Guide](https://github.com/altcha-org/altcha/blob/main/CONTRIBUTING.md) and please follow our [Code of Conduct](https://github.com/altcha-org/altcha/blob/main/CODE_OF_CONDUCT.md).

## License

MIT
