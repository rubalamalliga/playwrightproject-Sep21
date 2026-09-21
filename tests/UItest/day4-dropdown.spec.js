import {test , expect} from "@playwright/test";

test("validate button functionality" , async function({page}){
//browser launch
 await page.goto("https://testautomationpractice.blogspot.com/")
await page.waitForTimeout(1000)

//scroll

await page.locator('text=Country:').scrollIntoViewIfNeeded()
await page.waitForTimeout(1000)

//visible
await page.locator('[id="country"]').selectOption("India")
await page.waitForTimeout(1000)

//label

await page.locator('[id="country"]').selectOption({label: 'China'})
await page.waitForTimeout(1000)

//value 3
await page.locator('[id="country"]').selectOption({value: 'japan'})
await page.waitForTimeout(1000)

//index

await page.locator('[id="country"]').selectOption({index: 4})
await page.waitForTimeout(1000)

//assertion
await expect (page.locator('//select[@id="country"]//option')).toHaveCount(10)

//approoch - 1
const options = await page.locator('//select[@id="country"]//option').allTextContents()
console.log(options)

//approch 2
const selectOption = await page.$$('//select[@id="country"]//option')

for (const element of selectOption){
    const txt = await element.textContent()
    console.log(txt.trim())
}


})
