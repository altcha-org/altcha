class BasePlugin {
  constructor(host) {
    this.host = host;
  }
  static register(pluginClass) {
    if ("$altcha" in globalThis && !globalThis.$altcha.plugins.has(pluginClass)) {
      globalThis.$altcha.plugins.add(pluginClass);
    }
  }
  async onFetchChallenge(source) {
  }
  async onRequestServerVerification(payload, code) {
  }
  async onVerify(value) {
  }
}
var State = /* @__PURE__ */ ((State2) => {
  State2["CODE"] = "code";
  State2["ERROR"] = "error";
  State2["VERIFIED"] = "verified";
  State2["VERIFYING"] = "verifying";
  State2["UNVERIFIED"] = "unverified";
  State2["EXPIRED"] = "expired";
  return State2;
})(State || {});
class PasswordBuffer {
  constructor(nonce, mode = "uint32") {
    this.nonce = nonce;
    this.mode = mode;
    this.buffer = new Uint8Array(this.nonce.length + this.COUNTER_BYTES);
    this.buffer.set(this.nonce, 0);
    this.dataView = new DataView(this.buffer.buffer);
  }
  COUNTER_BYTES = 4;
  buffer;
  dataView;
  encoder = new TextEncoder();
  /**
   * Appends the counter to the nonce buffer.
   * In 'string' mode, encodes the counter as a UTF-8 string.
   * In 'uint32' mode, writes the counter as a big-endian 32-bit integer.
   */
  setCounter(n) {
    if (this.mode === "string") {
      return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
    }
    this.dataView.setUint32(this.nonce.length, n, false);
    return this.buffer;
  }
}
function bufferToHex(buffer) {
  return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
function concatBuffers(a, b) {
  const out = new Uint8Array(a.length + b.length);
  out.set(a, 0);
  out.set(b, a.length);
  return out;
}
function hexToBuffer(hex) {
  if (hex.length % 2 !== 0) {
    throw new Error(`Hex string must have an even length. Got: ${hex}`);
  }
  const buffer = new ArrayBuffer(hex.length / 2);
  const view = new DataView(buffer);
  for (let i = 0; i < hex.length; i += 2) {
    const byteString = hex.substring(i, i + 2);
    const byteValue = parseInt(byteString, 16);
    view.setUint8(i / 2, byteValue);
  }
  return new Uint8Array(buffer);
}
async function solveChallenge(options) {
  const {
    challenge,
    controller,
    counterMode = "uint32",
    counterStart = 0,
    counterStep = 1,
    deriveKey,
    timeout = 9e4
  } = options;
  let { nonce, keyPrefix, salt } = challenge.parameters;
  const nonceBuf = hexToBuffer(nonce);
  const saltBuf = hexToBuffer(salt);
  const keyPrefixBuf = keyPrefix.length % 2 === 0 ? hexToBuffer(keyPrefix) : null;
  const password = new PasswordBuffer(nonceBuf, counterMode);
  const start = performance.now();
  let counter = counterStart;
  let derivedKeyHex = "";
  let lastYield = start;
  while (true) {
    if (controller?.signal.aborted || timeout && counter % 10 === 0 && performance.now() - start > timeout) {
      return null;
    }
    const { derivedKey } = await deriveKey(
      challenge.parameters,
      saltBuf,
      password.setCounter(counter)
    );
    if (counter % 10 === 0 && performance.now() - lastYield > 200) {
      await delay(0);
      lastYield = performance.now();
    }
    if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefix)) {
      derivedKeyHex = bufferToHex(derivedKey);
      break;
    }
    counter = counter + counterStep;
  }
  return {
    counter,
    derivedKey: derivedKeyHex,
    time: timeDuration(start)
  };
}
async function solveChallengeWorkers(options) {
  let {
    challenge,
    concurrency = navigator.hardwareConcurrency,
    controller = new AbortController(),
    createWorker,
    onOutOfMemory = (c) => c > 1 ? Math.floor(c / 2) : 0,
    counterMode
  } = options;
  concurrency = Math.min(16, Math.max(1, concurrency));
  const workersInstances = [];
  const terminate = () => {
    for (const worker of workersInstances) {
      worker.terminate();
    }
  };
  for (let i = 0; i < concurrency; i++) {
    workersInstances.push(await createWorker(challenge.parameters.algorithm));
  }
  let solution = null;
  try {
    solution = await Promise.race(
      workersInstances.map((worker, i) => {
        controller.signal.addEventListener("abort", () => {
          worker.postMessage({ type: "abort" });
        });
        return new Promise((resolve, reject) => {
          worker.addEventListener("error", (err) => {
            reject(err);
          });
          worker.addEventListener("message", (message) => {
            if (message.data) {
              for (const w of workersInstances) {
                if (w !== worker) {
                  w.postMessage({ type: "abort" });
                }
              }
              if (message.data.error) {
                return reject(new Error(message.data.error));
              }
            }
            resolve(message.data);
          });
          worker.postMessage({
            challenge,
            counterMode,
            counterStart: i,
            counterStep: concurrency,
            type: "work"
          });
        });
      })
    );
  } catch (err) {
    const isOOM = !!err?.message?.includes("Out of memory");
    if (isOOM) {
      if (!!onOutOfMemory) {
        terminate();
        const retryConcurrency = onOutOfMemory(concurrency);
        if (retryConcurrency) {
          return solveChallengeWorkers({
            ...options,
            challenge,
            controller,
            concurrency: retryConcurrency,
            createWorker
          });
        }
      }
    }
    throw err;
  } finally {
    terminate();
  }
  if (controller.signal.aborted) {
    return null;
  }
  return solution || null;
}
function bufferStartsWith(buffer, prefix) {
  if (prefix.length > buffer.length) {
    return false;
  }
  for (let i = 0; i < prefix.length; i++) {
    if (buffer[i] !== prefix[i]) {
      return false;
    }
  }
  return true;
}
async function delay(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}
function timeDuration(start) {
  return Math.floor((performance.now() - start) * 10) / 10;
}
async function deobfuscate(obfuscatedData, options = {}) {
  const { concurrency = navigator.hardwareConcurrency, deriveKey: deriveKey2 } = options;
  let challenge = null;
  try {
    challenge = JSON.parse(atob(obfuscatedData));
  } catch {
    throw new Error(`Unable to parse obfuscated data.`);
  }
  if (!challenge || typeof challenge !== "object" || !("parameters" in challenge) || !("cipher" in challenge)) {
    throw new Error(`Invalid obfuscated data format.`);
  }
  const cipher = challenge.cipher;
  let solution = null;
  if (deriveKey2) {
    solution = await solveChallenge({
      challenge,
      deriveKey: deriveKey2
    });
  } else {
    const createWorker = globalThis.$altcha.algorithms.get(challenge.parameters.algorithm);
    if (!createWorker) {
      throw new Error(`Unsupported algorithm ${challenge.parameters.algorithm}.`);
    }
    solution = await solveChallengeWorkers({
      challenge,
      concurrency,
      createWorker
    });
  }
  if (!solution) {
    throw new Error("Unable to find solution.");
  }
  const key = await crypto.subtle.importKey(
    "raw",
    hexToBuffer(solution.derivedKey),
    { name: "AES-GCM" },
    false,
    ["decrypt"]
  );
  const result = await crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: hexToBuffer(cipher.iv)
    },
    key,
    hexToBuffer(cipher.data)
  );
  return new TextDecoder().decode(result);
}
class ObfuscationPlugin extends BasePlugin {
  elTrigger = null;
  activate() {
    this.elTrigger = this.host.querySelector("button");
    if (this.elTrigger) {
      this.elTrigger.addEventListener("click", this.onTriggerClick.bind(this));
      this.host.configure({
        floatingAnchor: this.elTrigger
      });
    }
  }
  destroy() {
  }
  async onVerify(options) {
    const { minDuration = 500 } = options;
    const start = performance.now();
    const obfuscated = this.host.getAttribute("data-obfuscated");
    if (obfuscated) {
      this.host.reset(State.VERIFYING);
      try {
        const text = await deobfuscate(obfuscated);
        await this.#wait(Math.max(0, minDuration - (performance.now() - start)));
        this.#renderClearText(text);
      } catch (err) {
        this.host.setState(State.ERROR, String(err));
      } finally {
        this.host.setState(State.VERIFIED);
      }
      return null;
    }
  }
  onTriggerClick(ev) {
    ev.preventDefault();
    this.host.show();
    this.host.verify().then(() => {
      this.host.hide();
    });
  }
  #renderClearText(clearText) {
    const match = clearText.match(/^(mailto|tel|sms|https?):/);
    let el;
    if (match) {
      const [contact] = clearText.slice(clearText.indexOf(":") + 1).replace(/^\/\//, "").split("?");
      el = document.createElement("a");
      el.href = clearText;
      el.innerText = contact;
    } else {
      el = document.createTextNode(clearText);
    }
    if (this.elTrigger && el) {
      this.elTrigger.after(el);
      this.elTrigger.parentElement?.removeChild(this.elTrigger);
    }
  }
  async #wait(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
}
BasePlugin.register(ObfuscationPlugin);
