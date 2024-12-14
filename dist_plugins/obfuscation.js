var D = Object.defineProperty;
var v = (t) => {
  throw TypeError(t);
};
var V = (t, e, i) => e in t ? D(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var f = (t, e, i) => V(t, typeof e != "symbol" ? e + "" : e, i), I = (t, e, i) => e.has(t) || v("Cannot " + i);
var g = (t, e, i) => (I(t, e, "read from private field"), i ? i.call(t) : e.get(t)), p = (t, e, i) => e.has(t) ? v("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i);
var E = (t, e, i) => (I(t, e, "access private method"), i);
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
var c = /* @__PURE__ */ ((t) => (t.ERROR = "error", t.VERIFIED = "verified", t.VERIFYING = "verifying", t.UNVERIFIED = "unverified", t.EXPIRED = "expired", t))(c || {}), u, a, P, C;
class x extends y {
  /**
   * Creates an instance of PluginObfuscation.
   *
   * @param {PluginContext} context - The context object containing plugin configurations.
   */
  constructor(i) {
    var n, o;
    super(i);
    p(this, a);
    // The button element associated with revealing the obfuscated data
    f(this, "elButton");
    // Bound method for handling button click events
    p(this, u, E(this, a, P).bind(this));
    const s = i.el;
    this.elButton = ((n = s.parentElement) == null ? void 0 : n.querySelector("[data-clarify-button]")) || ((o = s.parentElement) == null ? void 0 : o.querySelector("button, a")), this.elButton && this.elButton.addEventListener("click", g(this, u));
  }
  /**
   * Destroys the plugin instance, removing event listeners.
   */
  destroy() {
    this.elButton && this.elButton.removeEventListener("click", g(this, u));
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
      solve: F,
      setState: m
    } = this.context, { delay: T, floating: k, maxnumber: R, obfuscated: B } = s();
    if (this.elButton && !n() && o(this.elButton), !B) {
      m(c.ERROR);
      return;
    }
    d(c.VERIFYING), await new Promise((h) => setTimeout(h, T || 0));
    const [b, N] = B.split("?");
    let l = new URLSearchParams(N || "").get("key") || void 0;
    if (l) {
      const h = l.match(/^\(prompt:?(.*)\)$/);
      h && (l = prompt(h[1] || "Enter Key:") || void 0);
    }
    const { solution: r } = await F({
      obfuscated: b,
      key: l,
      maxnumber: R
    });
    console.log(r, R, b, l), r && "clearText" in r ? (E(this, a, C).call(this, r.clearText), m(c.VERIFIED), this.context.dispatch("cleartext", r.clearText), k && i && (i.style.display = "none")) : m(c.ERROR, "Unable to decrypt data.");
  }
}
u = new WeakMap(), a = new WeakSet(), /**
 * Handles the button click event, triggering the clarification process.
 *
 * @param {Event} ev - The click event.
 */
P = function(i) {
  i.preventDefault();
  const { auto: s } = this.context.getConfiguration();
  s === "off" || this.clarify();
}, /**
 * Renders the clear text data by creating an appropriate element (e.g., a link or text node).
 *
 * @param {string} clearText - The decrypted clear text data to render.
 */
C = function(i) {
  var o;
  const s = i.match(/^(mailto|tel|sms|https?):/);
  let n;
  if (s) {
    const [d] = i.slice(i.indexOf(":") + 1).replace(/^\/\//, "").split("?");
    n = document.createElement("a"), n.href = i, n.innerHTML = d;
  } else
    n = document.createTextNode(i);
  this.elButton && n && (this.elButton.after(n), (o = this.elButton.parentElement) == null || o.removeChild(this.elButton));
}, f(x, "pluginName", "obfuscation");
y.register(x);
export {
  x as PluginObfuscation
};
