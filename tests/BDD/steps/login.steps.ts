import {Given, When, Then} from '@cucumber/cucumber';
import { chromium, expect } from '@playwright/test';

let browser: any;
let page: any;

Given("I navigate to login page", async ()=>{
    browser = await chromium.launch({headless: false});
    page = await browser.newPage();

    await page.goto("https://www.saucedemo.com/");
})

When("I enter valid username {string}", async (userName)=>{
    await page.locator('[data-test="username"]').fill(userName);
})

When("I enter valid password {string}", async (password)=>{
    await page.locator('[data-test="password"]').fill(password);
})

When("I click on submit button", async ()=>{
    await page.locator('[data-test="login-button"]').click();
})

Then("I should navigate to home page", async ()=>{
    await page.locator('[class="app_logo"]').waitFor({ state: 'visible' });
    await expect.soft(page.locator('[class="app_logo"]')).toHaveText("Swag Labs");
    
    await browser.close();
})

Then("I should see error message {string}", async (errorMessage)=>{
    await page.locator('[data-test="error"]').waitFor({ state: 'visible' });
    await expect.soft(page.locator('[data-test="error"]')).toHaveText(errorMessage);
    
    await browser.close();
})
