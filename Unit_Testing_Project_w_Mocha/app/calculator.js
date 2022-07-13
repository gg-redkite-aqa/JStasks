/**
 * a simple class containing methods for validating numbers
 * @class Calculator
 */
class Calculator {

  numberValidator(firstNum, secondNum){
    if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
      throw new Error('Please provide numbers');

    }
    return true
  }
  addition(firstNum, secondNum) {
    if(this.numberValidator(firstNum, secondNum)){
      return firstNum + secondNum;
    }
  }

  multiply(firstNum, secondNum) {
    if(this.numberValidator(firstNum, secondNum)){
      return firstNum * secondNum;
    }
  }
}

module.exports = Calculator;
