const noop = () => {
};
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
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
  function set(new_value) {
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
    set(fn(
      /** @type {T} */
      value
    ));
  }
  function subscribe(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set, update) || noop;
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
  return { set, update, subscribe };
}
function get(store2) {
  let value;
  subscribe_to_store(store2, (_) => value = _)();
  return value;
}
let untracking = false;
function untrack(fn) {
  var previous_untracking = untracking;
  try {
    untracking = true;
    return fn();
  } finally {
    untracking = previous_untracking;
  }
}
function store(defaultValue) {
  const scope = {
    get: (name) => {
      return get(scope.store)[name];
    },
    set: (name, value) => {
      if (typeof name === "string") {
        Object.assign(get(scope.store), {
          [name]: value
        });
      } else {
        Object.assign(get(scope.store), name);
      }
      scope.store.set(get(scope.store));
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
  ariaLinkLabel: "Altcha (oficiálna webová stránka)",
  enterCode: "Zadajte kód",
  enterCodeAria: "Zadajte kód, ktorý počujete. Stlačením medzerníka prehráte zvuk.",
  error: "Verifikácia zlyhala. Skúste to znova neskôr.",
  expired: "Verifikácia vypršala. Skúste to znova.",
  footer: 'Chránené <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (oficiálna webová stránka)">ALTCHA</a>',
  getAudioChallenge: "Získať audio výzvu",
  label: "Nie som robot",
  loading: "Načítava sa...",
  reload: "Obnoviť",
  verify: "Verifikovať",
  verificationRequired: "Vyžaduje sa overenie!",
  verified: "Verifikované",
  verifying: "Prebieha verifikácia...",
  waitAlert: "Prebieha verifikácia... prosím čakajte.",
  cancel: "Zrušiť",
  enterCodeFromImage: "Na pokračovanie, prosím, zadajte kód z obrázka nižšie."
};
globalThis.$altcha.i18n.set("sk", i18n);
