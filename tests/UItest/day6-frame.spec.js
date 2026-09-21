

import {test , expect} from "@playwright/test"

test("handling frames", async ({page})=>{
await page.goto("https://ui.vision/demo/webtest/frames/")
//count of length
console.log(await page.frames().length)

//wait
await page.waitForTimeout(3000)

//single frame handling
await page.frameLocator('[src="frame_1.html"]').locator('[name="mytext1"]').fill("Playwright")
await page.waitForTimeout(3000)

//single framelocation
await page.frameLocator('[src="frame_3.html"]').frameLocator('//iframe').locator('[class="AB7Lab Id5V1"]').nth(1).click()
await page.waitForTimeout(3000)

})




