

export class CheckoutPage {

    constructor(page) {
        this.page = page;

        this.pageTitle = page.locator('[id="checkout"]');

        this.firstName = page.locator('[id="first-name"]');
        this.lastName = page.locator('[id="last-name"]');
        this.zipCode = page.locator('[id="postal-code"]');

        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');

        this.successMessage = page.locator('.complete-header');
    }

    async fillInformation(firstName, lastName, zipCode) {

        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.zipCode.fill(zipCode);
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async clickFinish() {
        await this.finishButton.click();
    }
}