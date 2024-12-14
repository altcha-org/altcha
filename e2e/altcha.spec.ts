import { test, expect } from '@playwright/test';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

test.only('should be rendered', async ({ page }) => {
  await page.goto('./e2e/index.html');
  const cmp = page.locator('#test-render .altcha').first();
  console.log(await cmp.innerHTML())
  await expect(cmp).toContainText(/Protected by/);
});

test('should be with a custom label', async ({ page }) => {
  await page.goto('./e2e/index.html');
  const cmp = page.locator('#test-label .altcha').first();
  await expect(cmp).toContainText(/custom label/);
});

test('should be without the logo', async ({ page }) => {
  await page.goto('./e2e/index.html');
  expect(await page.locator('#test-hidelogo .altcha-logo').first().count()).toBe(0);
});

test('should be without the footer', async ({ page }) => {
  await page.goto('./e2e/index.html');
  expect(await page.locator('#test-hidefooter .altcha-footer').first().count()).toBe(0);
});

test('should show expired error', async ({ page }) => {
  await page.goto('./e2e/index.html');
  await delay(100);
  expect(await page.locator('#test-expire .altcha-error').first().count()).toBe(0);
  await delay(2000);
  expect(await page.locator('#test-expire .altcha-error').first().count()).toBe(1);
  const cmp = page.locator('#test-expire .altcha').first();
  await expect(cmp).toContainText(/expired/);
});

test('should set options via configure()', async ({ page }) => {
  await page.goto('./e2e/index.html');
  const cmp = page.locator('#test-configure .altcha').first();
  await expect(cmp).toContainText(/configured label/);
  expect(await page.locator('#test-configure .altcha-logo').first().count()).toBe(0);
});

test('should trigger verification and emit verified event', async ({ page }) => {
  await page.goto('./e2e/index.html');
  const cmp = page.locator('#test-verification-altcha').first();
  const ok = await cmp.evaluate(cmpElement => {
    return new Promise((resolve) => {
      cmpElement.addEventListener('verified', () => {
        const form = cmpElement.closest('form');
        const formData = new FormData(form!);
        const solution = formData.get('alctha-verification');
        resolve(!!solution);
      });
      // @ts-expect-error typings
      cmpElement.verify();
      setTimeout(() => resolve(false), 5000);
    })
  });
  expect(ok).toBe(true);
});


