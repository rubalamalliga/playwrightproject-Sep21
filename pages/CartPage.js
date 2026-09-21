

export class CartPage {

    constructor(page) {
        this.page = page;

        this.pageTitle = page.locator('.title');
        this.productName = page.locator('//div[@class="inventory_item_name"]');
        this.checkoutButton = page.locator('[id="checkout"]');
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }
}