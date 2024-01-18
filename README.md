# ALTCHA

ALTCHA uses a proof-of-work mechanism to protect your website, APIs, and online services from spam and abuse. Unlike other solutions, ALTCHA is self-hosted, does not use cookies nor fingerprinting, does not track users, and is fully compliant with GDPR.

https://altcha.org

## Benefits

- __Friction-less__ - Using PoW instead of visual puzzles.
- __Cookie-less__ - GDPR compliant by design.
- __Self-hosted__ - Without reliance on external providers.

## Usage

ALTCHA widget is distributed as a "Web Component" and [supports all modern browsers](https://developer.mozilla.org/en-US/docs/Web/API/Web_components#browser_compatibility).

### 1. Add `<script>` tag to your website

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

## Configuration

Required options (at least one is required):

- __challengeurl__ - URL of your server to fetch the challenge from. Refer to [server integration](/docs/server-integration).
- __challengejson__ - JSON-encoded challenge data. If avoiding an HTTP request to `challengeurl`, provide the data here.

Additional options:

- __hidefooter__ - Hide the footer (ALTCHA link).
- __hidelogo__ - Hide the ALTCHA logo.
- __maxnumber__ - The max. number to iterate to (defaults to 10,000,000).
- __name__ - The name of the hidden field containing the payload (defaults to "altcha").
- __strings__ - JSON-encoded translation strings. Refer to [customization](/docs/widget-customization).

Development / testing options:

- __debug__ - Print log messages in the console.
- __mockerror__ - Causes the verification to always fail with a "mock" error.
- __test__ - Generates a "mock" challenge within the widget, bypassing the request to `challengeurl`.

Events:

- __statechange__ - Triggers whenever an internal `state` changes.
- __verified__ - Triggers when the challenge is verified.

Using events:

```js
document.querySelector('#altcha').addEventListener('statechange', (ev) => {
  // state can be: unverified, verifying, verified, error
  console.log('state:', ev.detail.state);
});
```

## Contributing
See [Contributing Guide](https://github.com/altcha-org/altcha/blob/main/CONTRIBUTING.md) and please follow our [Code of Conduct](https://github.com/altcha-org/altcha/blob/main/CODE_OF_CONDUCT.md).

## License

MIT

