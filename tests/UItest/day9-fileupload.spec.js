import {test , expect} from "@playwright/test";

test.skip("Handlig Single File Uplaod" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    await page.locator('[id="singleFileInput"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    //uplaod
    await page.locator('[id="singleFileInput"]')
    .setInputFiles('C:/Users/Admin/OneDrive/Desktop/Rubala_Playwrite class/Daily Class & Assessment/Important_Notes.txt')

    //wait
    await page.waitForTimeout(3000)
})
 


test("Handlig Multiple File Uplaod" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    await page.locator('[id="multipleFilesInput"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    //uplaod
    await page.locator('[id="multipleFilesInput"]')
    .setInputFiles([
        'C:/Users/Admin/OneDrive/Desktop/ARAVINTH RESUME.pdf' , 
        'C:/Users/Admin/OneDrive/Desktop/Rubala_Playwrite class/Daily Class & Assessment/JS_Day-10.txt'
    ])
// await page.pause()
    //wait
    await page.waitForTimeout(3000)
})
