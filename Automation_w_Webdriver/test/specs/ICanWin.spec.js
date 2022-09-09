const Page = require("../../pageObjects/pastebinHomepage");

describe("I Can Win", () => {
  before(async () => {
    await Page.open();
    await Page.maxWindow();
  });
  it("should create a new paste", async () => {
    const text = "Hello from Webdriver";
    const title = "helloweb";
    const expirationTime = "10 Minutes";
    await Page.createNewPaste(text, expirationTime, title);
  });
  after(() => {
    Page.close();
  });
});
