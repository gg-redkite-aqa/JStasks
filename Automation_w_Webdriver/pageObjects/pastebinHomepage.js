const Page = require('../pageObjects/abstractPage');

class HomePage extends Page{
    constructor() {
        super();
    }
    open() {
        super.visit('https://pastebin.com');
    }
    pasteCode(){
      return  super.findElement('//*[@id="postform-text"]')
    }
    pasteTitle(){
       return super.findElement('//*[@id ="postform-name"]')
    }
    pasteExpiration(expirationTime){
       return  super.findElement('//*[@role="presentation"]/../*[@id = "select2-postform-expiration-container"]').click()
            .then(()=>{
                driver.wait(until.elementsLocated(By.xpath('//*[@class = "select2-container select2-container--default select2-container--open"]')))})
            .then(()=>{
                super.findElement(`//*[@class='select2-container select2-container--default select2-container--open']//descendant::*[text()='${expirationTime}']`).click();
        })
    }
    async submit(){
        const button = await super.findElement('//button[@type = "submit"]');
        return button.click();
    }
    close() {
        super.close();
    }
}

module.exports = new HomePage();
