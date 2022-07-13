const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe(`testing multiplication`, function (){
  describe(`multiply method positive scenario`, function() {
    let validator;
    beforeEach(function() {
      validator = new Calculator();
    });
    // eslint-disable-next-line max-len
    it(`should return the result of multiplication of 2 given numbers if provided with numbers`, function() {
      expect(validator.multiply(4,5)).to.be.equal(20);
    });
    afterEach(function() {
      validator = null;
    });
  });

  describe(`multiply method negative scenario`, function() {
    let validator;
    let notNumbers = ['string','', undefined, null];
    beforeEach(function() {
      validator = new Calculator();
    });
    // eslint-disable-next-line max-len
    notNumbers.forEach(function(item){
      it(`should throw an error when not provided with a number`, function() {
        expect(validator.multiply(item, 5)).to.throw(Error, 'Please provide numbers');
      })
    });
    afterEach(function() {
      validator = null;
    });
  });
})
