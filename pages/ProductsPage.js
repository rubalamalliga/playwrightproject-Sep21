

export class ProductsPage {

    constructor(page) {
        this.page = page;

        this.pageTitle = page.locator('//div[@class="app_logo"]');
        this.cart = page.locator('[id="add-to-cart-sauce-labs-backpack"]');
    }

    async addProduct(productName) {

        const product = this.page
            .locator('.inventory_item')
            .filter({ hasText: productName });

        await product
            .locator('[id="add-to-cart-sauce-labs-backpack"]')
            .click();


    }

    async clickCart() {
    await this.page.locator('xpath=//a[@class="shopping_cart_link"]').click();

    }
}