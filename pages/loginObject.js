import { expect } from "@playwright/test"

export class LoginObject {

constructor(page){
    this.page = page
    this.LoginLinkTxt = page.locator('[id="login2"]')
    this.usernamefield = page.locator('[id="loginusername"]')
    this.passwordfield = page.locator('[id="loginpassword"]')
    this.loginButton = page.locator('button' , {hasText: 'Log in'})

    this.verifyLogout = page.locator('#logout2')

}

async gotoBrowser(url){
await this.page.goto(url)
}
async clickonLinkTxt(){
await this.LoginLinkTxt.click()
}

async enterUsername(user){
await this.usernamefield.fill(user)
}

async enterPassword(pass){
await this.passwordfield.fill(pass)
}

async clickOnlogin(){
await this.loginButton.click()
}

async verifyDashboard(){
    await expect(this.verifyLogout).toBeVisible()
}

}



