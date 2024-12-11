<script lang="ts">
  import { onMount } from 'svelte';
  import InlineWorker from './worker?worker&inline';
  
  import './plugins/obfuscation';
  import './plugins/analytics';
  import './plugins/upload';

  import Altcha from './Altcha.svelte';
  
  globalThis.altchaCreateWorker = (url?: string) => new InlineWorker();
  globalThis.altchaPlugins = globalThis.altchaPlugins || [];


  const success = location.hash.includes('success');
  const failure = location.hash.includes('failure');
  const params = new URLSearchParams(location.search);

  let challengeurl: string = $state(params.get('challengeurl') || '');
  let submiturl: string = $state(params.get('submiturl') || '');
  let test: boolean = $state(!challengeurl && params.get('test') !== '0' && !submiturl);
  let mockerror: boolean = $state(false);

  let altcha: Altcha = $state()!;
  let altchaObfuscated: Altcha = $state()!;
  
  let uploadProgress: {
    bytesLoaded: number;
    bytesTotal: number;
    pendingFiles: [string, File][];
    uploadHandles: any[];
  } | null = $state(null);

  onMount(() => {
    location.hash = '';
  });
</script>

<main>
  <h1>ALTCHA</h1>

  <div>
    <label for="challengeUrl"
      >Challenge URL <small>(to fetch the challenge from)</small>:</label
    >
    <input
      type="url"
      id="challengeUrl"
      placeholder="http://..."
      disabled={test}
      bind:value={challengeurl}
    />
  </div>

  <div>
    <label for="submitUrl"
      >Submit URL <small>(to submit the data to)</small>:</label
    >
    <input
      type="url"
      id="submitUrl"
      placeholder="http://..."
      disabled={test}
      bind:value={submiturl}
    />
  </div>

  <div>
    <label for="testMode">Test mode:</label>
    <input type="checkbox" id="testMode" bind:checked={test} />
  </div>

  <div>
    <label for="mockError">Mock error:</label>
    <input type="checkbox" id="mockError" bind:checked={mockerror} />
  </div>

  {#if success}
    <div class="success">Form successfully submitted.</div>
  {/if}

  {#if failure}
    <div class="failure">Failed to submit form.</div>
  {/if}

  <form
    action={submiturl}
    method="post"
    onsubmit={(ev) => (test ? ev.preventDefault() : undefined)}
  >
    <div>Test form</div>

    <div>
      <input
        type="text"
        name="test_field"
        placeholder="Test field..."
      />
    </div>

    <Altcha
      bind:this={altcha}
      debug
      {challengeurl}
      {mockerror}
      {test}
      onStateChange={(ev) => console.log('Event: statechange:', ev)}
      onVerified={(ev) => console.log('Event: verified:', ev)}
      onServerVerification={(ev) =>
        console.log('Event: serververification:', ev)}
    />

    <div>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </div>
  </form>

  <form
    action={submiturl}
    method="post"
    onsubmit={(ev) => (test ? ev.preventDefault() : undefined)}
  >
    <div>File Upload</div>

    <div>
      <input
        type="file"
        name="test_file"
        required
      />
    </div>

    <div>
      <input
        type="file"
        name="test_file2"
      />
    </div>

    <Altcha
      bind:this={altcha}
      debug
      name="upload"
      plugins="upload"
      {challengeurl}
      {mockerror}
      {test}
      on:upload={(ev) => console.log('Event: upload', ev.detail)}
      on:uploadprogress={(ev) => {
        uploadProgress = ev.detail;
        console.log('Event: uploadprogress', ev.detail);
      }}
      onServerVerification={(ev) => console.log('Event: statechange:', ev)}
      onVerified={(ev) => console.log('Event: verified:', ev)}
    />

    {#if uploadProgress}
    <div>
      <div>
        {uploadProgress.bytesLoaded} / {uploadProgress.bytesTotal}
      </div>
    </div>
    {/if}

    <div>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </div>
  </form>

  <div class="form">
    <div>
      Obfuscated Email:
      <Altcha
        bind:this={altchaObfuscated}
        obfuscated="14tZkC2tFAQSrksIcD3OTD0u4ZWE4VkePJ5d0oVyoGmABDyW9YvNTA=="
        debug
        delay={1500}
        name="email"
        plugins="obfuscation"
        floating
        on:cleartext={(ev) => console.log('Event: cleartext:', ev.detail)}
      >
        <a href="#">(click to reveal)</a>
      </Altcha>
    </div>
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
    font-family: sans-serif;
    flex-direction: column;
    gap: 1rem;
    margin: 6rem auto;
    max-width: 600px;
  }

  input:not([type='checkbox']) {
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    padding: 0.3rem;
    width: 100%;
  }

  label + input {
    margin-top: 0.3rem;
  }

  form, .form {
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .success {
    color: green;
  }

  .failure {
    color: red;
  }
</style>
