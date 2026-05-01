import { test, expect, BrowserContext } from '@playwright/test';
import path from 'node:path';


// let context: BrowserContext;
// let page;
// test.beforeAll(async({browser}) => {
//   context = await browser.newContext();
//   await context.tracing.start({snapshots: true, screenshots: true});
  
//   page = await context.newPage();
// });
// test.afterAll(async() => {
//   await context.tracing.stop({path:"./test-results"});
// });

test('Tracing', async ({ page, context }) => {

    // start tracing
  //await context.tracing.start({screenshots: true, snapshots:true});

  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="item-4-title-link"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  //await page.locator('[data-test="logout-sidebar-link"]').click();

  //set wrong locator
  await page.locator('[data-test="logout-sidebar-link-test"]').click();

  //stop tracing
  //await context.tracing.stop({path: "./test-results/trace1.zip"});
});


// npx playwright show-trace "./test-results/trace.zip"

// config
// retries : 1
// trace : "on-first-retry";    (on, off, on-first-retry, on-all-retries, retain-on-failure)
// timeout : 10*1000


