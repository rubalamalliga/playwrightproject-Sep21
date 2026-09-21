
import {test , expect} from "@playwright/test"

test("method2 of datepicker", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/") 
await page.waitForTimeout(3000)

await page.locator('[id="txtDate"]').click()
//await page.pause()

await page.locator('[class="ui-datepicker-month"]').selectOption("Jul")
await page.waitForTimeout(1000)

await page.locator('[class="ui-datepicker-year"]').selectOption("2030")
await page.waitForTimeout(1000)

await page.locator('[data-date="19"]').click()
await page.pause()
//await page.locator('[value="6"]').selectOption("Jul")
//await page.waitForTimeout(1000)
// await page.pause()

})











