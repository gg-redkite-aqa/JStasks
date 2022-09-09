const Homepage = require("../../app/pageObjects/homepage");
const CreatedPage = require("../../app/pageObjects/createdPage");
const { code, lang, expirationTime, title } = require("../validData/validInfo");

describe("Bring It On", () => {
  it("should create a new paste and make assertions", async () => {
    await Homepage.open();
    await browser.maximizeWindow();
    await Homepage.createNewPaste(code, lang, expirationTime, title);
    await browser.waitUntil(async () => {
      const pageTitle = await browser.getTitle();
      return await pageTitle.includes(title);
    });
    await expect(CreatedPage.pastedTitle).toHaveText(title);
    await expect(CreatedPage.usedLanguage).toHaveText(lang);
    await expect(CreatedPage.pastedCode).toHaveText(code);
    await browser.pause(5000);
  });
});
