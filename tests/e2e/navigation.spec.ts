import { test, expect } from '@playwright/test';

test.describe('US5 – Navigation', () => {
  test('desktop nav links are visible at 1280px', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    await expect(page.getByRole('link', { name: /blog/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /projects/i }).first()).toBeVisible();
  });

  test('hamburger button is visible at 375px and opens menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    const hamburger = page.locator('button[aria-expanded], button[aria-label*="menu" i], button[aria-label*="nav" i]');
    await expect(hamburger.first()).toBeVisible();
    await hamburger.first().click();
    // After clicking, the mobile menu should be open
    const expanded = await hamburger.first().getAttribute('aria-expanded');
    expect(expanded).toBe('true');
  });

  test('mobile menu shows all nav links after opening', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    const hamburger = page.locator('button[aria-expanded]');
    await hamburger.first().click();
    await expect(page.getByRole('link', { name: /blog/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /projects/i }).first()).toBeVisible();
  });

  test('pressing Escape closes mobile menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    const hamburger = page.locator('button[aria-expanded]');
    await hamburger.first().click();
    await page.keyboard.press('Escape');
    const expanded = await hamburger.first().getAttribute('aria-expanded');
    expect(expanded).toBe('false');
  });

  test('current page nav link is marked active', async ({ page }) => {
    await page.goto('/blog/');
    const activeLink = page.locator('a[aria-current="page"], a.font-semibold[href="/blog/"]');
    await expect(activeLink.first()).toBeVisible();
  });

  test('theme toggle button is present', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('button[aria-label*="theme" i], button[aria-label*="dark" i], button[aria-label*="light" i]');
    await expect(toggle.first()).toBeVisible();
  });
});
