# ALTCHA

ALTCHA uses a proof-of-work mechanism to protect your website, APIs, and online services from spam and abuse. Unlike other solutions, ALTCHA is self-hosted, does not use cookies nor fingerprinting, does not track users, and is fully compliant with GDPR.

https://altcha.org

## Benefits

- __Friction-less__ - Using PoW instead of visual puzzles.
- __Cookie-less__ - GDPR compliant by design.
- __Self-hosted__ - Without reliance on external providers in self-hosted mode.
- __SaaS available__ - Visit [altcha.org](https://altcha.org/docs/api) to get started with the SaaS API.

## Examples

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

## Plugins

- [WordPress plugin](https://github.com/altcha-org/wordpress-plugin)
- [Other libraries and plugins](https://altcha.org/docs/integrations/)

## More anti-spam solutions

- [Spam Filter](https://altcha.org/anti-spam) - stop sophisticated attacks and human-generated spam by classifying data.

## Usage

ALTCHA widget is distributed as a "Web Component" and [supports all modern browsers](https://developer.mozilla.org/en-US/docs/Web/API/Web_components#browser_compatibility).

### 1. Install ALTCHA

```sh
npm install altcha
```

import `altcha` in your main file:

```js
import 'altcha';
```

or insert `<script>` tag to your website:

```html
<script async defer src="/altcha.js" type="module"></script>
```

CDN: https://cdn.jsdelivr.net/gh/altcha-org/altcha@main/dist/altcha.min.js

### 2. Use `<altcha-widget>` tag in your forms

```html
<form>
  <altcha-widget
    challengeurl="https://..."
  ></altcha-widget>  
</form>
```

See the [configuration](#configuration) below or visit the [website integration documentation](https://altcha.org/docs/website-integration).

### 3. Integrate ALTCHA with your server

See [server documentation](https://altcha.org/docs/server-integration) for more details.

## Content Security Policy (CSP)

The default distribution bundle of the WebComponent includes styles and the worker in a single file. This might cause issues with strict CSP rules. If you require strict CSP compliance, consider using the scripts located in the `/dist_external` directory. For more details, please refer to the [documentation](https://altcha.org/docs/website-integration).

## Configuration

Required options (at least one is required):

- __challengeurl__ - URL of your server to fetch the challenge from. Refer to [server integration](https://altcha.org/docs/server-integration).
- __challengejson__ - JSON-encoded challenge data. If avoiding an HTTP request to `challengeurl`, provide the data here.

Additional options:

- __analytics__ - Enable analytics with [ALTCHA Forms](https://altcha.org/forms/). See [HTML submissions documentation](https://altcha.org/docs/forms/features/html-submissions).
- __auto__ - Automatically verify without user interaction (possible values: `onfocus`, `onload`, `onsubmit`).
- __beaconurl__ - URL to which analytics data will be sent using a beacon POST if the form is abandoned. This option is only used when `analytics` is enabled.
- __blockspam__ - Only used in conjunction with the `spamfilter` option. If enabled, it will block form submission and fail verification if the Spam Filter returns a negative classification. This effectively prevents submission of the form.
- __delay__ - The artificial delay in milliseconds to apply before the verification (defaults to 0).
- __expire__ - The challenge expiration (duration in milliseconds).
- __floating__ - Enable floating UI (possible values: `auto`, `top`, `bottom`).
- __floatinganchor__ - The CSS selector of the "anchor" to which the floating UI will be attached to (defaults to the `button[type="submit"]` in the related form).
- __floatingoffset__ - The Y offset from the anchor element for the floating UI expressed in pixels (defaults to `12`).
- __hidefooter__ - Hide the footer (ALTCHA link).
- __hidelogo__ - Hide the ALTCHA logo.
- __maxnumber__ - The max. number to iterate to (defaults to 1,000,000).
- __name__ - The name of the hidden field containing the payload (defaults to "altcha").
- __spamfilter__ - Enable [Spam Filter](#spam-filter).
- __strings__ - JSON-encoded translation strings. Refer to [customization](/docs/widget-customization).
- __refetchonexpire__ - Automatically re-fetch and re-validate when the challenge expires (defaults to true).
- __verifyurl__ - URL for server-side verification requests. This option is automatically configured when the `spamfilter` option is used. Override this setting only if you are using a custom server implementation.
- __workers__ - The number of workers to utilize for PoW (defaults to `navigator.hardwareConcurrency || 8`, max. value `16`).
- __workerurl__ - The URL of the Worker script (defaults to `./worker.js`, only works with `external` build).

Development / testing options:

- __debug__ - Print log messages in the console.
- __mockerror__ - Causes the verification to always fail with a "mock" error.
- __test__ - Generates a "mock" challenge within the widget, bypassing the request to `challengeurl`.

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
  analytics?: boolean | string;
  auto?: 'onfocus' | 'onload' | 'onsubmit';
  beaconurl?: string;
  challenge?: {
    algorithm: string;
    challenge: string;
    maxnumber?: number;
    salt: string;
    signature: string;
  };
  challengeurl?: string;
  debug?: boolean;
  delay?: number;
  expire?: number;
  floating?: 'auto' | 'top' | 'bottom';
  floatinganchor?: string;
  floatingoffset?: number;
  autorenew?: boolean;
  hidefooter?: boolean;
  hidelogo?: boolean;
  maxnumber?: number;
  mockerror?: boolean;
  name?: string;
  refetchonexpire?: boolean;
  spamfilter?: boolean | 'ipAddress' | SpamFilter;
  strings?: {
    error: string;
    expired: string;
    footer: string;
    label: string;
    verified: string;
    verifying: string;
    waitAlert: string;
  }
  test?: boolean | number | 'delay';
  verifyurl?: string;
  workers?: number;
  workerurl?: string;
}
```

## Events

- __serververification__ - Triggers upon a server verification (only in conjunction with `spamfilter`).
- __statechange__ - Triggers whenever an internal `state` changes.
- __verified__ - Triggers when the challenge is verified.

```ts
enum State {
  ERROR = 'error',
  VERIFIED = 'verified',
  VERIFYING = 'verifying',
  UNVERIFIED = 'unverified',
  EXPIRED = 'expired',
};
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

## Spam Filter

The widget integrates with ALTCHA's [Anti-Spam solution](https://altcha.org/anti-spam) to allow checking submitted form data for potential spam.

The Spam Filter API analyzes various signals in the submitted data to determine if it exhibits characteristics of spam. This non-invasive filtering helps reduce spam submissions without frustrating legitimate users.

### Spam Filter Configuration

The Spam Filter can be enabled with default configuration by setting the `spamfilter` option to `true`, or `ipAddress` to verify only the IP address and the time zone, or it can be customized using the following configuration schema:

```ts
interface SpamFilter {
  blockedCountries?: string[];
  classifier?: string;
  disableRules?: string[];
  email?: string | false;
  expectedCountries?: string[];
  expectedLanguages?: string[];
  fields?: string[] | false;
  ipAddress?: string | false;
  text?: string | string[];
  timeZone?: string | false;
}
```

SpamFilter configuration options:

- __blockedCountries__ - An array of country codes (ISO 3166 alpha-2) that you want to block.
- __classifier__ - Enforce a specific classifier.
- __disableRules__ - An array of rules to disable.
- __email__ - The name of the input field for the user's email. Disable email checking with `false`.
- __expectedCountries__ - An array of expected countries as 2-letter codes (ISO 3166-1 alpha-2).
- __expectedLanguages__ - An array of expected languages as 2-letter codes (ISO 639 alpha-2).
- __fields__ - An array of input names to send to the spam filter.
- __ipAddress__ - The user's IP is detected automatically but can be overridden or disabled with `false`.
- __text__ - The text to classify. An array of strings can also be submitted.
- __timeZone__ - The user's timezone is detected automatically but can be overridden or disabled with `false`.

To include the email field into `fields` (for easier server-side verification), configure the list of input names using the `spamfilter.fields: string[]` option.

### Exclude Inputs from Spam Checking

By default, all text inputs and textareas within the parent form are spam-checked. To exclude a specific input, add the `data-no-spamfilter` attribute. Alternatively, explicitly list the checked fields using the `fields` config option.

## Contributing
See [Contributing Guide](https://github.com/altcha-org/altcha/blob/main/CONTRIBUTING.md) and please follow our [Code of Conduct](https://github.com/altcha-org/altcha/blob/main/CODE_OF_CONDUCT.md).

## License

MIT

