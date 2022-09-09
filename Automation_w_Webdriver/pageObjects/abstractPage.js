require("chromedriver");

const { Builder, manage, until, By } = require("selenium-webdriver");
const { Options } = require("selenium-webdriver/chrome");

class AbstractPage {
  constructor() {
    this.driver = AbstractPage.initBrowser();
    this.manage = manage;
    this.until = until;
    this.By = By;
  }

  static initBrowser() {
    const chromeOptions = new Options().addArguments("--log-level=3");
    return new Builder()
      .forBrowser("chrome")
      .setChromeOptions(chromeOptions)
      .build();
  }

  async open(url) {
    await this.driver.get(url);
  }

  findByXpath(xpath) {
    this.driver.wait(until.elementsLocated(By.xpath(xpath)));
    return this.driver.findElement(By.xpath(xpath));
  }
  maxWindow() {
    this.driver.manage().window().maximize();
  }

  async close() {
    await this.driver.quit();
  }
}
module.exports = AbstractPage;
