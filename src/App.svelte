<script lang="ts">
  import { onMount } from 'svelte';
  import InlineWorker from './worker?worker&inline';
  import Altcha from './Altcha.svelte';
  
  globalThis.createAltchaWorker = (url?: string) => new InlineWorker();

  const success = location.hash.includes('success');
  const failure = location.hash.includes('failure');
  const params = new URLSearchParams(location.search);

  let challengeurl: string = params.get('challengeurl') || '';
  let submiturl: string = params.get('submiturl') || '';
  let test: boolean = !challengeurl && params.get('test') !== '0';
  let mockerror: boolean = false;

  let altcha: Altcha;

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

  <form
    action={submiturl}
    method="post"
    on:submit={(ev) => (test ? ev.preventDefault() : undefined)}
  >
    <div>Test form</div>

    {#if success}
      <div class="success">Form successfully submitted.</div>
    {/if}

    {#if failure}
      <div class="failure">Failed to submit form.</div>
    {/if}

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
      on:statechange={(ev) => console.log('Event: statechange:', ev.detail)}
      on:verified={(ev) => console.log('Event: verified:', ev.detail)}
      on:serververification={(ev) =>
        console.log('Event: serververification:', ev.detail)}
    />

    <div>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </div>
  </form>
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

  form {
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
