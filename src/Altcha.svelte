<svelte:options
  customElement={{
    tag: 'altcha-widget',
    shadow: 'none',
  }}
/>

<script lang="ts">
  import { onDestroy, onMount, tick } from 'svelte';
  import {
    solveChallenge,
    createTestChallenge,
    getTimeZone,
    clarifyData,
  } from './helpers';
  import { State } from './types';
  import type { Plugin } from './plugin';
  import type {
    Configure,
    Payload,
    Challenge,
    Solution,
    SpamFilter,
    ServerVerificationPayload,
    Obfuscated,
    ClarifySolution,
    PluginContext,
  } from './types';

  interface Props {
    auto?: 'off' | 'onfocus' | 'onload' | 'onsubmit' | undefined;
    blockspam?: boolean | undefined;
    challengeurl?: string | undefined;
    challengejson?: string | undefined;
    debug?: boolean;
    delay?: number;
    expire?: number | undefined;
    floating?: 
    | 'auto'
    | 'top'
    | 'bottom'
    | 'false'
    | ''
    | boolean
    | undefined;
    floatinganchor?: string | undefined;
    floatingoffset?: number | undefined;
    hidefooter?: boolean;
    hidelogo?: boolean;
    name?: string;
    maxnumber?: number;
    mockerror?: boolean;
    obfuscated?: string | undefined;
    onLoad?: () => void;
    onStateChange?: (data: { payload: string | null; state: State }) => void;
    onServerVerification?: (resp: any) => void;
    onVerified?: (data: { payload: string | null }) => void;
    plugins?: string | undefined;
    refetchonexpire?: boolean;
    spamfilter?: boolean | 'ipAddress' | SpamFilter;
    strings?: string | undefined;
    test?: boolean | number;
    verifyurl?: string | undefined;
    workers?: number;
    workerurl?: string | undefined;
  }

  let {
    auto = undefined,
    blockspam = undefined,
    challengeurl = undefined,
    challengejson = undefined,
    debug = false,
    delay = 0,
    expire = undefined,
    floating = undefined,
    floatinganchor = undefined,
    floatingoffset = undefined,
    hidefooter = false,
    hidelogo = false,
    name = 'altcha',
    maxnumber = 1e6,
    mockerror = false,
    onLoad = undefined,
    onServerVerification = undefined,
    onStateChange = undefined,
    onVerified = undefined,
    obfuscated = undefined,
    plugins = undefined,
    refetchonexpire = true,
    spamfilter = false,
    strings = undefined,
    test = false,
    verifyurl = undefined,
    workers = Math.min(16, navigator.hardwareConcurrency || 8),
    workerurl = undefined
  }: Props = $props();

  const allowedAlgs = ['SHA-256', 'SHA-384', 'SHA-512'];
  const ariaLinkLabel = 'Visit Altcha.org';
  const website = 'https://altcha.org/';
  const documentLocale = document.documentElement.lang?.split('-')?.[0];
  const isFreeSaaS =
    $derived(challengeurl && 
    new URL(challengeurl, location.origin).host.endsWith('.altcha.org') &&
    !!challengeurl?.includes('apiKey=ckey_'));
  const parsedChallengeJson = $derived(challengejson ? parseJsonAttribute(challengejson) : undefined);
  const parsedStrings = $derived(strings ? parseJsonAttribute(strings) : {});
  const _strings = $derived({
    ariaLinkLabel,
    error: 'Verification failed. Try again later.',
    expired: 'Verification expired. Try again.',
    footer: `Protected by <a href="${website}" target="_blank" aria-label="${parsedStrings?.ariaLinkLabel || ariaLinkLabel}">ALTCHA</a>`,
    label: "I'm not a robot",
    verified: 'Verified',
    verifying: 'Verifying...',
    waitAlert: 'Verifying... please wait.',
    ...parsedStrings,
  });

  let checked: boolean = $state(false);
  let el: HTMLElement = $state()!;
  let elAnchorArrow: HTMLElement | null = $state(null);
  let elFloatingAnchor: HTMLElement | null = null;
  let elForm: HTMLFormElement | null = null;
  let error: string | null = $state(null);
  let expireTimeout: ReturnType<typeof setTimeout> | null = null;
  let payload: string | null = $state(null);
  let loadedPlugins: Plugin[] = [];
  let currentState: State = $state(State.UNVERIFIED);

  $effect(() => {
    onStateChange?.({ payload, state: currentState });
  });

  $effect(() => {
    onErrorChangeHandler(error);
  });

  $effect(() => {
    onStateChangeHandler(currentState);
  });

  onDestroy(() => {
    destroyPlugins();
    if (elForm) {
      elForm.removeEventListener('submit', onFormSubmit);
      elForm.removeEventListener('reset', onFormReset);
      elForm.removeEventListener('focusin', onFormFocusIn);
      elForm = null;
    }
    if (expireTimeout) {
      clearTimeout(expireTimeout);
      expireTimeout = null;
    }
    document.removeEventListener('click', onDocumentClick);
    document.removeEventListener('scroll', onDocumentScroll);
    window.removeEventListener('resize', onWindowResize);
  });

  onMount(() => {
    log('mounted', ALTCHA_VERSION);
    log('workers', workers);
    loadPlugins();
    log(
      'plugins',
      loadedPlugins.length
        ? loadedPlugins.map((plugin) => (plugin.constructor as any).pluginName).join(', ')
        : 'none'
    );
    if (test) {
      log('using test mode');
    }
    if (expire) {
      setExpire(expire);
    }
    if (auto !== undefined) {
      log('auto', auto);
    }
    if (floating !== undefined) {
      setFloating(floating);
    }
    elForm = el?.closest('form');
    if (elForm) {
      elForm.addEventListener('submit', onFormSubmit, {
        capture: true,
      });
      elForm.addEventListener('reset', onFormReset);
      if (auto === 'onfocus') {
        elForm.addEventListener('focusin', onFormFocusIn);
      }
    }
    if (auto === 'onload') {
      if (obfuscated) {
        clarify();
      } else {
        verify();
      }
    }
    if (isFreeSaaS && (hidefooter || hidelogo)) {
      log(
        'Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution.'
      );
    }
    requestAnimationFrame(() => {
      onLoad?.();
    });
  });

  /**
   * Creates a Base64-encoded payload with solution.
   */
  function createAltchaPayload(data: Challenge, solution: Solution): string {
    return btoa(
      JSON.stringify({
        algorithm: data.algorithm,
        challenge: data!.challenge,
        number: solution.number,
        salt: data.salt,
        signature: data.signature,
        test: test ? true : undefined,
        took: solution.took,
      } satisfies Payload)
    );
  }

  /**
   * Destroys all loaded plugins.
   */
  function destroyPlugins() {
    for (const plugin of loadedPlugins) {
      plugin.destroy();
    }
  }

  /**
   * Sets the state to EXPIRED or re-fetches the challenge if `refetchonexpire` is enabled.
   */
  function expireChallenge() {
    if (challengeurl && refetchonexpire && currentState === State.VERIFIED) {
      // re-fetch challenge and verify again
      verify();
    } else {
      reset(State.EXPIRED, _strings.expired);
    }
  }

  /**
   * Fetches the challenge from the configured `challengeurl` or `challengejson`.
   */
  async function fetchChallenge(): Promise<Challenge> {
    if (mockerror) {
      log('mocking error');
      throw new Error('Mocked error.');
    } else if (parsedChallengeJson) {
      log('using provided json data');
      return parsedChallengeJson;
    } else if (test) {
      log('generating test challenge', { test });
      return createTestChallenge(typeof test !== 'boolean' ? +test : undefined);
    } else {
      if (!challengeurl && elForm) {
        const action = elForm.getAttribute('action');
        if (action?.includes('/form/')) {
          // ALTCHA Forms url for challenges
          challengeurl = action + '/altcha';
        }
      }
      if (!challengeurl) {
        throw new Error(`Attribute challengeurl not set.`);
      }
      log('fetching challenge from', challengeurl);
      const resp = await fetch(challengeurl, {
        headers: !!spamfilter
          ? {
              'x-altcha-spam-filter': '1',
            }
          : {},
      });
      if (resp.status !== 200) {
        throw new Error(`Server responded with ${resp.status}.`);
      }
      // The use of Expires header is deprecated, use salt params instead
      const expHeader = resp.headers.get('Expires');
      const configHeader = resp.headers.get('X-Altcha-Config');
      const json = await resp.json();
      const params = new URLSearchParams(json.salt.split('?')?.[1]);
      const expires = params.get('expires') || params.get('expire');
      if (expires) {
        const date = new Date(+expires * 1000);
        const diff = !isNaN(date.getTime()) ? date.getTime() - Date.now() : 0;
        if (diff > 0) {
          setExpire(diff);
        }
      }
      if (configHeader) {
        try {
          const config = JSON.parse(configHeader);
          if (config && typeof config === 'object') {
            if (config.verifyurl) {
              config.verifyurl = new URL(
                config.verifyurl,
                new URL(challengeurl)
              ).toString();
            }
            configure(config);
          }
        } catch (err) {
          log('unable to configure from X-Altcha-Config', err);
        }
      }
      if (!expire && expHeader?.length) {
        const parsed = Date.parse(expHeader);
        if (parsed) {
          const diff = parsed - Date.now();
          if (diff > 0) {
            setExpire(diff);
          }
        }
      }
      return json;
    }
  }

  /**
   * Get the email field value fot the Spam Filter.
   */
  function getEmail(name?: string) {
    const elInput = elForm?.querySelector(
      typeof name === 'string'
        ? `input[name="${name}"]`
        : 'input[type="email"]:not([data-no-spamfilter])'
    ) as HTMLInputElement;
    return elInput?.value?.slice(elInput.value.indexOf('@')) || void 1;
  }

  /**
   * Get configuration options for the Spam Filter.
   */
  function getSpamFilterOptions(): SpamFilter {
    if (spamfilter === 'ipAddress') {
      return {
        blockedCountries: undefined,
        classifier: undefined,
        disableRules: undefined,
        email: false,
        expectedCountries: undefined,
        expectedLanguages: undefined,
        fields: false,
        ipAddress: undefined,
        text: undefined,
        timeZone: undefined,
      };
    }
    return typeof spamfilter === 'object'
      ? spamfilter
      : {
          blockedCountries: undefined,
          classifier: undefined,
          disableRules: undefined,
          email: undefined,
          expectedCountries: undefined,
          expectedLanguages: undefined,
          fields: undefined,
          ipAddress: undefined,
          text: undefined,
          timeZone: undefined,
        };
  }

  /**
   * Get all text field values for the Spam Filter.
   */
  function getTextFields(names?: string[]) {
    const elInputs = [
      ...(elForm?.querySelectorAll(
        names?.length
          ? names.map((name) => `input[name="${name}"]`).join(', ')
          : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])'
      ) || []),
    ] as HTMLInputElement[];
    return elInputs.reduce(
      (acc, el) => {
        const name = el.name;
        const value = el.value;
        if (name && value) {
          acc[name] = /\n/.test(value)
            ? value.replace(/(?<!\r)\n/g, '\r\n')
            : value;
        }
        return acc;
      },
      {} as Record<string, string>
    );
  }

  /**
   * Loads the registered plugins.
   */
  function loadPlugins() {
    const enabledPlugins =
      plugins !== undefined ? plugins.split(',') : undefined;
    for (const Plugin of globalThis.altchaPlugins) {
      if (!enabledPlugins || enabledPlugins.includes(Plugin.pluginName)) {
        loadedPlugins.push(
          new Plugin({
            el,
            clarify,
            getConfiguration,
            getFloatingAnchor,
            getState,
            log,
            reset,
            solve,
            setState,
            setFloatingAnchor,
            verify,
          } satisfies PluginContext)
        );
      }
    }
  }

  /**
   * Logs debug information to the console.
   */
  function log(...args: unknown[]) {
    if (debug || args.some((a) => a instanceof Error)) {
      console[args[0] instanceof Error ? 'error' : 'log'](
        'ALTCHA',
        `[name=${name}]`,
        ...args
      );
    }
  }

  /**
   * Called when the checkbox is checked or unchecked.
   */
  function onCheckedChange() {
    if ([State.UNVERIFIED, State.ERROR, State.EXPIRED].includes(currentState)) {
      if (spamfilter && elForm?.reportValidity() === false) {
        checked = false;
      } else if (obfuscated) {
        clarify();
      } else {
        verify();
      }
    } else {
      checked = true;
    }
  }

  /**
   * Handles click events on the document.
   */
  function onDocumentClick(ev: MouseEvent) {
    const target = ev.target as HTMLElement;
    if (
      floating &&
      target &&
      !el.contains(target) &&
      (currentState === State.VERIFIED || (auto === 'off' && currentState === State.UNVERIFIED))
    ) {
      el.style.display = 'none';
    }
  }

  /**
   * Handles scroll events on the document.
   */
  function onDocumentScroll() {
    if (floating && currentState !== State.UNVERIFIED) {
      repositionFloating();
    }
  }

  /**
   * Handles changes in the error state and notifies plugins.
   */
  function onErrorChangeHandler(_: typeof error) {
    for (const plugin of loadedPlugins) {
      if (typeof plugin.onErrorChange === 'function') {
        plugin.onErrorChange(error);
      }
    }
  }

  /**
   * Handles the form focus-in event.
   */
  function onFormFocusIn(ev: FocusEvent) {
    if (currentState === State.UNVERIFIED) {
      verify();
    }
  }

  /**
   * Handles the form submission event.
   */
  function onFormSubmit(ev: SubmitEvent) {
    if (elForm && auto === 'onsubmit') {
      if (currentState === State.UNVERIFIED) {
        ev.preventDefault();
        ev.stopPropagation();
        verify().then(() => {
          elForm?.requestSubmit();
        });
      } else if (currentState !== State.VERIFIED) {
        ev.preventDefault();
        ev.stopPropagation();
        if (currentState === State.VERIFYING) {
          onInvalid();
        }
      }
    } else if (elForm && floating && auto === 'off' && currentState === State.UNVERIFIED) {
      ev.preventDefault();
      ev.stopPropagation();
      el.style.display = 'block';
      repositionFloating();
    }
  }

  /**
   * Handles the form reset event.
   */
  function onFormReset() {
    reset();
  }

  /**
   * Called when the form is submitted while in VERIFYING state and shows an alert message if the string `waitAlert` is configured.
   */
  function onInvalid() {
    if (currentState === State.VERIFYING && _strings.waitAlert) {
      alert(_strings.waitAlert);
    }
  }

  /**
   * Handles changes in the state and updates the UI accordingly.
   */
  function onStateChangeHandler(_: typeof currentState) {
    for (const plugin of loadedPlugins) {
      if (typeof plugin.onStateChange === 'function') {
        plugin.onStateChange(currentState);
      }
    }
    if (floating && currentState !== State.UNVERIFIED) {
      requestAnimationFrame(() => {
        repositionFloating();
      });
    }
    checked = currentState === State.VERIFIED;
  }

  /**
   * Handles resize events on the window.
   */
  function onWindowResize() {
    if (floating) {
      repositionFloating();
    }
  }

  /**
   * Parses a JSON attribute string.
   */
  function parseJsonAttribute(str: string) {
    return JSON.parse(str);
  }

  /**
   * Repositions the floating UI element based on scroll position.
   */
  function repositionFloating(viewportOffset: number = 20) {
    if (el) {
      if (!elFloatingAnchor) {
        elFloatingAnchor =
          (floatinganchor
            ? document.querySelector<HTMLElement>(floatinganchor)
            : elForm?.querySelector(
                'input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])'
              )) || elForm;
      }
      if (elFloatingAnchor) {
        // @ts-expect-error
        const offsetY = parseInt(floatingoffset, 10) || 12;
        const anchorBoundry = elFloatingAnchor.getBoundingClientRect();
        const elBoundary = el.getBoundingClientRect();
        const docHeight = document.documentElement.clientHeight;
        const docWidth = document.documentElement.clientWidth;
        const showOnTop =
          floating === 'auto'
            ? anchorBoundry.bottom +
                elBoundary.height +
                offsetY +
                viewportOffset >
              docHeight
            : floating === 'top';
        const left = Math.max(
          viewportOffset,
          Math.min(
            docWidth - viewportOffset - elBoundary.width,
            anchorBoundry.left + anchorBoundry.width / 2 - elBoundary.width / 2
          )
        );
        if (showOnTop) {
          el.style.top = `${anchorBoundry.top - (elBoundary.height + offsetY)}px`;
        } else {
          el.style.top = `${anchorBoundry.bottom + offsetY}px`;
        }
        el.style.left = `${left}px`;
        el.setAttribute('data-floating', showOnTop ? 'top' : 'bottom');
        if (elAnchorArrow) {
          const anchorArrowBoundry = elAnchorArrow.getBoundingClientRect();
          elAnchorArrow.style.left =
            anchorBoundry.left -
            left +
            anchorBoundry.width / 2 -
            anchorArrowBoundry.width / 2 +
            'px';
        }
      } else {
        log('unable to find floating anchor element');
      }
    }
  }

  /**
   * Classifies the data using the Spam Filter and sets the payload.
   */
  async function requestServerVerification(verificationPayload: string) {
    if (!verifyurl) {
      throw new Error('Attribute verifyurl not set.');
    }
    log('requesting server verification from', verifyurl);
    const body: ServerVerificationPayload = {
      payload: verificationPayload,
    };
    if (spamfilter) {
      const {
        blockedCountries,
        classifier,
        disableRules,
        email,
        expectedLanguages,
        expectedCountries,
        fields,
        ipAddress,
        text,
        timeZone,
      } = getSpamFilterOptions();
      body.blockedCountries = blockedCountries;
      body.classifier = classifier;
      body.disableRules = disableRules;
      body.email = email === false ? undefined : getEmail(email);
      body.expectedCountries = expectedCountries;
      body.expectedLanguages =
        expectedLanguages || (documentLocale ? [documentLocale] : undefined);
      body.fields = fields === false ? undefined : getTextFields(fields);
      body.ipAddress = ipAddress === false ? undefined : ipAddress || 'auto';
      body.text = text;
      body.timeZone =
        timeZone === false ? undefined : timeZone || getTimeZone();
    }
    const resp = await fetch(verifyurl, {
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
    });
    if (resp.status !== 200) {
      throw new Error(`Server responded with ${resp.status}.`);
    }
    const json = await resp.json();
    if (json?.payload) {
      payload = json.payload;
    }
    onServerVerification?.(json);
    if (blockspam && json.classification === 'BAD') {
      throw new Error('SpamFilter returned negative classification.');
    }
  }

  /**
   * Sets the expiration timeout for the challenge.
   */
  function setExpire(duration: number) {
    log('expire', duration);
    if (expireTimeout) {
      clearTimeout(expireTimeout);
      expireTimeout = null;
    }
    if (duration < 1) {
      expireChallenge();
    } else {
      expireTimeout = setTimeout(expireChallenge, duration);
    }
  }

  /**
   * Set the floating UI mode.
   */
  function setFloating(strategy: typeof floating) {
    log('floating', strategy);
    if (floating !== strategy) {
      el.style.left = '';
      el.style.top = '';
    }
    floating =
      strategy === true || strategy === ''
        ? 'auto'
        : strategy === false || strategy === 'false'
          ? undefined
          : floating;
    if (floating) {
      if (!auto) {
        auto = 'onsubmit';
      }
      document.addEventListener('scroll', onDocumentScroll);
      document.addEventListener('click', onDocumentClick);
      window.addEventListener('resize', onWindowResize);
    } else if (auto === 'onsubmit') {
      auto = undefined;
    }
  }

  /**
   * Validates a retrieved challenge and throws if invalid.
   */
  function validateChallenge(data: Challenge) {
    if (!data.algorithm) {
      throw new Error(`Invalid challenge. Property algorithm is missing.`);
    }
    if (data.signature === undefined) {
      throw new Error('Invalid challenge. Property signature is missing.');
    }
    if (!allowedAlgs.includes(data.algorithm.toUpperCase())) {
      throw new Error(
        `Unknown algorithm value. Allowed values: ${allowedAlgs.join(', ')}`
      );
    }
    if (!data.challenge || data.challenge.length < 40) {
      throw new Error('Challenge is too short. Min. 40 chars.');
    }
    if (!data.salt || data.salt.length < 10) {
      throw new Error('Salt is too short. Min. 10 chars.');
    }
  }

  async function solve(data: Challenge | Obfuscated): Promise<{
    data: Challenge | Obfuscated;
    solution: Solution | ClarifySolution | null;
  }> {
    let solution: Solution | ClarifySolution | null = null;
    if ('Worker' in window) {
      try {
        solution = await solveWorkers(data, data.maxnumber);
      } catch (err) {
        log(err);
      }
      if (solution?.number !== undefined || 'obfuscated' in data) {
        return {
          data,
          solution,
        };
      }
    }
    if ('obfuscated' in data) {
      const solution = await clarifyData(
        data.obfuscated,
        data.key,
        data.maxnumber
      );
      return {
        data,
        solution: await solution.promise,
      };
    }
    return {
      data,
      solution: await solveChallenge(
        data.challenge,
        data.salt,
        data.algorithm,
        data.maxnumber || maxnumber
      ).promise,
    };
  }

  async function solveWorkers(
    challenge: Challenge | Obfuscated,
    max: number = typeof test === 'number' ? test : maxnumber,
    concurrency: number = Math.ceil(workers)
  ): Promise<Solution | null> {
    const workers: Worker[] = [];
    concurrency = Math.min(16, Math.max(1, concurrency));
    for (let i = 0; i < concurrency; i++) {
      workers.push(altchaCreateWorker(workerurl));
    }
    const step = Math.ceil(max / concurrency);
    const solutions = await Promise.all(
      workers.map((worker, i) => {
        const start = i * step;
        return new Promise((resolve) => {
          worker.addEventListener('message', (message: MessageEvent) => {
            if (message.data) {
              for (const w of workers) {
                if (w !== worker) {
                  w.postMessage({ type: 'abort' });
                }
              }
            }
            resolve(message.data);
          });
          worker.postMessage({
            payload: challenge,
            max: start + step,
            start,
            type: 'work',
          });
        }) as Promise<Solution | null>;
      })
    );
    for (const worker of workers) {
      worker.terminate();
    }
    return solutions.find((solution) => !!solution) || null;
  }

  /**
   * Clarifies the data by verifying obfuscated information.
   */
  export async function clarify() {
    if (!obfuscated) {
      currentState = State.ERROR;
      return;
    }
    const plugin = loadedPlugins.find((p) => (p.constructor as any).pluginName === 'obfuscation');
    if (!plugin || !('clarify' in plugin)) {
      currentState = State.ERROR;
      log(
        'Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.'
      );
      return;
    }
    if ('clarify' in plugin && typeof plugin.clarify === 'function') {
      return plugin.clarify();
    }
  }

  /**
   * Programmatically configure the widget with given options.
   */
  export function configure(options: Configure) {
    if (options.obfuscated !== undefined) {
      obfuscated = options.obfuscated;
    }
    if (options.auto !== undefined) {
      auto = options.auto;
      if (auto === 'onload') {
        if (obfuscated) {
          clarify();
        } else {
          verify();
        }
      }
    }
    if (options.blockspam !== undefined) {
      blockspam = !!options.blockspam;
    }
    if (options.floatinganchor !== undefined) {
      floatinganchor = options.floatinganchor;
    }
    if (options.delay !== undefined) {
      delay = options.delay;
    }
    if (options.floatingoffset !== undefined) {
      floatingoffset = options.floatingoffset;
    }
    if (options.floating !== undefined) {
      setFloating(options.floating);
    }
    if (options.expire !== undefined) {
      setExpire(options.expire);
      expire = options.expire;
    }
    if (options.challenge) {
      challengejson = typeof options.challenge === 'string' ? options.challenge : JSON.stringify(options.challenge);
      validateChallenge(parsedChallengeJson);
    }
    if (options.challengeurl !== undefined) {
      challengeurl = options.challengeurl;
    }
    if (options.debug !== undefined) {
      debug = !!options.debug;
    }
    if (options.hidefooter !== undefined) {
      hidefooter = !!options.hidefooter;
    }
    if (options.hidelogo !== undefined) {
      hidelogo = !!options.hidelogo;
    }
    if (options.maxnumber !== undefined) {
      maxnumber = +options.maxnumber;
    }
    if (options.mockerror !== undefined) {
      mockerror = !!options.mockerror;
    }
    if (options.name !== undefined) {
      name = options.name;
    }
    if (options.refetchonexpire !== undefined) {
      refetchonexpire = !!options.refetchonexpire;
    }
    if (options.spamfilter !== undefined) {
      spamfilter =
        typeof options.spamfilter === 'object'
          ? options.spamfilter
          : !!options.spamfilter;
    }
    if (options.strings) {
      strings = typeof options.strings === 'string' ? options.strings : JSON.stringify(options.strings);
    }
    if (options.test !== undefined) {
      test = typeof options.test === 'number' ? options.test : !!options.test;
    }
    if (options.verifyurl !== undefined) {
      verifyurl = options.verifyurl;
    }
    if (options.workers !== undefined) {
      workers = +options.workers;
    }
    if (options.workerurl !== undefined) {
      workerurl = options.workerurl;
    }
  }

  /**
   * Get the current configuration options.
   */
  export function getConfiguration(): Configure {
    return {
      auto,
      blockspam,
      challengeurl,
      debug,
      delay,
      expire,
      floating: floating as Configure['floating'],
      floatinganchor,
      floatingoffset,
      hidefooter,
      hidelogo,
      name,
      maxnumber,
      mockerror,
      obfuscated,
      refetchonexpire,
      spamfilter,
      strings: _strings,
      test,
      verifyurl,
      workers,
      workerurl,
    };
  }

  /**
   * Get the current "floating anchor" as an HTML element or null.
   */
  export function getFloatingAnchor() {
    return elFloatingAnchor;
  }

  /**
   * Get a loaded plugin by it's name.
   */
  export function getPlugin(name: string) {
    return loadedPlugins.find((plugin) => (plugin.constructor as any).pluginName === name);
  }

  /**
   * Get the current state.
   */
  export function getState() {
    return currentState;
  }

  /**
   * Clears the state and resets the form.
   */
  export function reset(
    newState: State = State.UNVERIFIED,
    err: string | null = null
  ) {
    if (expireTimeout) {
      clearTimeout(expireTimeout);
      expireTimeout = null;
    }
    checked = false;
    error = err;
    payload = null;
    currentState = newState;
  }

  /**
   * Set the "floating anchor" HTML element.
   */
  export function setFloatingAnchor(el: HTMLElement) {
    elFloatingAnchor = el;
  }

  /**
   * Set the state and optional error message.
   */
  export function setState(newState: State, err: string | null = null) {
    currentState = newState;
    error = err;
  }

  /**
   * Triggers verification.
   */
  export async function verify() {
    reset(State.VERIFYING);
    await new Promise((resolve) => setTimeout(resolve, delay || 0));
    return fetchChallenge()
      .then((data) => {
        validateChallenge(data);
        log('challenge', data);
        return solve(data);
      })
      .then(({ data, solution }) => {
        log('solution', solution);
        if ('challenge' in data && solution && !('clearText' in solution)) {
          if (solution?.number !== undefined) {
            if (verifyurl) {
              return requestServerVerification(
                createAltchaPayload(data, solution)
              );
            } else {
              payload = createAltchaPayload(data, solution);
              log('payload', payload);
            }
          } else {
            log(
              "Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."
            );
            throw new Error('Unexpected result returned.');
          }
        }
      })
      .then(() => {
        currentState = State.VERIFIED;
        log('verified');
        tick().then(() => {
          onVerified?.({ payload })
        });
      })
      .catch((err) => {
        log(err);
        currentState = State.ERROR;
        error = err.message;
      });
  }

  /*
  let isFreeSaaS =
    $derived(challengejson && 
    new URL(challengejson, location.origin).host.endsWith('.altcha.org') &&
    !!challengeurl?.includes('apiKey=ckey_'));
  let parsedChallenge: any = null;
  run(() => {
    parsedChallenge = challengejson
      ? parseJsonAttribute(challengejson)
      : undefined;
  });
  let parsedStrings: any = {};
  run(() => {
    parsedStrings = strings ? parseJsonAttribute(strings) : {};
  });
  let _strings = $derived({
    ariaLinkLabel,
    error: 'Verification failed. Try again later.',
    expired: 'Verification expired. Try again.',
    footer: `Protected by <a href="${website}" target="_blank" aria-label="${parsedStrings?.ariaLinkLabel || ariaLinkLabel}">ALTCHA</a>`,
    label: "I'm not a robot",
    verified: 'Verified',
    verifying: 'Verifying...',
    waitAlert: 'Verifying... please wait.',
    ...parsedStrings,
  });
  run(() => {
    dispatch('statechange', { payload, currentState });
  });
  run(() => {
    onErrorChange(error);
  });
  run(() => {
    onStateChange(currentState);
  });
  */
