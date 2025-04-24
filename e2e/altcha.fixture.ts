import { ClientFunction, Selector } from 'testcafe';

fixture`ALTCHA`.page`./index.html`.clientScripts([
  {
    path: '../dist/altcha.umd.cjs',
  },
]);

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

test('should render the widget', async (t) => {
  await t.expect(Selector('#test-render .altcha').exists).ok();
});

test('should render the widget with a custom label', async (t) => {
  await t
    .expect(Selector('#test-label .altcha').withText('custom label').exists)
    .ok();
});

test('should render the widget without the logo', async (t) => {
  await t.expect(Selector('#test-hidelogo .altcha-logo').exists).notOk();
});

test('should render the widget without the footer', async (t) => {
  await t.expect(Selector('#test-hidefooter .altcha-footer').exists).notOk();
});

test('should render the widget and display expired error', async (t) => {
  delay(2000);
  await t.expect(Selector('#test-expire .altcha-error').exists).ok();
  await t
    .expect(Selector('#test-expire .altcha-error').withText('expired').exists)
    .ok();
});

test('should set options via configure()', async (t) => {
  await t
    .expect(
      Selector('#test-configure .altcha').withText('configured label').exists
    )
    .ok();
  await t.expect(Selector('#test-configure .altcha-logo').exists).notOk();
});

test('should trigger verification and emit verified event', async (t) => {
  const ok = await ClientFunction(() => {
    return new Promise((resolve, reject) => {
      const el = document.querySelector('#test-verification-altcha');
      if (!el) return resolve(false);

      el.addEventListener('verified', () => {
        const form = el.closest('form');
        const formData = new FormData(form!);
        const solution = formData.get('altcha-verification');
        resolve(!!solution);
      });

      // @ts-expect-error - Force verification
      el.verify();

      setTimeout(reject, 10_000);
    });
  })();

  await t.expect(ok).ok();
});

test('should trigger `code` event and display the code challenge dialog', async (t) => {
  const ok = await ClientFunction(() => {
    return new Promise((resolve, reject) => {
      const el = document.querySelector('#test-code-challenge-altcha');
      if (!el) return resolve(false);

      el.addEventListener('code', () => {
        resolve(
          !!el.querySelector('.altcha-code-challenge-image')
          && !!el.querySelector('.altcha-code-challenge-input')
        );
      });

      // @ts-expect-error - Force verification
      el.verify();

      setTimeout(reject, 5000);
    });
  })();

  await t.expect(ok).ok();
});