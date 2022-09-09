class AbstractPage {
    open(url) {
      return browser.url(url);
    }
  }
  
  module.exports = AbstractPage;