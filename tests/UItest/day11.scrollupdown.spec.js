import {test , expect} from "@playwright/test";

test("Handle Key-Board Actions" , async ({page})=>{

  //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

  //Scroll
  //await page.click({button : 'right'})

  //Vertical
  await page.mouse.wheel(0, 500)    //top to botton

  await page.locator('[id="name"]').fill("Rubala Aravinth")

  //Control + A
  await page.keyboard.press('Control+KeyA')
  await page.waitForTimeout(2000)

  //Control + C
  await page.keyboard.press('Control+KeyC')
  await page.waitForTimeout(2000)

  //Tab
  await page.keyboard.down('Tab')
  await page.keyboard.up('Tab')

  await page.waitForTimeout(2000)

  //Control + V
  await page.keyboard.press('Control+V')
  await page.waitForTimeout(3000)
   
})


test("Handling Scroll Actions" , async ({page}) =>{

  //browser
    await page.goto('https://testautomationpractice.blogspot.com/')  

    //pause 
    //await page.pause()

  //Vertical
  await page.mouse.wheel(0, 500)    //top to botton
  await page.waitForTimeout(3000)
  
  await page.mouse.wheel(0, -500)   //bottom to top
  await page.waitForTimeout(3000)

 //Horizontal
 await page.mouse.wheel(500, 0)     //Left to Right
 await page.waitForTimeout(3000)

 await page.mouse.wheel(-500, 0)    //Right to Left
 await page.waitForTimeout(3000)


 //APPRAOCH - 1

 //Scroll to Bottom
await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight)
})


//Scroll to Top
await page.evaluate(() => {
    window.scrollTo(0, 0)
})


//Scroll By Specific Pixels
await page.evaluate(() => {
    window.scrollTo(0, 500)
})


})

  








