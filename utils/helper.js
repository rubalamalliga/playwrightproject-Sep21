export async function multiProd(tableRow, page, prodName) {

    const selectedProd = await tableRow.filter({
        has: page.locator('td'), hasText: prodName
    })

    return await selectedProd.locator('input').click()
}


