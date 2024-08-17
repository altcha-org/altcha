import { cipher, rsa } from '@altcha/crypto';
import { Plugin } from '../plugin';
import type { PluginContext } from '../types';

interface FileUploadInfo {
  encrypted: boolean;
  encryptionPublicKey?: string;
  expires?: string;
  fileId: string;
  finalizeUrl?: string;
  uploadUrl: string;
}

/**
 * PluginUpload class handles file uploads within a form, including
 * support for encryption, progress tracking, and integration with
 * the ALTCHA challenge-response mechanism for additional security.
 */
export class PluginUpload extends Plugin {
  static pluginName = 'upload';

  readonly pendingFiles: [string, File][] = [];

  readonly uploadHandles: UploadHandle[] = [];

  readonly elForm: HTMLFormElement | null;

  readonly #_onFormChange = this.#onFormChange.bind(this);

  readonly #_onFormSubmit = this.#onFormSubmit.bind(this);

  /**
   * Constructor initializes the plugin, setting up event listeners on the form.
   *
   * @param {PluginContext} context - Plugin context providing access to the element, configuration, and utility methods.
   */
  constructor(context: PluginContext) {
    super(context);
    this.elForm = this.context.el.closest('form');
    if (this.elForm) {
      this.elForm.addEventListener('change', this.#_onFormChange);
      this.elForm.addEventListener('submit', this.#_onFormSubmit, {
        capture: true,
      });
    }
  }

  /**
   * Adds a file to the pending files list for upload.
   *
   * @param {string} fieldName - The field name associated with the file input.
   * @param {File} file - The file to be uploaded.
   */
  addFile(fieldName: string, file: File) {
    if (
      !this.pendingFiles.find(([name, f]) => name === fieldName && f === file)
    ) {
      this.pendingFiles.push([fieldName, file]);
    }
  }

  /**
   * Cleans up event listeners and other resources when the plugin is destroyed.
   */
  destroy() {
    if (this.elForm) {
      this.elForm.removeEventListener('change', this.#_onFormChange);
      this.elForm.removeEventListener('submit', this.#_onFormSubmit);
    }
  }

  /**
   * Uploads all pending files in the list.
   */
  async uploadPendingFiles() {
    const next = async () => {
      const entry = this.pendingFiles[0];
      if (entry) {
        await this.#uploadFile(this.#createUploadHandle(entry));
      }
      if (this.pendingFiles.length) {
        return next();
      }
    };
    await next();
    if (this.pendingFiles.length === 0) {
      this.#addFormFields();
      this.elForm?.requestSubmit();
    }
  }

  /**
   * Adds hidden input fields to the form containing the file IDs of uploaded files.
   */
  #addFormFields() {
    const inputs = this.uploadHandles.reduce(
      (acc, uploadHandle) => {
        if (!acc[uploadHandle.fieldName]) {
          acc[uploadHandle.fieldName] = [];
        }
        if (uploadHandle.fileId) {
          acc[uploadHandle.fieldName].push(uploadHandle.fileId);
        }
        return acc;
      },
      {} as Record<string, string[]>
    );
    for (const name in inputs) {
      const input = document.createElement('input');
      input.name = name;
      input.type = 'hidden';
      input.value = inputs[name].join(',');
      this.elForm
        ?.querySelector(`[name="${name}"]`)
        ?.setAttribute('disabled', 'disabled');
      this.elForm?.appendChild(input);
    }
  }

  /**
   * Creates an upload handle for the specified pending file.
   *
   * @param {[string, File]} pendingFile - The field name and file to be uploaded.
   * @returns {UploadHandle} The created upload handle.
   * @throws Will throw an error if the upload handle cannot be created.
   */
  #createUploadHandle(pendingFile: [string, File]) {
    const idx = this.pendingFiles.findIndex(
      ([name, file]) => name === pendingFile[0] && file === pendingFile[1]
    );
    if (idx < 0) {
      throw new Error('Cannot create upload handle.');
    }
    const handle = new UploadHandle(pendingFile[0], pendingFile[1]);
    this.uploadHandles.push(handle);
    this.pendingFiles.splice(idx, 1);
    this.#emitUploadEvent(handle);
    this.#emitUploadProgressEvent();
    return handle;
  }

