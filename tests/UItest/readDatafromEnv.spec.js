
import{test, expect, chromium} from "@playwright/test"
import { loginPage }  from "../../pages/testloginPOM";




test(`handling json datas ${data.username}` , async ({})=>{
const browser = await chromium.launch({showMo : 1200})
const context =await browser.newContext()
const page = await context.newPage()

let login = new loginPage(page)

await login.naviateTo(process.env.BASE_URL)
await login.enterUsername(process.env.USER_NAME)
await login.enterPassword(process.env.PASSWORD)
await login.clickonIcon()

await login.verifyDasoboard()

})











