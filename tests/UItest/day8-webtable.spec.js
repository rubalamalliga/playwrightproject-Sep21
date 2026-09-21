import {test , expect} from "@playwright/test"

test("Webtable", async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

//scroll
await page.locator('text=Pagination Web Table').scrollIntoViewIfNeeded()
await page.waitForTimeout(3000)
//column & row

const tableColumn = page.locator('[id="productTable"] thead tr th')
const tableRow = page.locator('[id="productTable"]>tbody>tr')
console.log(await tableColumn.count())
console.log(await tableColumn.count())
//select a product

const selectedProd = await tableRow.filter({
            has : page.locator('td') , hasText : "Tablet"
    })

    await selectedProd.locator('input').click()

    await page.waitForTimeout(3000)


    //Select multiple Products
    //await multiProd(tableRow, page, "Smartphone")
    //await multiProd(tableRow, page, "Wireless Earbuds")
    await page.waitForTimeout(3000)


    //Retrieve The data

    for(let i=0; i < await tableRow.count(); i++){   //row  5 

     const tds = await tableRow.nth(i).locator('td')

    for(let j=0; j < await tds.count(); j++){    //Column 20

     const txt = await tds.nth(j).textContent()
     console.log(txt.trim())

    }
}



    //Read the data from all pages

   const tablePages = await page.locator('[id="pagination"]>li>a')

   console.log(await tablePages.count())


   for(let k=0; k < await tablePages.count(); k++){   //pages 4

        if(k > 0){
            await tablePages.nth(k).click()
        }

      const tableDatas = await page.$$('[id="productTable"]>tbody>tr>td')

      for (const element of tableDatas) {
       const txt = await element.textContent()
       console.log(txt.trim())
      }
   }

})






























