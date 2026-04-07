(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const DEV = false;
  var is_array = Array.isArray;
  var index_of = Array.prototype.indexOf;
  var includes = Array.prototype.includes;
  var array_from = Array.from;
  var object_keys = Object.keys;
  var define_property = Object.defineProperty;
  var get_descriptor = Object.getOwnPropertyDescriptor;
  var get_descriptors = Object.getOwnPropertyDescriptors;
  var object_prototype = Object.prototype;
  var array_prototype = Array.prototype;
  var get_prototype_of = Object.getPrototypeOf;
  var is_extensible = Object.isExtensible;
  const noop = () => {
  };
  function run_all(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i]();
    }
  }
  function deferred() {
    var resolve;
    var reject;
    var promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  }
  const DERIVED = 1 << 1;
  const EFFECT = 1 << 2;
  const RENDER_EFFECT = 1 << 3;
  const MANAGED_EFFECT = 1 << 24;
  const BLOCK_EFFECT = 1 << 4;
  const BRANCH_EFFECT = 1 << 5;
  const ROOT_EFFECT = 1 << 6;
  const BOUNDARY_EFFECT = 1 << 7;
  const CONNECTED = 1 << 9;
  const CLEAN = 1 << 10;
  const DIRTY = 1 << 11;
  const MAYBE_DIRTY = 1 << 12;
  const INERT = 1 << 13;
  const DESTROYED = 1 << 14;
  const REACTION_RAN = 1 << 15;
  const DESTROYING = 1 << 25;
  const EFFECT_TRANSPARENT = 1 << 16;
  const EAGER_EFFECT = 1 << 17;
  const HEAD_EFFECT = 1 << 18;
  const EFFECT_PRESERVED = 1 << 19;
  const USER_EFFECT = 1 << 20;
  const WAS_MARKED = 1 << 16;
  const REACTION_IS_UPDATING = 1 << 21;
  const ASYNC = 1 << 22;
  const ERROR_VALUE = 1 << 23;
  const STATE_SYMBOL = /* @__PURE__ */ Symbol("$state");
  const LEGACY_PROPS = /* @__PURE__ */ Symbol("legacy props");
  const LOADING_ATTR_SYMBOL = /* @__PURE__ */ Symbol("");
  const STALE_REACTION = new class StaleReactionError extends Error {
    name = "StaleReactionError";
    message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
  }();
  const IS_XHTML = (
    // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
    !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
  );
  const TEXT_NODE = 3;
  const COMMENT_NODE = 8;
  function equals(value) {
    return value === this.v;
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
  }
  function safe_equals(value) {
    return !safe_not_equal(value, this.v);
  }
  function lifecycle_outside_component(name) {
    {
      throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
    }
  }
  function async_derived_orphan() {
    {
      throw new Error(`https://svelte.dev/e/async_derived_orphan`);
    }
  }
  function effect_in_teardown(rune) {
    {
      throw new Error(`https://svelte.dev/e/effect_in_teardown`);
    }
  }
  function effect_in_unowned_derived() {
    {
      throw new Error(`https://svelte.dev/e/effect_in_unowned_derived`);
    }
  }
  function effect_orphan(rune) {
    {
      throw new Error(`https://svelte.dev/e/effect_orphan`);
    }
  }
  function effect_update_depth_exceeded() {
    {
      throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
    }
  }
  function hydration_failed() {
    {
      throw new Error(`https://svelte.dev/e/hydration_failed`);
    }
  }
  function state_descriptors_fixed() {
    {
      throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
    }
  }
  function state_prototype_fixed() {
    {
      throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
    }
  }
  function state_unsafe_mutation() {
    {
      throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
    }
  }
  function svelte_boundary_reset_onerror() {
    {
      throw new Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`);
    }
  }
  let tracing_mode_flag = false;
  const TEMPLATE_FRAGMENT = 1;
  const TEMPLATE_USE_IMPORT_NODE = 1 << 1;
  const HYDRATION_START = "[";
  const HYDRATION_START_ELSE = "[!";
  const HYDRATION_START_FAILED = "[?";
  const HYDRATION_END = "]";
  const HYDRATION_ERROR = {};
  const UNINITIALIZED = /* @__PURE__ */ Symbol();
  const NAMESPACE_HTML = "http://www.w3.org/1999/xhtml";
  const NAMESPACE_SVG = "http://www.w3.org/2000/svg";
  const NAMESPACE_MATHML = "http://www.w3.org/1998/Math/MathML";
  const ATTACHMENT_KEY = "@attach";
  let component_context = null;
  function set_component_context(context) {
    component_context = context;
  }
  function push(props, runes = false, fn) {
    component_context = {
      p: component_context,
      i: false,
      c: null,
      e: null,
      s: props,
      x: null,
      r: (
        /** @type {Effect} */
        active_effect
      ),
      l: null
    };
  }
  function pop(component2) {
    var context = (
      /** @type {ComponentContext} */
      component_context
    );
    var effects = context.e;
    if (effects !== null) {
      context.e = null;
      for (var fn of effects) {
        create_user_effect(fn);
      }
    }
    if (component2 !== void 0) {
      context.x = component2;
    }
    context.i = true;
    component_context = context.p;
    return component2 ?? /** @type {T} */
    {};
  }
  function is_runes() {
    return true;
  }
  let micro_tasks = [];
  function run_micro_tasks() {
    var tasks = micro_tasks;
    micro_tasks = [];
    run_all(tasks);
  }
  function queue_micro_task(fn) {
    if (micro_tasks.length === 0 && !is_flushing_sync) {
      var tasks = micro_tasks;
      queueMicrotask(() => {
        if (tasks === micro_tasks) run_micro_tasks();
      });
    }
    micro_tasks.push(fn);
  }
  function flush_tasks() {
    while (micro_tasks.length > 0) {
      run_micro_tasks();
    }
  }
  function hydration_mismatch(location2) {
    {
      console.warn(`https://svelte.dev/e/hydration_mismatch`);
    }
  }
  function select_multiple_invalid_value() {
    {
      console.warn(`https://svelte.dev/e/select_multiple_invalid_value`);
    }
  }
  function svelte_boundary_reset_noop() {
    {
      console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`);
    }
  }
  let hydrating = false;
  function set_hydrating(value) {
    hydrating = value;
  }
  let hydrate_node;
  function set_hydrate_node(node) {
    if (node === null) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    return hydrate_node = node;
  }
  function hydrate_next() {
    return set_hydrate_node(/* @__PURE__ */ get_next_sibling(hydrate_node));
  }
  function reset(node) {
    if (!hydrating) return;
    if (/* @__PURE__ */ get_next_sibling(hydrate_node) !== null) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    hydrate_node = node;
  }
  function next(count = 1) {
    if (hydrating) {
      var i = count;
      var node = hydrate_node;
      while (i--) {
        node = /** @type {TemplateNode} */
        /* @__PURE__ */ get_next_sibling(node);
      }
      hydrate_node = node;
    }
  }
  function skip_nodes(remove = true) {
    var depth = 0;
    var node = hydrate_node;
    while (true) {
      if (node.nodeType === COMMENT_NODE) {
        var data = (
          /** @type {Comment} */
          node.data
        );
        if (data === HYDRATION_END) {
          if (depth === 0) return node;
          depth -= 1;
        } else if (data === HYDRATION_START || data === HYDRATION_START_ELSE || // "[1", "[2", etc. for if blocks
        data[0] === "[" && !isNaN(Number(data.slice(1)))) {
          depth += 1;
        }
      }
      var next2 = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ get_next_sibling(node)
      );
      if (remove) node.remove();
      node = next2;
    }
  }
  function read_hydration_instruction(node) {
    if (!node || node.nodeType !== COMMENT_NODE) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    return (
      /** @type {Comment} */
      node.data
    );
  }
  function proxy(value) {
    if (typeof value !== "object" || value === null || STATE_SYMBOL in value) {
      return value;
    }
    const prototype = get_prototype_of(value);
    if (prototype !== object_prototype && prototype !== array_prototype) {
      return value;
    }
    var sources = /* @__PURE__ */ new Map();
    var is_proxied_array = is_array(value);
    var version = /* @__PURE__ */ state(0);
    var parent_version = update_version;
    var with_parent = (fn) => {
      if (update_version === parent_version) {
        return fn();
      }
      var reaction = active_reaction;
      var version2 = update_version;
      set_active_reaction(null);
      set_update_version(parent_version);
      var result = fn();
      set_active_reaction(reaction);
      set_update_version(version2);
      return result;
    };
    if (is_proxied_array) {
      sources.set("length", /* @__PURE__ */ state(
        /** @type {any[]} */
        value.length
      ));
    }
    return new Proxy(
      /** @type {any} */
      value,
      {
        defineProperty(_, prop2, descriptor) {
          if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
            state_descriptors_fixed();
          }
          var s = sources.get(prop2);
          if (s === void 0) {
            with_parent(() => {
              var s2 = /* @__PURE__ */ state(descriptor.value);
              sources.set(prop2, s2);
              return s2;
            });
          } else {
            set(s, descriptor.value, true);
          }
          return true;
        },
        deleteProperty(target, prop2) {
          var s = sources.get(prop2);
          if (s === void 0) {
            if (prop2 in target) {
              const s2 = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED));
              sources.set(prop2, s2);
              increment(version);
            }
          } else {
            set(s, UNINITIALIZED);
            increment(version);
          }
          return true;
        },
        get(target, prop2, receiver) {
          if (prop2 === STATE_SYMBOL) {
            return value;
          }
          var s = sources.get(prop2);
          var exists = prop2 in target;
          if (s === void 0 && (!exists || get_descriptor(target, prop2)?.writable)) {
            s = with_parent(() => {
              var p = proxy(exists ? target[prop2] : UNINITIALIZED);
              var s2 = /* @__PURE__ */ state(p);
              return s2;
            });
            sources.set(prop2, s);
          }
          if (s !== void 0) {
            var v = get(s);
            return v === UNINITIALIZED ? void 0 : v;
          }
          return Reflect.get(target, prop2, receiver);
        },
        getOwnPropertyDescriptor(target, prop2) {
          var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
          if (descriptor && "value" in descriptor) {
            var s = sources.get(prop2);
            if (s) descriptor.value = get(s);
          } else if (descriptor === void 0) {
            var source2 = sources.get(prop2);
            var value2 = source2?.v;
            if (source2 !== void 0 && value2 !== UNINITIALIZED) {
              return {
                enumerable: true,
                configurable: true,
                value: value2,
                writable: true
              };
            }
          }
          return descriptor;
        },
        has(target, prop2) {
          if (prop2 === STATE_SYMBOL) {
            return true;
          }
          var s = sources.get(prop2);
          var has = s !== void 0 && s.v !== UNINITIALIZED || Reflect.has(target, prop2);
          if (s !== void 0 || active_effect !== null && (!has || get_descriptor(target, prop2)?.writable)) {
            if (s === void 0) {
              s = with_parent(() => {
                var p = has ? proxy(target[prop2]) : UNINITIALIZED;
                var s2 = /* @__PURE__ */ state(p);
                return s2;
              });
              sources.set(prop2, s);
            }
            var value2 = get(s);
            if (value2 === UNINITIALIZED) {
              return false;
            }
          }
          return has;
        },
        set(target, prop2, value2, receiver) {
          var s = sources.get(prop2);
          var has = prop2 in target;
          if (is_proxied_array && prop2 === "length") {
            for (var i = value2; i < /** @type {Source<number>} */
            s.v; i += 1) {
              var other_s = sources.get(i + "");
              if (other_s !== void 0) {
                set(other_s, UNINITIALIZED);
              } else if (i in target) {
                other_s = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED));
                sources.set(i + "", other_s);
              }
            }
          }
          if (s === void 0) {
            if (!has || get_descriptor(target, prop2)?.writable) {
              s = with_parent(() => /* @__PURE__ */ state(void 0));
              set(s, proxy(value2));
              sources.set(prop2, s);
            }
          } else {
            has = s.v !== UNINITIALIZED;
            var p = with_parent(() => proxy(value2));
            set(s, p);
          }
          var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
          if (descriptor?.set) {
            descriptor.set.call(receiver, value2);
          }
          if (!has) {
            if (is_proxied_array && typeof prop2 === "string") {
              var ls = (
                /** @type {Source<number>} */
                sources.get("length")
              );
              var n = Number(prop2);
              if (Number.isInteger(n) && n >= ls.v) {
                set(ls, n + 1);
              }
            }
            increment(version);
          }
          return true;
        },
        ownKeys(target) {
          get(version);
          var own_keys = Reflect.ownKeys(target).filter((key3) => {
            var source3 = sources.get(key3);
            return source3 === void 0 || source3.v !== UNINITIALIZED;
          });
          for (var [key2, source2] of sources) {
            if (source2.v !== UNINITIALIZED && !(key2 in target)) {
              own_keys.push(key2);
            }
          }
          return own_keys;
        },
        setPrototypeOf() {
          state_prototype_fixed();
        }
      }
    );
  }
  function get_proxied_value(value) {
    try {
      if (value !== null && typeof value === "object" && STATE_SYMBOL in value) {
        return value[STATE_SYMBOL];
      }
    } catch {
    }
    return value;
  }
  function is(a, b) {
    return Object.is(get_proxied_value(a), get_proxied_value(b));
  }
  var $window;
  var $document;
  var is_firefox;
  var first_child_getter;
  var next_sibling_getter;
  function init_operations() {
    if ($window !== void 0) {
      return;
    }
    $window = window;
    $document = document;
    is_firefox = /Firefox/.test(navigator.userAgent);
    var element_prototype = Element.prototype;
    var node_prototype = Node.prototype;
    var text_prototype = Text.prototype;
    first_child_getter = get_descriptor(node_prototype, "firstChild").get;
    next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
    if (is_extensible(element_prototype)) {
      element_prototype.__click = void 0;
      element_prototype.__className = void 0;
      element_prototype.__attributes = null;
      element_prototype.__style = void 0;
      element_prototype.__e = void 0;
    }
    if (is_extensible(text_prototype)) {
      text_prototype.__t = void 0;
    }
  }
  function create_text(value = "") {
    return document.createTextNode(value);
  }
  // @__NO_SIDE_EFFECTS__
  function get_first_child(node) {
    return (
      /** @type {TemplateNode | null} */
      first_child_getter.call(node)
    );
  }
  // @__NO_SIDE_EFFECTS__
  function get_next_sibling(node) {
    return (
      /** @type {TemplateNode | null} */
      next_sibling_getter.call(node)
    );
  }
  function child(node, is_text) {
    if (!hydrating) {
      return /* @__PURE__ */ get_first_child(node);
    }
    var child2 = /* @__PURE__ */ get_first_child(hydrate_node);
    if (child2 === null) {
      child2 = hydrate_node.appendChild(create_text());
    } else if (is_text && child2.nodeType !== TEXT_NODE) {
      var text2 = create_text();
      child2?.before(text2);
      set_hydrate_node(text2);
      return text2;
    }
    if (is_text) {
      merge_text_nodes(
        /** @type {Text} */
        child2
      );
    }
    set_hydrate_node(child2);
    return child2;
  }
  function first_child(node, is_text = false) {
    if (!hydrating) {
      var first = /* @__PURE__ */ get_first_child(node);
      if (first instanceof Comment && first.data === "") return /* @__PURE__ */ get_next_sibling(first);
      return first;
    }
    if (is_text) {
      if (hydrate_node?.nodeType !== TEXT_NODE) {
        var text2 = create_text();
        hydrate_node?.before(text2);
        set_hydrate_node(text2);
        return text2;
      }
      merge_text_nodes(
        /** @type {Text} */
        hydrate_node
      );
    }
    return hydrate_node;
  }
  function sibling(node, count = 1, is_text = false) {
    let next_sibling = hydrating ? hydrate_node : node;
    var last_sibling;
    while (count--) {
      last_sibling = next_sibling;
      next_sibling = /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(next_sibling);
    }
    if (!hydrating) {
      return next_sibling;
    }
    if (is_text) {
      if (next_sibling?.nodeType !== TEXT_NODE) {
        var text2 = create_text();
        if (next_sibling === null) {
          last_sibling?.after(text2);
        } else {
          next_sibling.before(text2);
        }
        set_hydrate_node(text2);
        return text2;
      }
      merge_text_nodes(
        /** @type {Text} */
        next_sibling
      );
    }
    set_hydrate_node(next_sibling);
    return next_sibling;
  }
  function clear_text_content(node) {
    node.textContent = "";
  }
  function should_defer_append() {
    return false;
  }
  function create_element(tag, namespace, is2) {
    let options = void 0;
    return (
      /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
      document.createElementNS(namespace ?? NAMESPACE_HTML, tag, options)
    );
  }
  function merge_text_nodes(text2) {
    if (
      /** @type {string} */
      text2.nodeValue.length < 65536
    ) {
      return;
    }
    let next2 = text2.nextSibling;
    while (next2 !== null && next2.nodeType === TEXT_NODE) {
      next2.remove();
      text2.nodeValue += /** @type {string} */
      next2.nodeValue;
      next2 = text2.nextSibling;
    }
  }
  function handle_error(error) {
    var effect2 = active_effect;
    if (effect2 === null) {
      active_reaction.f |= ERROR_VALUE;
      return error;
    }
    if ((effect2.f & REACTION_RAN) === 0 && (effect2.f & EFFECT) === 0) {
      throw error;
    }
    invoke_error_boundary(error, effect2);
  }
  function invoke_error_boundary(error, effect2) {
    while (effect2 !== null) {
      if ((effect2.f & BOUNDARY_EFFECT) !== 0) {
        if ((effect2.f & REACTION_RAN) === 0) {
          throw error;
        }
        try {
          effect2.b.error(error);
          return;
        } catch (e) {
          error = e;
        }
      }
      effect2 = effect2.parent;
    }
    throw error;
  }
  const STATUS_MASK = -7169;
  function set_signal_status(signal, status) {
    signal.f = signal.f & STATUS_MASK | status;
  }
  function update_derived_status(derived2) {
    if ((derived2.f & CONNECTED) !== 0 || derived2.deps === null) {
      set_signal_status(derived2, CLEAN);
    } else {
      set_signal_status(derived2, MAYBE_DIRTY);
    }
  }
  function clear_marked(deps) {
    if (deps === null) return;
    for (const dep of deps) {
      if ((dep.f & DERIVED) === 0 || (dep.f & WAS_MARKED) === 0) {
        continue;
      }
      dep.f ^= WAS_MARKED;
      clear_marked(
        /** @type {Derived} */
        dep.deps
      );
    }
  }
  function defer_effect(effect2, dirty_effects, maybe_dirty_effects) {
    if ((effect2.f & DIRTY) !== 0) {
      dirty_effects.add(effect2);
    } else if ((effect2.f & MAYBE_DIRTY) !== 0) {
      maybe_dirty_effects.add(effect2);
    }
    clear_marked(effect2.deps);
    set_signal_status(effect2, CLEAN);
  }
  function is_capture_event(name) {
    return name.endsWith("capture") && name !== "gotpointercapture" && name !== "lostpointercapture";
  }
  const DELEGATED_EVENTS = [
    "beforeinput",
    "click",
    "change",
    "dblclick",
    "contextmenu",
    "focusin",
    "focusout",
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "pointerdown",
    "pointermove",
    "pointerout",
    "pointerover",
    "pointerup",
    "touchend",
    "touchmove",
    "touchstart"
  ];
  function can_delegate_event(event_name) {
    return DELEGATED_EVENTS.includes(event_name);
  }
  const ATTRIBUTE_ALIASES = {
    // no `class: 'className'` because we handle that separately
    formnovalidate: "formNoValidate",
    ismap: "isMap",
    nomodule: "noModule",
    playsinline: "playsInline",
    readonly: "readOnly",
    defaultvalue: "defaultValue",
    defaultchecked: "defaultChecked",
    srcobject: "srcObject",
    novalidate: "noValidate",
    allowfullscreen: "allowFullscreen",
    disablepictureinpicture: "disablePictureInPicture",
    disableremoteplayback: "disableRemotePlayback"
  };
  function normalize_attribute(name) {
    name = name.toLowerCase();
    return ATTRIBUTE_ALIASES[name] ?? name;
  }
  const PASSIVE_EVENTS = ["touchstart", "touchmove"];
  function is_passive_event(name) {
    return PASSIVE_EVENTS.includes(name);
  }
  function autofocus(dom, value) {
    if (value) {
      const body = document.body;
      dom.autofocus = true;
      queue_micro_task(() => {
        if (document.activeElement === body) {
          dom.focus();
        }
      });
    }
  }
  let listening_to_form_reset = false;
  function add_form_reset_listener() {
    if (!listening_to_form_reset) {
      listening_to_form_reset = true;
      document.addEventListener(
        "reset",
        (evt) => {
          Promise.resolve().then(() => {
            if (!evt.defaultPrevented) {
              for (
                const e of
                /**@type {HTMLFormElement} */
                evt.target.elements
              ) {
                e.__on_r?.();
              }
            }
          });
        },
        // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
        { capture: true }
      );
    }
  }
  function without_reactive_context(fn) {
    var previous_reaction = active_reaction;
    var previous_effect = active_effect;
    set_active_reaction(null);
    set_active_effect(null);
    try {
      return fn();
    } finally {
      set_active_reaction(previous_reaction);
      set_active_effect(previous_effect);
    }
  }
  function listen_to_event_and_reset_event(element, event2, handler, on_reset = handler) {
    element.addEventListener(event2, () => without_reactive_context(handler));
    const prev = element.__on_r;
    if (prev) {
      element.__on_r = () => {
        prev();
        on_reset(true);
      };
    } else {
      element.__on_r = () => on_reset(true);
    }
    add_form_reset_listener();
  }
  const event_symbol = /* @__PURE__ */ Symbol("events");
  const all_registered_events = /* @__PURE__ */ new Set();
  const root_event_handles = /* @__PURE__ */ new Set();
  function create_event(event_name, dom, handler, options = {}) {
    function target_handler(event2) {
      if (!options.capture) {
        handle_event_propagation.call(dom, event2);
      }
      if (!event2.cancelBubble) {
        return without_reactive_context(() => {
          return handler?.call(this, event2);
        });
      }
    }
    if (event_name.startsWith("pointer") || event_name.startsWith("touch") || event_name === "wheel") {
      queue_micro_task(() => {
        dom.addEventListener(event_name, target_handler, options);
      });
    } else {
      dom.addEventListener(event_name, target_handler, options);
    }
    return target_handler;
  }
  function event(event_name, dom, handler, capture2, passive) {
    var options = { capture: capture2, passive };
    var target_handler = create_event(event_name, dom, handler, options);
    if (dom === document.body || // @ts-ignore
    dom === window || // @ts-ignore
    dom === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
    dom instanceof HTMLMediaElement) {
      teardown(() => {
        dom.removeEventListener(event_name, target_handler, options);
      });
    }
  }
  function delegated(event_name, element, handler) {
    (element[event_symbol] ??= {})[event_name] = handler;
  }
  function delegate(events) {
    for (var i = 0; i < events.length; i++) {
      all_registered_events.add(events[i]);
    }
    for (var fn of root_event_handles) {
      fn(events);
    }
  }
  let last_propagated_event = null;
  function handle_event_propagation(event2) {
    var handler_element = this;
    var owner_document = (
      /** @type {Node} */
      handler_element.ownerDocument
    );
    var event_name = event2.type;
    var path = event2.composedPath?.() || [];
    var current_target = (
      /** @type {null | Element} */
      path[0] || event2.target
    );
    last_propagated_event = event2;
    var path_idx = 0;
    var handled_at = last_propagated_event === event2 && event2[event_symbol];
    if (handled_at) {
      var at_idx = path.indexOf(handled_at);
      if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
      window)) {
        event2[event_symbol] = handler_element;
        return;
      }
      var handler_idx = path.indexOf(handler_element);
      if (handler_idx === -1) {
        return;
      }
      if (at_idx <= handler_idx) {
        path_idx = at_idx;
      }
    }
    current_target = /** @type {Element} */
    path[path_idx] || event2.target;
    if (current_target === handler_element) return;
    define_property(event2, "currentTarget", {
      configurable: true,
      get() {
        return current_target || owner_document;
      }
    });
    var previous_reaction = active_reaction;
    var previous_effect = active_effect;
    set_active_reaction(null);
    set_active_effect(null);
    try {
      var throw_error;
      var other_errors = [];
      while (current_target !== null) {
        var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
        current_target.host || null;
        try {
          var delegated2 = current_target[event_symbol]?.[event_name];
          if (delegated2 != null && (!/** @type {any} */
          current_target.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          event2.target === current_target)) {
            delegated2.call(current_target, event2);
          }
        } catch (error) {
          if (throw_error) {
            other_errors.push(error);
          } else {
            throw_error = error;
          }
        }
        if (event2.cancelBubble || parent_element === handler_element || parent_element === null) {
          break;
        }
        current_target = parent_element;
      }
      if (throw_error) {
        for (let error of other_errors) {
          queueMicrotask(() => {
            throw error;
          });
        }
        throw throw_error;
      }
    } finally {
      event2[event_symbol] = handler_element;
      delete event2.currentTarget;
      set_active_reaction(previous_reaction);
      set_active_effect(previous_effect);
    }
  }
  const policy = (
    // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
    globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
      /** @param {string} html */
      createHTML: (html2) => {
        return html2;
      }
    })
  );
  function create_trusted_html(html2) {
    return (
      /** @type {string} */
      policy?.createHTML(html2) ?? html2
    );
  }
  function create_fragment_from_html(html2) {
    var elem = create_element("template");
    elem.innerHTML = create_trusted_html(html2.replaceAll("<!>", "<!---->"));
    return elem.content;
  }
  function assign_nodes(start, end) {
    var effect2 = (
      /** @type {Effect} */
      active_effect
    );
    if (effect2.nodes === null) {
      effect2.nodes = { start, end, a: null, t: null };
    }
  }
  // @__NO_SIDE_EFFECTS__
  function from_html(content, flags2) {
    var is_fragment = (flags2 & TEMPLATE_FRAGMENT) !== 0;
    var use_import_node = (flags2 & TEMPLATE_USE_IMPORT_NODE) !== 0;
    var node;
    var has_start = !content.startsWith("<!>");
    return () => {
      if (hydrating) {
        assign_nodes(hydrate_node, null);
        return hydrate_node;
      }
      if (node === void 0) {
        node = create_fragment_from_html(has_start ? content : "<!>" + content);
        if (!is_fragment) node = /** @type {TemplateNode} */
        /* @__PURE__ */ get_first_child(node);
      }
      var clone = (
        /** @type {TemplateNode} */
        use_import_node || is_firefox ? document.importNode(node, true) : node.cloneNode(true)
      );
      if (is_fragment) {
        var start = (
          /** @type {TemplateNode} */
          /* @__PURE__ */ get_first_child(clone)
        );
        var end = (
          /** @type {TemplateNode} */
          clone.lastChild
        );
        assign_nodes(start, end);
      } else {
        assign_nodes(clone, clone);
      }
      return clone;
    };
  }
  // @__NO_SIDE_EFFECTS__
  function from_namespace(content, flags2, ns = "svg") {
    var has_start = !content.startsWith("<!>");
    var wrapped = `<${ns}>${has_start ? content : "<!>" + content}</${ns}>`;
    var node;
    return () => {
      if (hydrating) {
        assign_nodes(hydrate_node, null);
        return hydrate_node;
      }
      if (!node) {
        var fragment = (
          /** @type {DocumentFragment} */
          create_fragment_from_html(wrapped)
        );
        var root2 = (
          /** @type {Element} */
          /* @__PURE__ */ get_first_child(fragment)
        );
        {
          node = /** @type {Element} */
          /* @__PURE__ */ get_first_child(root2);
        }
      }
      var clone = (
        /** @type {TemplateNode} */
        node.cloneNode(true)
      );
      {
        assign_nodes(clone, clone);
      }
      return clone;
    };
  }
  // @__NO_SIDE_EFFECTS__
  function from_svg(content, flags2) {
    return /* @__PURE__ */ from_namespace(content, flags2, "svg");
  }
  function text(value = "") {
    if (!hydrating) {
      var t = create_text(value + "");
      assign_nodes(t, t);
      return t;
    }
    var node = hydrate_node;
    if (node.nodeType !== TEXT_NODE) {
      node.before(node = create_text());
      set_hydrate_node(node);
    } else {
      merge_text_nodes(
        /** @type {Text} */
        node
      );
    }
    assign_nodes(node, node);
    return node;
  }
  function comment() {
    if (hydrating) {
      assign_nodes(hydrate_node, null);
      return hydrate_node;
    }
    var frag = document.createDocumentFragment();
    var start = document.createComment("");
    var anchor = create_text();
    frag.append(start, anchor);
    assign_nodes(start, anchor);
    return frag;
  }
  function append(anchor, dom) {
    if (hydrating) {
      var effect2 = (
        /** @type {Effect & { nodes: EffectNodes }} */
        active_effect
      );
      if ((effect2.f & REACTION_RAN) === 0 || effect2.nodes.end === null) {
        effect2.nodes.end = hydrate_node;
      }
      hydrate_next();
      return;
    }
    if (anchor === null) {
      return;
    }
    anchor.before(
      /** @type {Node} */
      dom
    );
  }
  function createSubscriber(start) {
    let subscribers = 0;
    let version = source(0);
    let stop;
    return () => {
      if (effect_tracking()) {
        get(version);
        render_effect(() => {
          if (subscribers === 0) {
            stop = untrack(() => start(() => increment(version)));
          }
          subscribers += 1;
          return () => {
            queue_micro_task(() => {
              subscribers -= 1;
              if (subscribers === 0) {
                stop?.();
                stop = void 0;
                increment(version);
              }
            });
          };
        });
      }
    };
  }
  var flags = EFFECT_TRANSPARENT | EFFECT_PRESERVED;
  function boundary(node, props, children, transform_error) {
    new Boundary(node, props, children, transform_error);
  }
  class Boundary {
    /** @type {Boundary | null} */
    parent;
    is_pending = false;
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    transform_error;
    /** @type {TemplateNode} */
    #anchor;
    /** @type {TemplateNode | null} */
    #hydrate_open = hydrating ? hydrate_node : null;
    /** @type {BoundaryProps} */
    #props;
    /** @type {((anchor: Node) => void)} */
    #children;
    /** @type {Effect} */
    #effect;
    /** @type {Effect | null} */
    #main_effect = null;
    /** @type {Effect | null} */
    #pending_effect = null;
    /** @type {Effect | null} */
    #failed_effect = null;
    /** @type {DocumentFragment | null} */
    #offscreen_fragment = null;
    #local_pending_count = 0;
    #pending_count = 0;
    #pending_count_update_queued = false;
    /** @type {Set<Effect>} */
    #dirty_effects = /* @__PURE__ */ new Set();
    /** @type {Set<Effect>} */
    #maybe_dirty_effects = /* @__PURE__ */ new Set();
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    #effect_pending = null;
    #effect_pending_subscriber = createSubscriber(() => {
      this.#effect_pending = source(this.#local_pending_count);
      return () => {
        this.#effect_pending = null;
      };
    });
    /**
     * @param {TemplateNode} node
     * @param {BoundaryProps} props
     * @param {((anchor: Node) => void)} children
     * @param {((error: unknown) => unknown) | undefined} [transform_error]
     */
    constructor(node, props, children, transform_error) {
      this.#anchor = node;
      this.#props = props;
      this.#children = (anchor) => {
        var effect2 = (
          /** @type {Effect} */
          active_effect
        );
        effect2.b = this;
        effect2.f |= BOUNDARY_EFFECT;
        children(anchor);
      };
      this.parent = /** @type {Effect} */
      active_effect.b;
      this.transform_error = transform_error ?? this.parent?.transform_error ?? ((e) => e);
      this.#effect = block(() => {
        if (hydrating) {
          const comment2 = (
            /** @type {Comment} */
            this.#hydrate_open
          );
          hydrate_next();
          const server_rendered_pending = comment2.data === HYDRATION_START_ELSE;
          const server_rendered_failed = comment2.data.startsWith(HYDRATION_START_FAILED);
          if (server_rendered_failed) {
            const serialized_error = JSON.parse(comment2.data.slice(HYDRATION_START_FAILED.length));
            this.#hydrate_failed_content(serialized_error);
          } else if (server_rendered_pending) {
            this.#hydrate_pending_content();
          } else {
            this.#hydrate_resolved_content();
          }
        } else {
          this.#render();
        }
      }, flags);
      if (hydrating) {
        this.#anchor = hydrate_node;
      }
    }
    #hydrate_resolved_content() {
      try {
        this.#main_effect = branch(() => this.#children(this.#anchor));
      } catch (error) {
        this.error(error);
      }
    }
    /**
     * @param {unknown} error The deserialized error from the server's hydration comment
     */
    #hydrate_failed_content(error) {
      const failed = this.#props.failed;
      if (!failed) return;
      this.#failed_effect = branch(() => {
        failed(
          this.#anchor,
          () => error,
          () => () => {
          }
        );
      });
    }
    #hydrate_pending_content() {
      const pending = this.#props.pending;
      if (!pending) return;
      this.is_pending = true;
      this.#pending_effect = branch(() => pending(this.#anchor));
      var batch = (
        /** @type {Batch} */
        current_batch
      );
      queue_micro_task(() => {
        var fragment = this.#offscreen_fragment = document.createDocumentFragment();
        var anchor = create_text();
        fragment.append(anchor);
        this.#main_effect = this.#run(() => {
          return branch(() => this.#children(anchor));
        });
        if (this.#pending_count === 0) {
          this.#anchor.before(fragment);
          this.#offscreen_fragment = null;
          pause_effect(
            /** @type {Effect} */
            this.#pending_effect,
            () => {
              this.#pending_effect = null;
            }
          );
          this.#resolve(batch);
        }
      });
    }
    #render() {
      var batch = (
        /** @type {Batch} */
        current_batch
      );
      try {
        this.is_pending = this.has_pending_snippet();
        this.#pending_count = 0;
        this.#local_pending_count = 0;
        this.#main_effect = branch(() => {
          this.#children(this.#anchor);
        });
        if (this.#pending_count > 0) {
          var fragment = this.#offscreen_fragment = document.createDocumentFragment();
          move_effect(this.#main_effect, fragment);
          const pending = (
            /** @type {(anchor: Node) => void} */
            this.#props.pending
          );
          this.#pending_effect = branch(() => pending(this.#anchor));
        } else {
          this.#resolve(batch);
        }
      } catch (error) {
        this.error(error);
      }
    }
    /**
     * @param {Batch} batch
     */
    #resolve(batch) {
      this.is_pending = false;
      for (const e of this.#dirty_effects) {
        set_signal_status(e, DIRTY);
        batch.schedule(e);
      }
      for (const e of this.#maybe_dirty_effects) {
        set_signal_status(e, MAYBE_DIRTY);
        batch.schedule(e);
      }
      this.#dirty_effects.clear();
      this.#maybe_dirty_effects.clear();
    }
    /**
     * Defer an effect inside a pending boundary until the boundary resolves
     * @param {Effect} effect
     */
    defer_effect(effect2) {
      defer_effect(effect2, this.#dirty_effects, this.#maybe_dirty_effects);
    }
    /**
     * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
     * @returns {boolean}
     */
    is_rendered() {
      return !this.is_pending && (!this.parent || this.parent.is_rendered());
    }
    has_pending_snippet() {
      return !!this.#props.pending;
    }
    /**
     * @template T
     * @param {() => T} fn
     */
    #run(fn) {
      var previous_effect = active_effect;
      var previous_reaction = active_reaction;
      var previous_ctx = component_context;
      set_active_effect(this.#effect);
      set_active_reaction(this.#effect);
      set_component_context(this.#effect.ctx);
      try {
        Batch.ensure();
        return fn();
      } catch (e) {
        handle_error(e);
        return null;
      } finally {
        set_active_effect(previous_effect);
        set_active_reaction(previous_reaction);
        set_component_context(previous_ctx);
      }
    }
    /**
     * Updates the pending count associated with the currently visible pending snippet,
     * if any, such that we can replace the snippet with content once work is done
     * @param {1 | -1} d
     * @param {Batch} batch
     */
    #update_pending_count(d, batch) {
      if (!this.has_pending_snippet()) {
        if (this.parent) {
          this.parent.#update_pending_count(d, batch);
        }
        return;
      }
      this.#pending_count += d;
      if (this.#pending_count === 0) {
        this.#resolve(batch);
        if (this.#pending_effect) {
          pause_effect(this.#pending_effect, () => {
            this.#pending_effect = null;
          });
        }
        if (this.#offscreen_fragment) {
          this.#anchor.before(this.#offscreen_fragment);
          this.#offscreen_fragment = null;
        }
      }
    }
    /**
     * Update the source that powers `$effect.pending()` inside this boundary,
     * and controls when the current `pending` snippet (if any) is removed.
     * Do not call from inside the class
     * @param {1 | -1} d
     * @param {Batch} batch
     */
    update_pending_count(d, batch) {
      this.#update_pending_count(d, batch);
      this.#local_pending_count += d;
      if (!this.#effect_pending || this.#pending_count_update_queued) return;
      this.#pending_count_update_queued = true;
      queue_micro_task(() => {
        this.#pending_count_update_queued = false;
        if (this.#effect_pending) {
          internal_set(this.#effect_pending, this.#local_pending_count);
        }
      });
    }
    get_effect_pending() {
      this.#effect_pending_subscriber();
      return get(
        /** @type {Source<number>} */
        this.#effect_pending
      );
    }
    /** @param {unknown} error */
    error(error) {
      var onerror = this.#props.onerror;
      let failed = this.#props.failed;
      if (!onerror && !failed) {
        throw error;
      }
      if (this.#main_effect) {
        destroy_effect(this.#main_effect);
        this.#main_effect = null;
      }
      if (this.#pending_effect) {
        destroy_effect(this.#pending_effect);
        this.#pending_effect = null;
      }
      if (this.#failed_effect) {
        destroy_effect(this.#failed_effect);
        this.#failed_effect = null;
      }
      if (hydrating) {
        set_hydrate_node(
          /** @type {TemplateNode} */
          this.#hydrate_open
        );
        next();
        set_hydrate_node(skip_nodes());
      }
      var did_reset = false;
      var calling_on_error = false;
      const reset2 = () => {
        if (did_reset) {
          svelte_boundary_reset_noop();
          return;
        }
        did_reset = true;
        if (calling_on_error) {
          svelte_boundary_reset_onerror();
        }
        if (this.#failed_effect !== null) {
          pause_effect(this.#failed_effect, () => {
            this.#failed_effect = null;
          });
        }
        this.#run(() => {
          this.#render();
        });
      };
      const handle_error_result = (transformed_error) => {
        try {
          calling_on_error = true;
          onerror?.(transformed_error, reset2);
          calling_on_error = false;
        } catch (error2) {
          invoke_error_boundary(error2, this.#effect && this.#effect.parent);
        }
        if (failed) {
          this.#failed_effect = this.#run(() => {
            try {
              return branch(() => {
                var effect2 = (
                  /** @type {Effect} */
                  active_effect
                );
                effect2.b = this;
                effect2.f |= BOUNDARY_EFFECT;
                failed(
                  this.#anchor,
                  () => transformed_error,
                  () => reset2
                );
              });
            } catch (error2) {
              invoke_error_boundary(
                error2,
                /** @type {Effect} */
                this.#effect.parent
              );
              return null;
            }
          });
        }
      };
      queue_micro_task(() => {
        var result;
        try {
          result = this.transform_error(error);
        } catch (e) {
          invoke_error_boundary(e, this.#effect && this.#effect.parent);
          return;
        }
        if (result !== null && typeof result === "object" && typeof /** @type {any} */
        result.then === "function") {
          result.then(
            handle_error_result,
            /** @param {unknown} e */
            (e) => invoke_error_boundary(e, this.#effect && this.#effect.parent)
          );
        } else {
          handle_error_result(result);
        }
      });
    }
  }
  function set_text(text2, value) {
    var str = value == null ? "" : typeof value === "object" ? `${value}` : value;
    if (str !== (text2.__t ??= text2.nodeValue)) {
      text2.__t = str;
      text2.nodeValue = `${str}`;
    }
  }
  function mount(component2, options) {
    return _mount(component2, options);
  }
  function hydrate(component2, options) {
    init_operations();
    options.intro = options.intro ?? false;
    const target = options.target;
    const was_hydrating = hydrating;
    const previous_hydrate_node = hydrate_node;
    try {
      var anchor = /* @__PURE__ */ get_first_child(target);
      while (anchor && (anchor.nodeType !== COMMENT_NODE || /** @type {Comment} */
      anchor.data !== HYDRATION_START)) {
        anchor = /* @__PURE__ */ get_next_sibling(anchor);
      }
      if (!anchor) {
        throw HYDRATION_ERROR;
      }
      set_hydrating(true);
      set_hydrate_node(
        /** @type {Comment} */
        anchor
      );
      const instance = _mount(component2, { ...options, anchor });
      set_hydrating(false);
      return (
        /**  @type {Exports} */
        instance
      );
    } catch (error) {
      if (error instanceof Error && error.message.split("\n").some((line) => line.startsWith("https://svelte.dev/e/"))) {
        throw error;
      }
      if (error !== HYDRATION_ERROR) {
        console.warn("Failed to hydrate: ", error);
      }
      if (options.recover === false) {
        hydration_failed();
      }
      init_operations();
      clear_text_content(target);
      set_hydrating(false);
      return mount(component2, options);
    } finally {
      set_hydrating(was_hydrating);
      set_hydrate_node(previous_hydrate_node);
    }
  }
  const listeners = /* @__PURE__ */ new Map();
  function _mount(Component, { target, anchor, props = {}, events, context, intro = true, transformError }) {
    init_operations();
    var component2 = void 0;
    var unmount2 = component_root(() => {
      var anchor_node = anchor ?? target.appendChild(create_text());
      boundary(
        /** @type {TemplateNode} */
        anchor_node,
        {
          pending: () => {
          }
        },
        (anchor_node2) => {
          push({});
          var ctx = (
            /** @type {ComponentContext} */
            component_context
          );
          if (context) ctx.c = context;
          if (events) {
            props.$$events = events;
          }
          if (hydrating) {
            assign_nodes(
              /** @type {TemplateNode} */
              anchor_node2,
              null
            );
          }
          component2 = Component(anchor_node2, props) || {};
          if (hydrating) {
            active_effect.nodes.end = hydrate_node;
            if (hydrate_node === null || hydrate_node.nodeType !== COMMENT_NODE || /** @type {Comment} */
            hydrate_node.data !== HYDRATION_END) {
              hydration_mismatch();
              throw HYDRATION_ERROR;
            }
          }
          pop();
        },
        transformError
      );
      var registered_events = /* @__PURE__ */ new Set();
      var event_handle = (events2) => {
        for (var i = 0; i < events2.length; i++) {
          var event_name = events2[i];
          if (registered_events.has(event_name)) continue;
          registered_events.add(event_name);
          var passive = is_passive_event(event_name);
          for (const node of [target, document]) {
            var counts = listeners.get(node);
            if (counts === void 0) {
              counts = /* @__PURE__ */ new Map();
              listeners.set(node, counts);
            }
            var count = counts.get(event_name);
            if (count === void 0) {
              node.addEventListener(event_name, handle_event_propagation, { passive });
              counts.set(event_name, 1);
            } else {
              counts.set(event_name, count + 1);
            }
          }
        }
      };
      event_handle(array_from(all_registered_events));
      root_event_handles.add(event_handle);
      return () => {
        for (var event_name of registered_events) {
          for (const node of [target, document]) {
            var counts = (
              /** @type {Map<string, number>} */
              listeners.get(node)
            );
            var count = (
              /** @type {number} */
              counts.get(event_name)
            );
            if (--count == 0) {
              node.removeEventListener(event_name, handle_event_propagation);
              counts.delete(event_name);
              if (counts.size === 0) {
                listeners.delete(node);
              }
            } else {
              counts.set(event_name, count);
            }
          }
        }
        root_event_handles.delete(event_handle);
        if (anchor_node !== anchor) {
          anchor_node.parentNode?.removeChild(anchor_node);
        }
      };
    });
    mounted_components.set(component2, unmount2);
    return component2;
  }
  let mounted_components = /* @__PURE__ */ new WeakMap();
  function unmount(component2, options) {
    const fn = mounted_components.get(component2);
    if (fn) {
      mounted_components.delete(component2);
      return fn(options);
    }
    return Promise.resolve();
  }
  // @__NO_SIDE_EFFECTS__
  function derived(fn) {
    var flags2 = DERIVED | DIRTY;
    var parent_derived = active_reaction !== null && (active_reaction.f & DERIVED) !== 0 ? (
      /** @type {Derived} */
      active_reaction
    ) : null;
    if (active_effect !== null) {
      active_effect.f |= EFFECT_PRESERVED;
    }
    const signal = {
      ctx: component_context,
      deps: null,
      effects: null,
      equals,
      f: flags2,
      fn,
      reactions: null,
      rv: 0,
      v: (
        /** @type {V} */
        UNINITIALIZED
      ),
      wv: 0,
      parent: parent_derived ?? active_effect,
      ac: null
    };
    return signal;
  }
  // @__NO_SIDE_EFFECTS__
  function async_derived(fn, label, location2) {
    let parent = (
      /** @type {Effect | null} */
      active_effect
    );
    if (parent === null) {
      async_derived_orphan();
    }
    var promise = (
      /** @type {Promise<V>} */
      /** @type {unknown} */
      void 0
    );
    var signal = source(
      /** @type {V} */
      UNINITIALIZED
    );
    var should_suspend = !active_reaction;
    var deferreds = /* @__PURE__ */ new Map();
    async_effect(() => {
      var effect2 = (
        /** @type {Effect} */
        active_effect
      );
      var d = deferred();
      promise = d.promise;
      try {
        Promise.resolve(fn()).then(d.resolve, d.reject).finally(unset_context);
      } catch (error) {
        d.reject(error);
        unset_context();
      }
      var batch = (
        /** @type {Batch} */
        current_batch
      );
      if (should_suspend) {
        if ((effect2.f & REACTION_RAN) !== 0) {
          var decrement_pending = increment_pending();
        }
        if (
          /** @type {Boundary} */
          parent.b.is_rendered()
        ) {
          deferreds.get(batch)?.reject(STALE_REACTION);
          deferreds.delete(batch);
        } else {
          for (const d2 of deferreds.values()) {
            d2.reject(STALE_REACTION);
          }
          deferreds.clear();
        }
        deferreds.set(batch, d);
      }
      const handler = (value, error = void 0) => {
        if (decrement_pending) {
          var skip = error === STALE_REACTION;
          decrement_pending(skip);
        }
        if (error === STALE_REACTION || (effect2.f & DESTROYED) !== 0) {
          return;
        }
        batch.activate();
        if (error) {
          signal.f |= ERROR_VALUE;
          internal_set(signal, error);
        } else {
          if ((signal.f & ERROR_VALUE) !== 0) {
            signal.f ^= ERROR_VALUE;
          }
          internal_set(signal, value);
          for (const [b, d2] of deferreds) {
            deferreds.delete(b);
            if (b === batch) break;
            d2.reject(STALE_REACTION);
          }
        }
        batch.deactivate();
      };
      d.promise.then(handler, (e) => handler(null, e || "unknown"));
    });
    teardown(() => {
      for (const d of deferreds.values()) {
        d.reject(STALE_REACTION);
      }
    });
    return new Promise((fulfil) => {
      function next2(p) {
        function go() {
          if (p === promise) {
            fulfil(signal);
          } else {
            next2(promise);
          }
        }
        p.then(go, go);
      }
      next2(promise);
    });
  }
  // @__NO_SIDE_EFFECTS__
  function user_derived(fn) {
    const d = /* @__PURE__ */ derived(fn);
    push_reaction_value(d);
    return d;
  }
  function destroy_derived_effects(derived2) {
    var effects = derived2.effects;
    if (effects !== null) {
      derived2.effects = null;
      for (var i = 0; i < effects.length; i += 1) {
        destroy_effect(
          /** @type {Effect} */
          effects[i]
        );
      }
    }
  }
  function get_derived_parent_effect(derived2) {
    var parent = derived2.parent;
    while (parent !== null) {
      if ((parent.f & DERIVED) === 0) {
        return (parent.f & DESTROYED) === 0 ? (
          /** @type {Effect} */
          parent
        ) : null;
      }
      parent = parent.parent;
    }
    return null;
  }
  function execute_derived(derived2) {
    var value;
    var prev_active_effect = active_effect;
    set_active_effect(get_derived_parent_effect(derived2));
    {
      try {
        derived2.f &= ~WAS_MARKED;
        destroy_derived_effects(derived2);
        value = update_reaction(derived2);
      } finally {
        set_active_effect(prev_active_effect);
      }
    }
    return value;
  }
  function update_derived(derived2) {
    var value = execute_derived(derived2);
    if (!derived2.equals(value)) {
      derived2.wv = increment_write_version();
      if (!current_batch?.is_fork || derived2.deps === null) {
        derived2.v = value;
        if (derived2.deps === null) {
          set_signal_status(derived2, CLEAN);
          return;
        }
      }
    }
    if (is_destroying_effect) {
      return;
    }
    if (batch_values !== null) {
      if (effect_tracking() || current_batch?.is_fork) {
        batch_values.set(derived2, value);
      }
    } else {
      update_derived_status(derived2);
    }
  }
  function freeze_derived_effects(derived2) {
    if (derived2.effects === null) return;
    for (const e of derived2.effects) {
      if (e.teardown || e.ac) {
        e.teardown?.();
        e.ac?.abort(STALE_REACTION);
        e.teardown = noop;
        e.ac = null;
        remove_reactions(e, 0);
        destroy_effect_children(e);
      }
    }
  }
  function unfreeze_derived_effects(derived2) {
    if (derived2.effects === null) return;
    for (const e of derived2.effects) {
      if (e.teardown) {
        update_effect(e);
      }
    }
  }
  function flatten(blockers, sync, async, fn) {
    const d = derived;
    var pending = blockers.filter((b) => !b.settled);
    if (async.length === 0 && pending.length === 0) {
      fn(sync.map(d));
      return;
    }
    var parent = (
      /** @type {Effect} */
      active_effect
    );
    var restore = capture();
    var blocker_promise = pending.length === 1 ? pending[0].promise : pending.length > 1 ? Promise.all(pending.map((b) => b.promise)) : null;
    function finish(values) {
      restore();
      try {
        fn(values);
      } catch (error) {
        if ((parent.f & DESTROYED) === 0) {
          invoke_error_boundary(error, parent);
        }
      }
      unset_context();
    }
    if (async.length === 0) {
      blocker_promise.then(() => finish(sync.map(d)));
      return;
    }
    var decrement_pending = increment_pending();
    function run() {
      Promise.all(async.map((expression) => /* @__PURE__ */ async_derived(expression))).then((result) => finish([...sync.map(d), ...result])).catch((error) => invoke_error_boundary(error, parent)).finally(() => decrement_pending());
    }
    if (blocker_promise) {
      blocker_promise.then(() => {
        restore();
        run();
        unset_context();
      });
    } else {
      run();
    }
  }
  function capture() {
    var previous_effect = (
      /** @type {Effect} */
      active_effect
    );
    var previous_reaction = active_reaction;
    var previous_component_context = component_context;
    var previous_batch = (
      /** @type {Batch} */
      current_batch
    );
    return function restore(activate_batch = true) {
      set_active_effect(previous_effect);
      set_active_reaction(previous_reaction);
      set_component_context(previous_component_context);
      if (activate_batch && (previous_effect.f & DESTROYED) === 0) {
        previous_batch?.activate();
        previous_batch?.apply();
      }
    };
  }
  function unset_context(deactivate_batch = true) {
    set_active_effect(null);
    set_active_reaction(null);
    set_component_context(null);
    if (deactivate_batch) current_batch?.deactivate();
  }
  function increment_pending() {
    var boundary2 = (
      /** @type {Boundary} */
      /** @type {Effect} */
      active_effect.b
    );
    var batch = (
      /** @type {Batch} */
      current_batch
    );
    var blocking = boundary2.is_rendered();
    boundary2.update_pending_count(1, batch);
    batch.increment(blocking);
    return (skip = false) => {
      boundary2.update_pending_count(-1, batch);
      batch.decrement(blocking, skip);
    };
  }
  class BranchManager {
    /** @type {TemplateNode} */
    anchor;
    /** @type {Map<Batch, Key>} */
    #batches = /* @__PURE__ */ new Map();
    /**
     * Map of keys to effects that are currently rendered in the DOM.
     * These effects are visible and actively part of the document tree.
     * Example:
     * ```
     * {#if condition}
     * 	foo
     * {:else}
     * 	bar
     * {/if}
     * ```
     * Can result in the entries `true->Effect` and `false->Effect`
     * @type {Map<Key, Effect>}
     */
    #onscreen = /* @__PURE__ */ new Map();
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    #offscreen = /* @__PURE__ */ new Map();
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    #outroing = /* @__PURE__ */ new Set();
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    #transition = true;
    /**
     * @param {TemplateNode} anchor
     * @param {boolean} transition
     */
    constructor(anchor, transition = true) {
      this.anchor = anchor;
      this.#transition = transition;
    }
    /**
     * @param {Batch} batch
     */
    #commit = (batch) => {
      if (!this.#batches.has(batch)) return;
      var key2 = (
        /** @type {Key} */
        this.#batches.get(batch)
      );
      var onscreen = this.#onscreen.get(key2);
      if (onscreen) {
        resume_effect(onscreen);
        this.#outroing.delete(key2);
      } else {
        var offscreen = this.#offscreen.get(key2);
        if (offscreen) {
          this.#onscreen.set(key2, offscreen.effect);
          this.#offscreen.delete(key2);
          offscreen.fragment.lastChild.remove();
          this.anchor.before(offscreen.fragment);
          onscreen = offscreen.effect;
        }
      }
      for (const [b, k] of this.#batches) {
        this.#batches.delete(b);
        if (b === batch) {
          break;
        }
        const offscreen2 = this.#offscreen.get(k);
        if (offscreen2) {
          destroy_effect(offscreen2.effect);
          this.#offscreen.delete(k);
        }
      }
      for (const [k, effect2] of this.#onscreen) {
        if (k === key2 || this.#outroing.has(k)) continue;
        const on_destroy = () => {
          const keys = Array.from(this.#batches.values());
          if (keys.includes(k)) {
            var fragment = document.createDocumentFragment();
            move_effect(effect2, fragment);
            fragment.append(create_text());
            this.#offscreen.set(k, { effect: effect2, fragment });
          } else {
            destroy_effect(effect2);
          }
          this.#outroing.delete(k);
          this.#onscreen.delete(k);
        };
        if (this.#transition || !onscreen) {
          this.#outroing.add(k);
          pause_effect(effect2, on_destroy, false);
        } else {
          on_destroy();
        }
      }
    };
    /**
     * @param {Batch} batch
     */
    #discard = (batch) => {
      this.#batches.delete(batch);
      const keys = Array.from(this.#batches.values());
      for (const [k, branch2] of this.#offscreen) {
        if (!keys.includes(k)) {
          destroy_effect(branch2.effect);
          this.#offscreen.delete(k);
        }
      }
    };
    /**
     *
     * @param {any} key
     * @param {null | ((target: TemplateNode) => void)} fn
     */
    ensure(key2, fn) {
      var batch = (
        /** @type {Batch} */
        current_batch
      );
      var defer = should_defer_append();
      if (fn && !this.#onscreen.has(key2) && !this.#offscreen.has(key2)) {
        if (defer) {
          var fragment = document.createDocumentFragment();
          var target = create_text();
          fragment.append(target);
          this.#offscreen.set(key2, {
            effect: branch(() => fn(target)),
            fragment
          });
        } else {
          this.#onscreen.set(
            key2,
            branch(() => fn(this.anchor))
          );
        }
      }
      this.#batches.set(batch, key2);
      if (defer) {
        for (const [k, effect2] of this.#onscreen) {
          if (k === key2) {
            batch.unskip_effect(effect2);
          } else {
            batch.skip_effect(effect2);
          }
        }
        for (const [k, branch2] of this.#offscreen) {
          if (k === key2) {
            batch.unskip_effect(branch2.effect);
          } else {
            batch.skip_effect(branch2.effect);
          }
        }
        batch.oncommit(this.#commit);
        batch.ondiscard(this.#discard);
      } else {
        if (hydrating) {
          this.anchor = hydrate_node;
        }
        this.#commit(batch);
      }
    }
  }
  function if_block(node, fn, elseif = false) {
    var marker;
    if (hydrating) {
      marker = hydrate_node;
      hydrate_next();
    }
    var branches = new BranchManager(node);
    var flags2 = elseif ? EFFECT_TRANSPARENT : 0;
    function update_branch(key2, fn2) {
      if (hydrating) {
        var data = read_hydration_instruction(
          /** @type {TemplateNode} */
          marker
        );
        if (key2 !== parseInt(data.substring(1))) {
          var anchor = skip_nodes();
          set_hydrate_node(anchor);
          branches.anchor = anchor;
          set_hydrating(false);
          branches.ensure(key2, fn2);
          set_hydrating(true);
          return;
        }
      }
      branches.ensure(key2, fn2);
    }
    block(() => {
      var has_branch = false;
      fn((fn2, key2 = 0) => {
        has_branch = true;
        update_branch(key2, fn2);
      });
      if (!has_branch) {
        update_branch(-1, null);
      }
    }, flags2);
  }
  const NAN = /* @__PURE__ */ Symbol("NaN");
  function key(node, get_key, render_fn) {
    if (hydrating) {
      hydrate_next();
    }
    var branches = new BranchManager(node);
    block(() => {
      var key2 = get_key();
      if (key2 !== key2) {
        key2 = /** @type {any} */
        NAN;
      }
      branches.ensure(key2, render_fn);
    });
  }
  function html(node, get_value, is_controlled = false, svg = false, mathml = false, skip_warning = false) {
    var anchor = node;
    var value = "";
    if (is_controlled) {
      var parent_node = (
        /** @type {Element} */
        node
      );
      if (hydrating) {
        anchor = set_hydrate_node(/* @__PURE__ */ get_first_child(parent_node));
      }
    }
    template_effect(() => {
      var effect2 = (
        /** @type {Effect} */
        active_effect
      );
      if (value === (value = get_value() ?? "")) {
        if (hydrating) hydrate_next();
        return;
      }
      if (is_controlled && !hydrating) {
        effect2.nodes = null;
        parent_node.innerHTML = /** @type {string} */
        value;
        if (value !== "") {
          assign_nodes(
            /** @type {TemplateNode} */
            /* @__PURE__ */ get_first_child(parent_node),
            /** @type {TemplateNode} */
            parent_node.lastChild
          );
        }
        return;
      }
      if (effect2.nodes !== null) {
        remove_effect_dom(
          effect2.nodes.start,
          /** @type {TemplateNode} */
          effect2.nodes.end
        );
        effect2.nodes = null;
      }
      if (value === "") return;
      if (hydrating) {
        hydrate_node.data;
        var next2 = hydrate_next();
        var last = next2;
        while (next2 !== null && (next2.nodeType !== COMMENT_NODE || /** @type {Comment} */
        next2.data !== "")) {
          last = next2;
          next2 = /* @__PURE__ */ get_next_sibling(next2);
        }
        if (next2 === null) {
          hydration_mismatch();
          throw HYDRATION_ERROR;
        }
        assign_nodes(hydrate_node, last);
        anchor = set_hydrate_node(next2);
        return;
      }
      var ns = svg ? NAMESPACE_SVG : mathml ? NAMESPACE_MATHML : void 0;
      var wrapper = (
        /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
        create_element(svg ? "svg" : mathml ? "math" : "template", ns)
      );
      wrapper.innerHTML = /** @type {any} */
      value;
      var node2 = svg || mathml ? wrapper : (
        /** @type {HTMLTemplateElement} */
        wrapper.content
      );
      assign_nodes(
        /** @type {TemplateNode} */
        /* @__PURE__ */ get_first_child(node2),
        /** @type {TemplateNode} */
        node2.lastChild
      );
      if (svg || mathml) {
        while (/* @__PURE__ */ get_first_child(node2)) {
          anchor.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ get_first_child(node2)
          );
        }
      } else {
        anchor.before(node2);
      }
    });
  }
  function snippet(node, get_snippet, ...args) {
    var branches = new BranchManager(node);
    block(() => {
      const snippet2 = get_snippet() ?? null;
      branches.ensure(snippet2, snippet2 && ((anchor) => snippet2(anchor, ...args)));
    }, EFFECT_TRANSPARENT);
  }
  function component(node, get_component, render_fn) {
    var hydration_start_node;
    if (hydrating) {
      hydration_start_node = hydrate_node;
      hydrate_next();
    }
    var branches = new BranchManager(node);
    block(() => {
      var component2 = get_component() ?? null;
      if (hydrating) {
        var data = read_hydration_instruction(
          /** @type {TemplateNode} */
          hydration_start_node
        );
        var server_had_component = data === HYDRATION_START;
        var client_has_component = component2 !== null;
        if (server_had_component !== client_has_component) {
          var anchor = skip_nodes();
          set_hydrate_node(anchor);
          branches.anchor = anchor;
          set_hydrating(false);
          branches.ensure(component2, component2 && ((target) => render_fn(target, component2)));
          set_hydrating(true);
          return;
        }
      }
      branches.ensure(component2, component2 && ((target) => render_fn(target, component2)));
    }, EFFECT_TRANSPARENT);
  }
  function attach(node, get_fn) {
    var fn = void 0;
    var e;
    managed(() => {
      if (fn !== (fn = get_fn())) {
        if (e) {
          destroy_effect(e);
          e = null;
        }
        if (fn) {
          e = branch(() => {
            effect(() => (
              /** @type {(node: Element) => void} */
              fn(node)
            ));
          });
        }
      }
    });
  }
  function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for (f in e) e[f] && (n && (n += " "), n += f);
    return n;
  }
  function clsx$1() {
    for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
  }
  function clsx(value) {
    if (typeof value === "object") {
      return clsx$1(value);
    } else {
      return value ?? "";
    }
  }
  const whitespace = [..." 	\n\r\f \v\uFEFF"];
  function to_class(value, hash, directives) {
    var classname = value == null ? "" : "" + value;
    if (directives) {
      for (var key2 of Object.keys(directives)) {
        if (directives[key2]) {
          classname = classname ? classname + " " + key2 : key2;
        } else if (classname.length) {
          var len = key2.length;
          var a = 0;
          while ((a = classname.indexOf(key2, a)) >= 0) {
            var b = a + len;
            if ((a === 0 || whitespace.includes(classname[a - 1])) && (b === classname.length || whitespace.includes(classname[b]))) {
              classname = (a === 0 ? "" : classname.substring(0, a)) + classname.substring(b + 1);
            } else {
              a = b;
            }
          }
        }
      }
    }
    return classname === "" ? null : classname;
  }
  function append_styles(styles, important = false) {
    var separator = important ? " !important;" : ";";
    var css2 = "";
    for (var key2 of Object.keys(styles)) {
      var value = styles[key2];
      if (value != null && value !== "") {
        css2 += " " + key2 + ": " + value + separator;
      }
    }
    return css2;
  }
  function to_css_name(name) {
    if (name[0] !== "-" || name[1] !== "-") {
      return name.toLowerCase();
    }
    return name;
  }
  function to_style(value, styles) {
    if (styles) {
      var new_style = "";
      var normal_styles;
      var important_styles;
      if (Array.isArray(styles)) {
        normal_styles = styles[0];
        important_styles = styles[1];
      } else {
        normal_styles = styles;
      }
      if (value) {
        value = String(value).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
        var in_str = false;
        var in_apo = 0;
        var in_comment = false;
        var reserved_names = [];
        if (normal_styles) {
          reserved_names.push(...Object.keys(normal_styles).map(to_css_name));
        }
        if (important_styles) {
          reserved_names.push(...Object.keys(important_styles).map(to_css_name));
        }
        var start_index = 0;
        var name_index = -1;
        const len = value.length;
        for (var i = 0; i < len; i++) {
          var c = value[i];
          if (in_comment) {
            if (c === "/" && value[i - 1] === "*") {
              in_comment = false;
            }
          } else if (in_str) {
            if (in_str === c) {
              in_str = false;
            }
          } else if (c === "/" && value[i + 1] === "*") {
            in_comment = true;
          } else if (c === '"' || c === "'") {
            in_str = c;
          } else if (c === "(") {
            in_apo++;
          } else if (c === ")") {
            in_apo--;
          }
          if (!in_comment && in_str === false && in_apo === 0) {
            if (c === ":" && name_index === -1) {
              name_index = i;
            } else if (c === ";" || i === len - 1) {
              if (name_index !== -1) {
                var name = to_css_name(value.substring(start_index, name_index).trim());
                if (!reserved_names.includes(name)) {
                  if (c !== ";") {
                    i++;
                  }
                  var property = value.substring(start_index, i).trim();
                  new_style += " " + property + ";";
                }
              }
              start_index = i + 1;
              name_index = -1;
            }
          }
        }
      }
      if (normal_styles) {
        new_style += append_styles(normal_styles);
      }
      if (important_styles) {
        new_style += append_styles(important_styles, true);
      }
      new_style = new_style.trim();
      return new_style === "" ? null : new_style;
    }
    return value == null ? null : String(value);
  }
  function set_class(dom, is_html, value, hash, prev_classes, next_classes) {
    var prev = dom.__className;
    if (hydrating || prev !== value || prev === void 0) {
      var next_class_name = to_class(value, hash, next_classes);
      if (!hydrating || next_class_name !== dom.getAttribute("class")) {
        if (next_class_name == null) {
          dom.removeAttribute("class");
        } else if (is_html) {
          dom.className = next_class_name;
        } else {
          dom.setAttribute("class", next_class_name);
        }
      }
      dom.__className = value;
    } else if (next_classes && prev_classes !== next_classes) {
      for (var key2 in next_classes) {
        var is_present = !!next_classes[key2];
        if (prev_classes == null || is_present !== !!prev_classes[key2]) {
          dom.classList.toggle(key2, is_present);
        }
      }
    }
    return next_classes;
  }
  function update_styles(dom, prev = {}, next2, priority) {
    for (var key2 in next2) {
      var value = next2[key2];
      if (prev[key2] !== value) {
        if (next2[key2] == null) {
          dom.style.removeProperty(key2);
        } else {
          dom.style.setProperty(key2, value, priority);
        }
      }
    }
  }
  function set_style(dom, value, prev_styles, next_styles) {
    var prev = dom.__style;
    if (hydrating || prev !== value) {
      var next_style_attr = to_style(value, next_styles);
      if (!hydrating || next_style_attr !== dom.getAttribute("style")) {
        if (next_style_attr == null) {
          dom.removeAttribute("style");
        } else {
          dom.style.cssText = next_style_attr;
        }
      }
      dom.__style = value;
    } else if (next_styles) {
      if (Array.isArray(next_styles)) {
        update_styles(dom, prev_styles?.[0], next_styles[0]);
        update_styles(dom, prev_styles?.[1], next_styles[1], "important");
      } else {
        update_styles(dom, prev_styles, next_styles);
      }
    }
    return next_styles;
  }
  function select_option(select, value, mounting = false) {
    if (select.multiple) {
      if (value == void 0) {
        return;
      }
      if (!is_array(value)) {
        return select_multiple_invalid_value();
      }
      for (var option of select.options) {
        option.selected = value.includes(get_option_value(option));
      }
      return;
    }
    for (option of select.options) {
      var option_value = get_option_value(option);
      if (is(option_value, value)) {
        option.selected = true;
        return;
      }
    }
    if (!mounting || value !== void 0) {
      select.selectedIndex = -1;
    }
  }
  function init_select(select) {
    var observer = new MutationObserver(() => {
      select_option(select, select.__value);
    });
    observer.observe(select, {
      // Listen to option element changes
      childList: true,
      subtree: true,
      // because of <optgroup>
      // Listen to option element value attribute changes
      // (doesn't get notified of select value changes,
      // because that property is not reflected as an attribute)
      attributes: true,
      attributeFilter: ["value"]
    });
    teardown(() => {
      observer.disconnect();
    });
  }
  function get_option_value(option) {
    if ("__value" in option) {
      return option.__value;
    } else {
      return option.value;
    }
  }
  const CLASS = /* @__PURE__ */ Symbol("class");
  const STYLE = /* @__PURE__ */ Symbol("style");
  const IS_CUSTOM_ELEMENT = /* @__PURE__ */ Symbol("is custom element");
  const IS_HTML = /* @__PURE__ */ Symbol("is html");
  const LINK_TAG = IS_XHTML ? "link" : "LINK";
  const INPUT_TAG = IS_XHTML ? "input" : "INPUT";
  const OPTION_TAG = IS_XHTML ? "option" : "OPTION";
  const SELECT_TAG = IS_XHTML ? "select" : "SELECT";
  const PROGRESS_TAG = IS_XHTML ? "progress" : "PROGRESS";
  function remove_input_defaults(input) {
    if (!hydrating) return;
    var already_removed = false;
    var remove_defaults = () => {
      if (already_removed) return;
      already_removed = true;
      if (input.hasAttribute("value")) {
        var value = input.value;
        set_attribute(input, "value", null);
        input.value = value;
      }
      if (input.hasAttribute("checked")) {
        var checked = input.checked;
        set_attribute(input, "checked", null);
        input.checked = checked;
      }
    };
    input.__on_r = remove_defaults;
    queue_micro_task(remove_defaults);
    add_form_reset_listener();
  }
  function set_value(element, value) {
    var attributes = get_attributes(element);
    if (attributes.value === (attributes.value = // treat null and undefined the same for the initial value
    value ?? void 0) || // @ts-expect-error
    // `progress` elements always need their value set when it's `0`
    element.value === value && (value !== 0 || element.nodeName !== PROGRESS_TAG)) {
      return;
    }
    element.value = value ?? "";
  }
  function set_selected(element, selected) {
    if (selected) {
      if (!element.hasAttribute("selected")) {
        element.setAttribute("selected", "");
      }
    } else {
      element.removeAttribute("selected");
    }
  }
  function set_attribute(element, attribute, value, skip_warning) {
    var attributes = get_attributes(element);
    if (hydrating) {
      attributes[attribute] = element.getAttribute(attribute);
      if (attribute === "src" || attribute === "srcset" || attribute === "href" && element.nodeName === LINK_TAG) {
        return;
      }
    }
    if (attributes[attribute] === (attributes[attribute] = value)) return;
    if (attribute === "loading") {
      element[LOADING_ATTR_SYMBOL] = value;
    }
    if (value == null) {
      element.removeAttribute(attribute);
    } else if (typeof value !== "string" && get_setters(element).includes(attribute)) {
      element[attribute] = value;
    } else {
      element.setAttribute(attribute, value);
    }
  }
  function set_attributes(element, prev, next2, css_hash, should_remove_defaults = false, skip_warning = false) {
    if (hydrating && should_remove_defaults && element.nodeName === INPUT_TAG) {
      var input = (
        /** @type {HTMLInputElement} */
        element
      );
      var attribute = input.type === "checkbox" ? "defaultChecked" : "defaultValue";
      if (!(attribute in next2)) {
        remove_input_defaults(input);
      }
    }
    var attributes = get_attributes(element);
    var is_custom_element = attributes[IS_CUSTOM_ELEMENT];
    var preserve_attribute_case = !attributes[IS_HTML];
    let is_hydrating_custom_element = hydrating && is_custom_element;
    if (is_hydrating_custom_element) {
      set_hydrating(false);
    }
    var current = prev || {};
    var is_option_element = element.nodeName === OPTION_TAG;
    for (var key2 in prev) {
      if (!(key2 in next2)) {
        next2[key2] = null;
      }
    }
    if (next2.class) {
      next2.class = clsx(next2.class);
    } else if (next2[CLASS]) {
      next2.class = null;
    }
    if (next2[STYLE]) {
      next2.style ??= null;
    }
    var setters = get_setters(element);
    for (const key3 in next2) {
      let value = next2[key3];
      if (is_option_element && key3 === "value" && value == null) {
        element.value = element.__value = "";
        current[key3] = value;
        continue;
      }
      if (key3 === "class") {
        var is_html = element.namespaceURI === "http://www.w3.org/1999/xhtml";
        set_class(element, is_html, value, css_hash, prev?.[CLASS], next2[CLASS]);
        current[key3] = value;
        current[CLASS] = next2[CLASS];
        continue;
      }
      if (key3 === "style") {
        set_style(element, value, prev?.[STYLE], next2[STYLE]);
        current[key3] = value;
        current[STYLE] = next2[STYLE];
        continue;
      }
      var prev_value = current[key3];
      if (value === prev_value && !(value === void 0 && element.hasAttribute(key3))) {
        continue;
      }
      current[key3] = value;
      var prefix = key3[0] + key3[1];
      if (prefix === "$$") continue;
      if (prefix === "on") {
        const opts = {};
        const event_handle_key = "$$" + key3;
        let event_name = key3.slice(2);
        var is_delegated = can_delegate_event(event_name);
        if (is_capture_event(event_name)) {
          event_name = event_name.slice(0, -7);
          opts.capture = true;
        }
        if (!is_delegated && prev_value) {
          if (value != null) continue;
          element.removeEventListener(event_name, current[event_handle_key], opts);
          current[event_handle_key] = null;
        }
        if (is_delegated) {
          delegated(event_name, element, value);
          delegate([event_name]);
        } else if (value != null) {
          let handle = function(evt) {
            current[key3].call(this, evt);
          };
          current[event_handle_key] = create_event(event_name, element, handle, opts);
        }
      } else if (key3 === "style") {
        set_attribute(element, key3, value);
      } else if (key3 === "autofocus") {
        autofocus(
          /** @type {HTMLElement} */
          element,
          Boolean(value)
        );
      } else if (!is_custom_element && (key3 === "__value" || key3 === "value" && value != null)) {
        element.value = element.__value = value;
      } else if (key3 === "selected" && is_option_element) {
        set_selected(
          /** @type {HTMLOptionElement} */
          element,
          value
        );
      } else {
        var name = key3;
        if (!preserve_attribute_case) {
          name = normalize_attribute(name);
        }
        var is_default = name === "defaultValue" || name === "defaultChecked";
        if (value == null && !is_custom_element && !is_default) {
          attributes[key3] = null;
          if (name === "value" || name === "checked") {
            let input2 = (
              /** @type {HTMLInputElement} */
              element
            );
            const use_default = prev === void 0;
            if (name === "value") {
              let previous = input2.defaultValue;
              input2.removeAttribute(name);
              input2.defaultValue = previous;
              input2.value = input2.__value = use_default ? previous : null;
            } else {
              let previous = input2.defaultChecked;
              input2.removeAttribute(name);
              input2.defaultChecked = previous;
              input2.checked = use_default ? previous : false;
            }
          } else {
            element.removeAttribute(key3);
          }
        } else if (is_default || setters.includes(name) && (is_custom_element || typeof value !== "string")) {
          element[name] = value;
          if (name in attributes) attributes[name] = UNINITIALIZED;
        } else if (typeof value !== "function") {
          set_attribute(element, name, value);
        }
      }
    }
    if (is_hydrating_custom_element) {
      set_hydrating(true);
    }
    return current;
  }
  function attribute_effect(element, fn, sync = [], async = [], blockers = [], css_hash, should_remove_defaults = false, skip_warning = false) {
    flatten(blockers, sync, async, (values) => {
      var prev = void 0;
      var effects = {};
      var is_select = element.nodeName === SELECT_TAG;
      var inited = false;
      managed(() => {
        var next2 = fn(...values.map(get));
        var current = set_attributes(
          element,
          prev,
          next2,
          css_hash,
          should_remove_defaults,
          skip_warning
        );
        if (inited && is_select && "value" in next2) {
          select_option(
            /** @type {HTMLSelectElement} */
            element,
            next2.value
          );
        }
        for (let symbol of Object.getOwnPropertySymbols(effects)) {
          if (!next2[symbol]) destroy_effect(effects[symbol]);
        }
        for (let symbol of Object.getOwnPropertySymbols(next2)) {
          var n = next2[symbol];
          if (symbol.description === ATTACHMENT_KEY && (!prev || n !== prev[symbol])) {
            if (effects[symbol]) destroy_effect(effects[symbol]);
            effects[symbol] = branch(() => attach(element, () => n));
          }
          current[symbol] = n;
        }
        prev = current;
      });
      if (is_select) {
        var select = (
          /** @type {HTMLSelectElement} */
          element
        );
        effect(() => {
          select_option(
            select,
            /** @type {Record<string | symbol, any>} */
            prev.value,
            true
          );
          init_select(select);
        });
      }
      inited = true;
    });
  }
  function get_attributes(element) {
    return (
      /** @type {Record<string | symbol, unknown>} **/
      // @ts-expect-error
      element.__attributes ??= {
        [IS_CUSTOM_ELEMENT]: element.nodeName.includes("-"),
        [IS_HTML]: element.namespaceURI === NAMESPACE_HTML
      }
    );
  }
  var setters_cache = /* @__PURE__ */ new Map();
  function get_setters(element) {
    var cache_key = element.getAttribute("is") || element.nodeName;
    var setters = setters_cache.get(cache_key);
    if (setters) return setters;
    setters_cache.set(cache_key, setters = []);
    var descriptors;
    var proto = element;
    var element_proto = Element.prototype;
    while (element_proto !== proto) {
      descriptors = get_descriptors(proto);
      for (var key2 in descriptors) {
        if (descriptors[key2].set) {
          setters.push(key2);
        }
      }
      proto = get_prototype_of(proto);
    }
    return setters;
  }
  function bind_value(input, get2, set2 = get2) {
    var batches2 = /* @__PURE__ */ new WeakSet();
    listen_to_event_and_reset_event(input, "input", async (is_reset) => {
      var value = is_reset ? input.defaultValue : input.value;
      value = is_numberlike_input(input) ? to_number(value) : value;
      set2(value);
      if (current_batch !== null) {
        batches2.add(current_batch);
      }
      await tick();
      if (value !== (value = get2())) {
        var start = input.selectionStart;
        var end = input.selectionEnd;
        var length = input.value.length;
        input.value = value ?? "";
        if (end !== null) {
          var new_length = input.value.length;
          if (start === end && end === length && new_length > length) {
            input.selectionStart = new_length;
            input.selectionEnd = new_length;
          } else {
            input.selectionStart = start;
            input.selectionEnd = Math.min(end, new_length);
          }
        }
      }
    });
    if (
      // If we are hydrating and the value has since changed,
      // then use the updated value from the input instead.
      hydrating && input.defaultValue !== input.value || // If defaultValue is set, then value == defaultValue
      // TODO Svelte 6: remove input.value check and set to empty string?
      untrack(get2) == null && input.value
    ) {
      set2(is_numberlike_input(input) ? to_number(input.value) : input.value);
      if (current_batch !== null) {
        batches2.add(current_batch);
      }
    }
    render_effect(() => {
      var value = get2();
      if (input === document.activeElement) {
        var batch = (
          /** @type {Batch} */
          current_batch
        );
        if (batches2.has(batch)) {
          return;
        }
      }
      if (is_numberlike_input(input) && value === to_number(input.value)) {
        return;
      }
      if (input.type === "date" && !value && !input.value) {
        return;
      }
      if (value !== input.value) {
        input.value = value ?? "";
      }
    });
  }
  function is_numberlike_input(input) {
    var type = input.type;
    return type === "number" || type === "range";
  }
  function to_number(value) {
    return value === "" ? null : +value;
  }
  function is_bound_this(bound_value, element_or_component) {
    return bound_value === element_or_component || bound_value?.[STATE_SYMBOL] === element_or_component;
  }
  function bind_this(element_or_component = {}, update, get_value, get_parts) {
    var component_effect = (
      /** @type {ComponentContext} */
      component_context.r
    );
    var parent = (
      /** @type {Effect} */
      active_effect
    );
    effect(() => {
      var old_parts;
      var parts;
      render_effect(() => {
        old_parts = parts;
        parts = [];
        untrack(() => {
          if (element_or_component !== get_value(...parts)) {
            update(element_or_component, ...parts);
            if (old_parts && is_bound_this(get_value(...old_parts), element_or_component)) {
              update(null, ...old_parts);
            }
          }
        });
      });
      return () => {
        let p = parent;
        while (p !== component_effect && p.parent !== null && p.parent.f & DESTROYING) {
          p = p.parent;
        }
        const teardown2 = () => {
          if (parts && is_bound_this(get_value(...parts), element_or_component)) {
            update(null, ...parts);
          }
        };
        const original_teardown = p.teardown;
        p.teardown = () => {
          teardown2();
          original_teardown?.();
        };
      };
    });
    return element_or_component;
  }
  const rest_props_handler = {
    get(target, key2) {
      if (target.exclude.includes(key2)) return;
      return target.props[key2];
    },
    set(target, key2) {
      return false;
    },
    getOwnPropertyDescriptor(target, key2) {
      if (target.exclude.includes(key2)) return;
      if (key2 in target.props) {
        return {
          enumerable: true,
          configurable: true,
          value: target.props[key2]
        };
      }
    },
    has(target, key2) {
      if (target.exclude.includes(key2)) return false;
      return key2 in target.props;
    },
    ownKeys(target) {
      return Reflect.ownKeys(target.props).filter((key2) => !target.exclude.includes(key2));
    }
  };
  // @__NO_SIDE_EFFECTS__
  function rest_props(props, exclude, name) {
    return new Proxy(
      { props, exclude },
      rest_props_handler
    );
  }
  function prop(props, key2, flags2, fallback) {
    var fallback_value = (
      /** @type {V} */
      fallback
    );
    var fallback_dirty = true;
    var get_fallback = () => {
      if (fallback_dirty) {
        fallback_dirty = false;
        fallback_value = /** @type {V} */
        fallback;
      }
      return fallback_value;
    };
    var initial_value;
    {
      initial_value = /** @type {V} */
      props[key2];
    }
    if (initial_value === void 0 && fallback !== void 0) {
      initial_value = get_fallback();
    }
    var getter;
    {
      getter = () => {
        var value = (
          /** @type {V} */
          props[key2]
        );
        if (value === void 0) return get_fallback();
        fallback_dirty = true;
        return value;
      };
    }
    var overridden = false;
    var d = /* @__PURE__ */ derived(() => {
      overridden = false;
      return getter();
    });
    var parent_effect = (
      /** @type {Effect} */
      active_effect
    );
    return (
      /** @type {() => V} */
      (function(value, mutation) {
        if (arguments.length > 0) {
          const new_value = mutation ? get(d) : value;
          set(d, new_value);
          overridden = true;
          if (fallback_value !== void 0) {
            fallback_value = new_value;
          }
          return value;
        }
        if (is_destroying_effect && overridden || (parent_effect.f & DESTROYED) !== 0) {
          return d.v;
        }
        return get(d);
      })
    );
  }
  function createClassComponent(options) {
    return new Svelte4Component(options);
  }
  class Svelte4Component {
    /** @type {any} */
    #events;
    /** @type {Record<string, any>} */
    #instance;
    /**
     * @param {ComponentConstructorOptions & {
     *  component: any;
     * }} options
     */
    constructor(options) {
      var sources = /* @__PURE__ */ new Map();
      var add_source = (key2, value) => {
        var s = /* @__PURE__ */ mutable_source(value, false, false);
        sources.set(key2, s);
        return s;
      };
      const props = new Proxy(
        { ...options.props || {}, $$events: {} },
        {
          get(target, prop2) {
            return get(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
          },
          has(target, prop2) {
            if (prop2 === LEGACY_PROPS) return true;
            get(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
            return Reflect.has(target, prop2);
          },
          set(target, prop2, value) {
            set(sources.get(prop2) ?? add_source(prop2, value), value);
            return Reflect.set(target, prop2, value);
          }
        }
      );
      this.#instance = (options.hydrate ? hydrate : mount)(options.component, {
        target: options.target,
        anchor: options.anchor,
        props,
        context: options.context,
        intro: options.intro ?? false,
        recover: options.recover,
        transformError: options.transformError
      });
      if (!options?.props?.$$host || options.sync === false) {
        flushSync();
      }
      this.#events = props.$$events;
      for (const key2 of Object.keys(this.#instance)) {
        if (key2 === "$set" || key2 === "$destroy" || key2 === "$on") continue;
        define_property(this, key2, {
          get() {
            return this.#instance[key2];
          },
          /** @param {any} value */
          set(value) {
            this.#instance[key2] = value;
          },
          enumerable: true
        });
      }
      this.#instance.$set = /** @param {Record<string, any>} next */
      (next2) => {
        Object.assign(props, next2);
      };
      this.#instance.$destroy = () => {
        unmount(this.#instance);
      };
    }
    /** @param {Record<string, any>} props */
    $set(props) {
      this.#instance.$set(props);
    }
    /**
     * @param {string} event
     * @param {(...args: any[]) => any} callback
     * @returns {any}
     */
    $on(event2, callback) {
      this.#events[event2] = this.#events[event2] || [];
      const cb = (...args) => callback.call(this, ...args);
      this.#events[event2].push(cb);
      return () => {
        this.#events[event2] = this.#events[event2].filter(
          /** @param {any} fn */
          (fn) => fn !== cb
        );
      };
    }
    $destroy() {
      this.#instance.$destroy();
    }
  }
  let SvelteElement = class {
  };
  if (typeof HTMLElement === "function") {
    SvelteElement = class extends HTMLElement {
      /** The Svelte component constructor */
      $$ctor;
      /** Slots */
      $$s;
      /** @type {any} The Svelte component instance */
      $$c;
      /** Whether or not the custom element is connected */
      $$cn = false;
      /** @type {Record<string, any>} Component props data */
      $$d = {};
      /** `true` if currently in the process of reflecting component props back to attributes */
      $$r = false;
      /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
      $$p_d = {};
      /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
      $$l = {};
      /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
      $$l_u = /* @__PURE__ */ new Map();
      /** @type {any} The managed render effect for reflecting attributes */
      $$me;
      /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
      $$shadowRoot = null;
      /**
       * @param {*} $$componentCtor
       * @param {*} $$slots
       * @param {ShadowRootInit | undefined} shadow_root_init
       */
      constructor($$componentCtor, $$slots, shadow_root_init) {
        super();
        this.$$ctor = $$componentCtor;
        this.$$s = $$slots;
        if (shadow_root_init) {
          this.$$shadowRoot = this.attachShadow(shadow_root_init);
        }
      }
      /**
       * @param {string} type
       * @param {EventListenerOrEventListenerObject} listener
       * @param {boolean | AddEventListenerOptions} [options]
       */
      addEventListener(type, listener, options) {
        this.$$l[type] = this.$$l[type] || [];
        this.$$l[type].push(listener);
        if (this.$$c) {
          const unsub = this.$$c.$on(type, listener);
          this.$$l_u.set(listener, unsub);
        }
        super.addEventListener(type, listener, options);
      }
      /**
       * @param {string} type
       * @param {EventListenerOrEventListenerObject} listener
       * @param {boolean | AddEventListenerOptions} [options]
       */
      removeEventListener(type, listener, options) {
        super.removeEventListener(type, listener, options);
        if (this.$$c) {
          const unsub = this.$$l_u.get(listener);
          if (unsub) {
            unsub();
            this.$$l_u.delete(listener);
          }
        }
      }
      async connectedCallback() {
        this.$$cn = true;
        if (!this.$$c) {
          let create_slot = function(name) {
            return (anchor) => {
              const slot = create_element("slot");
              if (name !== "default") slot.name = name;
              append(anchor, slot);
            };
          };
          await Promise.resolve();
          if (!this.$$cn || this.$$c) {
            return;
          }
          const $$slots = {};
          const existing_slots = get_custom_elements_slots(this);
          for (const name of this.$$s) {
            if (name in existing_slots) {
              if (name === "default" && !this.$$d.children) {
                this.$$d.children = create_slot(name);
                $$slots.default = true;
              } else {
                $$slots[name] = create_slot(name);
              }
            }
          }
          for (const attribute of this.attributes) {
            const name = this.$$g_p(attribute.name);
            if (!(name in this.$$d)) {
              this.$$d[name] = get_custom_element_value(name, attribute.value, this.$$p_d, "toProp");
            }
          }
          for (const key2 in this.$$p_d) {
            if (!(key2 in this.$$d) && this[key2] !== void 0) {
              this.$$d[key2] = this[key2];
              delete this[key2];
            }
          }
          this.$$c = createClassComponent({
            component: this.$$ctor,
            target: this.$$shadowRoot || this,
            props: {
              ...this.$$d,
              $$slots,
              $$host: this
            }
          });
          this.$$me = effect_root(() => {
            render_effect(() => {
              this.$$r = true;
              for (const key2 of object_keys(this.$$c)) {
                if (!this.$$p_d[key2]?.reflect) continue;
                this.$$d[key2] = this.$$c[key2];
                const attribute_value = get_custom_element_value(
                  key2,
                  this.$$d[key2],
                  this.$$p_d,
                  "toAttribute"
                );
                if (attribute_value == null) {
                  this.removeAttribute(this.$$p_d[key2].attribute || key2);
                } else {
                  this.setAttribute(this.$$p_d[key2].attribute || key2, attribute_value);
                }
              }
              this.$$r = false;
            });
          });
          for (const type in this.$$l) {
            for (const listener of this.$$l[type]) {
              const unsub = this.$$c.$on(type, listener);
              this.$$l_u.set(listener, unsub);
            }
          }
          this.$$l = {};
        }
      }
      // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
      // and setting attributes through setAttribute etc, this is helpful
      /**
       * @param {string} attr
       * @param {string} _oldValue
       * @param {string} newValue
       */
      attributeChangedCallback(attr, _oldValue, newValue) {
        if (this.$$r) return;
        attr = this.$$g_p(attr);
        this.$$d[attr] = get_custom_element_value(attr, newValue, this.$$p_d, "toProp");
        this.$$c?.$set({ [attr]: this.$$d[attr] });
      }
      disconnectedCallback() {
        this.$$cn = false;
        Promise.resolve().then(() => {
          if (!this.$$cn && this.$$c) {
            this.$$c.$destroy();
            this.$$me();
            this.$$c = void 0;
          }
        });
      }
      /**
       * @param {string} attribute_name
       */
      $$g_p(attribute_name) {
        return object_keys(this.$$p_d).find(
          (key2) => this.$$p_d[key2].attribute === attribute_name || !this.$$p_d[key2].attribute && key2.toLowerCase() === attribute_name
        ) || attribute_name;
      }
    };
  }
  function get_custom_element_value(prop2, value, props_definition, transform) {
    const type = props_definition[prop2]?.type;
    value = type === "Boolean" && typeof value !== "boolean" ? value != null : value;
    if (!transform || !props_definition[prop2]) {
      return value;
    } else if (transform === "toAttribute") {
      switch (type) {
        case "Object":
        case "Array":
          return value == null ? null : JSON.stringify(value);
        case "Boolean":
          return value ? "" : null;
        case "Number":
          return value == null ? null : value;
        default:
          return value;
      }
    } else {
      switch (type) {
        case "Object":
        case "Array":
          return value && JSON.parse(value);
        case "Boolean":
          return value;
        // conversion already handled above
        case "Number":
          return value != null ? +value : value;
        default:
          return value;
      }
    }
  }
  function get_custom_elements_slots(element) {
    const result = {};
    element.childNodes.forEach((node) => {
      result[
        /** @type {Element} node */
        node.slot || "default"
      ] = true;
    });
    return result;
  }
  function create_custom_element(Component, props_definition, slots, exports$1, shadow_root_init, extend) {
    let Class = class extends SvelteElement {
      constructor() {
        super(Component, slots, shadow_root_init);
        this.$$p_d = props_definition;
      }
      static get observedAttributes() {
        return object_keys(props_definition).map(
          (key2) => (props_definition[key2].attribute || key2).toLowerCase()
        );
      }
    };
    object_keys(props_definition).forEach((prop2) => {
      define_property(Class.prototype, prop2, {
        get() {
          return this.$$c && prop2 in this.$$c ? this.$$c[prop2] : this.$$d[prop2];
        },
        set(value) {
          value = get_custom_element_value(prop2, value, props_definition);
          this.$$d[prop2] = value;
          var component2 = this.$$c;
          if (component2) {
            var setter = get_descriptor(component2, prop2)?.get;
            if (setter) {
              component2[prop2] = value;
            } else {
              component2.$set({ [prop2]: value });
            }
          }
        }
      });
    });
    exports$1.forEach((property) => {
      define_property(Class.prototype, property, {
        get() {
          return this.$$c?.[property];
        }
      });
    });
    Component.element = /** @type {any} */
    Class;
    return Class;
  }
  function onMount(fn) {
    if (component_context === null) {
      lifecycle_outside_component();
    }
    {
      user_effect(() => {
        const cleanup = untrack(fn);
        if (typeof cleanup === "function") return (
          /** @type {() => void} */
          cleanup
        );
      });
    }
  }
  function subscribe_to_store(store2, run, invalidate) {
    if (store2 == null) {
      run(void 0);
      return noop;
    }
    const unsub = untrack(
      () => store2.subscribe(
        run,
        // @ts-expect-error
        invalidate
      )
    );
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
  }
  const subscriber_queue = [];
  function writable(value, start = noop) {
    let stop = null;
    const subscribers = /* @__PURE__ */ new Set();
    function set2(new_value) {
      if (safe_not_equal(value, new_value)) {
        value = new_value;
        if (stop) {
          const run_queue = !subscriber_queue.length;
          for (const subscriber of subscribers) {
            subscriber[1]();
            subscriber_queue.push(subscriber, value);
          }
          if (run_queue) {
            for (let i = 0; i < subscriber_queue.length; i += 2) {
              subscriber_queue[i][0](subscriber_queue[i + 1]);
            }
            subscriber_queue.length = 0;
          }
        }
      }
    }
    function update(fn) {
      set2(fn(
        /** @type {T} */
        value
      ));
    }
    function subscribe(run, invalidate = noop) {
      const subscriber = [run, invalidate];
      subscribers.add(subscriber);
      if (subscribers.size === 1) {
        stop = start(set2, update) || noop;
      }
      run(
        /** @type {T} */
        value
      );
      return () => {
        subscribers.delete(subscriber);
        if (subscribers.size === 0 && stop) {
          stop();
          stop = null;
        }
      };
    }
    return { set: set2, update, subscribe };
  }
  function get$1(store2) {
    let value;
    subscribe_to_store(store2, (_) => value = _)();
    return value;
  }
  let IS_UNMOUNTED = /* @__PURE__ */ Symbol();
  function store_get(store2, store_name, stores) {
    const entry = stores[store_name] ??= {
      store: null,
      source: /* @__PURE__ */ mutable_source(void 0),
      unsubscribe: noop
    };
    if (entry.store !== store2 && !(IS_UNMOUNTED in stores)) {
      entry.unsubscribe();
      entry.store = store2 ?? null;
      if (store2 == null) {
        entry.source.v = void 0;
        entry.unsubscribe = noop;
      } else {
        var is_synchronous_callback = true;
        entry.unsubscribe = subscribe_to_store(store2, (v) => {
          if (is_synchronous_callback) {
            entry.source.v = v;
          } else {
            set(entry.source, v);
          }
        });
        is_synchronous_callback = false;
      }
    }
    if (store2 && IS_UNMOUNTED in stores) {
      return get$1(store2);
    }
    return get(entry.source);
  }
  function setup_stores() {
    const stores = {};
    function cleanup() {
      teardown(() => {
        for (var store_name in stores) {
          const ref = stores[store_name];
          ref.unsubscribe();
        }
        define_property(stores, IS_UNMOUNTED, {
          enumerable: false,
          value: true
        });
      });
    }
    return [stores, cleanup];
  }
  const batches = /* @__PURE__ */ new Set();
  let current_batch = null;
  let batch_values = null;
  let last_scheduled_effect = null;
  let is_flushing_sync = false;
  let is_processing = false;
  let collected_effects = null;
  let legacy_updates = null;
  var flush_count = 0;
  let uid = 1;
  class Batch {
    // for debugging. TODO remove once async is stable
    id = uid++;
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    current = /* @__PURE__ */ new Map();
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    previous = /* @__PURE__ */ new Map();
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    #commit_callbacks = /* @__PURE__ */ new Set();
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    #discard_callbacks = /* @__PURE__ */ new Set();
    /**
     * The number of async effects that are currently in flight
     */
    #pending = 0;
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    #blocking_pending = 0;
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    #deferred = null;
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    #roots = [];
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    #dirty_effects = /* @__PURE__ */ new Set();
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    #maybe_dirty_effects = /* @__PURE__ */ new Set();
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    #skipped_branches = /* @__PURE__ */ new Map();
    is_fork = false;
    #decrement_queued = false;
    #is_deferred() {
      return this.is_fork || this.#blocking_pending > 0;
    }
    /**
     * Add an effect to the #skipped_branches map and reset its children
     * @param {Effect} effect
     */
    skip_effect(effect2) {
      if (!this.#skipped_branches.has(effect2)) {
        this.#skipped_branches.set(effect2, { d: [], m: [] });
      }
    }
    /**
     * Remove an effect from the #skipped_branches map and reschedule
     * any tracked dirty/maybe_dirty child effects
     * @param {Effect} effect
     */
    unskip_effect(effect2) {
      var tracked = this.#skipped_branches.get(effect2);
      if (tracked) {
        this.#skipped_branches.delete(effect2);
        for (var e of tracked.d) {
          set_signal_status(e, DIRTY);
          this.schedule(e);
        }
        for (e of tracked.m) {
          set_signal_status(e, MAYBE_DIRTY);
          this.schedule(e);
        }
      }
    }
    #process() {
      if (flush_count++ > 1e3) {
        infinite_loop_guard();
      }
      const roots = this.#roots;
      this.#roots = [];
      this.apply();
      var effects = collected_effects = [];
      var render_effects = [];
      var updates = legacy_updates = [];
      for (const root2 of roots) {
        this.#traverse(root2, effects, render_effects);
      }
      current_batch = null;
      if (updates.length > 0) {
        var batch = Batch.ensure();
        for (const e of updates) {
          batch.schedule(e);
        }
      }
      collected_effects = null;
      legacy_updates = null;
      if (this.#is_deferred()) {
        this.#defer_effects(render_effects);
        this.#defer_effects(effects);
        for (const [e, t] of this.#skipped_branches) {
          reset_branch(e, t);
        }
      } else {
        this.#dirty_effects.clear();
        this.#maybe_dirty_effects.clear();
        for (const fn of this.#commit_callbacks) fn(this);
        this.#commit_callbacks.clear();
        flush_queued_effects(render_effects);
        flush_queued_effects(effects);
        if (this.#pending === 0) {
          this.#commit();
        }
        this.#deferred?.resolve();
      }
      var next_batch = (
        /** @type {Batch | null} */
        /** @type {unknown} */
        current_batch
      );
      if (this.#roots.length > 0) {
        const batch2 = next_batch ??= this;
        batch2.#roots.push(...this.#roots.filter((r2) => !batch2.#roots.includes(r2)));
      }
      if (next_batch !== null) {
        batches.add(next_batch);
        next_batch.#process();
      }
    }
    /**
     * Traverse the effect tree, executing effects or stashing
     * them for later execution as appropriate
     * @param {Effect} root
     * @param {Effect[]} effects
     * @param {Effect[]} render_effects
     */
    #traverse(root2, effects, render_effects) {
      root2.f ^= CLEAN;
      var effect2 = root2.first;
      while (effect2 !== null) {
        var flags2 = effect2.f;
        var is_branch = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) !== 0;
        var is_skippable_branch = is_branch && (flags2 & CLEAN) !== 0;
        var skip = is_skippable_branch || (flags2 & INERT) !== 0 || this.#skipped_branches.has(effect2);
        if (!skip && effect2.fn !== null) {
          if (is_branch) {
            effect2.f ^= CLEAN;
          } else if ((flags2 & EFFECT) !== 0) {
            effects.push(effect2);
          } else if (is_dirty(effect2)) {
            if ((flags2 & BLOCK_EFFECT) !== 0) this.#maybe_dirty_effects.add(effect2);
            update_effect(effect2);
          }
          var child2 = effect2.first;
          if (child2 !== null) {
            effect2 = child2;
            continue;
          }
        }
        while (effect2 !== null) {
          var next2 = effect2.next;
          if (next2 !== null) {
            effect2 = next2;
            break;
          }
          effect2 = effect2.parent;
        }
      }
    }
    /**
     * @param {Effect[]} effects
     */
    #defer_effects(effects) {
      for (var i = 0; i < effects.length; i += 1) {
        defer_effect(effects[i], this.#dirty_effects, this.#maybe_dirty_effects);
      }
    }
    /**
     * Associate a change to a given source with the current
     * batch, noting its previous and current values
     * @param {Source} source
     * @param {any} value
     */
    capture(source2, value) {
      if (value !== UNINITIALIZED && !this.previous.has(source2)) {
        this.previous.set(source2, value);
      }
      if ((source2.f & ERROR_VALUE) === 0) {
        this.current.set(source2, source2.v);
        batch_values?.set(source2, source2.v);
      }
    }
    activate() {
      current_batch = this;
    }
    deactivate() {
      current_batch = null;
      batch_values = null;
    }
    flush() {
      try {
        is_processing = true;
        current_batch = this;
        if (!this.#is_deferred()) {
          for (const e of this.#dirty_effects) {
            this.#maybe_dirty_effects.delete(e);
            set_signal_status(e, DIRTY);
            this.schedule(e);
          }
          for (const e of this.#maybe_dirty_effects) {
            set_signal_status(e, MAYBE_DIRTY);
            this.schedule(e);
          }
        }
        this.#process();
      } finally {
        flush_count = 0;
        last_scheduled_effect = null;
        collected_effects = null;
        legacy_updates = null;
        is_processing = false;
        current_batch = null;
        batch_values = null;
        old_values.clear();
      }
    }
    discard() {
      for (const fn of this.#discard_callbacks) fn(this);
      this.#discard_callbacks.clear();
    }
    #commit() {
      if (batches.size > 1) {
        this.previous.clear();
        var previous_batch = current_batch;
        var previous_batch_values = batch_values;
        var is_earlier = true;
        for (const batch of batches) {
          if (batch === this) {
            is_earlier = false;
            continue;
          }
          const sources = [];
          for (const [source2, value] of this.current) {
            if (batch.current.has(source2)) {
              if (is_earlier && value !== batch.current.get(source2)) {
                batch.current.set(source2, value);
              } else {
                continue;
              }
            }
            sources.push(source2);
          }
          if (sources.length === 0) {
            continue;
          }
          const others = [...batch.current.keys()].filter((s) => !this.current.has(s));
          if (others.length > 0) {
            batch.activate();
            const marked = /* @__PURE__ */ new Set();
            const checked = /* @__PURE__ */ new Map();
            for (const source2 of sources) {
              mark_effects(source2, others, marked, checked);
            }
            if (batch.#roots.length > 0) {
              batch.apply();
              for (const root2 of batch.#roots) {
                batch.#traverse(root2, [], []);
              }
            }
            batch.deactivate();
          }
        }
        current_batch = previous_batch;
        batch_values = previous_batch_values;
      }
      this.#skipped_branches.clear();
      batches.delete(this);
    }
    /**
     *
     * @param {boolean} blocking
     */
    increment(blocking) {
      this.#pending += 1;
      if (blocking) this.#blocking_pending += 1;
    }
    /**
     * @param {boolean} blocking
     * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
     */
    decrement(blocking, skip) {
      this.#pending -= 1;
      if (blocking) this.#blocking_pending -= 1;
      if (this.#decrement_queued || skip) return;
      this.#decrement_queued = true;
      queue_micro_task(() => {
        this.#decrement_queued = false;
        this.flush();
      });
    }
    /** @param {(batch: Batch) => void} fn */
    oncommit(fn) {
      this.#commit_callbacks.add(fn);
    }
    /** @param {(batch: Batch) => void} fn */
    ondiscard(fn) {
      this.#discard_callbacks.add(fn);
    }
    settled() {
      return (this.#deferred ??= deferred()).promise;
    }
    static ensure() {
      if (current_batch === null) {
        const batch = current_batch = new Batch();
        if (!is_processing) {
          batches.add(current_batch);
          if (!is_flushing_sync) {
            queue_micro_task(() => {
              if (current_batch !== batch) {
                return;
              }
              batch.flush();
            });
          }
        }
      }
      return current_batch;
    }
    apply() {
      return;
    }
    /**
     *
     * @param {Effect} effect
     */
    schedule(effect2) {
      last_scheduled_effect = effect2;
      if (effect2.b?.is_pending && (effect2.f & (EFFECT | RENDER_EFFECT | MANAGED_EFFECT)) !== 0 && (effect2.f & REACTION_RAN) === 0) {
        effect2.b.defer_effect(effect2);
        return;
      }
      var e = effect2;
      while (e.parent !== null) {
        e = e.parent;
        var flags2 = e.f;
        if (collected_effects !== null && e === active_effect) {
          if ((active_reaction === null || (active_reaction.f & DERIVED) === 0) && true) {
            return;
          }
        }
        if ((flags2 & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
          if ((flags2 & CLEAN) === 0) {
            return;
          }
          e.f ^= CLEAN;
        }
      }
      this.#roots.push(e);
    }
  }
  function flushSync(fn) {
    var was_flushing_sync = is_flushing_sync;
    is_flushing_sync = true;
    try {
      var result;
      if (fn) ;
      while (true) {
        flush_tasks();
        if (current_batch === null) {
          return (
            /** @type {T} */
            result
          );
        }
        current_batch.flush();
      }
    } finally {
      is_flushing_sync = was_flushing_sync;
    }
  }
  function infinite_loop_guard() {
    try {
      effect_update_depth_exceeded();
    } catch (error) {
      invoke_error_boundary(error, last_scheduled_effect);
    }
  }
  let eager_block_effects = null;
  function flush_queued_effects(effects) {
    var length = effects.length;
    if (length === 0) return;
    var i = 0;
    while (i < length) {
      var effect2 = effects[i++];
      if ((effect2.f & (DESTROYED | INERT)) === 0 && is_dirty(effect2)) {
        eager_block_effects = /* @__PURE__ */ new Set();
        update_effect(effect2);
        if (effect2.deps === null && effect2.first === null && effect2.nodes === null && effect2.teardown === null && effect2.ac === null) {
          unlink_effect(effect2);
        }
        if (eager_block_effects?.size > 0) {
          old_values.clear();
          for (const e of eager_block_effects) {
            if ((e.f & (DESTROYED | INERT)) !== 0) continue;
            const ordered_effects = [e];
            let ancestor = e.parent;
            while (ancestor !== null) {
              if (eager_block_effects.has(ancestor)) {
                eager_block_effects.delete(ancestor);
                ordered_effects.push(ancestor);
              }
              ancestor = ancestor.parent;
            }
            for (let j = ordered_effects.length - 1; j >= 0; j--) {
              const e2 = ordered_effects[j];
              if ((e2.f & (DESTROYED | INERT)) !== 0) continue;
              update_effect(e2);
            }
          }
          eager_block_effects.clear();
        }
      }
    }
    eager_block_effects = null;
  }
  function mark_effects(value, sources, marked, checked) {
    if (marked.has(value)) return;
    marked.add(value);
    if (value.reactions !== null) {
      for (const reaction of value.reactions) {
        const flags2 = reaction.f;
        if ((flags2 & DERIVED) !== 0) {
          mark_effects(
            /** @type {Derived} */
            reaction,
            sources,
            marked,
            checked
          );
        } else if ((flags2 & (ASYNC | BLOCK_EFFECT)) !== 0 && (flags2 & DIRTY) === 0 && depends_on(reaction, sources, checked)) {
          set_signal_status(reaction, DIRTY);
          schedule_effect(
            /** @type {Effect} */
            reaction
          );
        }
      }
    }
  }
  function depends_on(reaction, sources, checked) {
    const depends = checked.get(reaction);
    if (depends !== void 0) return depends;
    if (reaction.deps !== null) {
      for (const dep of reaction.deps) {
        if (includes.call(sources, dep)) {
          return true;
        }
        if ((dep.f & DERIVED) !== 0 && depends_on(
          /** @type {Derived} */
          dep,
          sources,
          checked
        )) {
          checked.set(
            /** @type {Derived} */
            dep,
            true
          );
          return true;
        }
      }
    }
    checked.set(reaction, false);
    return false;
  }
  function schedule_effect(effect2) {
    current_batch.schedule(effect2);
  }
  function reset_branch(effect2, tracked) {
    if ((effect2.f & BRANCH_EFFECT) !== 0 && (effect2.f & CLEAN) !== 0) {
      return;
    }
    if ((effect2.f & DIRTY) !== 0) {
      tracked.d.push(effect2);
    } else if ((effect2.f & MAYBE_DIRTY) !== 0) {
      tracked.m.push(effect2);
    }
    set_signal_status(effect2, CLEAN);
    var e = effect2.first;
    while (e !== null) {
      reset_branch(e, tracked);
      e = e.next;
    }
  }
  let eager_effects = /* @__PURE__ */ new Set();
  const old_values = /* @__PURE__ */ new Map();
  let eager_effects_deferred = false;
  function source(v, stack) {
    var signal = {
      f: 0,
      // TODO ideally we could skip this altogether, but it causes type errors
      v,
      reactions: null,
      equals,
      rv: 0,
      wv: 0
    };
    return signal;
  }
  // @__NO_SIDE_EFFECTS__
  function state(v, stack) {
    const s = source(v);
    push_reaction_value(s);
    return s;
  }
  // @__NO_SIDE_EFFECTS__
  function mutable_source(initial_value, immutable = false, trackable = true) {
    const s = source(initial_value);
    if (!immutable) {
      s.equals = safe_equals;
    }
    return s;
  }
  function set(source2, value, should_proxy = false) {
    if (active_reaction !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
    // to ensure we error if state is set inside an inspect effect
    (!untracking || (active_reaction.f & EAGER_EFFECT) !== 0) && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT | ASYNC | EAGER_EFFECT)) !== 0 && (current_sources === null || !includes.call(current_sources, source2))) {
      state_unsafe_mutation();
    }
    let new_value = should_proxy ? proxy(value) : value;
    return internal_set(source2, new_value, legacy_updates);
  }
  function internal_set(source2, value, updated_during_traversal = null) {
    if (!source2.equals(value)) {
      var old_value = source2.v;
      if (is_destroying_effect) {
        old_values.set(source2, value);
      } else {
        old_values.set(source2, old_value);
      }
      source2.v = value;
      var batch = Batch.ensure();
      batch.capture(source2, old_value);
      if ((source2.f & DERIVED) !== 0) {
        const derived2 = (
          /** @type {Derived} */
          source2
        );
        if ((source2.f & DIRTY) !== 0) {
          execute_derived(derived2);
        }
        update_derived_status(derived2);
      }
      source2.wv = increment_write_version();
      mark_reactions(source2, DIRTY, updated_during_traversal);
      if (active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
        if (untracked_writes === null) {
          set_untracked_writes([source2]);
        } else {
          untracked_writes.push(source2);
        }
      }
      if (!batch.is_fork && eager_effects.size > 0 && !eager_effects_deferred) {
        flush_eager_effects();
      }
    }
    return value;
  }
  function flush_eager_effects() {
    eager_effects_deferred = false;
    for (const effect2 of eager_effects) {
      if ((effect2.f & CLEAN) !== 0) {
        set_signal_status(effect2, MAYBE_DIRTY);
      }
      if (is_dirty(effect2)) {
        update_effect(effect2);
      }
    }
    eager_effects.clear();
  }
  function increment(source2) {
    set(source2, source2.v + 1);
  }
  function mark_reactions(signal, status, updated_during_traversal) {
    var reactions = signal.reactions;
    if (reactions === null) return;
    var length = reactions.length;
    for (var i = 0; i < length; i++) {
      var reaction = reactions[i];
      var flags2 = reaction.f;
      var not_dirty = (flags2 & DIRTY) === 0;
      if (not_dirty) {
        set_signal_status(reaction, status);
      }
      if ((flags2 & DERIVED) !== 0) {
        var derived2 = (
          /** @type {Derived} */
          reaction
        );
        batch_values?.delete(derived2);
        if ((flags2 & WAS_MARKED) === 0) {
          if (flags2 & CONNECTED) {
            reaction.f |= WAS_MARKED;
          }
          mark_reactions(derived2, MAYBE_DIRTY, updated_during_traversal);
        }
      } else if (not_dirty) {
        var effect2 = (
          /** @type {Effect} */
          reaction
        );
        if ((flags2 & BLOCK_EFFECT) !== 0 && eager_block_effects !== null) {
          eager_block_effects.add(effect2);
        }
        if (updated_during_traversal !== null) {
          updated_during_traversal.push(effect2);
        } else {
          schedule_effect(effect2);
        }
      }
    }
  }
  let is_updating_effect = false;
  let is_destroying_effect = false;
  function set_is_destroying_effect(value) {
    is_destroying_effect = value;
  }
  let active_reaction = null;
  let untracking = false;
  function set_active_reaction(reaction) {
    active_reaction = reaction;
  }
  let active_effect = null;
  function set_active_effect(effect2) {
    active_effect = effect2;
  }
  let current_sources = null;
  function push_reaction_value(value) {
    if (active_reaction !== null && true) {
      if (current_sources === null) {
        current_sources = [value];
      } else {
        current_sources.push(value);
      }
    }
  }
  let new_deps = null;
  let skipped_deps = 0;
  let untracked_writes = null;
  function set_untracked_writes(value) {
    untracked_writes = value;
  }
  let write_version = 1;
  let read_version = 0;
  let update_version = read_version;
  function set_update_version(value) {
    update_version = value;
  }
  function increment_write_version() {
    return ++write_version;
  }
  function is_dirty(reaction) {
    var flags2 = reaction.f;
    if ((flags2 & DIRTY) !== 0) {
      return true;
    }
    if (flags2 & DERIVED) {
      reaction.f &= ~WAS_MARKED;
    }
    if ((flags2 & MAYBE_DIRTY) !== 0) {
      var dependencies = (
        /** @type {Value[]} */
        reaction.deps
      );
      var length = dependencies.length;
      for (var i = 0; i < length; i++) {
        var dependency = dependencies[i];
        if (is_dirty(
          /** @type {Derived} */
          dependency
        )) {
          update_derived(
            /** @type {Derived} */
            dependency
          );
        }
        if (dependency.wv > reaction.wv) {
          return true;
        }
      }
      if ((flags2 & CONNECTED) !== 0 && // During time traveling we don't want to reset the status so that
      // traversal of the graph in the other batches still happens
      batch_values === null) {
        set_signal_status(reaction, CLEAN);
      }
    }
    return false;
  }
  function schedule_possible_effect_self_invalidation(signal, effect2, root2 = true) {
    var reactions = signal.reactions;
    if (reactions === null) return;
    if (current_sources !== null && includes.call(current_sources, signal)) {
      return;
    }
    for (var i = 0; i < reactions.length; i++) {
      var reaction = reactions[i];
      if ((reaction.f & DERIVED) !== 0) {
        schedule_possible_effect_self_invalidation(
          /** @type {Derived} */
          reaction,
          effect2,
          false
        );
      } else if (effect2 === reaction) {
        if (root2) {
          set_signal_status(reaction, DIRTY);
        } else if ((reaction.f & CLEAN) !== 0) {
          set_signal_status(reaction, MAYBE_DIRTY);
        }
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
  function update_reaction(reaction) {
    var previous_deps = new_deps;
    var previous_skipped_deps = skipped_deps;
    var previous_untracked_writes = untracked_writes;
    var previous_reaction = active_reaction;
    var previous_sources = current_sources;
    var previous_component_context = component_context;
    var previous_untracking = untracking;
    var previous_update_version = update_version;
    var flags2 = reaction.f;
    new_deps = /** @type {null | Value[]} */
    null;
    skipped_deps = 0;
    untracked_writes = null;
    active_reaction = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
    current_sources = null;
    set_component_context(reaction.ctx);
    untracking = false;
    update_version = ++read_version;
    if (reaction.ac !== null) {
      without_reactive_context(() => {
        reaction.ac.abort(STALE_REACTION);
      });
      reaction.ac = null;
    }
    try {
      reaction.f |= REACTION_IS_UPDATING;
      var fn = (
        /** @type {Function} */
        reaction.fn
      );
      var result = fn();
      reaction.f |= REACTION_RAN;
      var deps = reaction.deps;
      var is_fork = current_batch?.is_fork;
      if (new_deps !== null) {
        var i;
        if (!is_fork) {
          remove_reactions(reaction, skipped_deps);
        }
        if (deps !== null && skipped_deps > 0) {
          deps.length = skipped_deps + new_deps.length;
          for (i = 0; i < new_deps.length; i++) {
            deps[skipped_deps + i] = new_deps[i];
          }
        } else {
          reaction.deps = deps = new_deps;
        }
        if (effect_tracking() && (reaction.f & CONNECTED) !== 0) {
          for (i = skipped_deps; i < deps.length; i++) {
            (deps[i].reactions ??= []).push(reaction);
          }
        }
      } else if (!is_fork && deps !== null && skipped_deps < deps.length) {
        remove_reactions(reaction, skipped_deps);
        deps.length = skipped_deps;
      }
      if (is_runes() && untracked_writes !== null && !untracking && deps !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
        for (i = 0; i < /** @type {Source[]} */
        untracked_writes.length; i++) {
          schedule_possible_effect_self_invalidation(
            untracked_writes[i],
            /** @type {Effect} */
            reaction
          );
        }
      }
      if (previous_reaction !== null && previous_reaction !== reaction) {
        read_version++;
        if (previous_reaction.deps !== null) {
          for (let i2 = 0; i2 < previous_skipped_deps; i2 += 1) {
            previous_reaction.deps[i2].rv = read_version;
          }
        }
        if (previous_deps !== null) {
          for (const dep of previous_deps) {
            dep.rv = read_version;
          }
        }
        if (untracked_writes !== null) {
          if (previous_untracked_writes === null) {
            previous_untracked_writes = untracked_writes;
          } else {
            previous_untracked_writes.push(.../** @type {Source[]} */
            untracked_writes);
          }
        }
      }
      if ((reaction.f & ERROR_VALUE) !== 0) {
        reaction.f ^= ERROR_VALUE;
      }
      return result;
    } catch (error) {
      return handle_error(error);
    } finally {
      reaction.f ^= REACTION_IS_UPDATING;
      new_deps = previous_deps;
      skipped_deps = previous_skipped_deps;
      untracked_writes = previous_untracked_writes;
      active_reaction = previous_reaction;
      current_sources = previous_sources;
      set_component_context(previous_component_context);
      untracking = previous_untracking;
      update_version = previous_update_version;
    }
  }
  function remove_reaction(signal, dependency) {
    let reactions = dependency.reactions;
    if (reactions !== null) {
      var index = index_of.call(reactions, signal);
      if (index !== -1) {
        var new_length = reactions.length - 1;
        if (new_length === 0) {
          reactions = dependency.reactions = null;
        } else {
          reactions[index] = reactions[new_length];
          reactions.pop();
        }
      }
    }
    if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
    // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
    // allows us to skip the expensive work of disconnecting and immediately reconnecting it
    (new_deps === null || !includes.call(new_deps, dependency))) {
      var derived2 = (
        /** @type {Derived} */
        dependency
      );
      if ((derived2.f & CONNECTED) !== 0) {
        derived2.f ^= CONNECTED;
        derived2.f &= ~WAS_MARKED;
      }
      update_derived_status(derived2);
      freeze_derived_effects(derived2);
      remove_reactions(derived2, 0);
    }
  }
  function remove_reactions(signal, start_index) {
    var dependencies = signal.deps;
    if (dependencies === null) return;
    for (var i = start_index; i < dependencies.length; i++) {
      remove_reaction(signal, dependencies[i]);
    }
  }
  function update_effect(effect2) {
    var flags2 = effect2.f;
    if ((flags2 & DESTROYED) !== 0) {
      return;
    }
    set_signal_status(effect2, CLEAN);
    var previous_effect = active_effect;
    var was_updating_effect = is_updating_effect;
    active_effect = effect2;
    is_updating_effect = true;
    try {
      if ((flags2 & (BLOCK_EFFECT | MANAGED_EFFECT)) !== 0) {
        destroy_block_effect_children(effect2);
      } else {
        destroy_effect_children(effect2);
      }
      execute_effect_teardown(effect2);
      var teardown2 = update_reaction(effect2);
      effect2.teardown = typeof teardown2 === "function" ? teardown2 : null;
      effect2.wv = write_version;
      var dep;
      if (DEV && tracing_mode_flag && (effect2.f & DIRTY) !== 0 && effect2.deps !== null) ;
    } finally {
      is_updating_effect = was_updating_effect;
      active_effect = previous_effect;
    }
  }
  async function tick() {
    await Promise.resolve();
    flushSync();
  }
  function get(signal) {
    var flags2 = signal.f;
    var is_derived = (flags2 & DERIVED) !== 0;
    if (active_reaction !== null && !untracking) {
      var destroyed = active_effect !== null && (active_effect.f & DESTROYED) !== 0;
      if (!destroyed && (current_sources === null || !includes.call(current_sources, signal))) {
        var deps = active_reaction.deps;
        if ((active_reaction.f & REACTION_IS_UPDATING) !== 0) {
          if (signal.rv < read_version) {
            signal.rv = read_version;
            if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
              skipped_deps++;
            } else if (new_deps === null) {
              new_deps = [signal];
            } else {
              new_deps.push(signal);
            }
          }
        } else {
          (active_reaction.deps ??= []).push(signal);
          var reactions = signal.reactions;
          if (reactions === null) {
            signal.reactions = [active_reaction];
          } else if (!includes.call(reactions, active_reaction)) {
            reactions.push(active_reaction);
          }
        }
      }
    }
    if (is_destroying_effect && old_values.has(signal)) {
      return old_values.get(signal);
    }
    if (is_derived) {
      var derived2 = (
        /** @type {Derived} */
        signal
      );
      if (is_destroying_effect) {
        var value = derived2.v;
        if ((derived2.f & CLEAN) === 0 && derived2.reactions !== null || depends_on_old_values(derived2)) {
          value = execute_derived(derived2);
        }
        old_values.set(derived2, value);
        return value;
      }
      var should_connect = (derived2.f & CONNECTED) === 0 && !untracking && active_reaction !== null && (is_updating_effect || (active_reaction.f & CONNECTED) !== 0);
      var is_new = (derived2.f & REACTION_RAN) === 0;
      if (is_dirty(derived2)) {
        if (should_connect) {
          derived2.f |= CONNECTED;
        }
        update_derived(derived2);
      }
      if (should_connect && !is_new) {
        unfreeze_derived_effects(derived2);
        reconnect(derived2);
      }
    }
    if (batch_values?.has(signal)) {
      return batch_values.get(signal);
    }
    if ((signal.f & ERROR_VALUE) !== 0) {
      throw signal.v;
    }
    return signal.v;
  }
  function reconnect(derived2) {
    derived2.f |= CONNECTED;
    if (derived2.deps === null) return;
    for (const dep of derived2.deps) {
      (dep.reactions ??= []).push(derived2);
      if ((dep.f & DERIVED) !== 0 && (dep.f & CONNECTED) === 0) {
        unfreeze_derived_effects(
          /** @type {Derived} */
          dep
        );
        reconnect(
          /** @type {Derived} */
          dep
        );
      }
    }
  }
  function depends_on_old_values(derived2) {
    if (derived2.v === UNINITIALIZED) return true;
    if (derived2.deps === null) return false;
    for (const dep of derived2.deps) {
      if (old_values.has(dep)) {
        return true;
      }
      if ((dep.f & DERIVED) !== 0 && depends_on_old_values(
        /** @type {Derived} */
        dep
      )) {
        return true;
      }
    }
    return false;
  }
  function untrack(fn) {
    var previous_untracking = untracking;
    try {
      untracking = true;
      return fn();
    } finally {
      untracking = previous_untracking;
    }
  }
  function validate_effect(rune) {
    if (active_effect === null) {
      if (active_reaction === null) {
        effect_orphan();
      }
      effect_in_unowned_derived();
    }
    if (is_destroying_effect) {
      effect_in_teardown();
    }
  }
  function push_effect(effect2, parent_effect) {
    var parent_last = parent_effect.last;
    if (parent_last === null) {
      parent_effect.last = parent_effect.first = effect2;
    } else {
      parent_last.next = effect2;
      effect2.prev = parent_last;
      parent_effect.last = effect2;
    }
  }
  function create_effect(type, fn) {
    var parent = active_effect;
    if (parent !== null && (parent.f & INERT) !== 0) {
      type |= INERT;
    }
    var effect2 = {
      ctx: component_context,
      deps: null,
      nodes: null,
      f: type | DIRTY | CONNECTED,
      first: null,
      fn,
      last: null,
      next: null,
      parent,
      b: parent && parent.b,
      prev: null,
      teardown: null,
      wv: 0,
      ac: null
    };
    var e = effect2;
    if ((type & EFFECT) !== 0) {
      if (collected_effects !== null) {
        collected_effects.push(effect2);
      } else {
        Batch.ensure().schedule(effect2);
      }
    } else if (fn !== null) {
      try {
        update_effect(effect2);
      } catch (e2) {
        destroy_effect(effect2);
        throw e2;
      }
      if (e.deps === null && e.teardown === null && e.nodes === null && e.first === e.last && // either `null`, or a singular child
      (e.f & EFFECT_PRESERVED) === 0) {
        e = e.first;
        if ((type & BLOCK_EFFECT) !== 0 && (type & EFFECT_TRANSPARENT) !== 0 && e !== null) {
          e.f |= EFFECT_TRANSPARENT;
        }
      }
    }
    if (e !== null) {
      e.parent = parent;
      if (parent !== null) {
        push_effect(e, parent);
      }
      if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0 && (type & ROOT_EFFECT) === 0) {
        var derived2 = (
          /** @type {Derived} */
          active_reaction
        );
        (derived2.effects ??= []).push(e);
      }
    }
    return effect2;
  }
  function effect_tracking() {
    return active_reaction !== null && !untracking;
  }
  function teardown(fn) {
    const effect2 = create_effect(RENDER_EFFECT, null);
    set_signal_status(effect2, CLEAN);
    effect2.teardown = fn;
    return effect2;
  }
  function user_effect(fn) {
    validate_effect();
    var flags2 = (
      /** @type {Effect} */
      active_effect.f
    );
    var defer = !active_reaction && (flags2 & BRANCH_EFFECT) !== 0 && (flags2 & REACTION_RAN) === 0;
    if (defer) {
      var context = (
        /** @type {ComponentContext} */
        component_context
      );
      (context.e ??= []).push(fn);
    } else {
      return create_user_effect(fn);
    }
  }
  function create_user_effect(fn) {
    return create_effect(EFFECT | USER_EFFECT, fn);
  }
  function effect_root(fn) {
    Batch.ensure();
    const effect2 = create_effect(ROOT_EFFECT | EFFECT_PRESERVED, fn);
    return () => {
      destroy_effect(effect2);
    };
  }
  function component_root(fn) {
    Batch.ensure();
    const effect2 = create_effect(ROOT_EFFECT | EFFECT_PRESERVED, fn);
    return (options = {}) => {
      return new Promise((fulfil) => {
        if (options.outro) {
          pause_effect(effect2, () => {
            destroy_effect(effect2);
            fulfil(void 0);
          });
        } else {
          destroy_effect(effect2);
          fulfil(void 0);
        }
      });
    };
  }
  function effect(fn) {
    return create_effect(EFFECT, fn);
  }
  function async_effect(fn) {
    return create_effect(ASYNC | EFFECT_PRESERVED, fn);
  }
  function render_effect(fn, flags2 = 0) {
    return create_effect(RENDER_EFFECT | flags2, fn);
  }
  function template_effect(fn, sync = [], async = [], blockers = []) {
    flatten(blockers, sync, async, (values) => {
      create_effect(RENDER_EFFECT, () => fn(...values.map(get)));
    });
  }
  function block(fn, flags2 = 0) {
    var effect2 = create_effect(BLOCK_EFFECT | flags2, fn);
    return effect2;
  }
  function managed(fn, flags2 = 0) {
    var effect2 = create_effect(MANAGED_EFFECT | flags2, fn);
    return effect2;
  }
  function branch(fn) {
    return create_effect(BRANCH_EFFECT | EFFECT_PRESERVED, fn);
  }
  function execute_effect_teardown(effect2) {
    var teardown2 = effect2.teardown;
    if (teardown2 !== null) {
      const previously_destroying_effect = is_destroying_effect;
      const previous_reaction = active_reaction;
      set_is_destroying_effect(true);
      set_active_reaction(null);
      try {
        teardown2.call(null);
      } finally {
        set_is_destroying_effect(previously_destroying_effect);
        set_active_reaction(previous_reaction);
      }
    }
  }
  function destroy_effect_children(signal, remove_dom = false) {
    var effect2 = signal.first;
    signal.first = signal.last = null;
    while (effect2 !== null) {
      const controller = effect2.ac;
      if (controller !== null) {
        without_reactive_context(() => {
          controller.abort(STALE_REACTION);
        });
      }
      var next2 = effect2.next;
      if ((effect2.f & ROOT_EFFECT) !== 0) {
        effect2.parent = null;
      } else {
        destroy_effect(effect2, remove_dom);
      }
      effect2 = next2;
    }
  }
  function destroy_block_effect_children(signal) {
    var effect2 = signal.first;
    while (effect2 !== null) {
      var next2 = effect2.next;
      if ((effect2.f & BRANCH_EFFECT) === 0) {
        destroy_effect(effect2);
      }
      effect2 = next2;
    }
  }
  function destroy_effect(effect2, remove_dom = true) {
    var removed = false;
    if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes !== null && effect2.nodes.end !== null) {
      remove_effect_dom(
        effect2.nodes.start,
        /** @type {TemplateNode} */
        effect2.nodes.end
      );
      removed = true;
    }
    set_signal_status(effect2, DESTROYING);
    destroy_effect_children(effect2, remove_dom && !removed);
    remove_reactions(effect2, 0);
    var transitions = effect2.nodes && effect2.nodes.t;
    if (transitions !== null) {
      for (const transition of transitions) {
        transition.stop();
      }
    }
    execute_effect_teardown(effect2);
    effect2.f ^= DESTROYING;
    effect2.f |= DESTROYED;
    var parent = effect2.parent;
    if (parent !== null && parent.first !== null) {
      unlink_effect(effect2);
    }
    effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes = effect2.ac = null;
  }
  function remove_effect_dom(node, end) {
    while (node !== null) {
      var next2 = node === end ? null : /* @__PURE__ */ get_next_sibling(node);
      node.remove();
      node = next2;
    }
  }
  function unlink_effect(effect2) {
    var parent = effect2.parent;
    var prev = effect2.prev;
    var next2 = effect2.next;
    if (prev !== null) prev.next = next2;
    if (next2 !== null) next2.prev = prev;
    if (parent !== null) {
      if (parent.first === effect2) parent.first = next2;
      if (parent.last === effect2) parent.last = prev;
    }
  }
  function pause_effect(effect2, callback, destroy = true) {
    var transitions = [];
    pause_children(effect2, transitions, true);
    var fn = () => {
      if (destroy) destroy_effect(effect2);
      if (callback) callback();
    };
    var remaining = transitions.length;
    if (remaining > 0) {
      var check = () => --remaining || fn();
      for (var transition of transitions) {
        transition.out(check);
      }
    } else {
      fn();
    }
  }
  function pause_children(effect2, transitions, local) {
    if ((effect2.f & INERT) !== 0) return;
    effect2.f ^= INERT;
    var t = effect2.nodes && effect2.nodes.t;
    if (t !== null) {
      for (const transition of t) {
        if (transition.is_global || local) {
          transitions.push(transition);
        }
      }
    }
    var child2 = effect2.first;
    while (child2 !== null) {
      var sibling2 = child2.next;
      var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (child2.f & BRANCH_EFFECT) !== 0 && (effect2.f & BLOCK_EFFECT) !== 0;
      pause_children(child2, transitions, transparent ? local : false);
      child2 = sibling2;
    }
  }
  function resume_effect(effect2) {
    resume_children(effect2, true);
  }
  function resume_children(effect2, local) {
    if ((effect2.f & INERT) === 0) return;
    effect2.f ^= INERT;
    if ((effect2.f & CLEAN) === 0) {
      set_signal_status(effect2, DIRTY);
      Batch.ensure().schedule(effect2);
    }
    var child2 = effect2.first;
    while (child2 !== null) {
      var sibling2 = child2.next;
      var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
      resume_children(child2, transparent ? local : false);
      child2 = sibling2;
    }
    var t = effect2.nodes && effect2.nodes.t;
    if (t !== null) {
      for (const transition of t) {
        if (transition.is_global || local) {
          transition.in();
        }
      }
    }
  }
  function move_effect(effect2, fragment) {
    if (!effect2.nodes) return;
    var node = effect2.nodes.start;
    var end = effect2.nodes.end;
    while (node !== null) {
      var next2 = node === end ? null : /* @__PURE__ */ get_next_sibling(node);
      fragment.append(node);
      node = next2;
    }
  }
  function store(defaultValue) {
    const scope = {
      get: (name) => {
        return get$1(scope.store)[name];
      },
      set: (name, value) => {
        if (typeof name === "string") {
          Object.assign(get$1(scope.store), {
            [name]: value
          });
        } else {
          Object.assign(get$1(scope.store), name);
        }
        scope.store.set(get$1(scope.store));
      },
      store: writable(defaultValue)
    };
    return scope;
  }
  globalThis.$altcha = globalThis.$altcha || {
    algorithms: /* @__PURE__ */ new Map(),
    defaults: store({}),
    i18n: store({}),
    instances: /* @__PURE__ */ new Set(),
    plugins: /* @__PURE__ */ new Set()
  };
  const i18n = {
    ariaLinkLabel: "Visit Altcha.org",
    cancel: "Cancel",
    enterCode: "Enter code",
    enterCodeAria: "Enter code you hear. Press Space to play audio.",
    enterCodeFromImage: "To proceed, please enter the code from the image below.",
    error: "Verification failed. Try again later.",
    expired: "Verification expired. Try again.",
    footer: 'Protected by <a href="https://altcha.org/" target="_blank" aria-label="Visit Altcha.org">ALTCHA</a>',
    getAudioChallenge: "Get an audio challenge",
    label: "I'm not a robot",
    loading: "Loading...",
    reload: "Reload",
    verify: "Verify",
    verificationRequired: "Verification required!",
    verified: "Verified",
    verifying: "Verifying...",
    waitAlert: "Verifying... please wait."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("en", i18n);
  }
  const PUBLIC_VERSION = "5";
  if (typeof window !== "undefined") {
    ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(PUBLIC_VERSION);
  }
  var root$7 = /* @__PURE__ */ from_html(`<label class="altcha-checkbox"><input/> <svg width="12" height="9" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline></svg> <div class="altcha-spinner altcha-checkbox-spinner" aria-hidden="true"></div></label>`);
  function Checkbox($$anchor, $$props) {
    push($$props, true);
    let loading = prop($$props, "loading"), rest = /* @__PURE__ */ rest_props($$props, ["$$slots", "$$events", "$$legacy", "$$host", "loading"]);
    var $$exports = {
      get loading() {
        return loading();
      },
      set loading($$value) {
        loading($$value);
        flushSync();
      }
    };
    var label = root$7();
    var input = child(label);
    attribute_effect(input, () => ({ type: "checkbox", ...rest }), void 0, void 0, void 0, void 0, true);
    next(4);
    reset(label);
    template_effect(() => set_attribute(label, "data-loading", loading()));
    append($$anchor, label);
    return pop($$exports);
  }
  create_custom_element(Checkbox, { loading: {} }, [], [], { mode: "open" });
  var root$6 = /* @__PURE__ */ from_html(`<div class="altcha-checkbox-native"><input/> <div class="altcha-spinner altcha-checkbox-native-spinner"></div></div>`);
  function CheckboxNative($$anchor, $$props) {
    push($$props, true);
    let loading = prop($$props, "loading"), rest = /* @__PURE__ */ rest_props($$props, ["$$slots", "$$events", "$$legacy", "$$host", "loading"]);
    var $$exports = {
      get loading() {
        return loading();
      },
      set loading($$value) {
        loading($$value);
        flushSync();
      }
    };
    var div = root$6();
    var input = child(div);
    attribute_effect(input, () => ({ type: "checkbox", ...rest }), void 0, void 0, void 0, void 0, true);
    next(2);
    reset(div);
    template_effect(() => set_attribute(div, "data-loading", loading()));
    append($$anchor, div);
    return pop($$exports);
  }
  create_custom_element(CheckboxNative, { loading: {} }, [], [], { mode: "open" });
  var root$5 = /* @__PURE__ */ from_html(`<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>`);
  function Logo($$anchor, $$props) {
    push($$props, true);
    let strings = prop($$props, "strings");
    const website = "https://altcha.org";
    var $$exports = {
      get strings() {
        return strings();
      },
      set strings($$value) {
        strings($$value);
        flushSync();
      }
    };
    var div = root$5();
    var a = child(div);
    set_attribute(a, "href", website);
    reset(div);
    template_effect(() => set_attribute(a, "aria-label", strings().ariaLinkLabel));
    append($$anchor, div);
    return pop($$exports);
  }
  create_custom_element(Logo, { strings: {} }, [], [], { mode: "open" });
  var root$4 = /* @__PURE__ */ from_html(`<div class="altcha-footer"><div></div> <!></div>`);
  function Footer($$anchor, $$props) {
    push($$props, true);
    let logo = prop($$props, "logo"), strings = prop($$props, "strings");
    var $$exports = {
      get logo() {
        return logo();
      },
      set logo($$value) {
        logo($$value);
        flushSync();
      },
      get strings() {
        return strings();
      },
      set strings($$value) {
        strings($$value);
        flushSync();
      }
    };
    var div = root$4();
    var div_1 = child(div);
    html(div_1, () => strings().footer, true);
    reset(div_1);
    var node = sibling(div_1, 2);
    {
      var consequent = ($$anchor2) => {
        Logo($$anchor2, {
          get strings() {
            return strings();
          }
        });
      };
      if_block(node, ($$render) => {
        if (logo()) $$render(consequent);
      });
    }
    reset(div);
    append($$anchor, div);
    return pop($$exports);
  }
  create_custom_element(Footer, { logo: {}, strings: {} }, [], [], { mode: "open" });
  var root$3 = /* @__PURE__ */ from_html(`<label class="altcha-switch"><input/> <div class="altcha-switch-toggle"><div class="altcha-spinner altcha-switch-spinner"></div></div></label>`);
  function Switch($$anchor, $$props) {
    push($$props, true);
    let loading = prop($$props, "loading"), rest = /* @__PURE__ */ rest_props($$props, ["$$slots", "$$events", "$$legacy", "$$host", "loading"]);
    var $$exports = {
      get loading() {
        return loading();
      },
      set loading($$value) {
        loading($$value);
        flushSync();
      }
    };
    var label = root$3();
    var input = child(label);
    attribute_effect(input, () => ({ type: "checkbox", ...rest }), void 0, void 0, void 0, void 0, true);
    next(2);
    reset(label);
    template_effect(() => set_attribute(label, "data-loading", loading()));
    append($$anchor, label);
    return pop($$exports);
  }
  create_custom_element(Switch, { loading: {} }, [], [], { mode: "open" });
  var AudioState = /* @__PURE__ */ ((AudioState2) => {
    AudioState2["ERROR"] = "error";
    AudioState2["LOADING"] = "loading";
    AudioState2["PLAYING"] = "playing";
    AudioState2["PAUSED"] = "paused";
    AudioState2["READY"] = "ready";
    return AudioState2;
  })(AudioState || {});
  var State = /* @__PURE__ */ ((State2) => {
    State2["CODE"] = "code";
    State2["ERROR"] = "error";
    State2["VERIFIED"] = "verified";
    State2["VERIFYING"] = "verifying";
    State2["UNVERIFIED"] = "unverified";
    State2["EXPIRED"] = "expired";
    return State2;
  })(State || {});
  var root_1$2 = /* @__PURE__ */ from_html(`<div class="altcha-code-challenge-title"> </div>`);
  var root_3$2 = /* @__PURE__ */ from_html(`<div class="altcha-spinner"></div>`);
  var root_4 = /* @__PURE__ */ from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>`);
  var root_5 = /* @__PURE__ */ from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>`);
  var root_6 = /* @__PURE__ */ from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>`);
  var root_2$2 = /* @__PURE__ */ from_html(`<button type="button" class="altcha-button altcha-button-secondary"><!></button>`);
  var root_7 = /* @__PURE__ */ from_html(`<audio hidden="" autoplay=""></audio>`);
  var root$2 = /* @__PURE__ */ from_html(`<div class="altcha-code-challenge"><form data-code-challenge="true"><!> <div class="altcha-code-challenge-text"> </div> <img class="altcha-code-challenge-image" alt=""/> <div class="altcha-code-challenge-row"><input type="text" class="altcha-input" autocomplete="off" name="" required=""/> <!> <button type="button" class="altcha-button altcha-button-secondary"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <div class="altcha-code-challenge-buttons"><button type="submit" class="altcha-button"> </button> <button type="button" class="altcha-button altcha-button-secondary"> </button></div></form> <!></div>`);
  function Code($$anchor, $$props) {
    push($$props, true);
    let audioUrl = prop($$props, "audioUrl"), codeChallenge = prop($$props, "codeChallenge"), config = prop($$props, "config"), imageUrl = prop($$props, "imageUrl"), onCancel = prop($$props, "onCancel"), onReload = prop($$props, "onReload"), onSubmit = prop($$props, "onSubmit"), strings = prop($$props, "strings");
    let audioState = /* @__PURE__ */ state(void 0);
    let elAudio = /* @__PURE__ */ state(void 0);
    let elInput = /* @__PURE__ */ state(void 0);
    let loading = /* @__PURE__ */ state(false);
    let code = /* @__PURE__ */ state("");
    let playAudio = /* @__PURE__ */ state(false);
    onMount(() => {
      if (!config().disableAutoFocus) {
        tick().then(() => {
          get(elInput)?.focus();
        });
      }
      return () => {
        if (get(elAudio)) {
          get(elAudio).pause();
          set(elAudio, void 0);
        }
      };
    });
    function onAudioEnded() {
      set(audioState, AudioState.PAUSED, true);
    }
    function onAudioError(ev) {
      set(audioState, AudioState.ERROR, true);
    }
    function onAudioCanPlay() {
      set(audioState, AudioState.READY, true);
    }
    function onAudioLoadStart() {
      set(audioState, AudioState.LOADING, true);
    }
    function onAudioPlaying() {
      set(audioState, AudioState.PLAYING, true);
    }
    function onAudioPause() {
      set(audioState, AudioState.PAUSED, true);
    }
    function onInputKeyDown(ev) {
      if (ev.code === "Space") {
        ev.preventDefault();
        ev.stopPropagation();
        onPlayAudio();
      } else if (ev.code === "Escape") {
        ev.preventDefault();
        ev.stopPropagation();
        onCancel()?.();
      }
    }
    function onSubmitCapture(ev) {
      ev.preventDefault();
      ev.stopPropagation();
      onSubmit()?.(get(code));
    }
    function onPlayAudio() {
      if (get(elAudio)) {
        if (get(audioState) === AudioState.LOADING) ;
        else if (!get(elAudio).paused) {
          get(elAudio).pause();
        } else {
          if (audioUrl() && get(elAudio).src !== audioUrl()) {
            get(elAudio).src = audioUrl();
          }
          get(elAudio).currentTime = 0;
          get(elAudio).play();
        }
      } else {
        set(playAudio, true);
        requestAnimationFrame(() => {
          if (get(elAudio) && audioUrl()) {
            get(elAudio).src = audioUrl();
            get(elAudio).play();
          }
        });
      }
    }
    var $$exports = {
      get audioUrl() {
        return audioUrl();
      },
      set audioUrl($$value) {
        audioUrl($$value);
        flushSync();
      },
      get codeChallenge() {
        return codeChallenge();
      },
      set codeChallenge($$value) {
        codeChallenge($$value);
        flushSync();
      },
      get config() {
        return config();
      },
      set config($$value) {
        config($$value);
        flushSync();
      },
      get imageUrl() {
        return imageUrl();
      },
      set imageUrl($$value) {
        imageUrl($$value);
        flushSync();
      },
      get onCancel() {
        return onCancel();
      },
      set onCancel($$value) {
        onCancel($$value);
        flushSync();
      },
      get onReload() {
        return onReload();
      },
      set onReload($$value) {
        onReload($$value);
        flushSync();
      },
      get onSubmit() {
        return onSubmit();
      },
      set onSubmit($$value) {
        onSubmit($$value);
        flushSync();
      },
      get strings() {
        return strings();
      },
      set strings($$value) {
        strings($$value);
        flushSync();
      }
    };
    var div = root$2();
    var form = child(div);
    var node = child(form);
    {
      var consequent = ($$anchor2) => {
        var div_1 = root_1$2();
        var text2 = child(div_1, true);
        reset(div_1);
        template_effect(() => set_text(text2, strings().verificationRequired));
        append($$anchor2, div_1);
      };
      if_block(node, ($$render) => {
        if (config().codeChallengeDisplay !== "standard") $$render(consequent);
      });
    }
    var div_2 = sibling(node, 2);
    var text_1 = child(div_2, true);
    reset(div_2);
    var img = sibling(div_2, 2);
    var div_3 = sibling(img, 2);
    var input = child(div_3);
    remove_input_defaults(input);
    input.disabled = get(loading);
    bind_this(input, ($$value) => set(elInput, $$value), () => get(elInput));
    var node_1 = sibling(input, 2);
    {
      var consequent_4 = ($$anchor2) => {
        var button = root_2$2();
        var node_2 = child(button);
        {
          var consequent_1 = ($$anchor3) => {
            var div_4 = root_3$2();
            append($$anchor3, div_4);
          };
          var consequent_2 = ($$anchor3) => {
            var svg = root_4();
            append($$anchor3, svg);
          };
          var consequent_3 = ($$anchor3) => {
            var svg_1 = root_5();
            append($$anchor3, svg_1);
          };
          var alternate = ($$anchor3) => {
            var svg_2 = root_6();
            append($$anchor3, svg_2);
          };
          if_block(node_2, ($$render) => {
            if (get(audioState) === AudioState.LOADING) $$render(consequent_1);
            else if (get(audioState) === AudioState.ERROR) $$render(consequent_2, 1);
            else if (get(audioState) === AudioState.PLAYING) $$render(consequent_3, 2);
            else $$render(alternate, -1);
          });
        }
        reset(button);
        template_effect(() => {
          set_attribute(button, "title", strings().getAudioChallenge);
          button.disabled = get(audioState) === AudioState.LOADING || get(audioState) === AudioState.ERROR;
          set_attribute(button, "aria-label", get(audioState) === AudioState.LOADING ? strings().loading : strings().getAudioChallenge);
        });
        delegated("click", button, () => onPlayAudio());
        append($$anchor2, button);
      };
      if_block(node_1, ($$render) => {
        if (codeChallenge().audio) $$render(consequent_4);
      });
    }
    var button_1 = sibling(node_1, 2);
    reset(div_3);
    var div_5 = sibling(div_3, 2);
    var button_2 = child(div_5);
    var text_2 = child(button_2, true);
    reset(button_2);
    var button_3 = sibling(button_2, 2);
    var text_3 = child(button_3, true);
    reset(button_3);
    reset(div_5);
    reset(form);
    var node_3 = sibling(form, 2);
    {
      var consequent_5 = ($$anchor2) => {
        var audio = root_7();
        bind_this(audio, ($$value) => set(elAudio, $$value), () => get(elAudio));
        event("error", audio, onAudioError);
        event("loadstart", audio, onAudioLoadStart);
        event("canplay", audio, onAudioCanPlay);
        event("pause", audio, onAudioPause);
        event("playing", audio, onAudioPlaying);
        event("ended", audio, onAudioEnded);
        append($$anchor2, audio);
      };
      if_block(node_3, ($$render) => {
        if (get(playAudio)) $$render(consequent_5);
      });
    }
    reset(div);
    template_effect(() => {
      set_text(text_1, strings().enterCodeFromImage);
      set_attribute(img, "src", imageUrl());
      set_attribute(input, "minlength", codeChallenge().length || 1);
      set_attribute(input, "maxlength", codeChallenge().length);
      set_attribute(input, "placeholder", strings().enterCode);
      set_attribute(input, "aria-label", get(audioState) === AudioState.LOADING ? strings().loading : get(audioState) === AudioState.PLAYING ? "" : strings().enterCodeAria);
      set_attribute(input, "aria-live", get(audioState) ? "assertive" : "polite");
      set_attribute(input, "aria-busy", get(audioState) === AudioState.LOADING);
      set_attribute(button_1, "title", strings().reload);
      set_attribute(button_1, "aria-label", strings().reload);
      set_attribute(button_2, "aria-label", strings().verify);
      set_text(text_2, strings().verify);
      set_attribute(button_3, "aria-label", strings().cancel);
      set_text(text_3, strings().cancel);
    });
    event("submit", form, onSubmitCapture, true);
    delegated("keydown", input, onInputKeyDown);
    bind_value(input, () => get(code), ($$value) => set(code, $$value));
    delegated("click", button_1, () => onReload()?.());
    delegated("click", button_3, () => onCancel()?.());
    append($$anchor, div);
    return pop($$exports);
  }
  delegate(["keydown", "click"]);
  create_custom_element(
    Code,
    {
      audioUrl: {},
      codeChallenge: {},
      config: {},
      imageUrl: {},
      onCancel: {},
      onReload: {},
      onSubmit: {},
      strings: {}
    },
    [],
    [],
    { mode: "open" }
  );
  var root_1$1 = /* @__PURE__ */ from_html(`<div class="altcha-popover-backdrop" data-backdrop=""></div>`);
  var root_2$1 = /* @__PURE__ */ from_html(`<div class="altcha-popover-arrow"></div>`);
  var root_3$1 = /* @__PURE__ */ from_html(`<div role="button" class="altcha-popover-close">&times;</div>`);
  var root$1 = /* @__PURE__ */ from_html(`<!> <div><!> <!> <div class="altcha-popover-content"><!></div></div>`, 1);
  function Popover($$anchor, $$props) {
    push($$props, true);
    let anchor = prop($$props, "anchor"), children = prop($$props, "children"), display = prop($$props, "display", 7, "standard"), backdrop = prop($$props, "backdrop", 7, false), onClickOutside = prop($$props, "onClickOutside"), onClickOutsideDelay = prop($$props, "onClickOutsideDelay", 7, 600), onClose = prop($$props, "onClose"), placement = prop($$props, "placement", 7, "auto"), variant = prop($$props, "variant", 7, "neutral"), rest = /* @__PURE__ */ rest_props($$props, [
      "$$slots",
      "$$events",
      "$$legacy",
      "$$host",
      "anchor",
      "children",
      "display",
      "backdrop",
      "onClickOutside",
      "onClickOutsideDelay",
      "onClose",
      "placement",
      "variant"
    ]);
    let el = /* @__PURE__ */ state(void 0);
    let elBackdrop = /* @__PURE__ */ state(void 0);
    let top = /* @__PURE__ */ state(false);
    let mountedAt = /* @__PURE__ */ state(0);
    user_effect(() => {
      if (placement() !== "auto") {
        set(top, placement() === "top");
      }
    });
    onMount(() => {
      const moveToBody = display() === "bottomsheet" || display() === "overlay";
      if (moveToBody) {
        get(elBackdrop) && document.body.append(get(elBackdrop));
        get(el) && document.body.append(get(el));
      }
      reposition();
      tick().then(() => {
        set(mountedAt, Date.now(), true);
      });
      return () => {
        if (moveToBody) {
          get(elBackdrop) && document.body.removeChild(get(elBackdrop));
          get(el) && document.body.removeChild(get(el));
        }
      };
    });
    function onCloseClick() {
      onClose()?.();
    }
    function onWindowClick(ev) {
      const target = ev.target;
      if (!get(el)?.contains(target) && get(mountedAt) && get(mountedAt) + onClickOutsideDelay() < Date.now()) {
        onClickOutside()?.();
      }
    }
    function onWindowResize() {
      reposition();
    }
    function onWindowScroll() {
      reposition();
    }
    function reposition() {
      if (anchor() && placement() === "auto" && get(el)) {
        const boundary2 = anchor().getBoundingClientRect();
        const bottomGap = document.documentElement.clientHeight - (boundary2.top + boundary2.height);
        const newTop = bottomGap < get(el).clientHeight;
        if (get(top) !== newTop) {
          set(top, newTop);
        }
      }
    }
    var $$exports = {
      get anchor() {
        return anchor();
      },
      set anchor($$value) {
        anchor($$value);
        flushSync();
      },
      get children() {
        return children();
      },
      set children($$value) {
        children($$value);
        flushSync();
      },
      get display() {
        return display();
      },
      set display($$value = "standard") {
        display($$value);
        flushSync();
      },
      get backdrop() {
        return backdrop();
      },
      set backdrop($$value = false) {
        backdrop($$value);
        flushSync();
      },
      get onClickOutside() {
        return onClickOutside();
      },
      set onClickOutside($$value) {
        onClickOutside($$value);
        flushSync();
      },
      get onClickOutsideDelay() {
        return onClickOutsideDelay();
      },
      set onClickOutsideDelay($$value = 600) {
        onClickOutsideDelay($$value);
        flushSync();
      },
      get onClose() {
        return onClose();
      },
      set onClose($$value) {
        onClose($$value);
        flushSync();
      },
      get placement() {
        return placement();
      },
      set placement($$value = "auto") {
        placement($$value);
        flushSync();
      },
      get variant() {
        return variant();
      },
      set variant($$value = "neutral") {
        variant($$value);
        flushSync();
      }
    };
    var fragment = root$1();
    event("click", $window, onWindowClick);
    event("resize", $window, onWindowResize);
    event("scroll", $window, onWindowScroll);
    var node = first_child(fragment);
    {
      var consequent = ($$anchor2) => {
        var div = root_1$1();
        bind_this(div, ($$value) => set(elBackdrop, $$value), () => get(elBackdrop));
        append($$anchor2, div);
      };
      if_block(node, ($$render) => {
        if (backdrop()) $$render(consequent);
      });
    }
    var div_1 = sibling(node, 2);
    attribute_effect(div_1, () => ({
      ...rest,
      class: `altcha-popover ${($$props.class || "") ?? ""}`,
      "data-popover": true,
      "data-variant": variant(),
      "data-top": get(top),
      "data-display": display()
    }));
    var node_1 = child(div_1);
    {
      var consequent_1 = ($$anchor2) => {
        var div_2 = root_2$1();
        append($$anchor2, div_2);
      };
      if_block(node_1, ($$render) => {
        if (display() === "standard") $$render(consequent_1);
      });
    }
    var node_2 = sibling(node_1, 2);
    {
      var consequent_2 = ($$anchor2) => {
        var div_3 = root_3$1();
        delegated("click", div_3, onCloseClick);
        append($$anchor2, div_3);
      };
      if_block(node_2, ($$render) => {
        if (display() !== "standard") $$render(consequent_2);
      });
    }
    var div_4 = sibling(node_2, 2);
    var node_3 = child(div_4);
    snippet(node_3, () => children() ?? noop);
    reset(div_4);
    reset(div_1);
    bind_this(div_1, ($$value) => set(el, $$value), () => get(el));
    append($$anchor, fragment);
    return pop($$exports);
  }
  delegate(["click"]);
  create_custom_element(
    Popover,
    {
      anchor: {},
      children: {},
      display: {},
      backdrop: {},
      onClickOutside: {},
      onClickOutsideDelay: {},
      onClose: {},
      placement: {},
      variant: {}
    },
    [],
    [],
    { mode: "open" }
  );
  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function injectCss(css2, id = "altcha-css") {
    if (typeof document !== "undefined" && document && !document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.textContent = css2;
      document.head.appendChild(style);
    }
  }
  async function solveChallengeWorkers(options) {
    const {
      challenge,
      concurrency = navigator.hardwareConcurrency,
      controller = new AbortController(),
      createWorker,
      onOutOfMemory = (c) => c > 1 ? Math.floor(c / 2) : 0,
      counterMode,
      timeout = 9e4
    } = options;
    const workersConcurrency = Math.min(16, Math.max(1, concurrency));
    const workersInstances = [];
    const terminate = () => {
      for (const worker of workersInstances) {
        worker.terminate();
      }
    };
    for (let i = 0; i < workersConcurrency; i++) {
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
              counterStep: workersConcurrency,
              timeout,
              type: "work"
            });
          });
        })
      );
    } catch (err) {
      const isOOM = err instanceof Error && !!err?.message?.includes("Out of memory");
      if (isOOM) {
        if (onOutOfMemory) {
          terminate();
          const retryConcurrency = onOutOfMemory(workersConcurrency);
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
  class Collector {
    TAG_CODES = {
      INPUT: 1,
      TEXTAREA: 2,
      SELECT: 3,
      BUTTON: 4,
      A: 5,
      DETAILS: 6,
      SUMMARY: 7,
      IFRAME: 8,
      VIDEO: 9,
      AUDIO: 10
    };
    maxSamples;
    sampleInterval;
    target;
    focusStartTime = 0;
    focusInteraction = 0;
    focusInteractionTimer = null;
    lastPointerSample = 0;
    lastTouchSample = 0;
    lastScrollSample = 0;
    pendingPointer = null;
    pendingTouch = null;
    focus = [];
    pointer = [];
    scroll = [];
    touch = [];
    constructor(options = {}) {
      const { maxSamples = 60, sampleInterval = 50, target = window } = options;
      this.maxSamples = maxSamples;
      this.sampleInterval = sampleInterval;
      this.target = target;
      this.attach();
    }
    destroy() {
      const o = { capture: true };
      this.target.removeEventListener("focusin", this.onFocus, o);
      this.target.removeEventListener("keydown", this.onInteraction, o);
      this.target.removeEventListener("pointerdown", this.onInteraction, o);
      this.target.removeEventListener("pointermove", this.onPointer, o);
      this.target.removeEventListener("scroll", this.onScroll, o);
      this.target.removeEventListener("touchmove", this.onTouchMove, o);
    }
    export() {
      return {
        focus: this.focus,
        maxTouchPoints: navigator.maxTouchPoints || 0,
        pointer: this.pointer,
        scroll: this.scroll,
        time: Date.now(),
        touch: this.touch
      };
    }
    attach() {
      const o = { passive: true, capture: true };
      this.target.addEventListener("focusin", this.onFocus, o);
      this.target.addEventListener("keydown", this.onInteraction, o);
      this.target.addEventListener("pointerdown", this.onInteraction, o);
      this.target.addEventListener("pointermove", this.onPointer, o);
      this.target.addEventListener("scroll", this.onScroll, o);
      this.target.addEventListener("touchmove", this.onTouchMove, o);
    }
    evict(buffer) {
      if (buffer.length > this.maxSamples) {
        buffer.splice(0, buffer.length - this.maxSamples);
      }
    }
    onFocus = (e) => {
      if (this.focusInteraction === 2) {
        return;
      }
      const el = e.target;
      if (!(el instanceof Element)) {
        return;
      }
      const now = performance.now();
      if (this.focusStartTime === 0) {
        this.focusStartTime = now;
      }
      this.focus.push([
        Math.round(now - this.focusStartTime),
        el.tabIndex,
        this.TAG_CODES[el.tagName] ?? 0,
        this.focusInteraction ? 1 : 0
      ]);
      this.evict(this.focus);
    };
    onInteraction = (e) => {
      this.focusInteraction = "keyCode" in e ? 1 : 2;
      if (this.focusInteractionTimer) {
        clearTimeout(this.focusInteractionTimer);
      }
      this.focusInteractionTimer = setTimeout(() => {
        this.focusInteraction = 0;
      }, 100);
    };
    onPointer = (e) => {
      if (e.pointerType === "touch") {
        return;
      }
      const now = e.timeStamp || performance.now();
      this.pendingPointer = [Math.round(e.clientX), Math.round(e.clientY), Math.round(now)];
      if (now - this.lastPointerSample >= this.sampleInterval) {
        this.pointer.push(this.pendingPointer);
        this.lastPointerSample = now;
        this.pendingPointer = null;
        this.evict(this.pointer);
      }
    };
    onScroll = () => {
      const now = performance.now();
      if (now - this.lastScrollSample < this.sampleInterval) {
        return;
      }
      this.scroll.push([Math.round(window.scrollY), Math.round(now)]);
      this.lastScrollSample = now;
      this.evict(this.scroll);
    };
    onTouchMove = (e) => {
      const now = e.timeStamp || performance.now();
      const t = e.touches[0];
      if (!t) {
        return;
      }
      this.pendingTouch = [
        Math.round(t.clientX),
        Math.round(t.clientY),
        Math.round(now),
        Math.round(t.force * 1e3) / 1e3,
        Math.round(t.radiusX || 0),
        Math.round(t.radiusY || 0)
      ];
      if (now - this.lastTouchSample >= this.sampleInterval) {
        this.touch.push(this.pendingTouch);
        this.lastTouchSample = now;
        this.pendingTouch = null;
        this.evict(this.touch);
      }
    };
  }
  var root_1 = /* @__PURE__ */ from_html(`<div class="altcha-overlay-backdrop" data-backdrop=""></div>`);
  var root_3 = /* @__PURE__ */ from_html(`<div class="altcha-overlay-content"></div>`);
  var root_2 = /* @__PURE__ */ from_html(`<div role="button" class="altcha-overlay-close">&times;</div> <!>`, 1);
  var root_10 = /* @__PURE__ */ from_html(`<div class="altcha-floating-arrow"></div>`);
  var root_11 = /* @__PURE__ */ from_html(`<input type="hidden"/>`);
  var root_14 = /* @__PURE__ */ from_html(`<div class="altcha-error">Secure context (HTTPS) required.</div>`);
  var root_15 = /* @__PURE__ */ from_html(`<div class="altcha-error"> </div>`);
  var root_16 = /* @__PURE__ */ from_html(`<div class="altcha-error"> </div>`);
  var root_19 = /* @__PURE__ */ from_html(`<!> <!>`, 1);
  var root = /* @__PURE__ */ from_html(`<!> <div class="altcha"><!> <div class="altcha-main"><div><div class="altcha-checkbox-wrap"><!> <label><!></label></div> <!></div> <!> <!> <!></div> <!></div>`, 1);
  function Widget($$anchor, $$props) {
    push($$props, true);
    const $altchaDefaults = () => store_get(altchaDefaults, "$altchaDefaults", $$stores);
    const $altchaI18nStore = () => store_get(altchaI18nStore, "$altchaI18nStore", $$stores);
    const [$$stores, $$cleanup] = setup_stores();
    const fieldsSelector = 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])';
    const submitButtonSelector = 'input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])';
    const rtlLanguages = ["ar", "fa", "he", "ur"];
    const { isSecureContext } = globalThis;
    const { store: altchaDefaults } = globalThis.$altcha.defaults;
    const hardwareConcurrency = navigator.hardwareConcurrency || 2;
    const deviceMemory = navigator.deviceMemory || 0;
    const defaultWorkers = deviceMemory && deviceMemory <= 4 ? Math.min(4, hardwareConcurrency) : hardwareConcurrency;
    const altchaI18nStore = globalThis.$altcha.i18n.store;
    const instance = $$props.$$host;
    const dispatch = (event2, detail) => {
      tick().then(() => {
        instance?.dispatchEvent(new CustomEvent(event2, { detail }));
      });
    };
    let hisCollector = null;
    let baseUrl = /* @__PURE__ */ state(proxy(new URL(location.origin)));
    let checked = /* @__PURE__ */ state(false);
    let codeChallenge = /* @__PURE__ */ state(null);
    let currentController = /* @__PURE__ */ state(null);
    let currentState = /* @__PURE__ */ state(proxy(State.UNVERIFIED));
    let elAnchorArrow = /* @__PURE__ */ state(void 0);
    let elFloatingAnchor = /* @__PURE__ */ state(void 0);
    let elForm = /* @__PURE__ */ state(null);
    let elRoot = /* @__PURE__ */ state(void 0);
    let elSubmitter = /* @__PURE__ */ state(null);
    let error = /* @__PURE__ */ state(null);
    let expirationTimeout = /* @__PURE__ */ state(null);
    let payload = /* @__PURE__ */ state(null);
    let plugins = /* @__PURE__ */ state(proxy([]));
    let userConfig = /* @__PURE__ */ state(proxy({}));
    let visible = /* @__PURE__ */ state(true);
    const config = /* @__PURE__ */ user_derived(() => ({
      fetch: (input, init) => fetch(input, init),
      audioChallengeLanguage: "",
      auto: "off",
      barPlacement: "bottom",
      challenge: "",
      codeChallenge: null,
      codeChallengeDisplay: "standard",
      credentials: null,
      debug: false,
      disableAutoFocus: false,
      display: "standard",
      floatingAnchor: "",
      floatingOffset: 8,
      floatingPersist: false,
      floatingPlacement: "auto",
      hideFooter: false,
      hideLogo: false,
      humanInteractionSignature: true,
      language: "",
      mockError: false,
      minDuration: 500,
      overlayContent: "",
      name: "altcha",
      popoverPlacement: "auto",
      retryOnOutOfMemoryError: true,
      setCookie: null,
      serverVerificationFields: false,
      serverVerificationTimeZone: false,
      test: false,
      timeout: 9e4,
      type: "checkbox",
      validationMessage: "",
      verifyFunction: null,
      verifyUrl: "",
      workers: defaultWorkers,
      ...$altchaDefaults(),
      ...get(userConfig)
    }));
    const checkboxId = /* @__PURE__ */ user_derived(() => `altcha-checkbox-${$$props.id || Math.floor(Math.random() * 1e12).toString(16)}`);
    const CheckboxComponent = /* @__PURE__ */ user_derived(() => getCheckboxComponent(get(config).type));
    const auto = /* @__PURE__ */ user_derived(() => get(config).auto);
    const loading = /* @__PURE__ */ user_derived(() => get(currentState) === State.VERIFYING);
    const showFooter = /* @__PURE__ */ user_derived(() => !get(config).hideFooter);
    const showLogo = /* @__PURE__ */ user_derived(() => !get(config).hideLogo && get(config).display !== "bar");
    const locale = /* @__PURE__ */ user_derived(() => getI18nStrings($altchaI18nStore(), [
      get(config).language,
      document.documentElement.lang,
      ...navigator.languages
    ]));
    const dir = /* @__PURE__ */ user_derived(() => rtlLanguages.includes(get(locale).language) ? "rtl" : void 0);
    const strings = /* @__PURE__ */ user_derived(() => ({ ...get(locale).strings }));
    const codeChallengeAudioUrl = /* @__PURE__ */ user_derived(() => get(codeChallenge)?.audio?.match(/^(https?:)?\//) ? getUrl(get(codeChallenge).audio, get(baseUrl), {
      language: get(config).audioChallengeLanguage || get(locale).language
    }).toString() : get(codeChallenge)?.audio);
    const codeChallengeImageUrl = /* @__PURE__ */ user_derived(() => get(codeChallenge)?.image?.match(/^(https?:)?\//) ? getUrl(get(codeChallenge).image, get(baseUrl)) : get(codeChallenge)?.image);
    user_effect(() => {
      configure({
        auto: $$props.auto,
        challenge: $$props.challenge,
        display: $$props.display,
        language: $$props.language,
        name: $$props.name,
        type: $$props.type,
        workers: $$props.workers
      });
    });
    user_effect(() => {
      if ($$props.configuration) {
        try {
          configure(JSON.parse($$props.configuration));
        } catch {
          log("unable to parse the `configuration` attribute (JSON expected)");
        }
      }
    });
    user_effect(() => {
      setDisplay(get(config).display);
    });
    user_effect(() => {
      if (get(checked) && get(currentState) === State.VERIFYING) {
        set(checked, false);
      }
    });
    user_effect(() => {
      if (!get(checked) && get(currentState) === State.VERIFIED) {
        set(checked, true);
      }
    });
    user_effect(() => {
      if (!get(checked)) {
        const checkbox = getCheckboxElement();
        if (checkbox && checkbox.checked) {
          checkbox.checked = false;
        }
      }
    });
    user_effect(() => {
      if (get(currentState) === State.VERIFIED) {
        getCheckboxElement()?.setCustomValidity("");
      }
    });
    user_effect(() => {
      if (get(auto) === "onload") {
        const tm = setTimeout(
          () => {
            verify();
          },
          1
        );
        return () => {
          if (tm) {
            clearTimeout(tm);
          }
        };
      }
    });
    user_effect(() => {
      if (get(error)) {
        log("error:", get(error));
      }
    });
    user_effect(() => {
      if (get(payload) && get(config).setCookie) {
        setCookie(get(payload), get(config).setCookie);
      }
    });
    onMount(() => {
      log("mounted", "3.0.1");
      if (instance) {
        globalThis.$altcha.instances.add(instance);
      }
      set(elForm, get(elRoot)?.closest("form"), true);
      get(elForm)?.addEventListener("reset", onFormReset);
      get(elForm)?.addEventListener("submit", onFormSubmit, { capture: true });
      get(elForm)?.addEventListener("focusin", onFormFocusIn);
      activatePlugins();
      if (get(config).humanInteractionSignature) {
        log("human interaction signature enabled");
        hisCollector = new Collector();
      }
      dispatch("load");
      if (!isSecureContext) {
        log("secure context (HTTPS) required");
      }
      return () => {
        destroyPlugins();
        if (instance) {
          globalThis.$altcha.instances.delete(instance);
        }
        if (get(expirationTimeout)) {
          clearTimeout(get(expirationTimeout));
        }
        get(elForm)?.removeEventListener("reset", onFormReset);
        get(elForm)?.removeEventListener("submit", onFormSubmit, { capture: true });
        get(elForm)?.removeEventListener("focusin", onFormFocusIn);
        hisCollector?.destroy();
      };
    });
    function activatePlugins() {
      set(plugins, [...globalThis.$altcha.plugins].map((PluginCls) => new PluginCls(instance)), true);
      log("activating plugins", get(plugins).map((plugin) => plugin.constructor.name));
      for (const plugin of get(plugins)) {
        plugin.activate();
      }
    }
    async function callHook(hook, ...args) {
      let result = void 0;
      for (const plugin of get(plugins)) {
        result = await plugin[hook].call(plugin, ...args);
      }
      return result;
    }
    function destroyPlugins() {
      for (const plugin of get(plugins)) {
        plugin.destroy();
      }
    }
    function createChallengeFromV1(challenge) {
      const [_, queryParams] = challenge.salt.split("?");
      const data = {};
      if (queryParams) {
        try {
          Object.assign(data, Object.fromEntries(new URLSearchParams(queryParams).entries()));
        } catch {
        }
      }
      const result = {
        codeChallenge: challenge.codeChallenge,
        parameters: {
          algorithm: challenge.algorithm,
          cost: 1,
          data,
          expiresAt: data?.expires ? parseInt(data.expires, 10) : void 0,
          keyLength: challenge.algorithm === "SHA-512" ? 64 : challenge.algorithm === "SHA-384" ? 48 : 32,
          nonce: bufferToHex(new TextEncoder().encode(challenge.salt)),
          keyPrefix: challenge.challenge,
          salt: ""
        },
        signature: challenge.signature
      };
      Object.defineProperties(result, {
        _originalSalt: { enumerable: false, value: challenge.salt, writable: false },
        _version: { enumerable: false, value: 1, writable: false }
      });
      return result;
    }
    function createPayloadV1(challenge, solution) {
      return {
        algorithm: challenge.parameters.algorithm,
        challenge: challenge.parameters.keyPrefix,
        number: solution.counter,
        salt: "_originalSalt" in challenge ? challenge._originalSalt : challenge.parameters.nonce,
        signature: challenge.signature,
        took: solution.time || 0
      };
    }
    async function delay(ms) {
      await new Promise((resolve) => setTimeout(resolve, ms));
    }
    async function fetchChallenge(source2 = get(config).challenge, requestOptions) {
      const hook = await callHook("onFetchChallenge", source2);
      let challenge = null;
      if (hook !== void 0) {
        return hook;
      }
      if (typeof source2 === "string") {
        if (source2.match(/^(https?:)?\//)) {
          log("fetching challenge from", requestOptions?.method || "GET", source2);
          set(baseUrl, new URL(source2, location.origin), true);
          const resp = await get(config).fetch(source2, {
            credentials: get(config).credentials || void 0,
            ...requestOptions
          });
          await validateResponse(resp);
          const configHeader = resp.headers.get("x-altcha-config");
          if (configHeader) {
            processConfigHeader(configHeader);
          }
          const json = await resp.json();
          if (json && "his" in json && json.his) {
            log("requested HIS");
            if (!hisCollector) {
              throw new Error("Server requested HIS data but collector is disabled.");
            }
            return fetchChallenge(getUrl(json.his.url, get(baseUrl)), {
              body: JSON.stringify({ his: hisCollector.export() }),
              headers: { "content-type": "application/json" },
              method: "POST"
            });
          }
          if (json && "hisResult" in json && json.hisResult) {
            log("HIS result", json.hisResult);
          }
          challenge = json;
        } else {
          log("parsing JSON challenge");
          try {
            challenge = JSON.parse(source2);
          } catch {
            throw new Error(`Unable to parse JSON challenge.`);
          }
        }
      } else if (source2 && typeof source2 === "object") {
        try {
          challenge = JSON.parse(JSON.stringify(source2));
        } catch {
          throw new Error(`Unable to parse JSON challenge.`);
        }
      }
      if (isChallengeV1(challenge)) {
        challenge = createChallengeFromV1(challenge);
      }
      if (!isChallengeValid(challenge)) {
        throw new Error(`Challenge validation failed.`);
      }
      return challenge;
    }
    function isChallengeV1(challenge) {
      return typeof challenge === "object" && "challenge" in challenge;
    }
    function isChallengeValid(challenge) {
      return !!challenge && typeof challenge === "object" && "parameters" in challenge && !!challenge.parameters && typeof challenge.parameters === "object" && "algorithm" in challenge.parameters && "nonce" in challenge.parameters && "salt" in challenge.parameters && "keyPrefix" in challenge.parameters;
    }
    function getCheckboxElement() {
      return document.getElementById(get(checkboxId));
    }
    function getCheckboxComponent(type) {
      switch (type) {
        case "checkbox":
          return Checkbox;
        case "switch":
          return Switch;
        case "native":
        default:
          return CheckboxNative;
      }
    }
    function getI18nStrings(i18n2, languages) {
      const codes = Object.keys(i18n2).map((code) => code.toLowerCase());
      let language = languages.reduce(
        (acc, lang) => {
          lang = lang.toLowerCase();
          return acc || (i18n2[lang] ? lang : null) || codes.find((code) => lang.split("-")[0] === code.split("-")[0]) || null;
        },
        null
      );
      if (!i18n2[language || ""]) {
        language = "en";
      }
      return { language, strings: i18n2[language] };
    }
    function getPlacement(display) {
      switch (display) {
        case "bar":
          return get(config).barPlacement || "bottom";
        case "floating":
          return get(config).floatingPlacement || "auto";
        default:
          return void 0;
      }
    }
    function getTextFields(names) {
      const elInputs = [
        ...get(elForm)?.querySelectorAll(fieldsSelector) || []
      ];
      return elInputs.reduce(
        (acc, el) => {
          const name = el.name;
          const value = el.value;
          if (name && value) {
            acc[name] = /\n/.test(value) ? value.replace(new RegExp("(?<!\\r)\\n", "g"), "\r\n") : value;
          }
          return acc;
        },
        {}
      );
    }
    function getTimeZone() {
      try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      } catch {
      }
      return void 0;
    }
    function getUrl(uri, baseUrl2, params) {
      const result = new URL(uri, baseUrl2);
      if (!result.search) {
        result.search = baseUrl2.search;
      }
      if (params) {
        for (const key2 in params) {
          if (params[key2] !== void 0 && params[key2] !== null) {
            result.searchParams.set(key2, params[key2]);
          }
        }
      }
      return result.toString();
    }
    function onCheckboxChange(ev) {
      if (!get(checked) && ev.currentTarget.checked) {
        ev.preventDefault();
        ev.currentTarget.checked = false;
        if (get(currentState) !== State.VERIFYING) {
          verify();
        }
      } else if (!ev.currentTarget.checked) {
        ev.preventDefault();
        reset$1();
      }
    }
    function onCheckboxInvalid(ev) {
      if (get(currentState) === State.VERIFYING) {
        ev.currentTarget.setCustomValidity(get(strings).waitAlert);
      } else if (get(config).validationMessage) {
        ev.currentTarget.setCustomValidity(get(config).validationMessage);
      }
    }
    function onCloseClick() {
      if (get(currentController)) {
        get(currentController).abort();
      }
      setDisplay(get(config).display);
      reset$1();
    }
    function onDocumentScroll() {
      updateUI();
    }
    function onDocumentClick(ev) {
      const target = ev.target;
      if (get(config).display === "floating" && target && !instance?.contains(target) && !target.hasAttribute("data-backdrop") && !target.closest("[data-popover]") && get(currentState) !== State.VERIFIED && !get(config).floatingPersist) {
        hide();
      }
    }
    function onFormFocusIn(ev) {
      if (get(auto) === "onfocus" && get(currentState) === State.UNVERIFIED) {
        verify();
      }
    }
    function onFormReset() {
      if (get(currentController)) {
        get(currentController).abort();
      }
      setDisplay(get(config).display);
      reset$1();
    }
    function onFormSubmit(ev) {
      set(elSubmitter, ev.submitter, true);
      if (get(auto) === "onsubmit" && get(currentState) === State.UNVERIFIED) {
        ev.preventDefault();
        ev.stopPropagation();
        show();
        verify().then((result) => {
          if (result && !get(codeChallenge)) {
            tick().then(() => {
              requestSubmit(get(elSubmitter));
            });
          }
        });
      }
    }
    function onWindowPageshow() {
      reset$1();
    }
    function onWindowResize() {
      updateUI();
    }
    function processConfigHeader(jsonConfig) {
      try {
        const json = JSON.parse(jsonConfig);
        if (json && typeof json === "object") {
          configure({
            // Backward compatibility mappings
            serverVerificationFields: json?.sentinel?.fields,
            serverVerificationTimeZone: json?.sentinel?.timeZone,
            verifyUrl: json.verifyurl,
            ...json
          });
        }
      } catch (err) {
        log("unable to configure from x-altcha-config header", err);
      }
    }
    function repositionFloating(viewportOffset = 20) {
      if (!get(elRoot)) {
        return;
      }
      const floatingPlacement = get(config).floatingPlacement;
      if (!get(elFloatingAnchor)) {
        set(
          elFloatingAnchor,
          (get(config).floatingAnchor instanceof HTMLElement ? get(config).floatingAnchor : get(config).floatingAnchor ? document.querySelector(get(config).floatingAnchor) : get(elForm)?.querySelector(submitButtonSelector)) || get(elForm),
          true
        );
        if (!get(elFloatingAnchor)) {
          log("unable to find floating anchor element");
          return;
        }
      }
      const offsetY = parseInt(get(config).floatingOffset, 10) || 12;
      const anchorBoundry = get(elFloatingAnchor).getBoundingClientRect();
      const elBoundary = get(elRoot).getBoundingClientRect();
      const docHeight = document.documentElement.clientHeight;
      const docWidth = document.documentElement.clientWidth;
      const showOnTop = !floatingPlacement || floatingPlacement === "auto" ? anchorBoundry.bottom + elBoundary.height + offsetY + viewportOffset > docHeight : floatingPlacement === "top";
      const left = Math.max(viewportOffset, Math.min(docWidth - viewportOffset - elBoundary.width, anchorBoundry.left + anchorBoundry.width / 2 - elBoundary.width / 2));
      get(elRoot).style.setProperty("--altcha-floating-left", `${left}px`);
      get(elRoot).style.setProperty("--altcha-floating-top", showOnTop ? `${anchorBoundry.top - (elBoundary.height + offsetY)}px` : `${anchorBoundry.bottom + offsetY}px`);
      get(elRoot).setAttribute("data-floating-position", showOnTop ? "top" : "bottom");
      if (get(elAnchorArrow)) {
        const anchorArrowBoundry = get(elAnchorArrow).getBoundingClientRect();
        get(elAnchorArrow).style.left = anchorBoundry.left - left + anchorBoundry.width / 2 - anchorArrowBoundry.width / 2 + "px";
      }
    }
    async function requestServerVerification(verificationPayload, code) {
      const hook = await callHook("onRequestServerVerification", verificationPayload, code);
      if (hook !== void 0) {
        return hook;
      }
      log("requesting server verification from", get(config).verifyUrl);
      if (!get(config).verifyUrl) {
        throw new Error(`Parameter verifyUrl must be set for server verification.`);
      }
      const resp = await get(config).fetch(getUrl(get(config).verifyUrl, get(baseUrl)), {
        body: JSON.stringify({
          code,
          fields: get(config).serverVerificationFields ? getTextFields() : void 0,
          payload: verificationPayload,
          timeZone: get(config).serverVerificationTimeZone ? getTimeZone() : void 0
        }),
        credentials: get(config).credentials || void 0,
        headers: { "Content-Type": "application/json" },
        method: "POST"
      });
      await validateResponse(resp);
      const json = await resp.json();
      if (json && typeof json === "object" && "payload" in json && !!json.payload) {
        dispatch("serververification", json);
      }
      return json;
    }
    function requestSubmit(submitter) {
      if (get(elForm) && "requestSubmit" in get(elForm)) {
        get(elForm).requestSubmit(submitter);
      } else if (get(elForm)?.reportValidity()) {
        if (submitter) {
          submitter.click();
        } else {
          get(elForm).submit();
        }
      }
    }
    function setCookie(value, options = {}) {
      const {
        domain,
        name = get(config).name,
        maxAge,
        path,
        sameSite,
        secure
      } = options;
      let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
      if (domain) cookie += `; Domain=${domain}`;
      if (maxAge != null) cookie += `; Max-Age=${maxAge}`;
      if (path) cookie += `; Path=${path}`;
      if (sameSite) cookie += `; SameSite=${sameSite}`;
      if (secure) cookie += `; Secure`;
      document.cookie = cookie;
    }
    function setDisplay(value) {
      switch (value) {
        case "bar":
        case "floating":
        case "overlay":
          hide();
          if (!get(auto) || get(auto) === "off") {
            get(userConfig).auto = "onsubmit";
          }
          break;
        case "standard":
          show();
      }
    }
    function setChallengeExpiration(expiresAt) {
      if (get(expirationTimeout)) {
        clearTimeout(get(expirationTimeout));
      }
      const onExpired = () => {
        if (get(currentState) !== State.UNVERIFIED) {
          set(checked, false);
          setState(State.EXPIRED);
        } else {
          reset$1();
        }
        dispatch("expired");
      };
      const duration = expiresAt * 1e3 - Date.now();
      if (duration >= 1) {
        set(expirationTimeout, setTimeout(onExpired, duration), true);
      } else {
        onExpired();
      }
    }
    async function validateResponse(resp) {
      if (resp.status >= 400) {
        if (resp.headers.get("content-type")?.includes("/json")) {
          let json;
          try {
            json = await resp.json();
          } catch {
          }
          if (json && "error" in json) {
            throw new Error(`Server responded with ${resp.status} - ${json.error}`);
          }
        }
        throw new Error(`Server responded with ${resp.status}.`);
      }
      const contentType = resp.headers.get("content-type");
      if (!contentType || !contentType.includes("/json")) {
        throw new Error(`Server responded with invalid content-type. Expected application/json, received ${contentType}.`);
      }
    }
    async function verifyServer(code) {
      if (!get(payload)) {
        setState(State.ERROR, "Cannot verify code challenge without PoW payload.");
        return;
      }
      setState(State.VERIFYING);
      let result = null;
      if (get(config).verifyUrl) {
        result = await requestServerVerification(get(payload), code);
      } else if (get(config).verifyFunction) {
        result = await get(config).verifyFunction(get(payload), code);
      } else {
        setState(State.ERROR, "Parameter verifyUrl is required for code challenge verification.");
        return;
      }
      if (result?.payload) {
        set(payload, result.payload, true);
        log("server payload", get(payload));
      }
      if (result?.verified === true) {
        log("verified");
        setState(State.VERIFIED);
        dispatch("verified", { payload: get(payload) });
        if (get(auto) === "onsubmit") {
          tick().then(() => {
            requestSubmit(get(elSubmitter));
          });
        }
      } else {
        setState(State.ERROR, result?.reason || "Verification failed.");
      }
      if (!get(config).disableAutoFocus) {
        getCheckboxElement()?.focus();
      }
    }
    function configure(newConfig) {
      Object.assign(get(userConfig), {
        ...Object.fromEntries(Object.entries(newConfig).filter(([_, value]) => value !== void 0))
      });
    }
    function getConfiguration() {
      return { ...get(config) };
    }
    function getState() {
      return get(currentState);
    }
    function hide() {
      set(visible, false);
    }
    function log(...args) {
      if (get(config).debug || args.some((a) => a instanceof Error)) {
        console[args[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${get(config).name}]`, ...args);
      }
    }
    function reset$1(newState = State.UNVERIFIED, err = null) {
      set(checked, false);
      set(error, err, true);
      set(payload, null);
      if (get(expirationTimeout)) {
        clearTimeout(get(expirationTimeout));
        set(expirationTimeout, null);
      }
      setState(newState);
    }
    function setState(newState, err = null) {
      set(currentState, newState, true);
      set(error, err, true);
      dispatch("statechange", { payload: get(payload), state: get(currentState) });
    }
    function show() {
      set(visible, true);
      tick().then(() => {
        updateUI();
      });
    }
    function updateUI() {
      switch (get(config).display) {
        case "floating":
          return repositionFloating();
      }
    }
    async function verify(options = {}) {
      const {
        concurrency = Math.max(1, get(config).workers),
        controller = new AbortController(),
        minDuration = get(config).minDuration
      } = options;
      const start = performance.now();
      let challenge = null;
      let solution = null;
      let isChallengeV12 = false;
      const hook = await callHook("onVerify", options);
      if (hook !== void 0) {
        return hook;
      }
      set(currentController, controller, true);
      reset$1(State.VERIFYING);
      try {
        if (!isSecureContext) {
          throw new Error("Secure context (HTTPS) required.");
        }
        if (get(config).mockError) {
          throw new Error("Mock error.");
        }
        if (get(config).test) {
          log("running test mode with null challenge");
          await delay(Math.max(0, minDuration - (performance.now() - start)));
          set(payload, btoa(JSON.stringify({ challenge: null, solution: null, test: true })), true);
          log("verified");
          setState(State.VERIFIED);
          dispatch("vefified", { payload: get(payload) });
          return { payload: get(payload) };
        }
        challenge = await fetchChallenge();
        if (!challenge) {
          throw new Error("Failed to fetch challenge.");
        }
        log("challenge", challenge);
        if ("configuration" in challenge) {
          log("re-configuring from challenge", challenge.configuration);
          configure(challenge.configuration);
        }
        if (challenge.parameters.expiresAt) {
          setChallengeExpiration(challenge.parameters.expiresAt);
        }
        isChallengeV12 = "_version" in challenge && challenge._version === 1;
        const createWorker = globalThis.$altcha.algorithms.get(challenge.parameters.algorithm);
        if (!createWorker) {
          throw new Error(`Unsupported algorithm ${challenge.parameters.algorithm}.`);
        }
        solution = await solveChallengeWorkers({
          challenge,
          concurrency,
          controller,
          createWorker,
          counterMode: isChallengeV12 ? "string" : "uint32",
          onOutOfMemory: (c) => {
            log("out of memory error received");
            dispatch("outofmemory");
            if (get(config).retryOnOutOfMemoryError && c > 1) {
              const retryConcurrency = Math.floor(c / 2);
              log(`retrying with ${retryConcurrency} workers...`);
              return retryConcurrency;
            }
          },
          timeout: get(config).timeout
        });
        if (get(currentController)?.signal.aborted) {
          reset$1();
          return null;
        }
        if (!solution) {
          throw new Error("Failed to find solution.");
        }
        log("solution", solution);
        await delay(Math.max(0, minDuration - (performance.now() - start)));
        set(codeChallenge, challenge.codeChallenge || get(config).codeChallenge || null, true);
        if (isChallengeV12) {
          set(payload, btoa(JSON.stringify(createPayloadV1(challenge, solution))), true);
        } else {
          set(
            payload,
            btoa(JSON.stringify({
              challenge: {
                parameters: challenge.parameters,
                signature: challenge.signature
              },
              solution
            })),
            true
          );
        }
        if (get(codeChallenge)) {
          log("requesting code verification");
          setState(State.CODE);
          dispatch("codechallenge", { codeChallenge: get(codeChallenge) });
        } else if (get(config).verifyUrl) {
          await verifyServer();
        } else {
          log("verified");
          setState(State.VERIFIED);
          dispatch("vefified", { payload: get(payload) });
        }
      } catch (err) {
        log("verification failed", err);
        setState(State.ERROR, String(err));
        return null;
      } finally {
        set(currentController, null);
      }
      return { challenge, payload: get(payload), solution };
    }
    var $$exports = {
      configure,
      getConfiguration,
      getState,
      hide,
      log,
      reset: reset$1,
      setState,
      show,
      updateUI,
      verify
    };
    var fragment = root();
    event("scroll", $document, onDocumentScroll);
    event("click", $document, onDocumentClick);
    event("pageshow", $window, onWindowPageshow);
    event("resize", $window, onWindowResize);
    var node = first_child(fragment);
    {
      var consequent = ($$anchor2) => {
        var div = root_1();
        append($$anchor2, div);
      };
      if_block(node, ($$render) => {
        if (get(config).display === "overlay" && get(visible)) $$render(consequent);
      });
    }
    var div_1 = sibling(node, 2);
    var node_1 = child(div_1);
    {
      var consequent_2 = ($$anchor2) => {
        var fragment_1 = root_2();
        var div_2 = first_child(fragment_1);
        var node_2 = sibling(div_2, 2);
        {
          var consequent_1 = ($$anchor3) => {
            var div_3 = root_3();
            html(div_3, () => document.querySelector(get(config).overlayContent)?.innerHTML, true);
            reset(div_3);
            append($$anchor3, div_3);
          };
          if_block(node_2, ($$render) => {
            if (get(config).overlayContent) $$render(consequent_1);
          });
        }
        delegated("click", div_2, onCloseClick);
        append($$anchor2, fragment_1);
      };
      if_block(node_1, ($$render) => {
        if (get(config).display === "overlay" && get(visible)) $$render(consequent_2);
      });
    }
    var div_4 = sibling(node_1, 2);
    var div_5 = child(div_4);
    var div_6 = child(div_5);
    var node_3 = child(div_6);
    {
      let $0 = /* @__PURE__ */ user_derived(() => get(config).display === "standard" && get(auto) !== "onsubmit" || get(currentState) === State.VERIFYING);
      component(node_3, () => get(CheckboxComponent), ($$anchor2, CheckboxComponent_1) => {
        CheckboxComponent_1($$anchor2, {
          get id() {
            return get(checkboxId);
          },
          name: "",
          get required() {
            return get($0);
          },
          get loading() {
            return get(loading);
          },
          get checked() {
            return get(checked);
          },
          onchange: onCheckboxChange,
          oninvalid: onCheckboxInvalid
        });
      });
    }
    var label = sibling(node_3, 2);
    var node_4 = child(label);
    {
      var consequent_3 = ($$anchor2) => {
        var text$1 = text();
        template_effect(() => set_text(text$1, get(strings).verificationRequired));
        append($$anchor2, text$1);
      };
      var consequent_4 = ($$anchor2) => {
        var text_1 = text();
        template_effect(() => set_text(text_1, get(strings).verifying));
        append($$anchor2, text_1);
      };
      var consequent_5 = ($$anchor2) => {
        var text_2 = text();
        template_effect(() => set_text(text_2, get(strings).verified));
        append($$anchor2, text_2);
      };
      var alternate = ($$anchor2) => {
        var text_3 = text();
        template_effect(() => set_text(text_3, get(strings).label));
        append($$anchor2, text_3);
      };
      if_block(node_4, ($$render) => {
        if (get(currentState) === State.CODE && get(codeChallenge)) $$render(consequent_3);
        else if (get(currentState) === State.VERIFYING) $$render(consequent_4, 1);
        else if (get(currentState) === State.VERIFIED) $$render(consequent_5, 2);
        else $$render(alternate, -1);
      });
    }
    reset(label);
    reset(div_6);
    var node_5 = sibling(div_6, 2);
    {
      var consequent_6 = ($$anchor2) => {
        Logo($$anchor2, {
          get strings() {
            return get(strings);
          }
        });
      };
      if_block(node_5, ($$render) => {
        if (get(showLogo)) $$render(consequent_6);
      });
    }
    reset(div_5);
    var node_6 = sibling(div_5, 2);
    {
      var consequent_7 = ($$anchor2) => {
        {
          let $0 = /* @__PURE__ */ user_derived(() => get(config).display === "bar" && get(showLogo));
          Footer($$anchor2, {
            get logo() {
              return get($0);
            },
            get strings() {
              return get(strings);
            }
          });
        }
      };
      if_block(node_6, ($$render) => {
        if (get(showFooter)) $$render(consequent_7);
      });
    }
    var node_7 = sibling(node_6, 2);
    {
      var consequent_8 = ($$anchor2) => {
        var div_7 = root_10();
        bind_this(div_7, ($$value) => set(elAnchorArrow, $$value), () => get(elAnchorArrow));
        append($$anchor2, div_7);
      };
      if_block(node_7, ($$render) => {
        if (get(config).display === "floating") $$render(consequent_8);
      });
    }
    var node_8 = sibling(node_7, 2);
    {
      var consequent_9 = ($$anchor2) => {
        var input_1 = root_11();
        remove_input_defaults(input_1);
        template_effect(() => {
          set_attribute(input_1, "name", get(config).name);
          set_value(input_1, get(payload));
        });
        append($$anchor2, input_1);
      };
      if_block(node_8, ($$render) => {
        if (!get(config).setCookie) $$render(consequent_9);
      });
    }
    reset(div_4);
    var node_9 = sibling(div_4, 2);
    {
      var consequent_12 = ($$anchor2) => {
        Popover($$anchor2, {
          get anchor() {
            return get(elRoot);
          },
          onClickOutside: () => {
            if (isSecureContext) {
              reset$1();
            }
          },
          get placement() {
            return get(config).popoverPlacement;
          },
          role: "alert",
          variant: "error",
          get dir() {
            return get(dir);
          },
          children: ($$anchor3, $$slotProps) => {
            var fragment_9 = comment();
            var node_10 = first_child(fragment_9);
            {
              var consequent_10 = ($$anchor4) => {
                var div_8 = root_14();
                append($$anchor4, div_8);
              };
              var consequent_11 = ($$anchor4) => {
                var div_9 = root_15();
                var text_4 = child(div_9, true);
                reset(div_9);
                template_effect(() => set_text(text_4, get(strings).expired));
                append($$anchor4, div_9);
              };
              var alternate_1 = ($$anchor4) => {
                var div_10 = root_16();
                var text_5 = child(div_10, true);
                reset(div_10);
                template_effect(() => {
                  set_attribute(div_10, "title", get(error));
                  set_text(text_5, get(strings).error);
                });
                append($$anchor4, div_10);
              };
              if_block(node_10, ($$render) => {
                if (!get(error) && !isSecureContext) $$render(consequent_10);
                else if (!get(error) && get(currentState) === State.EXPIRED) $$render(consequent_11, 1);
                else $$render(alternate_1, -1);
              });
            }
            append($$anchor3, fragment_9);
          },
          $$slots: { default: true }
        });
      };
      var consequent_14 = ($$anchor2) => {
        var fragment_10 = comment();
        var node_11 = first_child(fragment_10);
        key(node_11, () => get(codeChallenge), ($$anchor3) => {
          {
            let $0 = /* @__PURE__ */ user_derived(() => get(config).codeChallengeDisplay !== "standard");
            Popover($$anchor3, {
              get anchor() {
                return get(elRoot);
              },
              get backdrop() {
                return get($0);
              },
              get display() {
                return get(config).codeChallengeDisplay;
              },
              onClose: () => {
                reset$1();
              },
              get placement() {
                return get(config).popoverPlacement;
              },
              role: "dialog",
              get "aria-label"() {
                return get(strings).verificationRequired;
              },
              get dir() {
                return get(dir);
              },
              children: ($$anchor4, $$slotProps) => {
                var fragment_12 = root_19();
                var node_12 = first_child(fragment_12);
                Code(node_12, {
                  get audioUrl() {
                    return get(codeChallengeAudioUrl);
                  },
                  get imageUrl() {
                    return get(codeChallengeImageUrl);
                  },
                  onCancel: () => reset$1(),
                  onReload: () => verify(),
                  onSubmit: (code) => verifyServer(code),
                  get codeChallenge() {
                    return get(codeChallenge);
                  },
                  get config() {
                    return get(config);
                  },
                  get strings() {
                    return get(strings);
                  }
                });
                var node_13 = sibling(node_12, 2);
                {
                  var consequent_13 = ($$anchor5) => {
                    Footer($$anchor5, {
                      get logo() {
                        return get(showLogo);
                      },
                      get strings() {
                        return get(strings);
                      }
                    });
                  };
                  if_block(node_13, ($$render) => {
                    if (get(showFooter) && get(config).codeChallengeDisplay !== "standard") $$render(consequent_13);
                  });
                }
                append($$anchor4, fragment_12);
              },
              $$slots: { default: true }
            });
          }
        });
        append($$anchor2, fragment_10);
      };
      if_block(node_9, ($$render) => {
        if (get(error) || get(currentState) === State.EXPIRED || !isSecureContext) $$render(consequent_12);
        else if (get(codeChallenge) && get(currentState) === State.CODE) $$render(consequent_14, 1);
      });
    }
    reset(div_1);
    bind_this(div_1, ($$value) => set(elRoot, $$value), () => get(elRoot));
    template_effect(
      ($0) => {
        set_attribute(div_1, "data-state", get(currentState));
        set_attribute(div_1, "data-display", get(config).display || void 0);
        set_attribute(div_1, "data-placement", $0);
        set_attribute(div_1, "data-visible", get(visible) || void 0);
        set_attribute(div_1, "dir", get(dir));
        set_attribute(label, "for", get(checkboxId));
        div_1.dir = div_1.dir;
      },
      [() => getPlacement(get(config).display)]
    );
    append($$anchor, fragment);
    var $$pop = pop($$exports);
    $$cleanup();
    return $$pop;
  }
  delegate(["click"]);
  if (typeof window !== "undefined" && window.customElements) customElements.define("altcha-widget", create_custom_element(
    Widget,
    {
      auto: { type: "String" },
      challenge: { type: "String" },
      configuration: { type: "String" },
      display: { type: "String" },
      language: { type: "String" },
      name: { type: "String" },
      theme: { type: "String" },
      type: { type: "String" },
      workers: { type: "Number" }
    },
    [],
    [
      "configure",
      "getConfiguration",
      "getState",
      "hide",
      "log",
      "reset",
      "setState",
      "show",
      "updateUI",
      "verify"
    ]
  ));
  const jsContent$1 = `(function() {
  "use strict";
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
      throw new Error(\`Hex string must have an even length. Got: \${hex}\`);
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
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
  }
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
  async function solveChallenge(options) {
    const {
      challenge,
      controller,
      counterMode = "uint32",
      counterStart = 0,
      counterStep = 1,
      deriveKey: deriveKey2,
      timeout = 9e4
    } = options;
    const { nonce, keyPrefix, salt } = challenge.parameters;
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
      const { derivedKey } = await deriveKey2(
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
  function handler(options) {
    const { deriveKey: deriveKey2 } = options;
    let controller = void 0;
    self.onmessage = async (message) => {
      const { challenge, counterMode, counterStart, counterStep, timeout, type } = message.data;
      if (type === "abort") {
        controller?.abort();
      } else if (type === "work") {
        controller = new AbortController();
        let solution;
        try {
          solution = await solveChallenge({
            challenge,
            controller,
            counterStart,
            counterStep,
            deriveKey: deriveKey2,
            counterMode,
            timeout
          });
        } catch (err) {
          return self.postMessage({ error: err });
        }
        self.postMessage(solution);
      }
    };
  }
  function getDigest(algorithm) {
    switch (algorithm) {
      case "PBKDF2/SHA-512":
        return "SHA-512";
      case "PBKDF2/SHA-384":
        return "SHA-384";
      case "PBKDF2/SHA-256":
      default:
        return "SHA-256";
    }
  }
  async function deriveKey(parameters, salt, password) {
    const { algorithm, cost, keyLength = 32 } = parameters;
    const passwordKey = await crypto.subtle.importKey(
      "raw",
      password,
      { name: "PBKDF2" },
      false,
      ["deriveKey"]
    );
    const derivedKey = await crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt,
        iterations: cost,
        hash: getDigest(algorithm)
      },
      passwordKey,
      { name: "AES-GCM", length: keyLength * 8 },
      true,
      ["encrypt"]
    );
    return {
      derivedKey: new Uint8Array(await crypto.subtle.exportKey("raw", derivedKey))
    };
  }
  handler({
    deriveKey
  });
})();
`;
  const blob$1 = typeof self !== "undefined" && self.Blob && new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);", jsContent$1], { type: "text/javascript;charset=utf-8" });
  function WorkerWrapper$1(options) {
    let objURL;
    try {
      objURL = blob$1 && (self.URL || self.webkitURL).createObjectURL(blob$1);
      if (!objURL) throw "";
      const worker = new Worker(objURL, {
        name: options?.name
      });
      worker.addEventListener("error", () => {
        (self.URL || self.webkitURL).revokeObjectURL(objURL);
      });
      return worker;
    } catch (e) {
      return new Worker(
        "data:text/javascript;charset=utf-8," + encodeURIComponent(jsContent$1),
        {
          name: options?.name
        }
      );
    }
  }
  const jsContent = `(function() {
  "use strict";
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
      throw new Error(\`Hex string must have an even length. Got: \${hex}\`);
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
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
  }
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
  async function solveChallenge(options) {
    const {
      challenge,
      controller,
      counterMode = "uint32",
      counterStart = 0,
      counterStep = 1,
      deriveKey: deriveKey2,
      timeout = 9e4
    } = options;
    const { nonce, keyPrefix, salt } = challenge.parameters;
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
      const { derivedKey } = await deriveKey2(
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
  function handler(options) {
    const { deriveKey: deriveKey2 } = options;
    let controller = void 0;
    self.onmessage = async (message) => {
      const { challenge, counterMode, counterStart, counterStep, timeout, type } = message.data;
      if (type === "abort") {
        controller?.abort();
      } else if (type === "work") {
        controller = new AbortController();
        let solution;
        try {
          solution = await solveChallenge({
            challenge,
            controller,
            counterStart,
            counterStep,
            deriveKey: deriveKey2,
            counterMode,
            timeout
          });
        } catch (err) {
          return self.postMessage({ error: err });
        }
        self.postMessage(solution);
      }
    };
  }
  async function deriveKey(parameters, salt, password) {
    const { algorithm, keyLength = 32 } = parameters;
    const iterations = Math.max(1, parameters.cost);
    let data = void 0;
    let derivedKey = void 0;
    for (let i = 0; i < iterations; i++) {
      if (i === 0) {
        data = concatBuffers(salt, password);
      } else {
        data = derivedKey;
      }
      derivedKey = new Uint8Array(
        (await crypto.subtle.digest(algorithm, data)).slice(0, keyLength)
      );
    }
    return {
      parameters: {},
      derivedKey
    };
  }
  handler({
    deriveKey
  });
})();
`;
  const blob = typeof self !== "undefined" && self.Blob && new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);", jsContent], { type: "text/javascript;charset=utf-8" });
  function WorkerWrapper(options) {
    let objURL;
    try {
      objURL = blob && (self.URL || self.webkitURL).createObjectURL(blob);
      if (!objURL) throw "";
      const worker = new Worker(objURL, {
        name: options?.name
      });
      worker.addEventListener("error", () => {
        (self.URL || self.webkitURL).revokeObjectURL(objURL);
      });
      return worker;
    } catch (e) {
      return new Worker(
        "data:text/javascript;charset=utf-8," + encodeURIComponent(jsContent),
        {
          name: options?.name
        }
      );
    }
  }
  const css = ':root {\n  --altcha-border-color: var(--altcha-color-neutral);\n  --altcha-border-width: 1px;\n  --altcha-border-radius: 6px;\n  --altcha-color-base: light-dark(oklch(100% 0.00011 271.152), oklch(20.904% 0.00002 271.152));\n  --altcha-color-base-content: light-dark(\n  	oklch(20.904% 0.00002 271.152),\n  	oklch(100% 0.00011 271.152)\n  );\n  --altcha-color-error: oklch(51.284% 0.20527 28.678);\n  --altcha-color-error-content: oklch(100% 0.00011 271.152);\n  --altcha-color-neutral: light-dark(oklch(83.591% 0.0001 271.152), oklch(46.04% 0.00005 271.152));\n  --altcha-color-neutral-content: light-dark(\n  	oklch(46.76% 0.00005 271.152),\n  	oklch(100% 0.00011 271.152)\n  );\n  --altcha-color-primary: oklch(40.279% 0.2449 268.131);\n  --altcha-color-primary-content: oklch(100% 0.00011 271.152);\n  --altcha-color-success: oklch(55.748% 0.18968 142.511);\n  --altcha-color-success-content: oklch(100% 0.00011 271.152);\n  --altcha-checkbox-border-color: var(--altcha-color-neutral);\n  --altcha-checkbox-border-radius: 5px;\n  --altcha-checkbox-border-width: var(--altcha-border-width);\n  --altcha-checkbox-outline: 2px solid var(--altcha-checkbox-outline-color);\n  --altcha-checkbox-outline-color: light-dark(\n  	color-mix(in srgb, var(--altcha-color-primary) 20%, transparent),\n  	color-mix(in srgb, var(--altcha-color-primary) 60%, transparent)\n  );\n  --altcha-checkbox-outline-offset: 2px;\n  --altcha-checkbox-size: 22px;\n  --altcha-checkbox-transition-duration: var(--altcha-transition-duration);\n  --altcha-input-background-color: var(--altcha-color-base);\n  --altcha-input-border-radius: 3px;\n  --altcha-input-border-width: 1px;\n  --altcha-input-color: var(--altcha-color-base-content);\n  --altcha-max-width: 320px;\n  --altcha-padding: 0.75rem;\n  --altcha-popover-arrow-size: 6px;\n  --altcha-popover-color: var(--altcha-border-color);\n  --altcha-shadow: drop-shadow(3px 3px 6px oklch(0% 0 0 / 0.2));\n  --altcha-spinner-color: var(--altcha-color-base-content);\n  --altcha-switch-background-color: var(--altcha-color-neutral);\n  --altcha-switch-border-radius: calc(infinity * 1px);\n  --altcha-switch-height: var(--altcha-checkbox-size);\n  --altcha-switch-padding: 0.25rem;\n  --altcha-switch-width: calc(var(--altcha-checkbox-size) * 1.75);\n  --altcha-switch-toggle-border-radius: 100%;\n  --altcha-switch-toggle-color: var(--altcha-color-neutral-content);\n  --altcha-switch-toggle-size: calc(\n  	var(--altcha-switch-height) - calc(var(--altcha-switch-padding) * 2)\n  );\n  --altcha-transition-duration: 0.6s;\n  --altcha-z-index: 99999999;\n  --altcha-z-index-popover: 999999999;\n}\n\n.altcha {\n  all: revert-layer;\n  display: none;\n  font-family: inherit;\n  font-size: inherit;\n  position: relative;\n}\n.altcha[data-visible] {\n  display: block;\n}\n.altcha-popover, .altcha-popover * {\n  all: revert-layer;\n  box-sizing: border-box;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: 1.25;\n}\n.altcha * {\n  all: revert-layer;\n  box-sizing: border-box;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: 1.25;\n}\n.altcha a, .altcha-popover a {\n  color: currentColor;\n  text-decoration: none;\n}\n.altcha a:hover, .altcha-popover a:hover {\n  color: currentColor;\n}\n.altcha-main {\n  align-items: start;\n  background-color: var(--altcha-color-base);\n  border: var(--altcha-border-width, 1px) solid var(--altcha-border-color);\n  border-radius: var(--altcha-border-radius, 0);\n  color: var(--altcha-color-base-content);\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  justify-content: space-between;\n  padding: var(--altcha-padding);\n  max-width: var(--altcha-max-width, 100%);\n}\n.altcha-main > * {\n  display: flex;\n  width: 100%;\n}\n.altcha-main > *:first-child {\n  flex-grow: 1;\n}\n.altcha-checkbox-wrap {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1;\n  gap: 0.5rem;\n}\n.altcha-checkbox-wrap > * {\n  display: flex;\n}\n.altcha-logo {\n  opacity: 0.7;\n}\n.altcha-footer {\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  font-size: 0.7rem;\n  opacity: 0.7;\n}\n.altcha-error {\n  font-size: 0.85rem;\n}\n.altcha-button {\n  align-items: center;\n  background: var(--altcha-color-primary);\n  border: var(--altcha-input-border-width) solid var(--altcha-color-primary);\n  border-radius: var(--altcha-input-border-radius);\n  color: var(--altcha-color-primary-content);\n  cursor: pointer;\n  display: flex;\n  font-size: 0.9rem;\n  gap: 0.5rem;\n  padding: 0.35rem;\n}\n.altcha-button:focus {\n  border-color: var(--altcha-color-primary);\n  outline: var(--altcha-checkbox-outline);\n  outline-offset: var(--altcha-checkbox-outline-offset);\n}\n.altcha-button > .altcha-spinner, .altcha-button > svg {\n  height: 20px;\n  width: 20px;\n}\n.altcha-button-secondary {\n  background: transparent;\n  border-color: var(--altcha-color-neutral);\n  color: var(--altcha-color-neutral-content);\n}\n.altcha-input {\n  background: var(--altcha-input-background-color);\n  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);\n  border-radius: var(--altcha-input-border-radius);\n  color: var(--altcha-input-color);\n  flex-grow: 1;\n  font-size: 1rem;\n  min-width: 0;\n  padding: 0.25rem;\n  width: auto;\n}\n.altcha-input:focus {\n  border-color: var(--altcha-color-primary);\n  outline: var(--altcha-checkbox-outline);\n  outline-offset: var(--altcha-checkbox-outline-offset);\n}\n.altcha-spinner {\n  animation: altcha-rotate 0.6s linear infinite;\n  border-radius: 100%;\n  border: var(--altcha-checkbox-border-width) solid var(--altcha-spinner-color);\n  border-bottom-color: transparent;\n  border-right-color: transparent;\n  opacity: 0.5;\n}\n.altcha-popover {\n  background-color: var(--altcha-color-base);\n  border: var(--altcha-border-width) solid var(--altcha-border-color);\n  border-radius: var(--altcha-border-radius);\n  color: var(--altcha-color-base-content);\n  filter: var(--altcha-shadow);\n  position: absolute;\n  left: calc(var(--altcha-padding) / 2);\n  max-width: calc(var(--altcha-max-width) - var(--altcha-padding));\n  top: calc(var(--altcha-padding) + var(--altcha-checkbox-size) + var(--altcha-popover-arrow-size));\n  z-index: var(--altcha-z-index-popover);\n}\n.altcha-popover-arrow {\n  border: var(--altcha-popover-arrow-size) solid transparent;\n  border-bottom-color: var(--altcha-popover-color);\n  content: "";\n  height: 0;\n  left: calc(var(--altcha-checkbox-size) / 2);\n  position: absolute;\n  top: calc(var(--altcha-popover-arrow-size) * -2);\n  width: 0;\n}\n.altcha-popover-content {\n  max-height: 100dvh;\n  overflow: auto;\n  padding: var(--altcha-padding);\n}\n.altcha-popover[data-top=true][data-display=standard] {\n  bottom: calc(100% - (var(--altcha-padding) - var(--altcha-popover-arrow-size)));\n  top: auto;\n}\n.altcha-popover[data-top=true][data-display=standard] .altcha-popover-arrow {\n  border-bottom-color: transparent;\n  border-top-color: var(--altcha-popover-color);\n  bottom: calc(var(--altcha-popover-arrow-size) * -2);\n  top: auto;\n}\n.altcha-popover[data-variant=error] {\n  --altcha-popover-color: var(--altcha-color-error);\n  background-color: var(--altcha-color-error);\n  border-color: var(--altcha-color-error);\n  color: var(--altcha-color-error-content);\n}\n.altcha-popover[data-variant=error] .altcha-popover-content {\n  padding: calc(var(--altcha-padding) / 1.5) var(--altcha-padding);\n}\n.altcha-popover[data-display=overlay] {\n  animation: altcha-overlay-slidein 0.5s forwards;\n  left: 50%;\n  position: fixed;\n  top: 45%;\n  transform: translate(-50%, -50%);\n  width: var(--altcha-max-width);\n  z-index: var(--altcha-z-index);\n}\n.altcha-popover[data-display=bottomsheet] {\n  animation: altcha-bottomsheet-slideup 0.5s forwards;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom: 0;\n  bottom: -100%;\n  left: 50%;\n  position: fixed;\n  top: auto;\n  transform: translate(-50%, 0);\n  width: var(--altcha-max-width);\n  z-index: var(--altcha-z-index);\n}\n.altcha-popover[data-display=bottomsheet] .altcha-popover-content {\n  padding-bottom: calc(var(--altcha-padding) * 2);\n}\n.altcha-popover-backdrop {\n  background: var(--altcha-color-base-content);\n  bottom: 0;\n  left: 0;\n  opacity: 0.1;\n  position: fixed;\n  right: 0;\n  top: 0;\n  transition: opacity 0.5s;\n  z-index: var(--altcha-z-index);\n}\n.altcha-popover-close {\n  color: var(--altcha-color-base-content);\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1rem;\n  height: 1.25rem;\n  line-height: 0.95;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  text-shadow: 0 0 1px var(--altcha-color-base);\n  top: -1.5rem;\n  width: 1.25rem;\n  z-index: var(--altcha-z-index);\n}\n[dir=rtl] .altcha-popover {\n  left: auto;\n  right: calc(var(--altcha-padding) / 2);\n}\n[dir=rtl] .altcha-popover-arrow {\n  left: auto;\n  right: calc(var(--altcha-checkbox-size) / 2);\n}\n[dir=rtl] .altcha-popover-close {\n  left: 0;\n  right: auto;\n}\n.altcha-popover[data-display=bottomsheet] .altcha-footer, .altcha-popover[data-display=overlay] .altcha-footer {\n  align-items: center;\n  justify-content: center;\n  padding-top: 1rem;\n  gap: 0.5rem;\n}\n.altcha-popover[data-display=bottomsheet] .altcha-footer svg, .altcha-popover[data-display=overlay] .altcha-footer svg {\n  height: 18px;\n  width: 18px;\n  vertical-align: middle;\n}\n.altcha-code-challenge > form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.altcha-code-challenge-title {\n  font-weight: 600;\n}\n.altcha-code-challenge-text {\n  font-size: 0.85rem;\n}\n.altcha-code-challenge-image {\n  background: white;\n  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);\n  border-radius: var(--altcha-input-border-radius);\n  object-fit: contain;\n  height: 50px;\n}\n.altcha-code-challenge-row {\n  display: flex;\n  gap: 0.5rem;\n}\n.altcha-code-challenge-buttons {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-top: var(--altcha-padding);\n  justify-content: space-between;\n}\n.altcha-code-challenge-buttons button {\n  justify-content: center;\n  width: 100%;\n}\n.altcha-checkbox {\n  cursor: pointer;\n  height: var(--altcha-checkbox-size);\n  position: relative;\n  width: var(--altcha-checkbox-size);\n}\n.altcha-checkbox input {\n  appearance: none;\n  background: var(--altcha-input-background-color);\n  border: var(--altcha-checkbox-border-width, 2px) solid var(--altcha-checkbox-border-color);\n  border-radius: var(--altcha-checkbox-border-radius);\n  height: var(--altcha-checkbox-size);\n  left: 0;\n  margin: 0;\n  outline: none;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  width: var(--altcha-checkbox-size);\n}\n.altcha-checkbox input:before {\n  border-radius: var(--altcha-checkbox-border-radius);\n  content: "";\n  width: 100%;\n  height: 100%;\n  background: var(--altcha-color-neutral);\n  display: block;\n  transform: scale(0);\n}\n.altcha-checkbox input:focus {\n  outline: var(--altcha-checkbox-outline);\n  outline-offset: var(--altcha-checkbox-outline-offset);\n}\n.altcha-checkbox input:checked {\n  background-color: var(--altcha-color-success);\n  border-color: var(--altcha-color-success);\n}\n.altcha-checkbox input:checked::before {\n  background-color: var(--altcha-color-success);\n  opacity: 0;\n  transform: scale(2.2);\n  transition: all var(--altcha-checkbox-transition-duration) ease;\n  transition-delay: 0.1s;\n}\n.altcha-checkbox svg {\n  --altcha-radio-svg-size: calc(var(--altcha-checkbox-size) * 0.5);\n  --altcha-radio-svg-offset: calc(var(--altcha-checkbox-size) * 0.25);\n  fill: none;\n  left: var(--altcha-radio-svg-offset);\n  height: var(--altcha-radio-svg-size);\n  opacity: 0;\n  position: absolute;\n  stroke: currentColor;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 16px;\n  stroke-dashoffset: 16px;\n  top: var(--altcha-radio-svg-offset);\n  transform: translate3d(0, 0, 0);\n  width: var(--altcha-radio-svg-size);\n}\n.altcha-checkbox input:checked + svg {\n  color: var(--altcha-color-success-content);\n  opacity: 1;\n  stroke-dashoffset: 0;\n  transition: all var(--altcha-checkbox-transition-duration) ease;\n  transition-delay: 0.1s;\n}\n.altcha-checkbox-spinner {\n  display: none;\n  left: 0;\n  height: var(--altcha-checkbox-size);\n  position: absolute;\n  top: 0;\n  width: var(--altcha-checkbox-size);\n}\n.altcha-checkbox[data-loading=true] input {\n  appearance: none;\n  opacity: 0;\n  pointer-events: none;\n}\n.altcha-checkbox[data-loading=true] .altcha-checkbox-spinner {\n  display: block;\n}\n.altcha-checkbox-native {\n  height: var(--altcha-checkbox-size);\n  position: relative;\n  width: var(--altcha-checkbox-size);\n}\n.altcha-checkbox-native input {\n  height: var(--altcha-checkbox-size);\n  margin: 0;\n  width: var(--altcha-checkbox-size);\n}\n.altcha-checkbox-native input:focus {\n  outline: var(--altcha-checkbox-outline);\n  outline-offset: var(--altcha-checkbox-outline-offset);\n}\n.altcha-checkbox-native-spinner {\n  display: none;\n  left: 0;\n  height: var(--altcha-checkbox-size);\n  position: absolute;\n  top: 0;\n  width: var(--altcha-checkbox-size);\n}\n.altcha-checkbox-native[data-loading=true] input {\n  appearance: none;\n  opacity: 0;\n  pointer-events: none;\n}\n.altcha-checkbox-native[data-loading=true] .altcha-checkbox-native-spinner {\n  display: block;\n}\n.altcha-switch {\n  align-items: center;\n  border-radius: var(--altcha-switch-border-radius);\n  background-color: var(--altcha-switch-background-color);\n  cursor: pointer;\n  display: flex;\n  height: var(--altcha-switch-height);\n  padding: var(--altcha-switch-padding);\n  position: relative;\n  width: var(--altcha-switch-width);\n}\n.altcha-switch:focus-within {\n  outline: var(--altcha-checkbox-outline);\n  outline-offset: var(--altcha-checkbox-outline-offset);\n}\n.altcha-switch input {\n  appearance: none;\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.altcha-switch-toggle {\n  align-items: center;\n  background-color: var(--altcha-switch-toggle-color);\n  border-radius: var(--altcha-switch-toggle-border-radius);\n  display: flex;\n  height: var(--altcha-switch-toggle-size);\n  justify-content: center;\n  left: var(--altcha-switch-padding);\n  position: absolute;\n  transition: width 150ms ease-out, left 150ms ease-out;\n  width: var(--altcha-switch-toggle-size);\n}\n.altcha-switch-spinner {\n  display: none;\n  height: var(--altcha-switch-toggle-size);\n  width: var(--altcha-switch-toggle-size);\n}\n.altcha-switch[data-loading=true] {\n  pointer-events: none;\n}\n.altcha-switch[data-loading=true] .altcha-switch-spinner {\n  display: block;\n}\n.altcha-switch[data-loading=true] .altcha-switch-toggle {\n  background-color: transparent;\n  left: calc(50% - var(--altcha-switch-toggle-size) / 2);\n}\n[data-state=verified] .altcha-switch {\n  --altcha-switch-background-color: var(--altcha-color-success);\n}\n[data-state=verified] .altcha-switch-toggle {\n  background-color: var(--altcha-color-success-content);\n  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));\n}\n[dir=rtl] .altcha-switch-toggle {\n  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));\n}\n[dir=rtl][data-state=verified] .altcha-switch-toggle {\n  left: var(--altcha-switch-padding);\n}\n.altcha-floating-arrow {\n  border: 6px solid transparent;\n  border-bottom-color: var(--altcha-border-color);\n  content: "";\n  height: 0;\n  left: 12px;\n  position: absolute;\n  top: -12px;\n  width: 0;\n}\n.altcha-overlay-backdrop {\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  transition: opacity var(--altcha-transition-duration);\n  z-index: var(--altcha-z-index);\n}\n.altcha-overlay-close {\n  display: inline-block;\n  color: currentColor;\n  cursor: pointer;\n  font-size: 1rem;\n  height: 1rem;\n  line-height: 0.85;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  text-shadow: 0 0 1px var(--altcha-color-base);\n  top: -1.5rem;\n  width: 1rem;\n  z-index: var(--altcha-z-index);\n}\n.altcha[data-display=overlay] {\n  animation: altcha-overlay-slidein var(--altcha-transition-duration) forwards;\n  filter: var(--altcha-shadow);\n  left: 50%;\n  opacity: 0;\n  position: fixed;\n  top: 45%;\n  transform: translate(-50%, -50%);\n  z-index: var(--altcha-z-index);\n}\n.altcha[data-display=overlay] .altcha-main {\n  width: var(--altcha-max-width);\n}\n.altcha[data-display=floating] {\n  display: none;\n  filter: var(--altcha-shadow);\n  left: var(--altcha-floating-left, -100%);\n  position: fixed;\n  top: var(--altcha-floating-top, -100%);\n  z-index: var(--altcha-z-index);\n}\n.altcha[data-display=floating] .altcha-main {\n  width: var(--altcha-max-width);\n}\n.altcha[data-display=floating][data-placement=top] .altcha-floating-arrow {\n  border-bottom-color: transparent;\n  border-top-color: var(--altcha-border-color);\n  bottom: -12px;\n  top: auto;\n}\n.altcha[data-display=floating][data-visible] {\n  display: flex;\n}\n.altcha[data-display=bar] {\n  bottom: -100%;\n  filter: var(--altcha-shadow);\n  left: 0;\n  position: fixed;\n  right: 0;\n  transition: bottom var(--altcha-transition-duration), top var(--altcha-transition-duration);\n  z-index: var(--altcha-z-index);\n}\n.altcha[data-display=bar] .altcha-main {\n  align-items: center;\n  border-radius: 0;\n  border-width: var(--altcha-border-width) 0 0 0;\n  flex-direction: row;\n  max-width: 100% !important;\n}\n.altcha[data-display=bar] .altcha-main > * {\n  width: auto;\n}\n.altcha[data-display=bar][data-placement=top] {\n  bottom: auto;\n  top: -100%;\n}\n.altcha[data-display=bar][data-placement=top] .altcha-main {\n  border-width: 0 0 var(--altcha-border-width) 0;\n}\n.altcha[data-display=bar][data-placement=bottom]:not([data-state=unverified]) {\n  bottom: 0;\n}\n.altcha[data-display=bar][data-placement=top]:not([data-state=unverified]) {\n  top: 0;\n}\n.altcha[data-display=invisible] {\n  display: none;\n}\n\n@keyframes altcha-rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes altcha-bottomsheet-slideup {\n  100% {\n    bottom: 0;\n  }\n}\n@keyframes altcha-overlay-slidein {\n  100% {\n    opacity: 1;\n    top: 50%;\n  }\n}';
  injectCss(css);
  $altcha.algorithms.set("SHA-256", () => new WorkerWrapper());
  $altcha.algorithms.set("SHA-384", () => new WorkerWrapper());
  $altcha.algorithms.set("SHA-512", () => new WorkerWrapper());
  $altcha.algorithms.set("PBKDF2/SHA-256", () => new WorkerWrapper$1());
  $altcha.algorithms.set("PBKDF2/SHA-384", () => new WorkerWrapper$1());
  $altcha.algorithms.set("PBKDF2/SHA-512", () => new WorkerWrapper$1());
}));
