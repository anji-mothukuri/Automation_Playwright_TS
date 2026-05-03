import {test, expect} from '@playwright/test';

test('demo using page.pause method', async({page})=>{

    await page.goto("https://www.saucedemo.com/");

    // await page.pause();

    await page.locator('[data-test="username"]').fill('abcd');
    await page.locator('[data-test="password"]').fill('password');
    await page.locator('[data-test="login-button"]').click();
});

test("demo using recording", async({page})=> {
    await page.goto('https://auth.applitools.com/users/login?utm_term=&utm_subgroup=');
  await page.getByRole('textbox', { name: 'Enter email Enter password' }).click();
  await page.getByRole('textbox', { name: 'Enter email Enter password' }).fill('abcd');
  await page.getByRole('textbox', { name: 'Enter password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Enter password', exact: true }).fill('asdf');
  await page.getByRole('textbox', { name: 'Enter email Enter password' }).click();
  await page.getByRole('textbox', { name: 'Enter email Enter password' }).fill('abcd@gamil.com');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByText('Incorrect username or').click();
})