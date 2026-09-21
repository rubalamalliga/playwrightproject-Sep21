//import { from } from "node:stream/iter";
import{test, expect, chromium} from "@playwright/test"
import { loginPage }  from "../../pages/testloginPOM";
import {userDetails} from "../../testdata/testdata1.json"
//import { chownSync } from "node:fs";

// test("handling json datas", async ({})=>{
// const browser = await chromium.launch({showMo : 1200})
// const context =await browser.newContext()
// const page = await context.newPage()

// let login = new loginPage(page)

// await login.naviateTo()
// await login.enterUsername(userDetails[0].username)
// await login.enterPassword(userDetails[0].password)
// await login.clickonIcon()

// await login.verifyDasoboard()

userDetails.forEach((data)=>{

test(`handling json datas ${data.username}` , async ({})=>{
const browser = await chromium.launch({showMo : 1200})
const context =await browser.newContext()
const page = await context.newPage()

let login = new loginPage(page)

await login.naviateTo()
await login.enterUsername(data.username)
await login.enterPassword(data.password)
await login.clickonIcon()

await login.verifyDasoboard()

})

})

























