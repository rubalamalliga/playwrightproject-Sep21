// import { from } from "node:stream/iter";
import {test,expect} from "@playwright/test"

test("Handling bulit-in Locators" , async function ({page}) {
    
 await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

// await page.locator('[name="username"]').fill('Admin')
// await page.waitForTimeout(1000)
// await page.locator('[name="password"]').fill('admin123')
// await page.waitForTimeout(2000)
// await page.locator('[type="submit"]').click()
// await page.pause()
//alt
const orangelogo = page.getByAltText('company-branding')

//assert
await expect(orangelogo).toBeVisible()
//placeholder

await page.getByPlaceholder('Username').fill('Admin')
await page.getByPlaceholder('Password').fill('admin123')

//role

await page.getByRole('button', {name:  "Login" , exact: true}).click()
await page.waitForTimeout(3000)


//text

const username = page.locator('[class="oxd-userdropdown-name"]').textContent()

await expect(await page.locator('[class="oxd-userdropdown-name"]')).toBeVisible()
//label
await expect(page.getByLabel('Sidepanel')).toBeVisible()

//tittle
await page.getByTitle('Help').click()
await page.waitForTimeout(3000)

} )






