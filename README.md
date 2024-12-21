# ALTCHA

ALTCHA uses a proof-of-work mechanism to protect your website, APIs, and online services from spam and abuse. Unlike other solutions, ALTCHA is self-hosted, does not use cookies nor fingerprinting, does not track users, and is fully compliant with GDPR.

Visit [ALTCHA](https://altcha.org) for more information.

## Features

- **Frictionless CAPTCHA Alternative** - Employs proof-of-work (PoW) instead of visual puzzles.
- **Data Obfuscation** - Safeguards your email address from scraping.
- **Cookie-less** - Designed to be GDPR compliant by default.
- **Self-hosted** - Operates independently without relying on external providers.
- **SaaS Available** - Get started with the SaaS API at [altcha.org/docs/api](https://altcha.org/docs/api).

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

## CMS

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

## Bundle Size

ALTCHA's default bundle is lightweight, combining all assets, including CSS and the JavaScript Web Worker, into a single file. When GZIPped, it totals only 17 kB, making ALTCHA’s widget 94% smaller than reCAPTCHA.

|Distribution|Size (GZIPped)|
|---|---|
|ALTCHA (v1.x)|17 kB|
|hCaptcha|48+ kB|
|reCAPTCHA|270+ kB|

## Content Security Policy (CSP)

The default distribution bundle of the WebComponent includes styles and the worker in a single file. This might cause issues with strict CSP rules. If you require strict CSP compliance, consider using the scripts located in the `/dist_external` directory. For more details, please refer to the [documentation](https://altcha.org/docs/website-integration).

## Configuration

Required options (at least one is required):

- **challengeurl**: URL of your server to fetch the challenge from. Refer to [server integration](https://altcha.org/docs/server-integration).
- **challengejson**: JSON-encoded challenge data. If avoiding an HTTP request to `challengeurl`, provide the data here.

Additional options:

- **auto**: Automatically verify without user interaction (possible values: `off`, `onfocus`, `onload`, `onsubmit`).
- **customfetch**: A custom `fetch` function for retrieving the challenge.  
  Accepts `url: string` and `init: RequestInit` as arguments and must return a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response).  
- **delay**: Artificial delay in milliseconds before verification (defaults to 0).
- **expire**: Challenge expiration duration in milliseconds.
- **floating**: Enable floating UI (possible values: `auto`, `top`, `bottom`).
- **floatinganchor**: CSS selector of the "anchor" to which the floating UI will be attached (defaults to the `button[type="submit"]` in the related form).
- **floatingoffset**: Y offset from the anchor element for the floating UI in pixels (defaults to `12`).
- **hidefooter**: Hide the footer (ALTCHA link).
- **hidelogo**: Hide the ALTCHA logo.
- **maxnumber**: Max number to iterate to (defaults to 1,000,000).
- **name**: Name of the hidden field containing the payload (defaults to "altcha").
- **strings**: JSON-encoded translation strings. Refer to [customization](https://altcha.org/docs/widget-customization).
- **refetchonexpire**: Automatically re-fetch and re-validate when the challenge expires (defaults to true).
- **workers**: Number of workers to utilize for PoW (defaults to `navigator.hardwareConcurrency || 8`, max value `16`).
- **workerurl**: URL of the Worker script (defaults to `./worker.js`, only works with `external` build).

Spam Filter-related options:

- **blockspam**: Only used with the `spamfilter` option. If enabled, it will block form submission and fail verification if the Spam Filter returns a negative classification. This prevents form submission.
- **spamfilter**: Enable [Spam Filter](#spam-filter).
- **verifyurl**: URL for server-side verification requests. This option is automatically configured when the `spamfilter` option is used. Override this setting only if using a custom server implementation.

Data Obfuscation options:

- **obfuscated**: The [obfuscated data](https://altcha.org/docs/obfuscation) provided as a base64-encoded string (requires `altcha/obfuscation` plugin). Use only without `challengeurl`/`challengejson`.

Development / Testing options:

- **debug**: Print log messages in the console.
- **mockerror**: Causes verification to always fail with a "mock" error.
- **test**: Generates a "mock" challenge within the widget, bypassing the request to `challengeurl`.

## Plugins

Version 0.9.x introduced _plugins_ that can be enabled by importing individual plugin scripts:

```js
import 'altcha/obfuscation';
import 'altcha';
```

It is recommended to import plugins _before_ the main `altcha` package to ensure proper registration before any widget instance is created.

Available plugins built-in to the `altcha` package:

- `altcha/analytics`: Enable analytics with [ALTCHA Forms](https://altcha.org/forms/). See [HTML submissions documentation](https://altcha.org/docs/forms/features/html-submissions).
- `altcha/obfuscation`: Enable [obfuscation](https://altcha.org/docs/obfuscation) for sensitive data such as email addresses or phone numbers.
- `altcha/upload`: Enable file upload from `type=file` fields to [ALTCHA Forms](https://altcha.org/forms/). See [HTML submissions documentation](https://altcha.org/docs/forms/features/html-submissions).

To enable specific plugins for a particular instance of the widget, use the `plugins` attribute in the widget tag. List the names of the plugins you want to enable, separated by commas, such as `plugins="analytics,obfuscation"`. Plugins still need to be imported as described above. The `plugins` attribute only specifies which plugins should be active for that instance, even if other plugins are already imported.

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
    algorithm: string;
    challenge: string;
    maxnumber?: number;
    salt: string;
    signature: string;
  };
  challengeurl?: string;
  customfetch?: string | ((url: string, init?: RequestInit) => Promise<Response>);
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
  obfuscated?: string;
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

## Custom `fetch` Function  

The widget does not send cookies (i.e., it does not use `credentials: 'include'`) when requesting the challenge from the server. To modify this behavior or add custom request headers, use the `customfetch` configuration option. This option lets you define a custom request function.  

The custom function must return a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object.  

### Sending Cookies  

To include cookies in the request, use `credentials: 'include'`:  

```ts
function altchaCustomFetch(url: string, init: RequestInit) {
  return fetch(url, {
    ...init,
    credentials: 'include', // Include cookies with the request
  });
}
```  

For more details on possible request options, refer to the [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) documentation.  

### Using `customfetch`  

The `customfetch` option can accept either:  
- A `string` (the name of a globally accessible function defined in the global context, such as `window`), or  
- A function itself.  

### Example Usage  

```html
<altcha-widget
  challengeurl="https://example.com/challenge"
  customfetch="altchaCustomFetch"
></altcha-widget>
```  

## Events

- **load** - Triggers when the widget loads. The exported methods become available after this event.
- **serververification** - Triggers upon a server verification (only in conjunction with `spamfilter`).
- **statechange** - Triggers whenever an internal `state` changes.
- **verified** - Triggers when the challenge is verified.

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

- **blockedCountries** - An array of country codes (ISO 3166 alpha-2) that you want to block.
- **classifier** - Enforce a specific classifier.
- **disableRules** - An array of rules to disable.
- **email** - The name of the input field for the user's email. Disable email checking with `false`.
- **expectedCountries** - An array of expected countries as 2-letter codes (ISO 3166-1 alpha-2).
- **expectedLanguages** - An array of expected languages as 2-letter codes (ISO 639 alpha-2).
- **fields** - An array of input names to send to the spam filter.
- **ipAddress** - The user's IP is detected automatically but can be overridden or disabled with `false`.
- **text** - The text to classify. An array of strings can also be submitted.
- **timeZone** - The user's timezone is detected automatically but can be overridden or disabled with `false`.

To include the email field into `fields` (for easier server-side verification), configure the list of input names using the `spamfilter.fields: string[]` option.

### Exclude Inputs from Spam Checking

By default, all text inputs and textareas within the parent form are spam-checked. To exclude a specific input, add the `data-no-spamfilter` attribute. Alternatively, explicitly list the checked fields using the `fields` config option.

## Contributing
See [Contributing Guide](https://github.com/altcha-org/altcha/blob/main/CONTRIBUTING.md) and please follow our [Code of Conduct](https://github.com/altcha-org/altcha/blob/main/CODE_OF_CONDUCT.md).

## Sponsorship  

This project is sponsored by [BAUSW.com - Digital Construction Site Diary](https://bausw.com/digital-construction-diary/), promoting transparency and trust in construction projects with real-time documentation.

## License

MIT

