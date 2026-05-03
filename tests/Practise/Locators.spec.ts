import {test, expect} from '@playwright/test'

test("Selectors and Locators", async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').fill("locator by playwright");

    await page.locator("//input[@id='password']").fill("locator by xpath");
    await page.locator("xpath=//input[@id='password']").fill("locator by xpath - 2");

    await page.locator("id=user-name").fill("locator known");

    await page.locator('text=login').click();
    await page.locator("input:has-text('login')").click();

    // await page.pause();
})