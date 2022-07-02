const {Builder, manage, By, Key, until} = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').build();

class AbstractPage {
    constructor() {
        global.By = By;
        global.Key = Key;
        global.until = until;
        this.driver = driver;
        global.manage = manage;
    }
    newWindow(){
       return driver.switchTo().newWindow('tab');
    }
    open(url) {
        this.driver.get(url);
    }
    maxWindow(){
        this.driver.manage().window().maximize();
    }
    find(xpath){
        this.driver.wait(until.elementsLocated(By.xpath(xpath)));
        return this.driver.findElement(By.xpath(xpath))
    }
    close() {
        this.driver.quit();
    }
}

module.exports = AbstractPage;