import {test , expect} from "@playwright/test";

test("validate button functionality" , async function({page}){
//browser launch
 await page.goto("https://testautomationpractice.blogspot.com/")
await page.waitForTimeout(1000)
//verify title &url
const pageTitle = await page.title()
const url =await page.url()
    // console.log(pageTitle)
    // console.log(await page.url())

     await expect(page).toHaveTitle(pageTitle)
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")
await page.waitForTimeout(1000)
//user/password
await page.locator('[id="name"]').fill('Rubala Aravinth')
await page.waitForTimeout(1000)
await page.locator('[id="email"]').fill('rubalamalliga@gmail.com')
await page.waitForTimeout(2000)
await page.locator('[id="phone"]').fill('7397342292')
await page.waitForTimeout(2000)
await page.locator('[id="textarea"]').fill('Kundrathur, Chennai')
await page.waitForTimeout(1000)
await page.locator('[for="female"]').check()
await expect(page.locator('[for="female"]')).toBeChecked()
await page.waitForTimeout(2000)

await page.locator('[for="male"]').click()
await expect(page.locator('[for="male"]')).toBeChecked()
await page.waitForTimeout(2000)
// await page.pause()

await page.locator("text=Days:").scrollIntoViewIfNeeded()
await page.waitForTimeout(1000)

await page.locator('[id="sunday"]').click()

const multiplecheckbox1 = [
    page.locator('[id="tuesday"]'),
    page.locator('[id="thursday"]'),
];
for ( const element of multiplecheckbox1){
    await element.check()

    await expect(element).toBeChecked()

}
// await page.pause()



})
