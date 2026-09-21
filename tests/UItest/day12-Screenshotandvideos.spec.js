import {test , expect} from "@playwright/test";


test("Take Normal Page" , async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.waitForTimeout(3000)

    await page.screenshot({path : "screenshots/" + "normalPage.png"})
})


test("Take Full Page" , async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.waitForTimeout(3000)

    await page.screenshot({path : "screenshots/" + "fullPage.jpeg" , fullPage : true})
})



test("Take Specific Locator" , async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.waitForTimeout(3000)

    await page.locator('[class="svg-container"]')
    .screenshot({path : "screenshots/" + "specificPage.jpg"})

    const video = page.video()
    if (video) {
        console.log(await video.path());
    }
    
})




















