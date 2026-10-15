# Change Log

## [3.4.0] - 2026-10-15

- Fix: `./i18n/*` export `types` condition points to `dist/i18n/*.d.ts` instead of the non-existent `dist/external/*.d.ts` [#200]
- Fix: support the `form` attribute to associate the widget with a `<form>` it is not nested in [#201]

## [3.3.0] - 2026-10-05

- Fix: SHA key derivation hashes the full digest each round and truncates once, matching altcha-lib and the server ports (SHA-384/512 and any `keyLength` below the digest size with `cost > 1` previously failed server verification)
- Fix: PBKDF2 supports any `keyLength` (uses `deriveBits` instead of an AES-GCM key)
- Fix: built-in `deriveKey` functions reject unsupported algorithm names
- Fix: `verifySolution` requires the re-derived key to match the signed `keyPrefix`, rejects malformed `derivedKey`/`counter` values, and validates secrets and `hmacAlgorithm`
- Fix: `createChallenge` validates its options (`keyPrefixLength` below the derived key length, non-empty hex `keyPrefix` lowercased before signing, positive integer `cost`/`keyLength`, valid `counter` and `expiresAt`)
- Fix: `solveChallenge` fails fast on an invalid `keyPrefix`
- Fix: `hexToBuffer` rejects non-hex input; canonical JSON keeps `__proto__` keys
- Fix: `verifyServerSignature` validates `algorithm` and `hmacSecret`, handles a missing signature, and uses exact expiry
- Fix: obfuscation plugin encrypts with the full derived key instead of a `keyPrefixLength`-sized prefix

## [3.2.4] - 2026-09-30

- Fix: unhandled AbortError when audio challenge `play()` is interrupted by `pause()` [#199]

## [3.2.3] - 2026-09-20

- Fix: add rel=noopener attribute to external links [#198]

## [3.2.2] - 2026-08-19

- Fix: theme attribute (widget types and HTML attribute)

## [3.2.1] - 2026-07-12

- Fix: checkbox focus outline in safari [#194]

## [3.2.0] - 2026-07-08

- Fix: i18n load-order [#193]

## [3.1.0] - 2026-06-11

- Fix: TypeScript errors on id/aria attrs for altcha-widget [#190]

## [3.0.11] - 2026-06-01

- Fix: guard customElements.define against duplicate registration [#187]

## [3.0.10] - 2026-05-23

- Fix: injectCss - auto detect CSP nonce

## [3.0.9] - 2026-05-12

- Fix: challenge parameter - allow URLs without origin

## [3.0.8] - 2026-05-06

- Fix: request form submit with code-challenge when auto=onsubmit [#183]

## [3.0.7] - 2026-05-06

- Fix: floating display mode - top placement arrow [#182]

## [3.0.6] - 2026-05-04

- Fix: pageshow event handler [#181]
- Fix: abort verification on reset

## [3.0.5] - 2026-05-02

- Fix: resolve issues with display mode changes
- Fix: popover repositioning after updateUI calls
- Fix: use capture for click handlers to improve compatibility (e.g., WordPress)

## [3.0.4] - 2026-04-19

- Fix: verified event name typo [#178]

## [3.0.3] - 2026-04-18

- Fix: Accessibility improvements [#175]

## [3.0.2] - 2026-04-10

- Fix: solveChallenge yielding and timeout

## [3.0.1] - 2026-04-07

- Version bump to re-release in stable npm channel

## [3.0.0] - 2026-04-07

- Stable release

## [3.0.0-beta.4] - 2026-04-06

- Fix: Plugin registration in the global variable

## [3.0.0-beta.3] - 2026-03-21

- Fix: Challenge v1 compatibility when using configure() method
- Fix: ALTCHA Sentinel compatibility
- Fix: Solve challenge timeout
- Fix: Widget attributes types
- New: Human Interaction Signature (HIS) collector (https://altcha.org/docs/v2/sentinel/features/human-interaction-signature)
- Improvements: General type and other improvements

## [3.0.0-beta.2] - 2026-03-12

- Fix: Left-to-right popover alignment
- Fix: Spinner color in the lime theme when used in dark mode
- Fix: Reset audio challenge after a language change
- New: Added `setCookie` configuration option
- New: Added Cantonese translation
- New: Added server-side signature verification functions to the library
- Improvements: General type and package improvements

## [3.0.0-beta.1] - 2026-02-22

- Initial release of the v3 in Beta.
