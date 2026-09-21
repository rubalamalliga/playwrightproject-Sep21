import{test, expect, chromium} from "@playwright/test"
import { loginPage }  from "../../pages/testloginPOM";


//EXCEL Read
import XLSX from "xlsx"
const workbook = XLSX.readFile("testdata/testuserdetails.xlsx")
const worksheet = workbook.Sheets['Userdetails']
let excelReader = XLSX.utils.sheet_to_json(worksheet)

console.log(excelReader)

for (const data of excelReader){
    

test(`reading XLSX file ${data.ID}` , async ({})=>{
const browser = await chromium.launch({showMo : 1200})
const context =await browser.newContext()
const page = await context.newPage()

let login = new loginPage(page)

await login.naviateTo(process.env.BASE_URL)
await login.enterUsername(data.UserName)
await login.enterPassword(data.Password)
await login.clickonIcon()

await login.verifyDasoboard()


})

}












