import {test , expect} from "@playwright/test";

test("validate login functionality" , async function({page}){
//browser launch
 await page.goto("https://practicetestautomation.com/practice-test-login/")

//verify title &url
const pageTitle = await page.title()
const url =await page.url()
    // console.log(pageTitle)
    // console.log(await page.url())

     await expect(page).toHaveTitle(pageTitle)
    await expect(page).toHaveURL("https://practicetestautomation.com/practice-test-login/")

//user/password
await page.locator('[id="username"]').fill('student')
await page.locator('[id="password"]').fill('Password123')


//login button
await page.locator('[id="submit"]').click()

//sucessfull page
await expect(page.locator('[class="post-title"]')).toBeVisible()

//await page.pause()

})



















































































