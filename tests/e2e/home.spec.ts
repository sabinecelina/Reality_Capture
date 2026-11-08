import { test, expect } from '@playwright/test';

test.describe('US1 – Home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero with name and CTA links', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Sabine');
    await expect(page.getByRole('link', { name: /blog/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /projects/i }).first()).toBeVisible();
  });

  test('contains a video element', async ({ page }) => {
    await expect(page.locator('video')).toBeVisible();
  });

  test('no horizontal overflow at 375px viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
  });

  test('page title includes site name', async ({ page }) => {
    await expect(page).toHaveTitle(/Reality Capture|Sabine Schleise/i);
  });
});
