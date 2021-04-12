const webdriver = require('selenium-webdriver');
const using = webdriver.By;
const {Builder, Bay, Key} = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').build();

class BasePage {

    constructor(driver, selector = '') {
        this.driver = driver;
        this.selector = selector;
    }

    async findElement() {
        const elements = await driver.findElement(using.css(this.selector));
        return elements[0];
    }

    async findElementByCss(selector) {
        console.log(selector);
        const elements = await driver.findElement(using.css(selector));
        return elements[0];
    }

    async exists() {
        const elements = await driver.findElement(using.css(this.selector));
        return elements.length > 0;
    }

}

module.exports = BasePage;