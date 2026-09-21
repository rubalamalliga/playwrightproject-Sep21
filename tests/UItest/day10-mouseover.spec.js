import {test , expect} from "@playwright/test";

test.skip("Handlig mouseover and drag and drop" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    await page.locator('[class="dropbtn"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

//mouseover
 await page.locator('[class="dropbtn"]').hover()

 //select option

 await page.locator('//a[text()="Laptops"]').click()
   await page.waitForTimeout(2000)
//scroll-(text=copy text)

await page.locator('button:has-text("copy Text")').scrollIntoViewIfNeeded()
await page.waitForTimeout(2000)

//field 1

await page.locator('[id="field1"]').clear()
await page.waitForTimeout(2000)

await page.locator('[id="field1"]').pressSequentially('Rubala Aravinth')
await page.waitForTimeout(2000)

//double click

await page.locator('button', {hasText : "copy Text"}).dblclick()
await page.waitForTimeout(2000)

})

test(" drag and drop" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    const source = page.locator('[id="draggable"]')
const target = page.locator('[id="droppable"]')

await target.scrollIntoViewIfNeeded()
await page.waitForTimeout(2000)

//approch-1

await page.dragAndDrop('[id="draggable"]' ,'[id="droppable"]')
// await source.dragTo(target)
await page.waitForTimeout(2000)
await page.pause()




})












