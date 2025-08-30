# ALTCHA

ALTCHA is a self-hosted, privacy-first security solution that protects your websites, APIs, and online services from spam and abuse through an innovative proof-of-work mechanism. Unlike traditional CAPTCHAs that depend on intrusive methods like cookies or fingerprinting, ALTCHA delivers robust protection while respecting user privacy.

ALTCHA is fully compliant with:

- **Global privacy regulations**: GDPR, HIPAA, CCPA, PIPEDA/CPPA, LGPD, DPDPA, and PIPL
- **Accessibility standards**: [WCAG 2.2 AA-level](https://altcha.org/docs/v2/compliance/wcag/) and the [European Accessibility Act](https://altcha.org/docs/v2/compliance/european-accessibility-act-2025/)

For more details, visit [altcha.org](https://altcha.org).

## Features

- **Frictionless Experience**: Uses proof-of-work (PoW) instead of visual puzzles for a seamless user experience.
- **Code Challenge (New in v2)**: Supports accessible code challenges ("enter code from image") with an audio option.
- **Cookie-Free Design**: GDPR-compliant by default—no cookies or tracking.
- **Fully Accessible**: Meets WCAG 2.2 AA-level standards and complies with the European Accessibility Act (EAA).
- **Lightweight**: Minimal bundle size for fast page loads and optimal performance.
- **Self-Hosted**: No dependency on third-party services.

## What’s New in v2

Version 2 introduces enhanced accessibility, expanded language support, and integration with **ALTCHA Sentinel**—a self-hosted anti-spam solution for websites, apps, and services.

### Key Improvements in v2

- **Built-in Internationalization (i18n)** for 50+ languages
- **Improved RTL (right-to-left) language support**
- **Enhanced WCAG accessibility**
- **Support for accessible code challenges** (image + audio options)
- **Overlay UI**

### Migrating from v1

Version 2 (v2) is fully compatible with v1, and minimal migration steps are required. However, be sure to test your integration after updating.

- Translations: v2 introduces a new [built-in internationalization (i18n) system](#internationalization-i18n). The use of the `strings` attribute is now discouraged in favor of this new system.
- [ALTCHA Sentinel](https://altcha.org/docs/v2/sentinel): Sentinel is a new self-hosted solution that replaces the previous SaaS services and the SpamFilter. We recommend migrating to Sentinel for better compliance, enhanced security, unlimited verifications, and an adaptive Captcha with code-challenge support.

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

- [Libraries and plugins](https://altcha.org/docs/integrations/)

## Usage

The ALTCHA widget is distributed as a **Web Component** and [supports all modern browsers](https://developer.mozilla.org/en-US/docs/Web/API/Web_components#browser_compatibility).

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

**CDN**:

```html
<script
  async
  defer
  src="https://cdn.jsdelivr.net/gh/altcha-org/altcha@main/dist/altcha.min.js"
  type="module"
></script>
```

### 2. Add `<altcha-widget>` to Your Forms

```html
<form>
  <altcha-widget challengeurl="https://..."></altcha-widget>
</form>
```

See [configuration options](#configuration) or the [website integration docs](https://altcha.org/docs/website-integration).

### 3. Integrate with Your Server

Refer to the [server documentation](https://altcha.org/docs/server-integration) for implementation details.

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
| ALTCHA                       | 30 kB          |
| ALTCHA with all translations | 46 kB          |
| Cloudflare Turnstile         | 85+ kB         |
| hCaptcha                     | 250+ kB        |
| reCAPTCHA                    | 300+ kB        |

When GZIPped, it totals about 30 kB, making ALTCHA’s widget about 90% smaller than reCAPTCHA.

## Content Security Policy (CSP)

The default bundle includes styles and workers in a single file. For strict CSP compliance, use scripts from `/dist_external`. Learn more in the [documentation](https://altcha.org/docs/website-integration).

## Configuration

Required options (at least one is required):

- **challengeurl**: Server endpoint to fetch the challenge.
- **challengejson**: Preloaded JSON challenge data (avoids HTTP requests).

Additional options:

- **auto**: Automatically verify without user interaction (possible values: `off`, `onfocus`, `onload`, `onsubmit`).
- **credentials**: Whether to include [credentials](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit#credentials) with the challenge request (possible values: `omit`, `same-origin`, `include`).
- **customfetch**: A custom `fetch` function for retrieving the challenge.  
  Accepts `url: string` and `init: RequestInit` as arguments and must return a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response).
- **delay**: Artificial delay in milliseconds before verification (defaults to 0).
- **disableautofocus**: If true, prevents the code-challenge input from automatically receiving focus on render (defaults to `false`).
- **expire**: Challenge expiration duration in milliseconds.
- **floating**: Enable floating UI (possible values: `auto`, `top`, `bottom`).
- **floatinganchor**: CSS selector of the "anchor" to which the floating UI will be attached (defaults to the `button[type="submit"]` in the related form).
- **floatingoffset**: Y offset from the anchor element for the floating UI in pixels (defaults to `12`).
- **floatingpersist**: Whether to "persist" (keep visible) the floating widget after verification (possible values: `true` | `false` | `focus`; defaults to `false`, meaning the widget will hide).
- **hidefooter**: Hide the footer (ALTCHA link).
- **hidelogo**: Hide the ALTCHA logo.
- **id**: The checkbox `id` attribute. Useful for multiple instances of the widget on the same page.
- **language**: The ISO alpha-2 code of the language to use (the language file be imported from `altcha/i18n/*`).
- **maxnumber**: Max number to iterate to (defaults to 1,000,000).
- **name**: Name of the hidden field containing the payload (defaults to "altcha").
- **overlay**: Enables overlay UI mode (automatically sets `auto="onsubmit"`).
- **overlaycontent**: CSS selector of the HTML element to display in the overlay modal before the widget.
- **strings**: JSON-encoded translation strings. Refer to [customization](https://altcha.org/docs/widget-customization).
- **refetchonexpire**: Automatically re-fetch and re-validate when the challenge expires (defaults to true).
- **verifyurl**: URL for server-side verification requests. This option is automatically configured with Sentinel. Override this setting only if using a custom server implementation. Supports `fn:function_name` format to call a global JS function instead.
- **workers**: Number of workers to utilize for PoW (defaults to `navigator.hardwareConcurrency || 8`, max value `16`).
- **workerurl**: URL of the Worker script (defaults to `./worker.js`, only works with `external` build).

Data Obfuscation options:

- **obfuscated**: The [obfuscated data](https://altcha.org/docs/obfuscation) provided as a base64-encoded string (requires `altcha/obfuscation` plugin). Use only without `challengeurl`/`challengejson`.

Development / Testing options:

- **debug**: Print log messages in the console.
- **mockerror**: Causes verification to always fail with a "mock" error.
- **test**: Generates a "mock" challenge within the widget, bypassing the request to `challengeurl`.

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

You can override default translations by updating the global `altchaI18n` registry (`globalThis.altchaI18n` or `window.altchaI18n`):

```js
import 'altcha/i18n/de';

globalThis.altchaI18n.set('de', {
  ...globalThis.altchaI18n.get('de'),
  label: 'Ich bin ein Mensch', // Custom label
});
```

## Code Challenges

For additional verification, ALTCHA supports **image/audio code challenges** (e.g., "Enter the code from the image"). This feature requires [ALTCHA Sentinel](https://altcha.org/docs/v2/sentinel) or a custom server implementation.

## Plugins

Extend functionality with plugins:

```js
import 'altcha/obfuscation'; // Data obfuscation
import 'altcha/upload'; // File uploads
import 'altcha'; // Main package
```

Enable plugins per widget:

```html
<altcha-widget plugins="upload,obfuscation"></altcha-widget>
```

### Available Plugins

- **obfuscation**: Secure sensitive data (emails, phone numbers).
- **upload**: File uploads with ALTCHA Sentinel or a custom backend.

## Programmatic Configuration

To configure the widget programmatically, use the `configure()` method:

```ts
document.querySelector('#altcha').configure({
  challenge: {
    algorithm: 'SHA-256',
    challenge: '...',
    salt: '...',
    signature: '...',
  },
  strings: {
    label: 'Verify',
  },
});
```

Available configuration options:

```ts
export interface Configure {
  auto?: 'off' | 'onfocus' | 'onload' | 'onsubmit';
  challenge?: {
    codeChallenge?: {
      audio?: string;
      image: string;
      length?: number;
    };
    algorithm: string;
    challenge: string;
    maxnumber?: number;
    salt: string;
    signature: string;
  };
  challengeurl?: string;
  credentials?: 'omit' | 'same-origin' | 'include' | boolean;
  customfetch?:
    | string
    | ((url: string, init?: RequestInit) => Promise<Response>);
  debug?: boolean;
  delay?: number;
  disableautofocus?: boolean;
  expire?: number;
  floating?: 'auto' | 'top' | 'bottom';
  floatinganchor?: string;
  floatingoffset?: number;
  floatingpersist?: boolean | 'focus';
  hidefooter?: boolean;
  hidelogo?: boolean;
  maxnumber?: number;
  mockerror?: boolean;
  name?: string;
  obfuscated?: string;
  overlay?: boolean;
  refetchonexpire?: boolean;
  spamfilter?: boolean | 'ipAddress' | SpamFilter; // deprecated
  strings?: {
    ariaLinkLabel: strin;
    enterCode: string;
    enterCodeAria: string;
    error: string;
    expired: string;
    footer: string;
    getAudioChallenge: string;
    label: string;
    loading: string;
    reload: strin;
    verificationRequired: string;
    verified: string;
    verifying: string;
    waitAlert: string;
  };
  test?: boolean | number | 'delay';
  verifyurl?: string;
  workers?: number;
  workerurl?: string;
}
```

## Methods

- `configure(options)` - Configures the widget with the given options. See Configuration options above.
- `getConfiguration()` - Returns the current configuration.
- `getState()` - Returns the current `state` of the widget.
- `show()` - Displays the widget (used in floating or overlay mode).
- `hide()` - Hides the widget (used in floating or overlay mode).
- `reset(state?, err?)` - Resets the internal `state`, optionally with an error.
- `setState(state, err?)` - Manually sets the specified `state`, optionally with an error.
- `setFloatingAnchor(element)` - Sets the anchor element for the floating UI.
- `verify()` - Initiates the verification process.s a "mock" challenge within the widget, bypassing the request to `challengeurl`.


## Events

- **code** - Triggers when code-challenge verification is requested.
- **load** - Triggers when the widget loads. The exported methods become available after this event.
- **sentinelverification** - Triggers upon a verification with ALTCHA Sentinel.
- **serververification** - (Deprecated) Triggers upon a server verification (only in conjunction with `spamfilter`).
- **statechange** - Triggers whenever an internal `state` changes.
- **verified** - Triggers when the challenge is verified.

```ts
enum State {
  CODE = 'code',
  ERROR = 'error',
  VERIFIED = 'verified',
  VERIFYING = 'verifying',
  UNVERIFIED = 'unverified',
  EXPIRED = 'expired',
}
```

Using events:

```js
document.querySelector('#altcha').addEventListener('statechange', (ev) => {
  // See enum State above
  console.log('state:', ev.detail.state);
});
```

> [!IMPORTANT]  
> Both programmatic configuration and event listeners have to called/attached after the ALTCHA script loads, such as within `window.addEventListener('load', ...)`.

## Contributing

See [Contributing Guide](https://github.com/altcha-org/altcha/blob/main/CONTRIBUTING.md) and please follow our [Code of Conduct](https://github.com/altcha-org/altcha/blob/main/CODE_OF_CONDUCT.md).

## Sponsorship

This project is sponsored by [BAUSW.com - Digital Construction Site Diary](https://bausw.com/digital-construction-diary/), promoting transparency and trust in construction projects with real-time documentation.

## License

**MIT**
