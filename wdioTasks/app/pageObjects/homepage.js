const Page = require('./abstractPage');

class Homepage extends Page{
    open(){
        super.open("https://pastebin.com/")
    }
    get pageSelectors(){
        return {
            textArea: $('#postform-text'),
            pasteTitle: $('input#postform-name'),
            hihglightMenu: $('#select2-postform-format-container'),
            hihglighterSearch: $('input[type = "search"]'),
            expirationMenu: $('#select2-postform-expiration-container'),
            expirationTime: (time) => $(`//*[@class='select2-container select2-container--default select2-container--open']//descendant::*[text()='${time}']`),
            submitBtn: $('button[type="submit"]'),
        }
    }
    async syntaxHighlight(lang){
        await this.pageSelectors.hihglightMenu.click();
        await this.pageSelectors.hihglighterSearch.setValue(`${lang}\n`);
    }
    async expiration(time){
        await this.pageSelectors.expirationMenu.click();
        await this.pageSelectors.expirationTime(time).click();
    }

    async createNewPaste(code, language, time, title){
        await this.pageSelectors.textArea.setValue(code);
        await this.syntaxHighlight(language);
        await this.expiration(time);
        await this.pageSelectors.pasteTitle.setValue(title)
        await this.pageSelectors.submitBtn.click()
    }

};

module.exports = new Homepage();