import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test.describe("Login", async () => {
    test('demo Login', async ({page}) => {
        
        const loginPage = new LoginPage(page);
        await loginPage.NavigateToLoginPage();
        await loginPage.Login('standard_user', 'secret_sauce');

        console.log("Successfully run demo POM test.")
    });
})