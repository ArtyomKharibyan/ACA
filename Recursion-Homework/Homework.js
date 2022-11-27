function calculateSum(array) {
    if (array instanceof Array) {
      if (!array.some(isNaN)) {
        let total = 0;
  
        array.forEach(function (value) {
          total += value;
        });
  
        return total;
      }
      return "Provide an Array with only Numeric Values";
    }
  
    return "Please provide an Array";
  }
  
  console.log(calculateSum([5, 32, 2, 1]));