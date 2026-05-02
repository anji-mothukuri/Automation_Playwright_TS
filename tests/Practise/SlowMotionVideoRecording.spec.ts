import { test, expect, chromium } from '@playwright/test';
import { on } from 'node:cluster';

test("video recording with slow motion", async () => {
    const browser = await chromium.launch({slowMo:500, headless: false });
    const context = await browser.newContext({recordVideo: {dir: "./test-results/", size:{width:800,height:600}}});
    const page = await context.newPage();

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('abcds');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('gfrs');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="error"]').click();

    await context.close();
})