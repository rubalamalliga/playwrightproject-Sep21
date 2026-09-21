
import {test , expect} from "@playwright/test"

test("handling frames", async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

//approch - 1

//await page.locator('[id="datepicker"]').fill("09/16/2027")
await page.waitForTimeout(3000)
//approch:2
await page.locator('[id="datepicker"]').click()
//target

let month = "September"
let date = "16"
let year = "2027"

//select month and year

while(true){
        const cMonth = await page.locator('[class="ui-datepicker-month"]').textContent()
        const cYear = await page.locator('[class="ui-datepicker-year"]').innerText()

        if(cMonth == month && cYear ==year){
            break

        }

        await page.locator('//span[text()="Next"]').click()
       // await page.click('//span[text()="Prev"]')


}

//select date
await page.locator(`[data-date="${date}"]`).click()
await page.waitForTimeout(3000)

})






