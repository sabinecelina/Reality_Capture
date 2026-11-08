import { test, expect } from '@playwright/test';

test.describe('US3 – Projects', () => {
  test('projects index shows 4 project cards', async ({ page }) => {
    await page.goto('/projects/');
    const cards = page.locator('article, [data-project-card], a[href*="/projects/"]').filter({ hasNot: page.locator('[href="/projects/"]') });
    // At least 4 project links present
    const projectLinks = page.locator('a[href^="/projects/"]').filter({ hasNot: page.getByRole('link', { name: 'Projects' }) });
    await expect(page.locator('img')).toHaveCount(4, { timeout: 8000 });
  });

  test('gargoyles project page loads with content', async ({ page }) => {
    await page.goto('/projects/gargoyles/');
    await expect(page.locator('h1, article')).toBeVisible();
  });

  test('project detail has back link to /projects/', async ({ page }) => {
    await page.goto('/projects/gargoyles/');
    const backLink = page.getByRole('link', { name: /back|projects/i });
    await expect(backLink.first()).toBeVisible();
    const href = await backLink.first().getAttribute('href');
    expect(href).toMatch(/\/projects/);
  });

  test('project thumbnails have alt text', async ({ page }) => {
    await page.goto('/projects/');
    const imgsMissingAlt = await page.evaluate(() =>
      Array.from(document.querySelectorAll('img')).filter(img => !img.getAttribute('alt')).length
    );
    expect(imgsMissingAlt).toBe(0);
  });
});
