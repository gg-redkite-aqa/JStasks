const {Builder, manage, By, Key, until} = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').build();

class AbstractPage {
    constructor() {
        global.By = By;
        global.Key = Key;
        global.until = until;
        global.driver = driver;
        global.manage = manage;
    }
    newWindow(){
       return driver.switchTo().newWindow('tab');
    }
    open(url) {
        driver.get(url);
    }
    maxWindow(){
        driver.manage().window().maximize();
    }
    find(xpath){
        driver.wait(until.elementsLocated(By.xpath(xpath)));
        return driver.findElement(By.xpath(xpath))
    }
    close() {
        driver.quit();
    }
}

module.exports = AbstractPage;