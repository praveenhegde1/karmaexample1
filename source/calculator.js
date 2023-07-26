const Calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    if (b === 0) {
      
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  },
  average: function(a,b){
    return (a+b)/2;
  },

  factorial: function(a){

    if(a<0){
      throw new Error("There is no factorial for negative Numbers");
    } else if (a==1 || a==0) {
      return 1;
    } else {
      return a* this.factorial(a-1);
    }

  }

};

//module.exports = Calculator;
