const AbstractPage = require('../pageObjects/abstractPage');

class HomePage extends AbstractPage{
    constructor() {
        super();
    }
    open() {
        super.open('https://pastebin.com');
    }
    async pasteCode(text){
        const area = await super.find('//*[@id="postform-text"]');
        return  area.sendKeys(text);
    }
    async pasteTitle(title){
       const titleField = await super.find('//*[@id ="postform-name"]');
       return titleField.sendKeys(title)
    }
    async pasteExpiration(expirationTime){
        const timeMenu = await super.find('//*[@role="presentation"]/../*[@id = "select2-postform-expiration-container"]');
        await timeMenu.click();
        await super.find('//*[@class = "select2-container select2-container--default select2-container--open"]');
        return super.find(`//*[@class='select2-container select2-container--default select2-container--open']//descendant::*[text()='${expirationTime}']`).click();
    }
    async syntaxHighlight(language){
        const languageMenu = await super.find('//span[@id = "select2-postform-format-container"]');
        await languageMenu.click();
        await super.find('//ul[@class = "select2-results__options select2-results__options--nested"]');
        return super.find(`//span[@class ='select2-container select2-container--default select2-container--open']/descendant::li[text()='${language}']`).click();
    }

    async submit(){
        const button = await super.find('//button[@type = "submit"]');
        return button.click();
    }
    async createNewPaste(text, expirationTime, title, language = false){
        if(language){
            await this.syntaxHighlight(language)
        }
        await this.pasteCode(text);
        await this.pasteExpiration(expirationTime);
        await this.pasteTitle(title);
        return this.submit();
    }
    cratedTitle(){
        return super.find('//body/div[@class="wrap"]/descendant::div[@class="info-top"]/h1')
    }
    highlighter(){
        return super.find('//body/div[@class="wrap"]/descendant::div[@class="left"]/a[@class = "btn -small h_800"]')
    }
    cratedCode(){
        return super.find('//body/div[@class="wrap"]/descendant::textarea')
    }
}

module.exports = new HomePage();
