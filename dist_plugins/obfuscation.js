class h {
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
var s = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(s || {});
class R extends h {
  static pluginName = "obfuscation";
  // The button element associated with revealing the obfuscated data
  elButton;
  // Bound method for handling button click events
  #t = this.#e.bind(this);
  /**
   * Creates an instance of PluginObfuscation.
   *
   * @param {PluginContext} context - The context object containing plugin configurations.
   */
  constructor(t) {
    super(t);
    const i = t.el;
    this.elButton = i.parentElement?.querySelector("[data-clarify-button]") || i.parentElement?.querySelector("button, a"), this.elButton && this.elButton.addEventListener("click", this.#t);
  }
  /**
   * Destroys the plugin instance, removing event listeners.
   */
  destroy() {
    this.elButton && this.elButton.removeEventListener("click", this.#t);
  }
  /**
   * Handles the clarification process by decrypting the obfuscated data and rendering the clear text.
   */
  async clarify() {
    const {
      el: t,
      getConfiguration: i,
      getFloatingAnchor: n,
      setFloatingAnchor: r,
      reset: f,
      solve: d,
      setState: c
    } = this.context, { delay: g, floating: m, maxnumber: p, obfuscated: u } = i();
    if (this.elButton && !n() && r(this.elButton), !u) {
      c(s.ERROR);
      return;
    }
    f(s.VERIFYING), await new Promise((l) => setTimeout(l, g || 0));
    const [E, y] = u.split("?");
    let o = new URLSearchParams(y || "").get("key") || void 0;
    if (o) {
      const l = o.match(/^\(prompt:?(.*)\)$/);
      l && (o = prompt(l[1] || "Enter Key:") || void 0);
    }
    const { solution: a } = await d({
      obfuscated: E,
      key: o,
      maxnumber: p
    });
    a && "clearText" in a ? (this.#i(a.clearText), c(s.VERIFIED), this.context.dispatch("cleartext", a.clearText), m && t && (t.style.display = "none")) : c(s.ERROR, "Unable to decrypt data.");
  }
  /**
   * Handles the button click event, triggering the clarification process.
   *
   * @param {Event} ev - The click event.
   */
  #e(t) {
    t.preventDefault();
    const { auto: i } = this.context.getConfiguration();
    i === "off" || this.clarify();
  }
  /**
   * Renders the clear text data by creating an appropriate element (e.g., a link or text node).
   *
   * @param {string} clearText - The decrypted clear text data to render.
   */
  #i(t) {
    const i = t.match(/^(mailto|tel|sms|https?):/);
    let n;
    if (i) {
      const [r] = t.slice(t.indexOf(":") + 1).replace(/^\/\//, "").split("?");
      n = document.createElement("a"), n.href = t, n.innerHTML = r;
    } else
      n = document.createTextNode(t);
    this.elButton && n && (this.elButton.after(n), this.elButton.parentElement?.removeChild(this.elButton));
  }
}
h.register(R);
export {
  R as PluginObfuscation
};
