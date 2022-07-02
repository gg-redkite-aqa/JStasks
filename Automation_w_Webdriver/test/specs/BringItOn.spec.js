const Page = require('../../pageObjects/pastebinHomepage');
const expect = require('chai').expect

describe('Bring It On',()=>{
    before(async()=>{
        await Page.open();
        await Page.maxWindow();
    })
    it('should create a new paste', async()=>{
        const text = 'git config --global user.name  "New Sheriff in Town"\n' +
            'git reset $(git commit-tree HEAD^{tree} -m "Legacy code")\n' +
            'git push origin master --force';
        const title = 'how to gain dominance among developers';
        const expirationTime = '10 Minutes';
        const language = 'Bash';
        await Page.createNewPaste(text, expirationTime, title, language);
        await Page.cratedTitle().isDisplayed();
        const createdTitle = await Page.cratedTitle().getText();
        const highlighter = await Page.highlighter().getText();
        const createdCode = await Page.cratedCode().getText();
        expect(title).to.equal(createdTitle);
        expect(language).to.equal(highlighter);
        expect(text).to.equal(createdCode);
        console.log("createTitle is: " + createdTitle +'\n'+ ' highlighter is: ' + highlighter + '\n' + 'createdcode is: ' + createdCode)

    })
    after(()=>{
        Page.close();
    })
})