import {test , expect} from "@playwright/test"

test.skip("Alert or Dialog", async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

//scroll
await page.locator('[id="alertBtn"]').scrollIntoViewIfNeeded()
await page.waitForTimeout(3000)

//event listen
await page.on ('dialog' ,async (a)=>{
    expect(a.type()).toEqual('alert')
    expect(a.message()).toContain('I am an alert box!')
    await page.waitForTimeout(3000)
    await a .accept() //ok

})

//click
await page.locator('[id="alertBtn"]').click()

})

//confirm alert


test.skip("Alert1 or Dialog1", async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

//scroll
await page.locator('[id="confirmBtn"]').scrollIntoViewIfNeeded()
await page.waitForTimeout(3000)

await page.once ('dialog' ,async (b)=>{
    expect(b.type()).toEqual('confirm')
    expect(b.message()).toContain('Press a button!')
    await page.waitForTimeout(3000)
    await b .dismiss() //cancel

})

await page.locator('[id="confirmBtn"]').click()

})

test("Alert2 or Dialog2", async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

//scroll
await page.locator('[id="promptBtn"]').scrollIntoViewIfNeeded()
await page.waitForTimeout(3000)

await page.once ('dialog' ,async (b)=>{
    expect(b.type()).toEqual('prompt')
    expect(b.message()).toContain('Please enter your name:')
    expect(b.defaultValue()).toContain('Harry Potter')
    await page.waitForTimeout(3000)

    await b .accept("Rubala Aravinth") //ok

})
await page.locator('[id="promptBtn"]').click()
await page.waitForTimeout(3000)
})

















