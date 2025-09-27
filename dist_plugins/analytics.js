new TextEncoder();
function r() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
class n {
  /**
   * Constructs a new instance of the Plugin.
   * 
   * @param {PluginContext} context - The context provided to the plugin, containing necessary configurations and dependencies.
   */
  constructor(t) {
    this.context = t;
  }
  /**
   * A distinct name of the plugin. Every plugin must have it's own name.
   */
  static pluginName;
  /**
   * Registers a plugin class in the global `altchaPlugins` array.
   * Ensures the plugin is added only once.
   * 
   * @param {new(context: PluginContext) => Plugin} cls - The plugin class to register.
   */
  static register(t) {
    typeof globalThis.altchaPlugins != "object" && (globalThis.altchaPlugins = []), globalThis.altchaPlugins.includes(t) || globalThis.altchaPlugins.push(t);
  }
  /**
   * Clean up resources when the plugin is destroyed.
   * Override this method in subclasses to implement custom destruction logic.
   */
  destroy() {
  }
  /**
   * Callback triggered when an error changes.
   * Override this method in subclasses to handle error state changes.
   * 
   * @param {string | null} err - The error message or `null` if there's no error.
   */
  onErrorChange(t) {
  }
  /**
   * Callback triggered when the plugin state changes.
   * Override this method in subclasses to handle state changes.
   * 
   * @param {State} state - The new state of the plugin.
   */
  onStateChange(t) {
  }
}
class a extends n {
  static pluginName = "analytics";
  // HTML form element associated with the plugin
  #t;
  // Session instance for tracking analytics data
  #e;
  // Bound method for form submission handling
  #i = this.#s.bind(this);
  /**
   * Creates an instance of PluginAnalytics.
   *
   * @param {PluginContext} context - The context object containing plugin configurations.
   */
  constructor(t) {
    if (super(t), this.#t = this.context.el.closest("form"), this.#t) {
      let e = this.#t.getAttribute("data-beacon-url");
      const i = this.#t.getAttribute("action");
      !e && i && (e = i + "/beacon"), this.#t.addEventListener("submit", this.#i), this.#e = new h(this.#t, e);
    }
  }
  /**
   * Destroys the plugin instance, removing event listeners and cleaning up the session.
   */
  destroy() {
    this.#t?.removeEventListener("submit", this.#i), this.#e?.destroy();
  }
  /**
   * Tracks errors by forwarding them to the session instance.
   *
   * @param {string | null} err - The error message, or `null` if no error exists.
   */
  onErrorChange(t) {
    this.#e?.trackError(t);
  }
  /**
   * Handles form submission events, appending session data to the form if applicable.
   */
  #s() {
    if (this.#e && !this.#e.submitTime) {
      this.#e.end();
      const t = this.#e.dataAsBase64();
      this.context.dispatch("session", t);
      const e = document.createElement("input");
      e.type = "hidden", e.name = "__session", e.value = t, this.#t?.appendChild(e);
    }
  }
}
class h {
  /**
   * Creates a new Session instance.
   *
   * @param {HTMLFormElement} elForm - The form element being tracked.
   * @param {string | null} [beaconUrl=null] - The URL to send analytics data to.
   */
  constructor(t, e = null) {
    this.elForm = t, this.beaconUrl = e, window.addEventListener("unload", this.#n), this.elForm.addEventListener("change", this.#i), this.elForm.addEventListener("focusin", this.#s);
  }
  // Error message associated with the session
  error = null;
  // Timestamp when the form was loaded
  loadTime = Date.now();
  // Timestamp when the form was submitted
  submitTime = null;
  // Timestamp when the user started interacting with the form
  startTime = null;
  // Minimum time in milliseconds required to consider the form "viewed"
  viewTimeThresholdMs = 1500;
  // Tracks the number of changes made to each form field
  #t = {};
  // Name of the last input field focused by the user
  #e = null;
  // Bound method for handling form change events
  #i = this.onFormChange.bind(this);
  // Bound method for handling form focus events
  #s = this.onFormFocus.bind(this);
  // Bound method for handling the unload event
  #n = this.onUnload.bind(this);
  /**
   * Collects and returns analytics data about the form interaction.
   *
   * @returns {Record<string, unknown>} - An object containing analytics data.
   */
  data() {
    const t = Object.entries(this.#t);
    return {
      correction: t.length && t.filter(([e, i]) => i > 1).length / t.length || 0,
      dropoff: !this.submitTime && !this.error && this.#e ? this.#e : null,
      error: this.error,
      mobile: this.isMobile(),
      start: this.startTime,
      submit: this.submitTime,
      tz: r()
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
    } catch (t) {
      console.error("failed to encode ALTCHA session data to base64", t);
    }
    return "";
  }
  /**
   * Destroys the session, removing event listeners.
   */
  destroy() {
    window.removeEventListener("unload", this.#n), this.elForm.removeEventListener("change", this.#i), this.elForm.removeEventListener("focusin", this.#s);
  }
  /**
   * Marks the session as ended by recording the submission time.
   */
  end() {
    this.submitTime || (this.submitTime = Date.now());
  }
  /**
   * Retrieves the name of a form field, including a group label if available.
   *
   * @param {HTMLInputElement} el - The input element.
   * @param {number} [maxLength=40] - The maximum length of the field name.
   * @returns {string} - The field name, truncated to `maxLength` if necessary.
   */
  getFieldName(t, e = 40) {
    const i = t.getAttribute("data-group-label"), o = t.getAttribute("name") || t.getAttribute("aria-label");
    return ((i ? i + ": " : "") + o).slice(0, e);
  }
  /**
   * Determines if the current device is a mobile device.
   *
   * @returns {boolean} - `true` if the device is mobile, otherwise `false`.
   */
  isMobile() {
    const t = "userAgentData" in navigator && navigator.userAgentData ? navigator.userAgentData : {};
    return "mobile" in t ? t.mobile === !0 : /Mobi/i.test(window.navigator.userAgent);
  }
  /**
   * Checks if a given element is an input element (input, select, or textarea).
   *
   * @param {HTMLElement} el - The element to check.
   * @returns {boolean} - `true` if the element is an input, otherwise `false`.
   */
  isInput(t) {
    return ["INPUT", "SELECT", "TEXTAREA"].includes(t.tagName);
  }
  /**
   * Tracks changes to a specific form field.
   *
   * @param {HTMLInputElement} el - The input element that changed.
   */
  onFormFieldChange(t) {
    const e = this.getFieldName(t);
    e && this.trackFieldChange(e);
  }
  /**
   * Handles form change events, tracking changes to input fields.
   *
   * @param {Event} ev - The change event.
   */
  onFormChange(t) {
    const e = t.target;
    e && this.isInput(e) && this.onFormFieldChange(e);
  }
  /**
   * Handles form focus events, marking the session start time and tracking the last focused field.
   *
   * @param {FocusEvent} ev - The focus event.
   */
  onFormFocus(t) {
    const e = t.target;
    if (this.startTime || this.start(), e && this.isInput(e)) {
      const i = this.getFieldName(e);
      i && (this.#e = i);
    }
  }
  /**
   * Handles the window unload event, sending a beacon with session data if the form was viewed but not submitted.
   */
  onUnload() {
    this.loadTime <= Date.now() - this.viewTimeThresholdMs && !this.submitTime && this.sendBeacon();
  }
  /**
   * Sends a beacon with session data to the specified beacon URL.
   */
  async sendBeacon() {
    if (this.beaconUrl && "sendBeacon" in navigator)
      try {
        navigator.sendBeacon(
          new URL(this.beaconUrl, location.origin),
          JSON.stringify(this.data())
        );
      } catch {
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
  trackError(t) {
    this.error = t === null ? null : String(t);
  }
  /**
   * Tracks a change to a specific form field.
   *
   * @param {string} name - The name of the form field.
   */
  trackFieldChange(t) {
    this.#t[t] = (this.#t[t] || 0) + 1;
  }
}
n.register(a);
export {
  a as PluginAnalytics
};
