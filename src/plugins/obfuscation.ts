import { Plugin } from '../plugin';
import { State, type PluginContext } from '../types';

/**
 * PluginObfuscation is a plugin designed to clarify obfuscated data, such as email addresses or phone numbers.
 * It allows users to reveal and interact with the original data by clicking a designated button.
 */
export class PluginObfuscation extends Plugin {
  static pluginName = 'obfuscation';

  // The button element associated with revealing the obfuscated data
  readonly elButton: HTMLElement | null;

  // Bound method for handling button click events
  readonly #_onButtonClick = this.#onButtonClick.bind(this);

  /**
   * Creates an instance of PluginObfuscation.
   *
   * @param {PluginContext} context - The context object containing plugin configurations.
   */
  constructor(context: PluginContext) {
    super(context);
    const el = context.el;

    // Select the button that will trigger the obfuscation clarification
    this.elButton =
      el.parentElement?.querySelector('[data-clarify-button]') ||
      (el.parentElement?.querySelector('button, a') as HTMLElement | null);

    if (this.elButton) {
      this.elButton.addEventListener('click', this.#_onButtonClick);
    }
  }

  /**
   * Destroys the plugin instance, removing event listeners.
   */
  destroy() {
    if (this.elButton) {
      this.elButton.removeEventListener('click', this.#_onButtonClick);
    }
  }

  /**
   * Handles the clarification process by decrypting the obfuscated data and rendering the clear text.
   */
  async clarify() {
    const {
      el,
      getConfiguration,
      getFloatingAnchor,
      setFloatingAnchor,
      reset,
      solve,
      setState,
    } = this.context;
    const { delay, floating, maxnumber, obfuscated } = getConfiguration();

    // Set the floating anchor to the button if not already set
    if (this.elButton && !getFloatingAnchor()) {
      setFloatingAnchor(this.elButton);
    }

    // Handle the case where there is no obfuscated data
    if (!obfuscated) {
      setState(State.ERROR);
      return;
    }

    // Reset state to VERIFYING and wait for the specified delay
    reset(State.VERIFYING);
    await new Promise((resolve) => setTimeout(resolve, delay || 0));

    // Parse the obfuscated data and key from the configuration
    const [data, params] = obfuscated.split('?');
    const parsedParams = new URLSearchParams(params || '');
    let key = parsedParams.get('key') || undefined;

    // Prompt the user for a key if needed
    if (key) {
      const match = key.match(/^\(prompt:?(.*)\)$/);
      if (match) {
        key = prompt(match[1] || 'Enter Key:') || undefined;
      }
    }

    // Run the decryption process and handle the result
    const { solution } = await solve({
      obfuscated: data,
      key,
      maxnumber,
    });

    console.log(solution, maxnumber, data, key)

    if (solution && 'clearText' in solution) {
      this.#renderClearText(solution.clearText);
      setState(State.VERIFIED);
      this.context.dispatch('cleartext', solution.clearText);

      // Hide the original obfuscated element if floating is enabled
      if (floating && el) {
        el.style.display = 'none';
      }
    } else {
      setState(State.ERROR, 'Unable to decrypt data.');
    }
  }

  /**
   * Handles the button click event, triggering the clarification process.
   *
   * @param {Event} ev - The click event.
   */
  #onButtonClick(ev: Event) {
    ev.preventDefault();
    const { auto } = this.context.getConfiguration();
    if (auto === 'off') {
      // TODO:
    } else {
      this.clarify();
    }
  }

  /**
   * Renders the clear text data by creating an appropriate element (e.g., a link or text node).
   *
   * @param {string} clearText - The decrypted clear text data to render.
   */
  #renderClearText(clearText: string) {
    const match = clearText.match(/^(mailto|tel|sms|https?):/);
    let el: HTMLAnchorElement | Text;

    // If the clear text is a link (mailto, tel, sms, or https), create an anchor element
    if (match) {
      const [contact] = clearText
        .slice(clearText.indexOf(':') + 1)
        .replace(/^\/\//, '')
        .split('?');
      el = document.createElement('a');
      el.href = clearText;
      el.innerHTML = contact;
    } else {
      // Otherwise, create a text node with the clear text
      el = document.createTextNode(clearText);
    }

    // Insert the clear text element after the button and remove the button from the DOM
    if (this.elButton && el) {
      this.elButton.after(el);
      this.elButton.parentElement?.removeChild(this.elButton);
    }
  }
}

// Register the PluginObfuscation plugin
Plugin.register(PluginObfuscation);
