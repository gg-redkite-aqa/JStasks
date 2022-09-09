const AbstractPage = require("../pageObjects/abstractPage");

class HomePage extends AbstractPage {
  constructor() {
    super();

    this.pasteArea = '//*[@id="postform-text"]';
    this.title = '//*[@id ="postform-name"]';
    this.timeMenu =
      '//*[@role="presentation"]/../*[@id = "select2-postform-expiration-container"]';
    this.timeList =
      '//*[@class = "select2-container select2-container--default select2-container--open"]';
    this.languageMenu = '//span[@id = "select2-postform-format-container"]';
    this.languageList =
      '//ul[@class = "select2-results__options select2-results__options--nested"]';
    this.submitBtn = '//button[@type = "submit"]';
    this.newTitle =
      '//body/div[@class="wrap"]/descendant::div[@class="info-top"]/h1';
    this.selectedLanguage =
      '//body/div[@class="wrap"]/descendant::div[@class="left"]/a[@class = "btn -small h_800"]';
    this.addedText = '//body/div[@class="wrap"]/descendant::textarea';
  }
  async open() {
    await super.open("https://pastebin.com");
  }
  async pasteCode(text) {
    const area = await super.findByXpath(this.pasteArea);
    return area.sendKeys(text);
  }
  async pasteTitle(title) {
    const titleField = await super.findByXpath(this.title);
    return titleField.sendKeys(title);
  }
  async pasteExpiration(expirationTime) {
    const timeMenu = await super.findByXpath(this.timeMenu);
    await timeMenu.click();
    await super.findByXpath(this.timeList);
    return super
      .findByXpath(
        `//*[@class='select2-container select2-container--default select2-container--open']//descendant::*[text()='${expirationTime}']`
      )
      .click();
  }
  async syntaxHighlight(language) {
    const languageMenu = await super.findByXpath(this.languageMenu);
    await languageMenu.click();
    await super.findByXpath(this.languageList);
    return super
      .findByXpath(
        `//span[@class ='select2-container select2-container--default select2-container--open']/descendant::li[text()='${language}']`
      )
      .click();
  }

  async submit() {
    const button = await super.findByXpath(this.submitBtn);
    return button.click();
  }
  async createNewPaste(text, expirationTime, title, language = false) {
    if (language) {
      await this.syntaxHighlight(language);
    }
    await this.pasteCode(text);
    await this.pasteExpiration(expirationTime);
    await this.pasteTitle(title);
    return this.submit();
  }
  pastedTitle() {
    return super.findByXpath(this.newTitle);
  }
  highlighter() {
    return super.findByXpath(this.selectedLanguage);
  }
  pastedCode() {
    return super.findByXpath(this.addedText);
  }
}

module.exports = new HomePage();
