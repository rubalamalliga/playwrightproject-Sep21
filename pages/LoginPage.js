
// import {expect} from "@playwright/test"


export class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = page.locator('[id="user-name"]');
        this.password = page.locator('[id="password"]');
        this.loginButton = page.locator('[id="login-button"]');
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}
