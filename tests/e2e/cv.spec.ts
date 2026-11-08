import { test, expect } from '@playwright/test';

test.describe('US4 – CV & Thesis pages', () => {
  test('CV page has all major sections', async ({ page }) => {
    await page.goto('/cv/');
    const text = await page.locator('body').innerText();
    expect(text).toMatch(/SKILLS/i);
    expect(text).toMatch(/EXPERIENCE/i);
    expect(text).toMatch(/EDUCATION/i);
  });

  test('CV page has PDF download link', async ({ page }) => {
    await page.goto('/cv/');
    const pdfLink = page.locator('a[href*="CV.pdf"]');
    await expect(pdfLink).toBeVisible();
  });

  test('thesis page contains video elements', async ({ page }) => {
    await page.goto('/thesis/');
    await expect(page.locator('video').first()).toBeVisible();
  });

  test('bachelor page has abstract content', async ({ page }) => {
    await page.goto('/bachelor/');
    const text = await page.locator('body').innerText();
    expect(text.toLowerCase()).toMatch(/abstract|introduction|approach/);
  });
});
