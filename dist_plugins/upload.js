var J = Object.defineProperty;
var v = (t) => {
  throw TypeError(t);
};
var X = (t, n, e) => n in t ? J(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var p = (t, n, e) => X(t, typeof n != "symbol" ? n + "" : n, e), S = (t, n, e) => n.has(t) || v("Cannot " + e);
var f = (t, n, e) => (S(t, n, "read from private field"), e ? e.call(t) : n.get(t)), w = (t, n, e) => n.has(t) ? v("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(t) : n.set(t, e);
var u = (t, n, e) => (S(t, n, "access private method"), e);
const E = {
  generateKey: Q,
  exportKey: W,
  importKey: Z,
  decrypt: te,
  encrypt: ee
};
async function Q(t = 256) {
  return crypto.subtle.generateKey({
    name: "AES-GCM",
    length: t
  }, !0, ["encrypt", "decrypt"]);
}
async function W(t) {
  return new Uint8Array(await crypto.subtle.exportKey("raw", t));
}
async function Z(t) {
  return crypto.subtle.importKey("raw", t, {
    name: "AES-GCM"
  }, !0, ["encrypt", "decrypt"]);
}
async function ee(t, n, e = 16) {
  const i = crypto.getRandomValues(new Uint8Array(e));
  return {
    encrypted: new Uint8Array(await crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: i
    }, t, n)),
    iv: i
  };
}
async function te(t, n, e) {
  return new Uint8Array(await crypto.subtle.decrypt({
    name: "AES-GCM",
    iv: e
  }, t, n));
}
function ne(t, n = !1) {
  return n && (t = t.replace(/_/g, "/").replace(/-/g, "+") + "=".repeat(3 - (3 + t.length) % 4)), Uint8Array.from(atob(t), (e) => e.charCodeAt(0));
}
function x(t, n = !1) {
  const e = btoa(String.fromCharCode(...t));
  return n ? e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : e;
}
function L(t, n = 80) {
  let e = "";
  for (; t.length > 0; )
    e += t.slice(0, n) + `
`, t = t.slice(n);
  return e;
}
function C(t) {
  return ne(t.split(/\r?\n/).filter((n) => !n.startsWith("-----")).join(""));
}
const h = "RSA-OAEP", b = "SHA-256", re = 2048, ie = new Uint8Array([1, 0, 1]), se = {
  generateKeyPair: oe,
  encrypt: ae,
  decrypt: ce,
  exportPrivateKey: I,
  exportPrivateKeyPem: pe,
  exportPublicKey: F,
  exportPublicKeyPem: le,
  exportPublicKeyFromPrivateKey: de,
  importPrivateKey: T,
  importPrivateKeyPem: ue,
  importPublicKey: N,
  importPublicKeyPem: z
};
async function oe() {
  return crypto.subtle.generateKey({
    name: h,
    modulusLength: re,
    publicExponent: ie,
    hash: b
  }, !0, ["encrypt", "decrypt"]);
}
async function ae(t, n) {
  return new Uint8Array(await crypto.subtle.encrypt({
    name: h
  }, t, n));
}
async function ce(t, n) {
  return new Uint8Array(await crypto.subtle.decrypt({
    name: h
  }, t, n));
}
async function F(t) {
  return new Uint8Array(await crypto.subtle.exportKey("spki", t));
}
async function I(t) {
  return new Uint8Array(await crypto.subtle.exportKey("pkcs8", t));
}
async function le(t) {
  return `-----BEGIN PUBLIC KEY-----
` + L(x(await F(t)), 64) + "-----END PUBLIC KEY-----";
}
async function pe(t) {
  return `-----BEGIN PRIVATE KEY-----
` + L(x(await I(t)), 64) + "-----END PRIVATE KEY-----";
}
async function N(t) {
  return crypto.subtle.importKey("spki", t, {
    name: h,
    hash: b
  }, !0, ["encrypt"]);
}
async function z(t) {
  return N(C(t));
}
async function T(t) {
  return crypto.subtle.importKey("pkcs8", t, {
    name: h,
    hash: b
  }, !0, ["decrypt"]);
}
async function ue(t) {
  return T(C(t));
}
async function de(t) {
  const n = await crypto.subtle.exportKey("jwk", t);
  delete n.d, delete n.dp, delete n.dq, delete n.q, delete n.qi, n.key_ops = ["encrypt"];
  const e = await crypto.subtle.importKey("jwk", n, {
    name: h,
    hash: b
  }, !0, ["encrypt"]);
  return F(e);
}
const ye = new Uint8Array([1, 0, 1]), he = 256, fe = 16;
async function me(t, n, e = {}) {
  const { aesIVLength: i = fe, aesKeyLength: r = he } = e, o = await E.generateKey(r), { encrypted: a, iv: s } = await E.encrypt(o, n, i), l = await se.encrypt(t, await E.exportKey(o));
  return new Uint8Array([
    ...ye,
    ...new Uint8Array([l.length]),
    ...new Uint8Array([s.length]),
    ...l,
    ...s,
    ...a
  ]);
}
class P {
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
p(P, "pluginName");
var m, g, c, R, j, k, U, H, q, O, A, $, B, G;
class _ extends P {
  /**
   * Constructor initializes the plugin, setting up event listeners on the form.
   *
   * @param {PluginContext} context - Plugin context providing access to the element, configuration, and utility methods.
   */
  constructor(e) {
    super(e);
    w(this, c);
    p(this, "pendingFiles", []);
    p(this, "uploadHandles", []);
    p(this, "elForm");
    w(this, m, u(this, c, q).bind(this));
    w(this, g, u(this, c, O).bind(this));
    this.elForm = this.context.el.closest("form"), this.elForm && (this.elForm.addEventListener("change", f(this, m)), this.elForm.addEventListener("submit", f(this, g), {
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
    this.elForm && (this.elForm.removeEventListener("change", f(this, m)), this.elForm.removeEventListener("submit", f(this, g)));
  }
  /**
   * Uploads all pending files in the list.
   */
  async uploadPendingFiles() {
    var i;
    const e = async () => {
      const r = this.pendingFiles[0];
      if (r && await u(this, c, A).call(this, u(this, c, j).call(this, r)), this.pendingFiles.length)
        return e();
    };
    try {
      await e();
    } catch (r) {
      return this.context.log("upload failed", r), this.context.dispatch("uploaderror", {
        error: r
      }), !1;
    }
    this.pendingFiles.length === 0 && (u(this, c, R).call(this), (i = this.elForm) == null || i.requestSubmit());
  }
}
m = new WeakMap(), g = new WeakMap(), c = new WeakSet(), /**
 * Adds hidden input fields to the form containing the file IDs of uploaded files.
 */
R = function() {
  var i, r, o;
  const e = this.uploadHandles.reduce(
    (a, s) => (a[s.fieldName] || (a[s.fieldName] = []), s.fileId && a[s.fieldName].push(s.fileId), a),
    {}
  );
  for (const a in e) {
    const s = document.createElement("input");
    s.name = a, s.type = "hidden", s.value = e[a].join(","), (r = (i = this.elForm) == null ? void 0 : i.querySelector(`[name="${a}"]`)) == null || r.setAttribute("disabled", "disabled"), (o = this.elForm) == null || o.appendChild(s);
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
    ([o, a]) => o === e[0] && a === e[1]
  );
  if (i < 0)
    throw new Error("Cannot create upload handle.");
  const r = new ge(e[0], e[1]);
  return this.uploadHandles.push(r), this.pendingFiles.splice(i, 1), u(this, c, k).call(this, r), u(this, c, U).call(this), r;
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
U = function() {
  const e = this.pendingFiles.reduce((r, [o, a]) => r + a.size, 0) + this.uploadHandles.reduce((r, { uploadSize: o }) => r + o, 0), i = this.uploadHandles.reduce(
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
    const e = this.elForm.getAttribute("action"), i = this.elForm.getAttribute("data-upload-url");
    if (i)
      return i;
    const r = new URL(e || location.origin);
    return r.pathname = r.pathname + "/file", r.toString();
  }
  return null;
}, /**
 * Handles the form's change event, adding files to the pending files list.
 *
 * @param {Event} ev - The change event.
 */
q = function(e) {
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
O = function(e) {
  const i = e.target;
  i != null && i.hasAttribute("data-code-challenge-form") || this.pendingFiles.length && (e.preventDefault(), e.stopPropagation(), this.uploadPendingFiles());
}, A = async function(e, i) {
  const r = u(this, c, H).call(this);
  if (!r)
    throw new Error("Upload url not specified.");
  const o = {
    "content-type": "application/json"
  };
  i && (o.authorization = "Altcha payload=" + i);
  const a = await fetch(r, {
    body: JSON.stringify({
      name: e.file.name || "file",
      size: e.file.size,
      type: e.file.type || "application/octet-stream"
    }),
    credentials: "include",
    headers: o,
    method: "POST"
  });
  if (a.status === 401)
    return u(this, c, $).call(this, a, e);
  if (a.status !== 200)
    throw new Error(`Unexpected server response ${a.status}.`);
  const s = await a.json();
  let l = e.file;
  if (s.encrypted && s.encryptionPublicKey) {
    const d = await z(s.encryptionPublicKey), M = await new Response(
      new ReadableStream({
        async start(K) {
          const Y = e.file.stream().getReader();
          for (; ; ) {
            const { done: D, value: V } = await Y.read();
            if (D)
              break;
            K.enqueue(V);
          }
          K.close();
        }
      })
    ).arrayBuffer();
    l = await me(d, new Uint8Array(M));
  }
  return e.uploadSize = l instanceof Uint8Array ? l.byteLength : e.file.size, await u(this, c, G).call(this, s.uploadUrl, e, l, {
    "content-type": e.file.type || "application/octet-stream"
  }), s.finalizeUrl && await u(this, c, B).call(this, s.finalizeUrl, e.uploadSize), e.fileId = s.fileId, e.resolve({
    encrypted: s.encrypted,
    fileId: s.fileId
  }), e.promise;
}, $ = async function(e, i) {
  var r;
  try {
    const o = e.headers.get("www-authenticate"), a = (r = o == null ? void 0 : o.match(/challenge=(.*),/)) == null ? void 0 : r[1];
    if (!a)
      throw new Error(
        "Unable to retrieve altcha challenge from www-authenticate header."
      );
    const s = JSON.parse(a);
    if (s && "challenge" in s) {
      const { solution: l } = await this.context.solve(s);
      if (l && "number" in l)
        return u(this, c, A).call(this, i, btoa(
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
  var a;
  return e = new URL(e, ((a = this.elForm) == null ? void 0 : a.getAttribute("action")) || location.origin).toString(), new Promise((s, l) => {
    const d = new XMLHttpRequest();
    i.controller.signal.addEventListener("abort", () => {
      d.abort();
    }), d.upload.addEventListener("progress", (y) => {
      i.setProgress(y.loaded), u(this, c, U).call(this);
    }), d.addEventListener("error", (y) => {
      l(new Error("Upload failed."));
    }), d.addEventListener("load", () => {
      d.status >= 400 ? l(new Error(`Server responded with ${d.status}`)) : s(void 0);
    }), d.open("PUT", e);
    for (const y in o)
      d.setRequestHeader(y, o[y]);
    d.send(r);
  });
}, p(_, "pluginName", "upload");
class ge {
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
P.register(_);
export {
  _ as PluginUpload
};
