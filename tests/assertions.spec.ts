import {test, expect} from '@playwright/test';

test("assertions", async({page})=>{

await page.goto("https://kitchen.applitools.com/");

// Element is present
await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1);

// Element is visible/hidden
await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible();
await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden();

// Element is enabled/disabled
await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled();
await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled();

// Element contains text
await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toContainText("Kitchen");

// Element has attribute
await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute("class", "chakra-heading css-dpmy2a");
await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass("chakra-heading css-dpmy2a");

// page url
await expect.soft(page).toHaveURL("https://kitchen.applitools.com/");

// page title
await expect.soft(page).toHaveTitle("The Kitchen");

// page snapshot
await expect.soft(page).toHaveScreenshot();
});