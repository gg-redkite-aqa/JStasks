const MainPage = require('../../pageobjects/mainPage');
const { googleCalculator } = require("../validData/validData");


describe('task with wdio _ Hardcore', () => {
    it('should fill a form receive an email and assert the total price', async() => {
        await MainPage.open();
        await browser.maximizeWindow();
        await MainPage.search(googleCalculator);
        await browser.waitUntil(async () => {
            const pageTitle = await browser.getTitle();
            return await pageTitle.includes(googleCalculator);
          });
        
        
    })
})