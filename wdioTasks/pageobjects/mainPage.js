const Page = require("./abstractPage");

class MainPage extends Page{
    open() {
        super.open("https://cloud.google.com/");
    }
    get pageselectors(){
        return{
            searchInput: $('input[name="q"]')
        }
    }
    async search(text){
        await this.pageselectors.searchInput.setValue(`${text}\n`)
    }    
}

module.exports = new MainPage();