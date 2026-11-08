import { test, expect } from '@playwright/test';

test.describe('US2 – Blog', () => {
  test('blog index lists posts sorted newest first', async ({ page }) => {
    await page.goto('/blog/');
    const cards = page.locator('article, [data-post-card], a[href*="/blog/"]');
    await expect(cards.first()).toBeVisible();
    // The newest post slug should appear before the oldest
    const html = await page.content();
    const newestIdx = html.indexOf('gentle-introduction-to-sfm');
    const oldestIdx = html.indexOf('easy-introduction-nerf');
    expect(newestIdx).toBeLessThan(oldestIdx);
  });

  test('blog index shows at least 5 posts', async ({ page }) => {
    await page.goto('/blog/');
    const links = page.locator('a[href*="/blog/2"]');
    await expect(links).toHaveCount(5);
  });

  test('individual blog post renders content', async ({ page }) => {
    await page.goto('/blog/2024-12-19-easy-introduction-nerf/');
    await expect(page.locator('h1, article')).toBeVisible();
    await expect(page).toHaveURL(/\/blog\//);
  });

  test('blog post has back-to-blog link', async ({ page }) => {
    await page.goto('/blog/2024-12-19-easy-introduction-nerf/');
    await expect(page.getByRole('link', { name: /back|blog/i })).toBeVisible();
  });

  test('images fit viewport at 375px', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/blog/2025-03-01-cutting-edge-3dgs/');
    const overflowingImgs = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs.filter(img => img.getBoundingClientRect().right > window.innerWidth + 1).length;
    });
    expect(overflowingImgs).toBe(0);
  });
});
