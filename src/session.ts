import { getTimeZone } from './helpers';

export class Session {
  beaconUrl: string | null = null;

  error: string | null = null;

  readonly loadTime: number = Date.now();

  submitTime: number | null = null;

  startTime: number | null = null;

  viewTimeThresholdMs: number = 1500;

  readonly #fieldChanges: Record<string, number> = {};

  #lastInputName: string | null = null;

  readonly #onFormChange = this.onFormChange.bind(this);

  readonly #onFormFocus = this.onFormFocus.bind(this);

  readonly #onFormSubmit = this.onFormSubmit.bind(this);

  readonly #onUnload = this.onUnload.bind(this);

  constructor(readonly elForm: HTMLFormElement) {
    window.addEventListener('unload', this.#onUnload);
    this.elForm.addEventListener('change', this.#onFormChange);
    this.elForm.addEventListener('focusin', this.#onFormFocus);
    this.elForm.addEventListener('submit', this.#onFormSubmit);
  }

  data() {
    const fields = Object.entries(this.#fieldChanges);
    return {
      correction: fields.length
        ? fields.filter(([_, changes]) => changes > 1).length / fields.length ||
          0
        : 0,
      dropoff:
        !this.submitTime && !this.error && this.#lastInputName
          ? this.#lastInputName
          : null,
      error: this.error,
      mobile: this.isMobile(),
      start: this.startTime,
      submit: this.submitTime,
      tz: getTimeZone(),
    };
  }

  dataAsBase64() {
    try {
      return btoa(
        JSON.stringify(this.data())
      );
    } catch (err) {
      console.error('failed to encode ALTCHA session data to base64', err);
    }
    return '';
  }

  destroy() {
    window.removeEventListener('unload', this.#onUnload);
    this.elForm.removeEventListener('change', this.#onFormChange);
    this.elForm.removeEventListener('focusin', this.#onFormFocus);
    this.elForm.removeEventListener('submit', this.#onFormSubmit);
  }

  end() {
    if (!this.submitTime) {
      this.submitTime = Date.now();
    }
  }

  getFieldName(el: HTMLInputElement, maxLength: number = 40) {
    const group = el.getAttribute('data-group-label');
    const name = el.getAttribute('name') || el.getAttribute('aria-label');
    return ((group ? group + ': ' : '') + name).slice(0, maxLength);

  }

  isMobile(): boolean {
    const userAgentData =
      'userAgentData' in navigator && navigator.userAgentData
        ? (navigator.userAgentData as Record<string, unknown>)
        : {};
    if ('mobile' in userAgentData) {
      return userAgentData.mobile === true;
    }
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
    return /Mobi/i.test(window.navigator.userAgent);
  }

  isInput(el: HTMLElement) {
    return ['INPUT', 'SELECT', 'TEXTAREA'].includes(el.tagName);
  }

  onFormFieldChange(el: HTMLInputElement) {
    const name = this.getFieldName(el);
    if (name) {
      this.trackFieldChange(name);
    }
  }

  onFormChange(ev: Event) {
    const target = ev.target as HTMLInputElement | null;
    if (target && this.isInput(target)) {
      this.onFormFieldChange(target);
    }
  }

  onFormFocus(ev: FocusEvent) {
    const target = ev.target as HTMLInputElement | null;
    if (!this.startTime) {
      this.start();
    }
    if (target && this.isInput(target)) {
      const name = this.getFieldName(target);
      if (name) {
        this.#lastInputName = name;
      }
    }
  }

  onFormSubmit() {
    this.end();
  }

  onUnload() {
    if (
      this.loadTime <= Date.now() - this.viewTimeThresholdMs &&
      !this.submitTime
    ) {
      this.sendBeacon();
    }
  }

  async sendBeacon() {
    if (
      this.beaconUrl &&
      'sendBeacon' in navigator
    ) {
      try {
        navigator.sendBeacon(
          new URL(this.beaconUrl, location.origin),
          JSON.stringify(this.data())
        );
      } catch {
        // noop
      }
    }
  }

  start() {
    this.startTime = Date.now();
  }

  trackError(err: string | null) {
    this.error = err === null ? null : String(err);
  }

  trackFieldChange(name: string) {
    this.#fieldChanges[name] = (this.#fieldChanges[name] || 0) + 1;
  }
}
