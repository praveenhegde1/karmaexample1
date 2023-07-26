// const Calculator = require('../source/calculator');

describe('Calculator', function() {
  describe('add', function() {
    it('should add two numbers', function() {
      expect(Calculator.add(2, 3)).toBe(5);
    });
  });

  describe('subtract', function() {
    it('should subtract two numbers', function() {
      expect(Calculator.subtract(5, 3)).toBe(2);
    });
  });

  describe('multiply', function() {
    it('should multiply two numbers', function() {
      expect(Calculator.multiply(2, 3)).toBe(6);
    });
  });

  describe('divide', function() {
    it('should divide two numbers', function() {
      expect(Calculator.divide(6, 3)).toBe(2);
    });

    it('should divide two numbers', function() {
      expect(Calculator.divide(6, null)).toBe(Infinity);
    });
    it('should divide two numbers', function() {
      expect(Calculator.divide(0, 0)).toBe(0);
    });


    it('should divide two numbers', function() {
      expect(Calculator.divide(null, 6)).toBe(0);
    });

    it('should throw an error when dividing by zero', function() {
      expect(function() {
        Calculator.divide(6, 0);
      }).toThrowError("Cannot divide by zero");
    });
  });
});
