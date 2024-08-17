import type { PluginContext, State } from './types';

/**
 * Abstract base class representing a plugin.
 * All custom plugins should extend this class.
 */
export abstract class Plugin {
  /**
   * A distinct name of the plugin. Every plugin must have it's own name.
   */
  static pluginName: string;

  /**
   * Registers a plugin class in the global `altchaPlugins` array.
   * Ensures the plugin is added only once.
   * 
   * @param {new(context: PluginContext) => Plugin} cls - The plugin class to register.
   */
  static register(cls: new (context: PluginContext) => Plugin) {
    if (typeof globalThis.altchaPlugins !== 'object') {
      globalThis.altchaPlugins = [];
    }
    if (!globalThis.altchaPlugins.includes(cls as any)) {
      globalThis.altchaPlugins.push(cls as any);
    }
  }

  /**
   * Constructs a new instance of the Plugin.
   * 
   * @param {PluginContext} context - The context provided to the plugin, containing necessary configurations and dependencies.
   */
  constructor(readonly context: PluginContext) { };

  /**
   * Clean up resources when the plugin is destroyed.
   * Override this method in subclasses to implement custom destruction logic.
   */
  destroy() { };

  /**
   * Callback triggered when an error changes.
   * Override this method in subclasses to handle error state changes.
   * 
   * @param {string | null} err - The error message or `null` if there's no error.
   */
  onErrorChange(err: string | null) { };

  /**
   * Callback triggered when the plugin state changes.
   * Override this method in subclasses to handle state changes.
   * 
   * @param {State} state - The new state of the plugin.
   */
  onStateChange(state: State) { };
}