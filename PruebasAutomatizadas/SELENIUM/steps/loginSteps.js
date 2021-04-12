const assert = require('chai').assert;
const Then = require('cucumber').Then;
const And = Then;
const LoginPage = require('../pages/loginPage');
const timeouts = require('../utils/constants');
const {Builder , Bay , Key}= require ('selenium-webdriver');
const driver = new Builder ().forBrowser('chrome').build();

Then('yo deberia ver una caja de texto para ingresar a mi email', async () => {
    //console.log(driver);
    const loginPage = new LoginPage(driver);
    await driver.wait(async () => await loginPage.getUserEmailTextBox(),timeout.STEP_TIMEOUT.TIMEOUT );
});

And('yo deberia ver una caja de texto para ingresar la password', async () => {
    const loginPage = new LoginPage(driver);
    await driver.wait(async () => await loginPage.getUserPasswordTextBox(),timeout.STEP_TIMEOUT.TIMEOUT );
});

And('yo deberia ver un boton sign', async () => {
    const loginPage = new LoginPage(driver);
    await driver.wait(async () => await loginPage.getSingInButton(),timeout.STEP_TIMEOUT.TIMEOUT );
});

And('yo deberia ver un login header con el texto {string}', async expectedText => {
    const loginPage = new LoginPage(driver);
    const header = await loginPage.getLoginHeader();
    const headerText = await header.getText();
    assert.strictEqual(headerText,expectedText);
},timeouts.STEP_TIMEOUT.TIMEOUT);

And('yo deberia ver un label de direccion email con el texto {string}', async expectedTest => {
    const loginPage = new LoginPage(driver);
    const emailLabel = await loginPage.getEmailLabel();
    const emailLabelText = await emailLabel.getText();
    assert.strictEqual(emailLabelText,expectedText);
},timeouts.STEP_TIMEOUT.TIMEOUT);








