var y = Object.defineProperty;
var p = (s) => {
  throw TypeError(s);
};
var C = (s, t, e) => t in s ? y(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var l = (s, t, e) => C(s, typeof t != "symbol" ? t + "" : t, e), F = (s, t, e) => t.has(s) || p("Cannot " + e);
var i = (s, t, e) => (F(s, t, "read from private field"), e ? e.call(s) : t.get(s)), r = (s, t, e) => t.has(s) ? p("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(s) : t.set(s, e), T = (s, t, e, n) => (F(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), E = (s, t, e) => (F(s, t, "access private method"), e);
new TextEncoder();
function L() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
class v {
  /**
   * Constructs a new instance of the Plugin.
   * 
   * @param {PluginContext} context - The context provided to the plugin, containing necessary configurations and dependencies.
   */
  constructor(t) {
    this.context = t;
  }
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
/**
 * A distinct name of the plugin. Every plugin must have it's own name.
 */
l(v, "pluginName");
var o, a, m, f, w;
class A extends v {
  /**
   * Creates an instance of PluginAnalytics.
   *
   * @param {PluginContext} context - The context object containing plugin configurations.
   */
  constructor(e) {
    super(e);
    r(this, f);
    // HTML form element associated with the plugin
    r(this, o);
    // Session instance for tracking analytics data
    r(this, a);
    // Bound method for form submission handling
    r(this, m, E(this, f, w).bind(this));
    if (T(this, o, this.context.el.closest("form")), i(this, o)) {
      let n = i(this, o).getAttribute("data-beacon-url");
      const h = i(this, o).getAttribute("action");
      !n && h && (n = h + "/beacon"), i(this, o).addEventListener("submit", i(this, m)), T(this, a, new N(i(this, o), n));
    }
  }
  /**
   * Destroys the plugin instance, removing event listeners and cleaning up the session.
   */
  destroy() {
    var e, n;
    (e = i(this, o)) == null || e.removeEventListener("submit", i(this, m)), (n = i(this, a)) == null || n.destroy();
  }
  /**
   * Tracks errors by forwarding them to the session instance.
   *
   * @param {string | null} err - The error message, or `null` if no error exists.
   */
  onErrorChange(e) {
    var n;
    (n = i(this, a)) == null || n.trackError(e);
  }
}
o = new WeakMap(), a = new WeakMap(), m = new WeakMap(), f = new WeakSet(), /**
 * Handles form submission events, appending session data to the form if applicable.
 */
w = function() {
  var e;
  if (i(this, a) && !i(this, a).submitTime) {
    i(this, a).end();
    const n = i(this, a).dataAsBase64();
    this.context.dispatch("session", n);
    const h = document.createElement("input");
    h.type = "hidden", h.name = "__session", h.value = n, (e = i(this, o)) == null || e.appendChild(h);
  }
}, l(A, "pluginName", "analytics");
var c, u, d, g, b;
class N {
  /**
   * Creates a new Session instance.
   *
   * @param {HTMLFormElement} elForm - The form element being tracked.
   * @param {string | null} [beaconUrl=null] - The URL to send analytics data to.
   */
  constructor(t, e = null) {
    // Error message associated with the session
    l(this, "error", null);
    // Timestamp when the form was loaded
    l(this, "loadTime", Date.now());
    // Timestamp when the form was submitted
    l(this, "submitTime", null);
    // Timestamp when the user started interacting with the form
    l(this, "startTime", null);
    // Minimum time in milliseconds required to consider the form "viewed"
    l(this, "viewTimeThresholdMs", 1500);
    // Tracks the number of changes made to each form field
    r(this, c, {});
    // Name of the last input field focused by the user
    r(this, u, null);
    // Bound method for handling form change events
    r(this, d, this.onFormChange.bind(this));
    // Bound method for handling form focus events
    r(this, g, this.onFormFocus.bind(this));
    // Bound method for handling the unload event
    r(this, b, this.onUnload.bind(this));
    this.elForm = t, this.beaconUrl = e, window.addEventListener("unload", i(this, b)), this.elForm.addEventListener("change", i(this, d)), this.elForm.addEventListener("focusin", i(this, g));
  }
  /**
   * Collects and returns analytics data about the form interaction.
   *
   * @returns {Record<string, unknown>} - An object containing analytics data.
   */
  data() {
    const t = Object.entries(i(this, c));
    return {
      correction: t.length && t.filter(([e, n]) => n > 1).length / t.length || 0,
      dropoff: !this.submitTime && !this.error && i(this, u) ? i(this, u) : null,
      error: this.error,
      mobile: this.isMobile(),
      start: this.startTime,
      submit: this.submitTime,
      tz: L()
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
    window.removeEventListener("unload", i(this, b)), this.elForm.removeEventListener("change", i(this, d)), this.elForm.removeEventListener("focusin", i(this, g));
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
    const n = t.getAttribute("data-group-label"), h = t.getAttribute("name") || t.getAttribute("aria-label");
    return ((n ? n + ": " : "") + h).slice(0, e);
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
      const n = this.getFieldName(e);
      n && T(this, u, n);
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
    i(this, c)[t] = (i(this, c)[t] || 0) + 1;
  }
}
c = new WeakMap(), u = new WeakMap(), d = new WeakMap(), g = new WeakMap(), b = new WeakMap();
v.register(A);
export {
  A as PluginAnalytics
};