  /**
   * Dispatches a custom event when a file upload starts.
   *
   * @param {UploadHandle} handle - The upload handle associated with the file upload.
   */
  #emitUploadEvent(handle: UploadHandle) {
    this.context.dispatch('upload', { handle });
  }

  /**
   * Dispatches a custom event to track the progress of ongoing file uploads.
   */
  #emitUploadProgressEvent() {
    const bytesTotal =
      this.pendingFiles.reduce((acc, [_, file]) => acc + file.size, 0) +
      this.uploadHandles.reduce((acc, { uploadSize }) => acc + uploadSize, 0);
    const bytesLoaded = this.uploadHandles.reduce(
      (acc, { loaded }) => acc + loaded,
      0
    );
    this.context.dispatch('uploadprogress', {
      bytesLoaded,
      bytesTotal,
      pendingFiles: this.pendingFiles,
      uploadHandles: this.uploadHandles,
    });
  }

  /**
   * Retrieves the upload URL from the form's attributes.
   *
   * @returns {string | null} The upload URL, or null if not found.
   */
  #getUploadUrl() {
    if (this.elForm) {
      const action = this.elForm.getAttribute('action');
      const uploadUrl = this.elForm.getAttribute('data-upload-url');
      return uploadUrl || action + '/file';
    }
    return null;
  }

  /**
   * Handles the form's change event, adding files to the pending files list.
   *
   * @param {Event} ev - The change event.
   */
  #onFormChange(ev: Event) {
    const target = ev.target as HTMLInputElement | null;
    if (target && target.type === 'file') {
      const files = target.files;
      if (files?.length) {
        for (const file of files) {
          this.addFile(target.name, file);
        }
      }
    }
  }

  /**
   * Handles the form's submit event, preventing submission until all pending files are uploaded.
   *
   * @param {SubmitEvent} ev - The submit event.
   */
  #onFormSubmit(ev: SubmitEvent) {
    if (this.pendingFiles.length) {
      ev.preventDefault();
      ev.stopPropagation();
      this.uploadPendingFiles();
    }
  }

  /**
   * Uploads a single file, handling encryption and ALTCHA challenges if necessary.
   *
   * @param {UploadHandle} handle - The upload handle associated with the file.
   * @param {string} [altchaPayload] - The ALTCHA payload, if available.
   * @returns {Promise<unknown>} A promise that resolves when the upload is complete.
   * @throws Will throw an error if the upload fails or if an ALTCHA challenge cannot be solved.
   */
  async #uploadFile(
    handle: UploadHandle,
    altchaPayload?: string
  ): Promise<unknown> {
    const uploadUrl = this.#getUploadUrl();
    if (!uploadUrl) {
      throw new Error('Upload url not specified.');
    }
    const headers: Record<string, string> = {
      'content-type': 'application/json',
    };
    if (altchaPayload) {
      headers['authorization'] = 'Altcha payload=' + altchaPayload;
    }
    const resp = await fetch(uploadUrl, {
      body: JSON.stringify({
        name: handle.file.name || 'file',
        size: handle.file.size,
        type: handle.file.type || 'application/octet-stream',
      }),
      credentials: 'include',
      headers,
      method: 'POST',
    });
    if (resp.status === 401) {
      return this.#handleAltchaChallenge(resp, handle);
    }
    if (resp.status !== 200) {
      throw new Error(`Unexpected server response ${resp.status}.`);
    }
    const json = (await resp.json()) as FileUploadInfo;
    let body: Uint8Array | File = handle.file;
    if (json.encrypted && json.encryptionPublicKey) {
      const publicKey = await rsa.importPublicKeyPem(json.encryptionPublicKey);
      const response = new Response(
        new ReadableStream({
          async start(controller) {
            const reader = handle.file.stream().getReader();
            while (true) {
              const { done, value } = await reader.read();
              if (done) {
                break;
              }
              controller.enqueue(value);
            }
            controller.close();
          },
        })
      );
      const buffer = await response.arrayBuffer();
      body = await cipher.encrypt(publicKey, new Uint8Array(buffer));
    }
    handle.uploadSize =
      body instanceof Uint8Array ? body.byteLength : handle.file.size;
    await this.#putFile(json.uploadUrl, handle, body, {
      'content-type': handle.file.type || 'application/octet-stream',
    });
    if (json.finalizeUrl) {
      await this.#finalizeFile(json.finalizeUrl, handle.uploadSize);
    }
    handle.fileId = json.fileId;
    handle.resolve({
      encrypted: json.encrypted,
      fileId: json.fileId,
    });
    return handle.promise;
  }

  /**
   * Handles ALTCHA challenges during file upload, solving the challenge and retrying the upload.
   *
   * @param {Response} resp - The response from the server containing the ALTCHA challenge.
   * @param {UploadHandle} handle - The upload handle associated with the file.
   * @returns {Promise<unknown>} A promise that resolves when the challenge is solved and the upload is complete.
   * @throws Will throw an error if the challenge cannot be solved.
   */
  async #handleAltchaChallenge(resp: Response, handle: UploadHandle) {
    try {
      const auth = resp.headers.get('www-authenticate');
      const challengeStr = auth?.match(/challenge=(.*),/)?.[1];
      if (!challengeStr) {
        throw new Error(
          'Unable to retrieve altcha challenge from www-authenticate header.'
        );
      }
      const challenge = JSON.parse(challengeStr);
      if (challenge && 'challenge' in challenge) {
        const { solution } = await this.context.solve(challenge);
        if (solution && 'number' in solution) {
          return this.#uploadFile(
            handle,
            btoa(
              JSON.stringify({
                ...challenge,
                number: solution.number,
              })
            )
          );
        } else {
          throw new Error('Invalid challenge solution.');
        }
      }
    } catch (err) {
      this.context.log(err);
      throw new Error('Unable to solve altcha challenge for upload.');
    }
  }

  /**
   * Finalizes the file upload by sending a request to the server.
   *
   * @param {string} finalizeUrl - The URL to finalize the upload.
   * @param {number} uploadSize - The size of the uploaded file.
   */
  async #finalizeFile(url: string, uploadedBytes: number) {
    const resp = await fetch(url, {
      body: JSON.stringify({
        uploadedBytes,
      }),
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
    });
    if (resp.status > 204) {
      throw new Error(`Unexpected server response ${resp.status}.`);
    }
    return true;
  }

  /**
   * Uploads the file's contents to the server using the PUT method.
   *
   * @param {string} url - The URL to upload the file to.
   * @param {UploadHandle} handle - The upload handle associated with the file.
   * @param {Uint8Array | File} body - The file's contents.
   * @param {Record<string, string>} headers - Additional headers for the upload request.
   */
  async #putFile(
    url: string,
    handle: UploadHandle,
    body: ArrayBuffer | File,
    headers: Record<string, string> = {}
  ) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      handle.controller.signal.addEventListener('abort', () => {
        xhr.abort();
      });
      xhr.upload.addEventListener('progress', (ev) => {
        handle.setProgress(ev.loaded);
        this.#emitUploadProgressEvent();
      });
      xhr.addEventListener('error', (ev) => {
        reject(new Error('Upload failed.'));
      });
      xhr.addEventListener('load', () => {
        resolve(void 0);
      });
      xhr.open('PUT', url);
      for (const key in headers) {
        xhr.setRequestHeader(key, headers[key]);
      }
      xhr.send(body);
    });
  }
}

/**
 * UploadHandle class manages the state and progress of a file upload.
 * It tracks the file's upload status, handles progress updates, and provides
 * a promise that resolves when the upload completes or rejects on failure.
 *
 * @template T - The type of the value that the promise resolves to. Defaults to an object with `encrypted` and `fileId` properties.
 */
class UploadHandle<
  T = {
    encrypted: boolean;
    fileId: string;
  },
> {
  readonly controller = new AbortController();

  readonly promise: Promise<T>;

  fileId?: string;

  loaded: number = 0;

  progress: number = 0;

  uploadSize: number = 0;

  resolve!: (value: T) => void;

  reject!: (reason?: unknown) => void;

  /**
   * Creates an instance of UploadHandle.
   *
   * @param {string} fieldName - The name of the field associated with the file upload.
   * @param {File} file - The file to be uploaded.
   */
  constructor(
    readonly fieldName: string,
    readonly file: File
  ) {
    this.uploadSize = this.file.size;
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
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
  setProgress(loaded: number) {
    this.loaded = loaded;
    this.progress =
      this.file.size && loaded ? Math.min(1, loaded / this.file.size) : 0;
  }
}

// Register the PluginObfuscation plugin
Plugin.register(PluginUpload);
