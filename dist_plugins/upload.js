var V = Object.defineProperty;
var K = (t) => {
  throw TypeError(t);
};
var J = (t, n, e) => n in t ? V(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var p = (t, n, e) => J(t, typeof n != "symbol" ? n + "" : n, e), v = (t, n, e) => n.has(t) || K("Cannot " + e);
var h = (t, n, e) => (v(t, n, "read from private field"), e ? e.call(t) : n.get(t)), g = (t, n, e) => n.has(t) ? K("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(t) : n.set(t, e);
var u = (t, n, e) => (v(t, n, "access private method"), e);
const b = {
  generateKey: X,
  exportKey: Q,
  importKey: W,
  decrypt: ee,
  encrypt: Z
};
async function X(t = 256) {
  return crypto.subtle.generateKey({
    name: "AES-GCM",
    length: t
  }, !0, ["encrypt", "decrypt"]);
}
async function Q(t) {
  return new Uint8Array(await crypto.subtle.exportKey("raw", t));
}
async function W(t) {
  return crypto.subtle.importKey("raw", t, {
    name: "AES-GCM"
  }, !0, ["encrypt", "decrypt"]);
}
async function Z(t, n, e = 16) {
  const i = crypto.getRandomValues(new Uint8Array(e));
  return {
    encrypted: new Uint8Array(await crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: i
    }, t, n)),
    iv: i
  };
}
async function ee(t, n, e) {
  return new Uint8Array(await crypto.subtle.decrypt({
    name: "AES-GCM",
    iv: e
  }, t, n));
}
function te(t, n = !1) {
  return n && (t = t.replace(/_/g, "/").replace(/-/g, "+") + "=".repeat(3 - (3 + t.length) % 4)), Uint8Array.from(atob(t), (e) => e.charCodeAt(0));
}
function S(t, n = !1) {
  const e = btoa(String.fromCharCode(...t));
  return n ? e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : e;
}
function x(t, n = 80) {
  let e = "";
  for (; t.length > 0; )
    e += t.slice(0, n) + `
`, t = t.slice(n);
  return e;
}
function L(t) {
  return te(t.split(/\r?\n/).filter((n) => !n.startsWith("-----")).join(""));
}
const d = "RSA-OAEP", w = "SHA-256", ne = 2048, re = new Uint8Array([1, 0, 1]), ie = {
  generateKeyPair: se,
  encrypt: oe,
  decrypt: ae,
  exportPrivateKey: C,
  exportPrivateKeyPem: le,
  exportPublicKey: U,
  exportPublicKeyPem: ce,
  exportPublicKeyFromPrivateKey: ue,
  importPrivateKey: z,
  importPrivateKeyPem: pe,
  importPublicKey: I,
  importPublicKeyPem: N
};
async function se() {
  return crypto.subtle.generateKey({
    name: d,
    modulusLength: ne,
    publicExponent: re,
    hash: w
  }, !0, ["encrypt", "decrypt"]);
}
async function oe(t, n) {
  return new Uint8Array(await crypto.subtle.encrypt({
    name: d
  }, t, n));
}
async function ae(t, n) {
  return new Uint8Array(await crypto.subtle.decrypt({
    name: d
  }, t, n));
}
async function U(t) {
  return new Uint8Array(await crypto.subtle.exportKey("spki", t));
}
async function C(t) {
  return new Uint8Array(await crypto.subtle.exportKey("pkcs8", t));
}
async function ce(t) {
  return `-----BEGIN PUBLIC KEY-----
` + x(S(await U(t)), 64) + "-----END PUBLIC KEY-----";
}
async function le(t) {
  return `-----BEGIN PRIVATE KEY-----
` + x(S(await C(t)), 64) + "-----END PRIVATE KEY-----";
}
async function I(t) {
  return crypto.subtle.importKey("spki", t, {
    name: d,
    hash: w
  }, !0, ["encrypt"]);
}
async function N(t) {
  return I(L(t));
}
async function z(t) {
  return crypto.subtle.importKey("pkcs8", t, {
    name: d,
    hash: w
  }, !0, ["decrypt"]);
}
async function pe(t) {
  return z(L(t));
}
async function ue(t) {
  const n = await crypto.subtle.exportKey("jwk", t);
  delete n.d, delete n.dp, delete n.dq, delete n.q, delete n.qi, n.key_ops = ["encrypt"];
  const e = await crypto.subtle.importKey("jwk", n, {
    name: d,
    hash: w
  }, !0, ["encrypt"]);
  return U(e);
}
const ye = new Uint8Array([1, 0, 1]), de = 256, he = 16;
async function fe(t, n, e = {}) {
  const { aesIVLength: i = he, aesKeyLength: r = de } = e, o = await b.generateKey(r), { encrypted: c, iv: s } = await b.encrypt(o, n, i), l = await ie.encrypt(t, await b.exportKey(o));
  return new Uint8Array([
    ...ye,
    ...new Uint8Array([l.length]),
    ...new Uint8Array([s.length]),
    ...l,
    ...s,
    ...c
  ]);
}
class A {
  /**
   * Constructs a new instance of the Plugin.
   * 
   * @param {PluginContext} context - The context provided to the plugin, containing necessary configurations and dependencies.
   */
  constructor(n) {
    this.context = n;
  }
  /**
   * Registers a plugin class in the global `altchaPlugins` array.
   * Ensures the plugin is added only once.
   * 
   * @param {new(context: PluginContext) => Plugin} cls - The plugin class to register.
   */
  static register(n) {
    typeof globalThis.altchaPlugins != "object" && (globalThis.altchaPlugins = []), globalThis.altchaPlugins.includes(n) || globalThis.altchaPlugins.push(n);
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
  onErrorChange(n) {
  }
  /**
   * Callback triggered when the plugin state changes.
   * Override this method in subclasses to handle state changes.
   * 
   * @param {State} state - The new state of the plugin.
   */
  onStateChange(n) {
  }
}
/**
 * A distinct name of the plugin. Every plugin must have it's own name.
 */
p(A, "pluginName");
var f, m, a, _, j, k, E, H, R, q, P, O, B, G;
class T extends A {
  /**
   * Constructor initializes the plugin, setting up event listeners on the form.
   *
   * @param {PluginContext} context - Plugin context providing access to the element, configuration, and utility methods.
   */
  constructor(e) {
    super(e);
    g(this, a);
    p(this, "pendingFiles", []);
    p(this, "uploadHandles", []);
    p(this, "elForm");
    g(this, f, u(this, a, R).bind(this));
    g(this, m, u(this, a, q).bind(this));
    this.elForm = this.context.el.closest("form"), this.elForm && (this.elForm.addEventListener("change", h(this, f)), this.elForm.addEventListener("submit", h(this, m), {
      capture: !0
    }));
  }
  /**
   * Adds a file to the pending files list for upload.
   *
   * @param {string} fieldName - The field name associated with the file input.
   * @param {File} file - The file to be uploaded.
   */
  addFile(e, i) {
    this.pendingFiles.find(([r, o]) => r === e && o === i) || this.pendingFiles.push([e, i]);
  }
  /**
   * Cleans up event listeners and other resources when the plugin is destroyed.
   */
  destroy() {
    this.elForm && (this.elForm.removeEventListener("change", h(this, f)), this.elForm.removeEventListener("submit", h(this, m)));
  }
  /**
   * Uploads all pending files in the list.
   */
  async uploadPendingFiles() {
    var i;
    const e = async () => {
      const r = this.pendingFiles[0];
      if (r && await u(this, a, P).call(this, u(this, a, j).call(this, r)), this.pendingFiles.length)
        return e();
    };
    await e(), this.pendingFiles.length === 0 && (u(this, a, _).call(this), (i = this.elForm) == null || i.requestSubmit());
  }
}
f = new WeakMap(), m = new WeakMap(), a = new WeakSet(), /**
 * Adds hidden input fields to the form containing the file IDs of uploaded files.
 */
_ = function() {
  var i, r, o;
  const e = this.uploadHandles.reduce(
    (c, s) => (c[s.fieldName] || (c[s.fieldName] = []), s.fileId && c[s.fieldName].push(s.fileId), c),
    {}
  );
  for (const c in e) {
    const s = document.createElement("input");
    s.name = c, s.type = "hidden", s.value = e[c].join(","), (r = (i = this.elForm) == null ? void 0 : i.querySelector(`[name="${c}"]`)) == null || r.setAttribute("disabled", "disabled"), (o = this.elForm) == null || o.appendChild(s);
  }
}, /**
 * Creates an upload handle for the specified pending file.
 *
 * @param {[string, File]} pendingFile - The field name and file to be uploaded.
 * @returns {UploadHandle} The created upload handle.
 * @throws Will throw an error if the upload handle cannot be created.
 */
j = function(e) {
  const i = this.pendingFiles.findIndex(
    ([o, c]) => o === e[0] && c === e[1]
  );
  if (i < 0)
    throw new Error("Cannot create upload handle.");
  const r = new me(e[0], e[1]);
  return this.uploadHandles.push(r), this.pendingFiles.splice(i, 1), u(this, a, k).call(this, r), u(this, a, E).call(this), r;
}, /**
 * Dispatches a custom event when a file upload starts.
 *
 * @param {UploadHandle} handle - The upload handle associated with the file upload.
 */
k = function(e) {
  this.context.dispatch("upload", { handle: e });
}, /**
 * Dispatches a custom event to track the progress of ongoing file uploads.
 */
E = function() {
  const e = this.pendingFiles.reduce((r, [o, c]) => r + c.size, 0) + this.uploadHandles.reduce((r, { uploadSize: o }) => r + o, 0), i = this.uploadHandles.reduce(
    (r, { loaded: o }) => r + o,
    0
  );
  this.context.dispatch("uploadprogress", {
    bytesLoaded: i,
    bytesTotal: e,
    pendingFiles: this.pendingFiles,
    uploadHandles: this.uploadHandles
  });
}, /**
 * Retrieves the upload URL from the form's attributes.
 *
 * @returns {string | null} The upload URL, or null if not found.
 */
H = function() {
  if (this.elForm) {
    const e = this.elForm.getAttribute("action");
    return this.elForm.getAttribute("data-upload-url") || e + "/file";
  }
  return null;
}, /**
 * Handles the form's change event, adding files to the pending files list.
 *
 * @param {Event} ev - The change event.
 */
R = function(e) {
  const i = e.target;
  if (i && i.type === "file") {
    const r = i.files;
    if (r != null && r.length)
      for (const o of r)
        this.addFile(i.name, o);
  }
}, /**
 * Handles the form's submit event, preventing submission until all pending files are uploaded.
 *
 * @param {SubmitEvent} ev - The submit event.
 */
q = function(e) {
  this.pendingFiles.length && (e.preventDefault(), e.stopPropagation(), this.uploadPendingFiles());
}, P = async function(e, i) {
  const r = u(this, a, H).call(this);
  if (!r)
    throw new Error("Upload url not specified.");
  const o = {
    "content-type": "application/json"
  };
  i && (o.authorization = "Altcha payload=" + i);
  const c = await fetch(r, {
    body: JSON.stringify({
      name: e.file.name || "file",
      size: e.file.size,
      type: e.file.type || "application/octet-stream"
    }),
    credentials: "include",
    headers: o,
    method: "POST"
  });
  if (c.status === 401)
    return u(this, a, O).call(this, c, e);
  if (c.status !== 200)
    throw new Error(`Unexpected server response ${c.status}.`);
  const s = await c.json();
  let l = e.file;
  if (s.encrypted && s.encryptionPublicKey) {
    const y = await N(s.encryptionPublicKey), M = await new Response(
      new ReadableStream({
        async start(F) {
          const $ = e.file.stream().getReader();
          for (; ; ) {
            const { done: Y, value: D } = await $.read();
            if (Y)
              break;
            F.enqueue(D);
          }
          F.close();
        }
      })
    ).arrayBuffer();
    l = await fe(y, new Uint8Array(M));
  }
  return e.uploadSize = l instanceof Uint8Array ? l.byteLength : e.file.size, await u(this, a, G).call(this, s.uploadUrl, e, l, {
    "content-type": e.file.type || "application/octet-stream"
  }), s.finalizeUrl && await u(this, a, B).call(this, s.finalizeUrl, e.uploadSize), e.fileId = s.fileId, e.resolve({
    encrypted: s.encrypted,
    fileId: s.fileId
  }), e.promise;
}, O = async function(e, i) {
  var r;
  try {
    const o = e.headers.get("www-authenticate"), c = (r = o == null ? void 0 : o.match(/challenge=(.*),/)) == null ? void 0 : r[1];
    if (!c)
      throw new Error(
        "Unable to retrieve altcha challenge from www-authenticate header."
      );
    const s = JSON.parse(c);
    if (s && "challenge" in s) {
      const { solution: l } = await this.context.solve(s);
      if (l && "number" in l)
        return u(this, a, P).call(this, i, btoa(
          JSON.stringify({
            ...s,
            number: l.number
          })
        ));
      throw new Error("Invalid challenge solution.");
    }
  } catch (o) {
    throw this.context.log(o), new Error("Unable to solve altcha challenge for upload.");
  }
}, B = async function(e, i) {
  const r = await fetch(e, {
    body: JSON.stringify({
      uploadedBytes: i
    }),
    headers: {
      "content-type": "application/json"
    },
    method: "POST"
  });
  if (r.status > 204)
    throw new Error(`Unexpected server response ${r.status}.`);
  return !0;
}, G = async function(e, i, r, o = {}) {
  return new Promise((c, s) => {
    const l = new XMLHttpRequest();
    i.controller.signal.addEventListener("abort", () => {
      l.abort();
    }), l.upload.addEventListener("progress", (y) => {
      i.setProgress(y.loaded), u(this, a, E).call(this);
    }), l.addEventListener("error", (y) => {
      s(new Error("Upload failed."));
    }), l.addEventListener("load", () => {
      c(void 0);
    }), l.open("PUT", e);
    for (const y in o)
      l.setRequestHeader(y, o[y]);
    l.send(r);
  });
}, p(T, "pluginName", "upload");
class me {
  /**
   * Creates an instance of UploadHandle.
   *
   * @param {string} fieldName - The name of the field associated with the file upload.
   * @param {File} file - The file to be uploaded.
   */
  constructor(n, e) {
    p(this, "controller", new AbortController());
    p(this, "promise");
    p(this, "fileId");
    p(this, "loaded", 0);
    p(this, "progress", 0);
    p(this, "uploadSize", 0);
    p(this, "resolve");
    p(this, "reject");
    this.fieldName = n, this.file = e, this.uploadSize = this.file.size, this.promise = new Promise((i, r) => {
      this.resolve = i, this.reject = r;
    });
  }
  /**
   * Aborts the file upload by invoking the AbortController's abort method.
   */
  abort() {
    this.controller.abort();
  }
  /**
   * Updates the progress of the file upload.
   *
   * @param {number} loaded - The number of bytes that have been uploaded.
   */
  setProgress(n) {
    this.loaded = n, this.progress = this.file.size && n ? Math.min(1, n / this.file.size) : 0;
  }
}
A.register(T);
export {
  T as PluginUpload
};
