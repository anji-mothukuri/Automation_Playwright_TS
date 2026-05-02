export class LoginPage
{
    constructor(page){
        this.page = page;
        this.txtUserName = page.locator('[data-test="username"]');
        this.txtPassword = page.locator('[data-test="password"]');
        this.btnLogin = page.locator('[data-test="login-button"]');
    }

    async NavigateToLoginPage(){
        await this.page.goto("https://www.saucedemo.com/");
    }

    async Login(txtUserName, txtPassword){
        await this.txtUserName.fill(txtUserName);
        await this.txtPassword.fill(txtPassword);
        await this.btnLogin.click();
    }
}