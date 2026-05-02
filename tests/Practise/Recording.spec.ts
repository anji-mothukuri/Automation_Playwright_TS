import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="item-4-title-link"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});


// npx playwright codegen --help
// npx playwright codegen
// npx playwright codegen --target javascript
// npx playwright codegen --browser firefox (default chromium)
// npx playwright codegen --device="iphone 11"
// npx playwright codegen -o "./tests/recordingcodegen.spec.cs"
// npx playwright codegen --color-scheme=dark
// npx playwright codegen --viewport-size = 800,600


