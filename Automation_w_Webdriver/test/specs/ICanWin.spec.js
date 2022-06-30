const Page = require('../../pageObjects/pastebinHomepage');

describe('I Can Win',()=>{
    before(async()=>{
        await Page.open();
        await Page.maxWindow();
    })
    it('should add the given text to the paste area', async ()=>{
        const area = await Page.pasteCode();
        await area.sendKeys('Hello from WebDriver');
    });
    it('should add new Title', async()=>{
       const title =  await Page.pasteTitle();
       await  title.sendKeys('helloweb')
    })
    it('should select given expiration time', async()=>{
        await Page.pasteExpiration('10 Minutes')
    })
    it('should create new submit',()=>{
        Page.submit()
    })
    after(()=>{

        Page.close();
    })
})

