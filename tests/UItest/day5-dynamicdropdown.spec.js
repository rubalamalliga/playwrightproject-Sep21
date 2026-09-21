
import {test , expect} from "@playwright/test";


test("validate dynamic dropdown functionality" , async function({page}){
//browser launch
 await page.goto("https://www.amazon.in/")

await page.locator('[id="twotabsearchtextbox"]').waitFor()
await page.locator('[id="twotabsearchtextbox"]').fill("mobile")

await page.waitForSelector('[class="left-pane-results-container"]')

const searchlist = await page.$$('//div[contains(@aria-label , "mobile")]')

for (const element of searchlist)
{
    const txt =await element.textContent()

    if(txt.includes("under 30000")){
        await element.click()
        break
    }
}
await page.waitForTimeout(3000)
})



