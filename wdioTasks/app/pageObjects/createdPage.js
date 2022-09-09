class CreatedPage {
  get pageSelectors() {
    return {
      createdCode: $('div>textarea[class = "textarea -raw js-paste-raw"]'),
      highlightedLanguage: $('a[class = "btn -small h_800"]'),
      createdTitle: $('div[class = "info-top"]>h1'),
    };
  }
  get pastedCode() {
    return this.pageSelectors.createdCode.getText();
  }
  get usedLanguage() {
    return this.pageSelectors.highlightedLanguage.getText();
  }
  get pastedTitle() {
    return this.pageSelectors.createdTitle.getText();
  }
}

module.exports = new CreatedPage();
