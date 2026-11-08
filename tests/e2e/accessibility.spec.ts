import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pagesToAudit = [
  { name: 'home', url: '/' },
  { name: 'blog index', url: '/blog/' },
  { name: 'blog post', url: '/blog/2024-12-19-easy-introduction-nerf/' },
  { name: 'projects', url: '/projects/' },
  { name: 'cv', url: '/cv/' },
];

for (const { name, url } of pagesToAudit) {
  test(`${name} has no critical axe WCAG 2.1 AA violations`, async ({ page }) => {
    await page.goto(url);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const critical = results.violations.filter(v => v.impact === 'critical' || v.impact === 'serious');
    if (critical.length > 0) {
      console.error(`Axe violations on ${url}:`);
      critical.forEach(v => {
        console.error(`  [${v.impact}] ${v.id}: ${v.description}`);
        v.nodes.forEach(n => console.error(`    Node: ${n.html}`));
      });
    }
    expect(critical).toHaveLength(0);
  });
}
