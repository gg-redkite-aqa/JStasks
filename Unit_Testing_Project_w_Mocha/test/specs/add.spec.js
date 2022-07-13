const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe(`testing addition`, function (){
  describe(`add method positive scenario`, function() {
    let validator;
    beforeEach(function() {
      validator = new Calculator();
    });
    // eslint-disable-next-line max-len
    it(`should return the sum of 2 given numbers if provided with numbers`, function() {
      expect(validator.addition(4,5)).to.be.equal(9);
    });
    afterEach(function() {
      validator = null;
    });
  });

  describe(`add method negative scenario`, function() {
    let notNumbers = ['string','', undefined, null]
    let validator;
    beforeEach(function() {
      validator = new Calculator();
    });
    // eslint-disable-next-line max-len
    notNumbers.forEach(function(item){
      it(`should throw an error when not provided with a number`, function() {
        expect(validator.addition(item, 5)).to.throw(Error, 'Please provide numbers');
      })
    });
    afterEach(function() {
      validator = null;
    });
  });
})

