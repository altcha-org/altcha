# ALTCHA

ALTCHA uses a proof-of-work mechanism to protect your website, APIs, and online services from spam and abuse. Unlike other solutions, ALTCHA is self-hosted, does not use cookies nor fingerprinting, does not track users, and is fully compliant with GDPR.

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

### 2. Use `<altcha-box>` tag in your forms

```html
<form>
  <altcha-box
    challengeurl="https://..."
  ></altcha-box>  
</form>
```

See the [configuration](#configuration) below or visit the [website integration documentation](https://altcha.org/docs/website-integration).

### 3. Integrate ALCTHA with your server

See [server documentation](https://altcha.org/docs/server-integration) for more details.

## Configuration

Main options:

- __challengeurl__ - The URL of your server, where to fetch the challenge from. See [server integration](/docs/server-integration).
- __challengejson__ - The JSON-encoded challenge. If you don't want to make an HTTP request to `challengeurl`, provide the data here instead.

Customization options:

- __hidefooter__ - Hide the footer (ALTCHA link).
- __hidelogo__ - Hide the ALTCHA logo.
- __maxnumber__ - Max. number to iterate to (defaults to 10,000,000).
- __name__ - The name of the hidden field containing payload (defaults to "altcha").
- __strings__ - JSON-encoded translation strings. See [customization](/docs/widget-customization).

Development / testing options:

- __debug__ - Print log messages into the console.
- __mockerror__ - Causes the verification to always fail with a "mock" error.
- __test__ - This option will make the widget generate its own "mock" challenge, thus __not__ making the request to the `challengeurl`.

Events:

- __statechange__ - triggers whenever an internal `state` changes.
- __verified__ - triggers when the challenge is verified.

Using events:

```js
document.querySelector('#altcha').addEventListener('statechange', (ev) => {
  // state can be: unverified, verifying, verified, error
  console.log('state:', ev.detail.state);
});
```


## License

MIT

