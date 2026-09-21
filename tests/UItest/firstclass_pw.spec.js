
import{test , expect} from "@playwright/test"

test("Validate amazon title & url", async function ({page}) {

    //Browser lunch

    await page.goto("https://www.amazon.in/")

    //get title &url

    const pageTitle = await page.title()
    console.log(pageTitle)
    console.log(await page.url())

    //current title &url

    await expect(page).toHaveTitle(pageTitle)
    await expect(page).toHaveURL("https://www.amazon.in/")

       
})

