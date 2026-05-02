import { test, expect } from '@playwright/test';

test.beforeEach("before each - Login", async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
})

test.describe("SmokeTest", async () => {
    test("Add items to cart", async ({ page }) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    })
})

test.describe("regressionTest", async () => {
    test("Modify cart items", async ({ page }) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
        await page.locator('[data-test="checkout"]').click();
    })

    test("Logout", async ({ page }) => {
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.locator('[data-test="logout-sidebar-link"]').click();
    })
})

test.afterEach("AfterAll-Logout", async ({ page }) => {
    await page.close();
})