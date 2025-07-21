import { getTimeZone } from '../helpers';
import { Plugin } from '../plugin';
import type { PluginContext } from '../types';

/**
 * PluginAnalytics is a plugin for tracking user interaction data within a form.
 * It monitors form submissions, changes, and user interactions to collect analytics data.
 *
 * @deprecated
 */
export class PluginAnalytics extends Plugin {
  static pluginName = 'analytics';

  // HTML form element associated with the plugin
  #elForm?: HTMLFormElement | null;

  // Session instance for tracking analytics data
  #session?: Session;

  // Bound method for form submission handling
  readonly #_onFormSubmit = this.#onFormSubmit.bind(this);

  /**
   * Creates an instance of PluginAnalytics.
   *
   * @param {PluginContext} context - The context object containing plugin configurations.
   */
  constructor(context: PluginContext) {
    super(context);
    this.#elForm = this.context.el.closest('form');
    if (this.#elForm) {
      let beaconUrl = this.#elForm.getAttribute('data-beacon-url');
      const action = this.#elForm.getAttribute('action');
      if (!beaconUrl && action) {
        beaconUrl = action + '/beacon';
      }
      this.#elForm.addEventListener('submit', this.#_onFormSubmit);
      this.#session = new Session(this.#elForm, beaconUrl);
    }
  }

  /**
   * Destroys the plugin instance, removing event listeners and cleaning up the session.
   */
  destroy() {
    this.#elForm?.removeEventListener('submit', this.#_onFormSubmit);
    this.#session?.destroy();
  }

  /**
   * Tracks errors by forwarding them to the session instance.
   *
   * @param {string | null} err - The error message, or `null` if no error exists.
   */
  onErrorChange(err: string | null): void {
    this.#session?.trackError(err);
  }

  /**
   * Handles form submission events, appending session data to the form if applicable.
   */
  #onFormSubmit() {
    if (this.#session && !this.#session.submitTime) {
      this.#session.end();
      const payload = this.#session.dataAsBase64();
      this.context.dispatch('session', payload);
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = '__session';
      input.value = payload;
      this.#elForm?.appendChild(input);
    }
  }
}

/**
 * The Session class is responsible for tracking various metrics related to form interaction,
 * such as field changes, error states, and submission times.
 */
class Session {
  // Error message associated with the session
  error: string | null = null;

  // Timestamp when the form was loaded
  readonly loadTime: number = Date.now();

  // Timestamp when the form was submitted
  submitTime: number | null = null;

  // Timestamp when the user started interacting with the form
  startTime: number | null = null;

  // Minimum time in milliseconds required to consider the form "viewed"
  viewTimeThresholdMs: number = 1500;

  // Tracks the number of changes made to each form field
  readonly #fieldChanges: Record<string, number> = {};

  // Name of the last input field focused by the user
  #lastInputName: string | null = null;

  // Bound method for handling form change events
  readonly #onFormChange = this.onFormChange.bind(this);

  // Bound method for handling form focus events
  readonly #onFormFocus = this.onFormFocus.bind(this);

  // Bound method for handling the unload event
  readonly #onUnload = this.onUnload.bind(this);