</script>

<slot />

<div bind:this={el} class="altcha" data-state={currentState} data-floating={floating}>
  <div class="altcha-main">
    {#if currentState === State.VERIFYING}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
          fill="currentColor"
          opacity=".25"
        /><path
          d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
          fill="currentColor"
          class="altcha-spinner"
        /></svg
      >
    {/if}

    <div
      class="altcha-checkbox"
      class:altcha-hidden={currentState === State.VERIFYING}
    >
      <input
        type="checkbox"
        id="{name}_checkbox"
        required={auto !== 'onsubmit' && (!floating || auto !== 'off')}
        bind:checked
        onchange={onCheckedChange}
        oninvalid={onInvalid}
      />
    </div>

    <div class="altcha-label">
      {#if currentState === State.VERIFIED}
        <span>{@html _strings.verified}</span>
        <input type="hidden" {name} value={payload} />
      {:else if currentState === State.VERIFYING}
        <span>{@html _strings.verifying}</span>
      {:else}
        <label for="{name}_checkbox">{@html _strings.label}</label>
      {/if}
    </div>

    {#if hidelogo !== true || isFreeSaaS}
      <div>
        <a
          href={website}
          target="_blank"
          class="altcha-logo"
          aria-label={_strings.ariaLinkLabel}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"
              fill="currentColor"
            />
            <path
              d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"
              fill="currentColor"
            />
            <path
              d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    {/if}
  </div>

  {#if error || currentState === State.EXPIRED}
    <div class="altcha-error">
      <svg
        width="14"
        height="14"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      {#if currentState === State.EXPIRED}
        <div title={error}>{@html _strings.expired}</div>
      {:else}
        <div title={error}>{@html _strings.error}</div>
      {/if}
    </div>
  {/if}

  {#if _strings.footer && (hidefooter !== true || isFreeSaaS)}
    <div class="altcha-footer">
      <div>{@html _strings.footer}</div>
    </div>
  {/if}

  {#if floating}
    <div bind:this={elAnchorArrow} class="altcha-anchor-arrow"></div>
  {/if}
</div>

<style lang="scss" global>
  @use './altcha.css';
</style>
