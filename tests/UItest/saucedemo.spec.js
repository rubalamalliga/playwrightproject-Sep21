import { test, expect } from '@playwright/test';
// import fs from 'fs';
//import {testData} from "../testdata/testdataHW.json"
import { LoginPage } from '../../pages/LoginPage.js';
import { ProductsPage } from '../../pages/ProductsPage.js';
import { CartPage } from '../../pages/CartPage.js';
import { CheckoutPage } from '../../pages/CheckoutPage.js';

//import {userDetailsHW} from "../testdata/testdataHW.json"

import testData from "../../../testdata/testdataHW.json" with { type: "json" };


test('SauceDemo - End to End Checkout', async ({ page }) => {

    // Create Page Objects
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);


    // 1. Launch the web application
    await page.goto("https://www.saucedemo.com/");


    // 2. Verify title
    await expect(page).toHaveTitle('Swag Labs');


//     // 3. Handle Login Authentication
//     await login.naviateTo()
// await login.enterUsername(userDetailsHW[0].username)
// await login.enterPassword(userDetailsHW[0].password)
// await login.clickonIcon()
// //4. Verify Dashboard 
// await login.verifyDasoboard()

 // 3. Handle Login Authentication
    await loginPage.login(
        testData.username,
        testData.password
    );


    // 4. Verify Dashboard / Products page
    await expect(page).toHaveURL(/inventory.html/);


    // 5. Select a product
    await productsPage.addProduct(testData.product);


    // 6. Select Cart option
    await productsPage.clickCart();

    await expect(page).toHaveURL(/cart.html/);

    await expect(cartPage.pageTitle)
        .toHaveText('Your Cart');


    // Verify selected product
    // await expect(cartPage.productName)
    //     .toHaveText(testData.product);

        await expect(cartPage.productName).toHaveText(testData.productName);

    // 7. Handle Checkout flow
    await cartPage.clickCheckout();

    await expect(page)
        .toHaveURL(/checkout-step-one.html/);


    // 8. Fill First Name, Last Name and Zip Code
    await checkoutPage.fillInformation(
        testData.firstName,
        testData.lastName,
        testData.zipCode
    );


    // Click Continue
    await checkoutPage.clickContinue();


    // Verify Checkout Overview
    await expect(page)
        .toHaveURL(/checkout-step-two.html/);

    await expect(checkoutPage.pageTitle)
        .toHaveText('Checkout: Overview');


    // 9. Click Finish
    await checkoutPage.clickFinish();


    // 10. Verify successful display message
    await expect(page)
        .toHaveURL(/checkout-complete.html/);

    await expect(checkoutPage.successMessage)
        .toHaveText('Thank you for your order!');


    // 11. Take Screenshot
    await page.screenshot({
        path: 'screenshots/order-success.png',
        fullPage: true
    });

});