  /**
   * Creates a new Session instance.
   *
   * @param {HTMLFormElement} elForm - The form element being tracked.
   * @param {string | null} [beaconUrl=null] - The URL to send analytics data to.
   */
  constructor(
    readonly elForm: HTMLFormElement,
    public beaconUrl: string | null = null
  ) {
    window.addEventListener('unload', this.#onUnload);
    this.elForm.addEventListener('change', this.#onFormChange);
    this.elForm.addEventListener('focusin', this.#onFormFocus);
  }

  /**
   * Collects and returns analytics data about the form interaction.
   *
   * @returns {Record<string, unknown>} - An object containing analytics data.
   */
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

  /**
   * Encodes the session data as a base64 string.
   *
   * @returns {string} - The base64-encoded session data.
   */
  dataAsBase64() {
    try {
      return btoa(JSON.stringify(this.data()));
    } catch (err) {
      console.error('failed to encode ALTCHA session data to base64', err);
    }
    return '';
  }

  /**
   * Destroys the session, removing event listeners.
   */
  destroy() {
    window.removeEventListener('unload', this.#onUnload);
    this.elForm.removeEventListener('change', this.#onFormChange);
    this.elForm.removeEventListener('focusin', this.#onFormFocus);
  }

  /**
   * Marks the session as ended by recording the submission time.
   */
  end() {
    if (!this.submitTime) {
      this.submitTime = Date.now();
    }
  }

  /**
   * Retrieves the name of a form field, including a group label if available.
   *
   * @param {HTMLInputElement} el - The input element.
   * @param {number} [maxLength=40] - The maximum length of the field name.
   * @returns {string} - The field name, truncated to `maxLength` if necessary.
   */
  getFieldName(el: HTMLInputElement, maxLength: number = 40) {
    const group = el.getAttribute('data-group-label');
    const name = el.getAttribute('name') || el.getAttribute('aria-label');
    return ((group ? group + ': ' : '') + name).slice(0, maxLength);
  }

  /**
   * Determines if the current device is a mobile device.
   *
   * @returns {boolean} - `true` if the device is mobile, otherwise `false`.
   */
  isMobile(): boolean {
    const userAgentData =
      'userAgentData' in navigator && navigator.userAgentData
        ? (navigator.userAgentData as Record<string, unknown>)
        : {};
    if ('mobile' in userAgentData) {
      return userAgentData.mobile === true;
    }
    // Fallback to user agent string analysis for mobile detection
    return /Mobi/i.test(window.navigator.userAgent);
  }

  /**
   * Checks if a given element is an input element (input, select, or textarea).
   *
   * @param {HTMLElement} el - The element to check.
   * @returns {boolean} - `true` if the element is an input, otherwise `false`.
   */
  isInput(el: HTMLElement) {
    return ['INPUT', 'SELECT', 'TEXTAREA'].includes(el.tagName);
  }

  /**
   * Tracks changes to a specific form field.
   *
   * @param {HTMLInputElement} el - The input element that changed.
   */
  onFormFieldChange(el: HTMLInputElement) {
    const name = this.getFieldName(el);
    if (name) {
      this.trackFieldChange(name);
    }
  }

  /**
   * Handles form change events, tracking changes to input fields.
   *
   * @param {Event} ev - The change event.
   */
  onFormChange(ev: Event) {
    const target = ev.target as HTMLInputElement | null;
    if (target && this.isInput(target)) {
      this.onFormFieldChange(target);
    }
  }

  /**
   * Handles form focus events, marking the session start time and tracking the last focused field.
   *
   * @param {FocusEvent} ev - The focus event.
   */
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

  /**
   * Handles the window unload event, sending a beacon with session data if the form was viewed but not submitted.
   */
  onUnload() {
    if (
      this.loadTime <= Date.now() - this.viewTimeThresholdMs &&
      !this.submitTime
    ) {
      this.sendBeacon();
    }
  }

  /**
   * Sends a beacon with session data to the specified beacon URL.
   */
  async sendBeacon() {
    if (this.beaconUrl && 'sendBeacon' in navigator) {
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

  /**
   * Marks the session as started by recording the start time.
   */
  start() {
    this.startTime = Date.now();
  }

  /**
   * Tracks an error associated with the session.
   *
   * @param {string | null} err - The error message, or `null` if no error exists.
   */
  trackError(err: string | null) {
    this.error = err === null ? null : String(err);
  }

  /**
   * Tracks a change to a specific form field.
   *
   * @param {string} name - The name of the form field.
   */
  trackFieldChange(name: string) {
    this.#fieldChanges[name] = (this.#fieldChanges[name] || 0) + 1;
  }
}

// Register the PluginAnalytics plugin
Plugin.register(PluginAnalytics);
