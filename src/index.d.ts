declare const ALTCHA_VERSION: string;
declare const INLINE_WORKER: string;

declare global {
  var createAltchaWorker: () => Promise<Worker>;
}