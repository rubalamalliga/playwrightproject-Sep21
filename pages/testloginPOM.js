
import {expect} from "@playwright/test"


export class loginPage{

    constructor(page){
        this.page = page
        this.usernameField = '[id="user-name"]'
        this.passwordField = '[id="password"]'
        this.loginButton = '[id="login-button"]'
        this.dashBoard = '[data-test="title"]'
    }
 async naviateTo(){
await this.page.goto('https://www.saucedemo.com/')

 }

 async enterUsername(user){
    await this.page.locator(this.usernameField).fill(user)
 }
  async enterPassword(pass){
    await this.page.locator(this.passwordField).fill(pass)
 }
 async clickonIcon(){
    await this.page.locator(this.loginButton).click()

 }

 async verifyDasoboard(){
    await expect(this.page.locator(this.dashBoard)).toBeVisible()
 }
    
}














