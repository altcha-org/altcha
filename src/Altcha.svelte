<svelte:options
  customElement={{
    tag: 'altcha-widget',
    shadow: 'none',
    props: {
      blockspam: {
        type: 'Boolean',
      },
      debug: {
        type: 'Boolean',
      },
      delay: {
        type: 'Number',
      },
      disableautofocus: {
        type: 'Boolean',
      },
      expire: {
        type: 'Number',
      },
      floatingoffset: {
        type: 'Number',
      },
      hidefooter: {
        type: 'Boolean',
      },
      hidelogo: {
        type: 'Boolean',
      },
      maxnumber: {
        type: 'Number',
      },
      mockerror: {
        type: 'Boolean',
      },
      refetchonexpire: {
        type: 'Boolean',
      },
      test: {
        type: 'Boolean',
      },
      workers: {
        type: 'Number',
      },
    },
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
  import { State, type Sentinel, type SentinelVerificationPayload, type SentinelVerificationResponse } from './types';
  import type { Plugin } from './plugin';
  import {
    type Configure,
    type Payload,
    type Challenge,
    type Solution,
    type SpamFilter,
    type ServerVerificationPayload,
    type Obfuscated,
    type ClarifySolution,
    type PluginContext,
    type CustomFetchFunction,
    AudioState,
  } from './types';
  import './globals';
  import './i18n/en';

  interface Props {
    auto?: 'off' | 'onfocus' | 'onload' | 'onsubmit' | undefined;
    /** @deprecated */
    blockspam?: boolean | undefined;
    challengeurl?: string | undefined;
    challengejson?: string | undefined;
    credentials?: 'omit' | 'same-origin' | 'include' | boolean | undefined;
    customfetch?: string | CustomFetchFunction | undefined;
    debug?: boolean;
    delay?: number;
    disableautofocus?: boolean;
    expire?: number | undefined;
    floating?: 'auto' | 'top' | 'bottom' | 'false' | '' | boolean | undefined;
    floatinganchor?: string | undefined;
    floatingoffset?: number | undefined;
    floatingpersist?: 'focus' | boolean | undefined;
    hidefooter?: boolean;
    hidelogo?: boolean;
    id?: string;
    language?: string | undefined;
    name?: string;
    maxnumber?: number;
    mockerror?: boolean;
    obfuscated?: string | undefined;
    overlay?: boolean | undefined;
    overlaycontent?: string | undefined;
    plugins?: string | undefined;
    refetchonexpire?: boolean;
    sentinel?: Sentinel;
    /** @deprecated */
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
    credentials = undefined,
    customfetch = undefined,
    debug = false,
    delay = 0,
    disableautofocus = false,
    expire = undefined,
    floating = undefined,
    floatinganchor = undefined,
    floatingoffset = undefined,
    floatingpersist = false,
    hidefooter = false,
    hidelogo = false,
    id = undefined,
    language = undefined,
    name = 'altcha',
    maxnumber = 1e6,
    mockerror = false,
    obfuscated = undefined,
    overlay = undefined,
    overlaycontent = undefined,
    plugins = undefined,
    refetchonexpire = true,
    sentinel = undefined,
    spamfilter = false,
    strings = undefined,
    test = false,
    verifyurl = undefined,
    workers = Math.min(16, navigator.hardwareConcurrency || 8),
    workerurl = undefined,
  }: Props = $props();

  const { altchaI18n } = globalThis;
  const altchaI18nStore = altchaI18n.store;
  const allowedAlgs = ['SHA-256', 'SHA-384', 'SHA-512'];
  const website = 'https://altcha.org/';
  const dispatch = <T,>(event: string, detail?: T) => {
    $host().dispatchEvent(
      new CustomEvent(event, {
        detail,
      })
    );
  };
  const documentLocale = document.documentElement.lang?.split('-')?.[0];
  const isFreeSaaS = $derived(
    challengeurl &&
      new URL(challengeurl, location.origin).host.endsWith('.altcha.org') &&
      !!challengeurl?.includes('apiKey=ckey_')
  );
  const parsedChallengeJson = $derived(
    challengejson ? parseJsonAttribute(challengejson) : undefined
  );
  const parsedStrings = $derived(strings ? parseJsonAttribute(strings) : {});
  const _strings = $derived({
    ...getI18nStrings($altchaI18nStore),
    ...parsedStrings,
  });
  const widgetId = $derived(`${id || name}_checkbox_${Math.round(Math.random() * 1e8)}`);

  let checked: boolean = $state(false);
  let codeChallenge: {
    challenge: Challenge;
    solution: Solution;
  } | null = $state(null);
  let currentState: State = $state(State.UNVERIFIED);
  let el: HTMLElement = $state()!;
  let elAnchorArrow: HTMLElement | null = $state(null);
  let elAudio: HTMLAudioElement | null = $state(null);
  let elBackdrop: HTMLElement | null = $state(null);
  let elCheckbox: HTMLInputElement | null = $state(null)
  let elFloatingAnchor: HTMLElement | null = $state(null);
  let elForm: HTMLFormElement | null = $state(null);
  let elSubmitter: HTMLElement | null = $state(null);
  let error: string | null = $state(null);
  let expireTimeout: ReturnType<typeof setTimeout> | null = null;
  let codeChallengeAudioState: AudioState | null = $state(null);
  let codeChallengeSubmitting: boolean = $state(false);
  let loadedPlugins: Plugin[] = [];
  let playCodeChallengeAudio: boolean = $state(false);
  let payload: string | null = $state(null);

  $effect(() => {
    onErrorChangeHandler(error);
  });

  $effect(() => {
    onStateChangeHandler(currentState);
  });

  onDestroy(() => {
    destroyPlugins();
    elSubmitter = null;
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
        ? loadedPlugins
            .map((plugin) => (plugin.constructor as any).pluginName)
            .join(', ')
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
      if (auto === 'onfocus' || floatingpersist === 'focus') {
        elForm.addEventListener('focusin', onFormFocusIn);
      }
    }
    if (overlay) {
      setOverlay(true);
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
      dispatch('load');
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
      const init: RequestInit = {
        credentials: typeof credentials === 'boolean' ? 'include' : credentials,
        headers:
          spamfilter !== false
            ? {
                'x-altcha-spam-filter': '1',
              }
            : {},
      };
      const resp = await getFetchFunction()(challengeurl, init);
      if (!resp || resp instanceof Response === false) {
        throw new Error(`Custom fetch function did not return a response.`);
      }
      if (resp.status !== 200) {
        throw new Error(`Server responded with ${resp.status}.`);
      }
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
            if (config.verifyurl && !config.verifyurl.startsWith('fn:')) {
              config.verifyurl = getServerUrl(config.verifyurl);
            }
            configure(config);
          }
        } catch (err) {
          log('unable to configure from X-Altcha-Config', err);
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
   * Get the custom `fetch` function if configured or return the default one.
   */
   function getFetchFunction() {
    let fetchFunction: CustomFetchFunction = fetch;
    if (customfetch) {
      log('using customfetch');
      if (typeof customfetch === 'string') {
        fetchFunction =
          globalThis[customfetch as keyof typeof globalThis] || null;
        if (!fetchFunction) {
          throw new Error(`Custom fetch function not found: ${customfetch}`);
        }
      } else {
        fetchFunction = customfetch;
      }
    }
    return fetchFunction;
  }

  /**
   * Get internalization strings based on the language preferences provided
   */
  function getI18nStrings(i18n: Record<string, any>, languages: string[] = [language || '', document.documentElement.lang || '', ...navigator.languages]) {
    const codes = Object.keys(i18n).map((code) => code.toLowerCase());
    const lang = languages.reduce((acc, lang) => {
      lang = lang.toLowerCase();
      return acc || (i18n[lang] ? lang : null) || codes.find((code) => lang.split('-')[0] === code.split('-')[0]) || null;
    }, null as string | null);
    return i18n[lang || 'en'];
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
   * Get the full URL based on the origin uri of the challengeurl.
   */
  function getServerUrl(uri: string, params?: Record<string, string | undefined | null>) {
    const baseUrl = new URL(challengeurl || location.origin);
    const result = new URL(uri, baseUrl);
    if (!result.search) {
      result.search = baseUrl.search;
    }
    if (params) {
      for (const key in params) {
        if (params[key] !== undefined && params[key] !== null) {
          result.searchParams.set(key, params[key]);
        }
      }
    }
    return result.toString();
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
            dispatch,
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
   * Handles the `ended` event on the audio element
   */
  function onAudioEnded() {
    codeChallengeAudioState = AudioState.PAUSED;
  }

  /**
   * Handles the `error` event on the audio element
   */
  function onAudioError(ev: Event) {
    codeChallengeAudioState = AudioState.ERROR;
  }

  /**
   * Handles the `canplay` event on the audio element
   */
  function onAudioCanPlay() {
    codeChallengeAudioState = AudioState.READY;
  }

  /**
   * Handles the `loadstart` event on the audio element
   */
  function onAudioLoadStart() {
    codeChallengeAudioState = AudioState.LOADING;
  }

  /**
   * Handles the `playing` event on the audio element
   */
  function onAudioPlaying() {
    codeChallengeAudioState = AudioState.PLAYING;
  }

  /**
   * Handles the `pause` event on the audio element
   */
  function onAudioPause() {
    codeChallengeAudioState = AudioState.PAUSED;
  }

  /**
   * Handles the `keydown` event in the code-challenge input (Space to play audio)
   */
  function onCodeChallengeInputKeyDown(ev: KeyboardEvent) {
    if (ev.code === 'Space') {
      ev.preventDefault();
      ev.stopImmediatePropagation();
      onPlayCodeChallengeAudio();
    }
  }

  /**
   * Handles "reload" button for the code challenge and forces re-verification
   */
  function onCodeChallengeReload(ev: Event) {
    ev.preventDefault();
    verify();
  }

  /**
   * Handles the submit event of the code-challenge form
   */
  function onCodeChallengeSubmit(ev: SubmitEvent) {
    ev.preventDefault();
    ev.stopPropagation();
    if (codeChallenge) {
      const data = new FormData(ev.target as HTMLFormElement);
      const code = String(data.get('code'));
      if (verifyurl?.startsWith('fn:')) {
        const functionName = verifyurl.replace(/^fn:/, '');
        log(`calling ${functionName} function instead of verifyurl`);
        if (!(functionName in globalThis)) {
          throw new Error(`Global function "${functionName}" is undefined.`);
        }
        return globalThis[functionName as keyof typeof globalThis]({
          challenge: codeChallenge.challenge,
          code,
          solution: codeChallenge.solution,
        });
      }
      codeChallengeSubmitting = true;
      requestSentinelVerification(
        createAltchaPayload(codeChallenge.challenge, codeChallenge.solution),
        code,
      ).then(({ reason, verified }) => {
        if (!verified) {
          reset();
          error = reason || 'Verification failed';
        } else { 
          codeChallenge = null;
          setState(State.VERIFIED);
          log('verified');
          tick().then(() => {
            // Focus the checkbox for better accessibility
            elCheckbox?.focus();
            dispatch('verified', { payload });
            if (auto === 'onsubmit') {
              requestSubmit(elSubmitter);
            } else if (overlay) {
              hide();
            }
          });
        }
      }).catch((err) => {
        codeChallenge = null;
        setState(State.ERROR, err);
        log('sentinel verification failed:', err);
      }).finally(() => {
        codeChallengeSubmitting = false;
      });
    }
  }

  /**
   * Called when the checkbox is checked or unchecked.
   */
  function onCheckedChange() {
    if ([State.UNVERIFIED, State.ERROR, State.EXPIRED, State.CODE].includes(currentState)) {
      if (spamfilter !== false && elForm?.reportValidity() === false) {
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
      ((currentState === State.VERIFIED && floatingpersist === false) ||
        (currentState === State.VERIFIED && floatingpersist === 'focus' && !elForm?.matches(':focus-within')) ||
        (auto === 'off' && currentState === State.UNVERIFIED))
    ) {
      hide();
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
    } else if (floating && floatingpersist === 'focus' && currentState === State.VERIFIED) {
      show();
    }
  }

  /**
   * Handles the form submission event.
   */
  function onFormSubmit(ev: SubmitEvent) {
    const target = ev.target as HTMLFormElement | null;
    const isCodeChallengeForm = target?.hasAttribute('data-code-challenge-form');
    if (isCodeChallengeForm) {
      // Submit event from the code-challenge form -> don't handle
      return;
    }
    elSubmitter = ev.submitter as HTMLElement | null;
    if (elForm && auto === 'onsubmit') {
      // allows the code challenge input to be auto-focused
      elSubmitter?.blur();
      if (currentState === State.UNVERIFIED) {
        ev.preventDefault();
        ev.stopPropagation();
        verify().then(() => {
          requestSubmit(elSubmitter);
        });
      } else if (currentState !== State.VERIFIED) {
        ev.preventDefault();
        ev.stopPropagation();
        if (currentState === State.VERIFYING) {
          onInvalid();
        }
      }
    } else if (
      elForm &&
      floating &&
      auto === 'off' &&
      currentState === State.UNVERIFIED
    ) {
      ev.preventDefault();
      ev.stopPropagation();
      show();
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
   * Plays the audio challenge.
   */
  function onPlayCodeChallengeAudio() {
    if (elAudio) {
      if (!elAudio.paused) {
        elAudio.pause();
      } else {
        elAudio.currentTime = 0;
        elAudio.play();
      }
    } else {
      playCodeChallengeAudio = true;
      // required for safari
      requestAnimationFrame(() => {
        elAudio?.play();
      });
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
    if (overlay && elBackdrop) {
      if (currentState !== State.UNVERIFIED) {
        show();
      } else {
        hide();
      }
    }
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
    if (spamfilter !== false) {
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
    const resp = await getFetchFunction()(verifyurl, {
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
    });
    if (!resp || resp instanceof Response === false) {
      throw new Error(`Custom fetch function did not return a response.`);
    }
    if (resp.status !== 200) {
      throw new Error(`Server responded with ${resp.status}.`);
    }
    const json = await resp.json();
    if (json?.payload) {
      payload = json.payload;
    }
    dispatch('serververification', json);
    if (blockspam && json.classification === 'BAD') {
      throw new Error('SpamFilter returned negative classification.');
    }
  }

  /**
   * Calls the Sentinel verification endpoint.
   */
  async function requestSentinelVerification(verificationPayload: string, code?: string): Promise<SentinelVerificationResponse> {
    if (!verifyurl) {
      throw new Error('Attribute verifyurl not set.');
    }
    log('requesting sentinel verification from', verifyurl);
    const body: SentinelVerificationPayload = {
      code,
      payload: verificationPayload,
    };
    if (sentinel) {
      body.fields = sentinel.fields ? getTextFields() : undefined;
      body.timeZone = sentinel.timeZone ? getTimeZone() : undefined;
    }
    const resp = await fetch(verifyurl, {
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
    });
    if (!resp || resp instanceof Response === false) {
      throw new Error(`Fetch function did not return a response.`);
    }
    if (resp.status !== 200) {
      throw new Error(`Server responded with ${resp.status}.`);
    }
    const json = await resp.json();
    if (json?.payload) {
      payload = json.payload;
    }
    dispatch('sentinelverification', json);
    return json;
  }

  /**
   * Request form submit with a fallback for iOS <16 which does not support requestSubmit
   */
  function requestSubmit(submitter?: HTMLElement | null) {
    if (elForm && 'requestSubmit' in elForm) {
      elForm.requestSubmit(submitter);
    // @ts-ignore
    } else if (elForm?.reportValidity()) {
      if (submitter) {
        submitter.click();
      } else {
        // @ts-ignore
        elForm.submit();
      }
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
   * Set overlay UI mode.
   */
  function setOverlay(enabled: boolean) {
    log('overlay', enabled);
    overlay = enabled;
    if (enabled) {
      if (!auto) {
        auto = 'onsubmit';
      }
      if (elBackdrop && el.parentElement) {
        elBackdrop.replaceWith(el.parentElement);
      }
      if (el?.parentElement?.parentElement) {
        elBackdrop = document.createElement('div');
        el.parentElement.parentElement.appendChild(elBackdrop);
        const elOverlay = document.createElement('div');
        const elClose = document.createElement('button');
        elClose.type = 'button';
        elClose.innerHTML = '&times;';
        elClose.addEventListener('click', (ev) => {
          ev.preventDefault();
          reset();
        });
        elBackdrop.classList.add('altcha-overlay-backdrop');
        elClose.classList.add('altcha-overlay-close-button');
        elOverlay.classList.add('altcha-overlay');
        elBackdrop.append(elOverlay);
        elOverlay.append(elClose);
        if (overlaycontent) {
          elOverlay.append(...document.querySelectorAll(overlaycontent));
        }
        elOverlay.append(el.parentElement);
      }
    } else if (elBackdrop && el.parentElement) {
      elBackdrop.replaceWith(el.parentElement);
      el.style.display = 'block';
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
        solution = await solveWorkers(data, data.maxNumber || data.maxnumber || maxnumber);
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
        data.maxNumber || data.maxnumber
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
        data.maxNumber || data.maxnumber || maxnumber
      ).promise,
    };
  }

  async function solveWorkers(
    challenge: Challenge | Obfuscated,
    max: number = typeof test === 'number' ? test : (challenge.maxNumber || challenge.maxnumber || maxnumber),
    concurrency: number = Math.ceil(workers)
  ): Promise<Solution | null> {
    const workersInstances: Worker[] = [];
    concurrency = Math.min(16, max, Math.max(1, concurrency));
    for (let i = 0; i < concurrency; i++) {
      workersInstances.push(altchaCreateWorker(workerurl));
    }
    const step = Math.ceil(max / concurrency);
    const solutions = await Promise.all(
      workersInstances.map((worker, i) => {
        const start = i * step;
        return new Promise((resolve) => {
          worker.addEventListener('message', (message: MessageEvent) => {
            if (message.data) {
              for (const w of workersInstances) {
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
    for (const worker of workersInstances) {
      worker.terminate();
    }
    return solutions.find((solution) => !!solution) || null;
  }

  /**
   * Clarifies the data by verifying obfuscated information.
   */
  export async function clarify() {
    if (!obfuscated) {
      setState(State.ERROR);
      return;
    }
    const plugin = loadedPlugins.find(
      (p) => (p.constructor as any).pluginName === 'obfuscation'
    );
    if (!plugin || !('clarify' in plugin)) {
      setState(State.ERROR);
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
    if (options.customfetch !== undefined) {
      customfetch = options.customfetch;
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
      challengejson =
        typeof options.challenge === 'string'
          ? options.challenge
          : JSON.stringify(options.challenge);
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
    if (options.language !== undefined) {
      strings = getI18nStrings($altchaI18nStore, [options.language]);
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
    if (options.overlaycontent !== undefined) {
      overlaycontent = options.overlaycontent;
    }
    if (options.overlay !== undefined) {
      setOverlay(options.overlay);
    }
    if (options.refetchonexpire !== undefined) {
      refetchonexpire = !!options.refetchonexpire;
    }
    if (options.sentinel !== undefined &&  typeof options.sentinel === 'object') {
      sentinel = options.sentinel;
    }
    if (options.spamfilter !== undefined) {
      spamfilter =
        typeof options.spamfilter === 'object'
          ? options.spamfilter
          : !!options.spamfilter;
    }
    if (options.strings) {
      strings =
        typeof options.strings === 'string'
          ? options.strings
          : JSON.stringify(options.strings);
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
      overlay,
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
    return loadedPlugins.find(
      (plugin) => (plugin.constructor as any).pluginName === name
    );
  }

  /**
   * Get the current state.
   */
  export function getState() {
    return currentState;
  }

  /**
   * Hide the widget using `display = 'none'`
   */
  export function hide() {
    el.style.display = 'none';
    if (overlay && elBackdrop) {
      elBackdrop.style.display = 'none';
    }
  }

  /**
   * Repositions the floating UI element based on scroll position.
   */
  export function repositionFloating(viewportOffset: number = 20) {
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
    payload = null;
    codeChallenge = null;
    playCodeChallengeAudio = false;
    codeChallengeAudioState = null;
    setState(newState, err);
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
    dispatch('statechange', { payload, state: currentState });
  }

  /**
   * Show the widget using `display = 'block'` and reposition when floating.
   */
  export function show() {
    el.style.display = 'block';
    if (floating) {
      repositionFloating();
    }
    if (overlay && elBackdrop) {
      elBackdrop.style.display = 'flex';
    }
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
        if (!solution || (data && 'challenge' in data && !('clearText' in solution))) {
          if (solution?.number !== undefined && 'challenge' in data) {
            if (verifyurl && 'codeChallenge' in data) {
              if (['INPUT', 'BUTTON', 'SELECT', 'TEXTAREA'].includes(document.activeElement?.tagName || '') && disableautofocus === false) {
                // blur the forms inputs to make the code challenge input autofocus work
                (document.activeElement as HTMLInputElement).blur();
              }
              codeChallenge = {
                challenge: data,
                solution,
              };

            } else if (verifyurl && sentinel !== undefined) {
              return requestSentinelVerification(
                createAltchaPayload(data, solution)
              ) as Promise<unknown>;

            } else if (verifyurl) {
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
        if (codeChallenge) {
          setState(State.CODE);
          tick().then(() => {
            dispatch('code', { codeChallenge });
          });

        } else {
          setState(State.VERIFIED);
          log('verified');
          tick().then(() => {
            dispatch('verified', { payload });
            if (auto === 'onsubmit') {
              requestSubmit(elSubmitter);
            } else if (overlay) {
              hide();
            }
          });
        }
      })
      .catch((err) => {
        log(err);
        setState(State.ERROR, err.message);
      });
  }
</script>

<slot />

<div
  bind:this={el}
  class="altcha"
  data-state={currentState}
  data-floating={floating}
  data-overlay={overlay}
>
  <div class="altcha-main">
    <div
      class="altcha-checkbox"
      class:altcha-checkbox-verifying={currentState === State.VERIFYING}
    >
      {#if currentState === State.VERIFYING}
        {@render spinner()}
      {/if}
      <input
        bind:this={elCheckbox}
        type="checkbox"
        id={widgetId}
        required={auto !== 'onsubmit' && (!floating || auto !== 'off')}
        bind:checked
        onchange={onCheckedChange}
        oninvalid={onInvalid}
      />
    </div>

    <label
      class="altcha-label"
      for={widgetId}
    >
      {#if currentState === State.VERIFIED}
        {@html _strings.verified}
      {:else if currentState === State.VERIFYING}
        {@html _strings.verifying}
      {:else if currentState === State.CODE}
        {@html _strings.verificationRequired}
      {:else}
        {@html _strings.label}
      {/if}
    </label>

    {#if currentState === State.VERIFIED}
      <input type="hidden" {name} value={payload} />
    {/if}

    {#if hidelogo !== true || isFreeSaaS}
      <div>
        <a
          href={website}
          target="_blank"
          class="altcha-logo"
          aria-label={_strings.ariaLinkLabel}
          aria-hidden="true"
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

    {#if codeChallenge?.challenge.codeChallenge}
    <div
      class="altcha-code-challenge"
      role="dialog"
      aria-label={_strings.verificationRequired}
    >
      <div class="altcha-code-challenge-arrow"></div>

      <form
        data-code-challenge-form="1"
        onsubmitcapture={onCodeChallengeSubmit}
      >
        <img class="altcha-code-challenge-image" src={codeChallenge.challenge.codeChallenge.image} alt="" />

        <!-- svelte-ignore a11y_autofocus -->
        <input
          type="text"
          autocomplete="off"
          name="code"
          minlength={codeChallenge.challenge.codeChallenge.length || 1}
          maxlength={codeChallenge.challenge.codeChallenge.length}
          class="altcha-code-challenge-input"
          placeholder={_strings.enterCode}
          aria-label={
            codeChallengeAudioState === AudioState.LOADING
            ? _strings.loading
            : codeChallengeAudioState === AudioState.PLAYING ? '' : _strings.enterCodeAria
          }
          aria-live={codeChallengeAudioState ? 'assertive' : 'polite'}
          aria-busy={codeChallengeAudioState === AudioState.LOADING}
          disabled={codeChallengeSubmitting}
          required
          autofocus={!disableautofocus}
          onkeydown={onCodeChallengeInputKeyDown}
        />

        <div class="altcha-code-challenge-buttons">
          <div  class="altcha-code-challenge-buttons-left">
            {#if codeChallenge.challenge.codeChallenge.audio}
            <button
              type="button"
              title={_strings.getAudioChallenge}
              class="altcha-code-challenge-audio"
              disabled={codeChallengeAudioState === AudioState.LOADING || codeChallengeAudioState === AudioState.ERROR || codeChallengeSubmitting}
              aria-label={codeChallengeAudioState === AudioState.LOADING ? _strings.loading : _strings.getAudioChallenge}
              onclick={onPlayCodeChallengeAudio}
            >
              {#if codeChallengeAudioState === AudioState.LOADING}
                {@render spinner(20)}
              {:else if codeChallengeAudioState === AudioState.ERROR}
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>
              {:else if codeChallengeAudioState === AudioState.PLAYING}
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>
              {:else}
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>
              {/if}
            </button>
            {/if}

            <button
              type="button"
              aria-label={_strings.reload}
              title={_strings.reload}
              class="altcha-code-challenge-reload"
              disabled={codeChallengeSubmitting}
              onclick={onCodeChallengeReload}
            >
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg>
            </button>
          </div>

          <button
            type="submit"
            class="altcha-code-challenge-verify"
            disabled={codeChallengeSubmitting}
            aria-label={_strings.verify}
          >
            {#if codeChallengeSubmitting}
              {@render spinner(16)}
            {/if}
            {_strings.verify}
          </button>
        </div>

        {#if codeChallenge.challenge.codeChallenge.audio && playCodeChallengeAudio}
        <audio
          bind:this={elAudio}
          hidden
          autoplay
          onloadstart={onAudioLoadStart}
          oncanplay={onAudioCanPlay}
          onpause={onAudioPause}
          onplaying={onAudioPlaying}
          onended={onAudioEnded}
        >
          <source
            src={getServerUrl(codeChallenge.challenge.codeChallenge.audio, {
              language,
            })}
            onerror={onAudioError}
          />
        </audio>
        {/if}
      </form>
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
        aria-hidden="true"
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

{#snippet spinner(size: number = 24)}
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    class="altcha-spinner"
    ><path
      d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
      fill="currentColor"
      opacity=".25"
    /><path
      d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
      fill="currentColor"
    /></svg
  >
{/snippet}
