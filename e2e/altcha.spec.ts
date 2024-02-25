import { test, expect } from '@playwright/test';

test('should be rendered', async ({ page }) => {
  await page.goto('./e2e/index.html');
  const cmp = page.locator('#test-render .altcha').first();
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

test('should set options via configure()', async ({ page }) => {
  await page.goto('./e2e/index.html');
  const cmp = page.locator('#test-configure .altcha').first();
  await expect(cmp).toContainText(/configured label/);
  expect(await page.locator('#test-configure .altcha-logo').first().count()).toBe(0);
});



