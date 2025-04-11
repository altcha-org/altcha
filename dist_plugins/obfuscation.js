var N = Object.defineProperty;
var B = (t) => {
  throw TypeError(t);
};
var O = (t, e, i) => e in t ? N(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var f = (t, e, i) => O(t, typeof e != "symbol" ? e + "" : e, i), b = (t, e, i) => e.has(t) || B("Cannot " + i);
var p = (t, e, i) => (b(t, e, "read from private field"), i ? i.call(t) : e.get(t)), g = (t, e, i) => e.has(t) ? B("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i);
var E = (t, e, i) => (b(t, e, "access private method"), i);
class y {
  /**
   * Constructs a new instance of the Plugin.
   * 
   * @param {PluginContext} context - The context provided to the plugin, containing necessary configurations and dependencies.
   */
  constructor(e) {
    this.context = e;
  }
  /**
   * Registers a plugin class in the global `altchaPlugins` array.
   * Ensures the plugin is added only once.
   * 
   * @param {new(context: PluginContext) => Plugin} cls - The plugin class to register.
   */
  static register(e) {
    typeof globalThis.altchaPlugins != "object" && (globalThis.altchaPlugins = []), globalThis.altchaPlugins.includes(e) || globalThis.altchaPlugins.push(e);
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
  onErrorChange(e) {
  }
  /**
   * Callback triggered when the plugin state changes.
   * Override this method in subclasses to handle state changes.
   * 
   * @param {State} state - The new state of the plugin.
   */
  onStateChange(e) {
  }
}
/**
 * A distinct name of the plugin. Every plugin must have it's own name.
 */
f(y, "pluginName");
var l = /* @__PURE__ */ ((t) => (t.CODE = "code", t.ERROR = "error", t.VERIFIED = "verified", t.VERIFYING = "verifying", t.UNVERIFIED = "unverified", t.EXPIRED = "expired", t))(l || {}), r, a, I, x;
class v extends y {
  /**
   * Creates an instance of PluginObfuscation.
   *
   * @param {PluginContext} context - The context object containing plugin configurations.
   */
  constructor(i) {
    var n, o;
    super(i);
    g(this, a);
    // The button element associated with revealing the obfuscated data
    f(this, "elButton");
    // Bound method for handling button click events
    g(this, r, E(this, a, I).bind(this));
    const s = i.el;
    this.elButton = ((n = s.parentElement) == null ? void 0 : n.querySelector("[data-clarify-button]")) || ((o = s.parentElement) == null ? void 0 : o.querySelector("button, a")), this.elButton && this.elButton.addEventListener("click", p(this, r));
  }
  /**
   * Destroys the plugin instance, removing event listeners.
   */
  destroy() {
    this.elButton && this.elButton.removeEventListener("click", p(this, r));
  }
  /**
   * Handles the clarification process by decrypting the obfuscated data and rendering the clear text.
   */
  async clarify() {
    const {
      el: i,
      getConfiguration: s,
      getFloatingAnchor: n,
      setFloatingAnchor: o,
      reset: d,
      solve: C,
      setState: m
    } = this.context, { delay: P, floating: F, maxnumber: T, obfuscated: R } = s();
    if (this.elButton && !n() && o(this.elButton), !R) {
      m(l.ERROR);
      return;
    }
    d(l.VERIFYING), await new Promise((h) => setTimeout(h, P || 0));
    const [k, D] = R.split("?");
    let c = new URLSearchParams(D || "").get("key") || void 0;
    if (c) {
      const h = c.match(/^\(prompt:?(.*)\)$/);
      h && (c = prompt(h[1] || "Enter Key:") || void 0);
    }
    const { solution: u } = await C({
      obfuscated: k,
      key: c,
      maxnumber: T
    });
    u && "clearText" in u ? (E(this, a, x).call(this, u.clearText), m(l.VERIFIED), this.context.dispatch("cleartext", u.clearText), F && i && (i.style.display = "none")) : m(l.ERROR, "Unable to decrypt data.");
  }
}
r = new WeakMap(), a = new WeakSet(), /**
 * Handles the button click event, triggering the clarification process.
 *
 * @param {Event} ev - The click event.
 */
I = function(i) {
  i.preventDefault();
  const { auto: s } = this.context.getConfiguration();
  s === "off" || this.clarify();
}, /**
 * Renders the clear text data by creating an appropriate element (e.g., a link or text node).
 *
 * @param {string} clearText - The decrypted clear text data to render.
 */
x = function(i) {
  var o;
  const s = i.match(/^(mailto|tel|sms|https?):/);
  let n;
  if (s) {
    const [d] = i.slice(i.indexOf(":") + 1).replace(/^\/\//, "").split("?");
    n = document.createElement("a"), n.href = i, n.innerHTML = d;
  } else
    n = document.createTextNode(i);
  this.elButton && n && (this.elButton.after(n), (o = this.elButton.parentElement) == null || o.removeChild(this.elButton));
}, f(v, "pluginName", "obfuscation");
y.register(v);
export {
  v as PluginObfuscation
};
