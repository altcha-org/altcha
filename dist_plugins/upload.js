const u = {
  generateKey: v,
  exportKey: S,
  importKey: x,
  decrypt: C,
  encrypt: L
};
async function v(n = 256) {
  return crypto.subtle.generateKey({
    name: "AES-GCM",
    length: n
  }, !0, ["encrypt", "decrypt"]);
}
async function S(n) {
  return new Uint8Array(await crypto.subtle.exportKey("raw", n));
}
async function x(n) {
  return crypto.subtle.importKey("raw", n, {
    name: "AES-GCM"
  }, !0, ["encrypt", "decrypt"]);
}
async function L(n, e, t = 16) {
  const r = crypto.getRandomValues(new Uint8Array(t));
  return {
    encrypted: new Uint8Array(await crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: r
    }, n, e)),
    iv: r
  };
}
async function C(n, e, t) {
  return new Uint8Array(await crypto.subtle.decrypt({
    name: "AES-GCM",
    iv: t
  }, n, e));
}
function I(n, e = !1) {
  return e && (n = n.replace(/_/g, "/").replace(/-/g, "+") + "=".repeat(3 - (3 + n.length) % 4)), Uint8Array.from(atob(n), (t) => t.charCodeAt(0));
}
function h(n, e = !1) {
  const t = btoa(String.fromCharCode(...n));
  return e ? t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : t;
}
function f(n, e = 80) {
  let t = "";
  for (; n.length > 0; )
    t += n.slice(0, e) + `
`, n = n.slice(e);
  return t;
}
function g(n) {
  return I(n.split(/\r?\n/).filter((e) => !e.startsWith("-----")).join(""));
}
const l = "RSA-OAEP", p = "SHA-256", N = 2048, z = new Uint8Array([1, 0, 1]), T = {
  generateKeyPair: _,
  encrypt: R,
  decrypt: j,
  exportPrivateKey: m,
  exportPrivateKeyPem: H,
  exportPublicKey: d,
  exportPublicKeyPem: k,
  exportPublicKeyFromPrivateKey: O,
  importPrivateKey: E,
  importPrivateKeyPem: q,
  importPublicKey: w,
  importPublicKeyPem: b
};
async function _() {
  return crypto.subtle.generateKey({
    name: l,
    modulusLength: N,
    publicExponent: z,
    hash: p
  }, !0, ["encrypt", "decrypt"]);
}
async function R(n, e) {
  return new Uint8Array(await crypto.subtle.encrypt({
    name: l
  }, n, e));
}
async function j(n, e) {
  return new Uint8Array(await crypto.subtle.decrypt({
    name: l
  }, n, e));
}
async function d(n) {
  return new Uint8Array(await crypto.subtle.exportKey("spki", n));
}
async function m(n) {
  return new Uint8Array(await crypto.subtle.exportKey("pkcs8", n));
}
async function k(n) {
  return `-----BEGIN PUBLIC KEY-----
` + f(h(await d(n)), 64) + "-----END PUBLIC KEY-----";
}
async function H(n) {
  return `-----BEGIN PRIVATE KEY-----
` + f(h(await m(n)), 64) + "-----END PRIVATE KEY-----";
}
async function w(n) {
  return crypto.subtle.importKey("spki", n, {
    name: l,
    hash: p
  }, !0, ["encrypt"]);
}
async function b(n) {
  return w(g(n));
}
async function E(n) {
  return crypto.subtle.importKey("pkcs8", n, {
    name: l,
    hash: p
  }, !0, ["decrypt"]);
}
async function q(n) {
  return E(g(n));
}
async function O(n) {
  const e = await crypto.subtle.exportKey("jwk", n);
  delete e.d, delete e.dp, delete e.dq, delete e.q, delete e.qi, e.key_ops = ["encrypt"];
  const t = await crypto.subtle.importKey("jwk", e, {
    name: l,
    hash: p
  }, !0, ["encrypt"]);
  return d(t);
}
const $ = new Uint8Array([1, 0, 1]), B = 256, G = 16;
async function M(n, e, t = {}) {
  const { aesIVLength: r = G, aesKeyLength: i = B } = t, s = await u.generateKey(i), { encrypted: o, iv: a } = await u.encrypt(s, e, r), c = await T.encrypt(n, await u.exportKey(s));
  return new Uint8Array([
    ...$,
    ...new Uint8Array([c.length]),
    ...new Uint8Array([a.length]),
    ...c,
    ...a,
    ...o
  ]);
}
class U {
  /**
   * Constructs a new instance of the Plugin.
   * 
   * @param {PluginContext} context - The context provided to the plugin, containing necessary configurations and dependencies.
   */
  constructor(e) {
    this.context = e;
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
class Y extends U {
  static pluginName = "upload";
  pendingFiles = [];
  uploadHandles = [];
  elForm;
  #e = this.#c.bind(this);
  #t = this.#l.bind(this);
  /**
   * Constructor initializes the plugin, setting up event listeners on the form.
   *
   * @param {PluginContext} context - Plugin context providing access to the element, configuration, and utility methods.
   */
  constructor(e) {
    super(e), this.elForm = this.context.el.closest("form"), this.elForm && (this.elForm.addEventListener("change", this.#e), this.elForm.addEventListener("submit", this.#t, {
      capture: !0
    }));
  }
  /**
   * Adds a file to the pending files list for upload.
   *
   * @param {string} fieldName - The field name associated with the file input.
   * @param {File} file - The file to be uploaded.
   */
  addFile(e, t) {
    this.pendingFiles.find(([r, i]) => r === e && i === t) || this.pendingFiles.push([e, t]);
  }
  /**
   * Cleans up event listeners and other resources when the plugin is destroyed.
   */
  destroy() {
    this.elForm && (this.elForm.removeEventListener("change", this.#e), this.elForm.removeEventListener("submit", this.#t));
  }
  /**
   * Uploads all pending files in the list.
   */
  async uploadPendingFiles() {
    const e = async () => {
      const t = this.pendingFiles[0];
      if (t && await this.#r(this.#s(t)), this.pendingFiles.length)
        return e();
    };
    try {
      await e();
    } catch (t) {
      return this.context.log("upload failed", t), this.context.dispatch("uploaderror", {
        error: t
      }), !1;
    }
    this.pendingFiles.length === 0 && (this.#i(), this.elForm?.requestSubmit());
  }
  /**
   * Adds hidden input fields to the form containing the file IDs of uploaded files.
   */
  #i() {
    const e = this.uploadHandles.reduce(
      (t, r) => (t[r.fieldName] || (t[r.fieldName] = []), r.fileId && t[r.fieldName].push(r.fileId), t),
      {}
    );
    for (const t in e) {
      const r = document.createElement("input");
      r.name = t, r.type = "hidden", r.value = e[t].join(","), this.elForm?.querySelector(`[name="${t}"]`)?.setAttribute("disabled", "disabled"), this.elForm?.appendChild(r);
    }
  }
  /**
   * Creates an upload handle for the specified pending file.
   *
   * @param {[string, File]} pendingFile - The field name and file to be uploaded.
   * @returns {UploadHandle} The created upload handle.
   * @throws Will throw an error if the upload handle cannot be created.
   */
  #s(e) {
    const t = this.pendingFiles.findIndex(
      ([i, s]) => i === e[0] && s === e[1]
    );
    if (t < 0)
      throw new Error("Cannot create upload handle.");
    const r = new D(e[0], e[1]);
    return this.uploadHandles.push(r), this.pendingFiles.splice(t, 1), this.#o(r), this.#n(), r;
  }
  /**
   * Dispatches a custom event when a file upload starts.
   *
   * @param {UploadHandle} handle - The upload handle associated with the file upload.
   */
  #o(e) {
    this.context.dispatch("upload", { handle: e });
  }
  /**
   * Dispatches a custom event to track the progress of ongoing file uploads.
   */
  #n() {
    const e = this.pendingFiles.reduce((r, [i, s]) => r + s.size, 0) + this.uploadHandles.reduce((r, { uploadSize: i }) => r + i, 0), t = this.uploadHandles.reduce(
      (r, { loaded: i }) => r + i,
      0
    );
    this.context.dispatch("uploadprogress", {
      bytesLoaded: t,
      bytesTotal: e,
      pendingFiles: this.pendingFiles,
      uploadHandles: this.uploadHandles
    });
  }
  /**
   * Retrieves the upload URL from the form's attributes.
   *
   * @returns {string | null} The upload URL, or null if not found.
   */
  #a() {
    if (this.elForm) {
      const e = this.elForm.getAttribute("action"), t = this.elForm.getAttribute("data-upload-url");
      if (t)
        return t;
      const r = new URL(e || location.origin);
      return r.pathname = r.pathname + "/file", r.toString();
    }
    return null;
  }
  /**
   * Handles the form's change event, adding files to the pending files list.
   *
   * @param {Event} ev - The change event.
   */
  #c(e) {
    const t = e.target;
    if (t && t.type === "file") {
      const r = t.files;
      if (r?.length)
        for (const i of r)
          this.addFile(t.name, i);
    }
  }
  /**
   * Handles the form's submit event, preventing submission until all pending files are uploaded.
   *
   * @param {SubmitEvent} ev - The submit event.
   */
  #l(e) {
    e.target?.hasAttribute(
      "data-code-challenge-form"
    ) || this.pendingFiles.length && (e.preventDefault(), e.stopPropagation(), this.uploadPendingFiles());
  }
  /**
   * Uploads a single file, handling encryption and ALTCHA challenges if necessary.
   *
   * @param {UploadHandle} handle - The upload handle associated with the file.
   * @param {string} [altchaPayload] - The ALTCHA payload, if available.
   * @returns {Promise<unknown>} A promise that resolves when the upload is complete.
   * @throws Will throw an error if the upload fails or if an ALTCHA challenge cannot be solved.
   */
  async #r(e, t) {
    const r = this.#a();
    if (!r)
      throw new Error("Upload url not specified.");
    const i = {
      "content-type": "application/json"
    };
    t && (i.authorization = "Altcha payload=" + t);
    const s = await fetch(r, {
      body: JSON.stringify({
        name: e.file.name || "file",
        size: e.file.size,
        type: e.file.type || "application/octet-stream"
      }),
      credentials: "include",
      headers: i,
      method: "POST"
    });
    if (s.status === 401)
      return this.#p(s, e);
    if (s.status !== 200)
      throw new Error(`Unexpected server response ${s.status}.`);
    const o = await s.json();
    let a = e.file;
    if (o.encrypted && o.encryptionPublicKey) {
      const c = await b(o.encryptionPublicKey), P = await new Response(
        new ReadableStream({
          async start(y) {
            const A = e.file.stream().getReader();
            for (; ; ) {
              const { done: F, value: K } = await A.read();
              if (F)
                break;
              y.enqueue(K);
            }
            y.close();
          }
        })
      ).arrayBuffer();
      a = await M(c, new Uint8Array(P));
    }
    return e.uploadSize = a instanceof Uint8Array ? a.byteLength : e.file.size, await this.#d(o.uploadUrl, e, a, {
      "content-type": e.file.type || "application/octet-stream"
    }), o.finalizeUrl && await this.#u(o.finalizeUrl, e.uploadSize), e.fileId = o.fileId, e.resolve({
      encrypted: o.encrypted,
      fileId: o.fileId
    }), e.promise;
  }
  /**
   * Handles ALTCHA challenges during file upload, solving the challenge and retrying the upload.
   *
   * @param {Response} resp - The response from the server containing the ALTCHA challenge.
   * @param {UploadHandle} handle - The upload handle associated with the file.
   * @returns {Promise<unknown>} A promise that resolves when the challenge is solved and the upload is complete.
   * @throws Will throw an error if the challenge cannot be solved.
   */
  async #p(e, t) {
    try {
      const i = e.headers.get("www-authenticate")?.match(/challenge=(.*),/)?.[1];
      if (!i)
        throw new Error(
          "Unable to retrieve altcha challenge from www-authenticate header."
        );
      const s = JSON.parse(i);
      if (s && "challenge" in s) {
        const { solution: o } = await this.context.solve(s);
        if (o && "number" in o)
          return this.#r(
            t,
            btoa(
              JSON.stringify({
                ...s,
                number: o.number
              })
            )
          );
        throw new Error("Invalid challenge solution.");
      }
    } catch (r) {
      throw this.context.log(r), new Error("Unable to solve altcha challenge for upload.");
    }
  }
  /**
   * Finalizes the file upload by sending a request to the server.
   *
   * @param {string} finalizeUrl - The URL to finalize the upload.
   * @param {number} uploadSize - The size of the uploaded file.
   */
  async #u(e, t) {
    const r = await fetch(e, {
      body: JSON.stringify({
        uploadedBytes: t
      }),
      headers: {
        "content-type": "application/json"
      },
      method: "POST"
    });
    if (r.status > 204)
      throw new Error(`Unexpected server response ${r.status}.`);
    return !0;
  }
  /**
   * Uploads the file's contents to the server using the PUT method.
   *
   * @param {string} url - The URL to upload the file to.
   * @param {UploadHandle} handle - The upload handle associated with the file.
   * @param {Uint8Array | File} body - The file's contents.
   * @param {Record<string, string>} headers - Additional headers for the upload request.
   */
  async #d(e, t, r, i = {}) {
    return e = new URL(
      e,
      this.elForm?.getAttribute("action") || location.origin
    ).toString(), new Promise((s, o) => {
      const a = new XMLHttpRequest();
      t.controller.signal.addEventListener("abort", () => {
        a.abort();
      }), a.upload.addEventListener("progress", (c) => {
        t.setProgress(c.loaded), this.#n();
      }), a.addEventListener("error", (c) => {
        o(new Error("Upload failed."));
      }), a.addEventListener("load", () => {
        a.status >= 400 ? o(new Error(`Server responded with ${a.status}`)) : s(void 0);
      }), a.open("PUT", e);
      for (const c in i)
        a.setRequestHeader(c, i[c]);
      a.send(r);
    });
  }
}
class D {
  /**
   * Creates an instance of UploadHandle.
   *
   * @param {string} fieldName - The name of the field associated with the file upload.
   * @param {File} file - The file to be uploaded.
   */
  constructor(e, t) {
    this.fieldName = e, this.file = t, this.uploadSize = this.file.size, this.promise = new Promise((r, i) => {
      this.resolve = r, this.reject = i;
    });
  }
  controller = new AbortController();
  promise;
  fileId;
  loaded = 0;
  progress = 0;
  uploadSize = 0;
  resolve;
  reject;
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
  setProgress(e) {
    this.loaded = e, this.progress = this.file.size && e ? Math.min(1, e / this.file.size) : 0;
  }
}
U.register(Y);
export {
  Y as PluginUpload
};
