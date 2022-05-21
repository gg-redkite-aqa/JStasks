/**
 * a simple class containing methods for validating numbers
 * @class Calculator
 */
class Calculator {
  /**
     * Creates an instance of Calculator
     * @param {number} firstNum  1st number to use for methods
     * @param {number} secondNum 2nd number to use for methods
     */
  constructor(firstNum, secondNum) {
    this.firstNum = firstNum;
    this.secondNum = secondNum;
  }

  /**
     *
     * @return {number} the result of adding the 1st number to 2nd
     */
  add() {
    // eslint-disable-next-line max-len
    if (typeof this.firstNum !== 'number' || typeof this.secondNum !== 'number') {
      throw new Error('Please provide numbers');
    } else {
      return (+this.firstNum) + (+this.secondNum);
    }
  }

  /**
     *
     * @return {number} the result of multiplying the 1st number by the 2nd
     */
  multiply() {
    // eslint-disable-next-line max-len
    if (typeof this.firstNum !== 'number' || typeof this.secondNum !== 'number') {
      throw new Error('Please provide numbers');
    } else {
      return (+this.firstNum) * (+this.secondNum);
    }
  }
}

module.exports = Calculator;
