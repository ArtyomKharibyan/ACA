function sumDigits(num) {
    if (num % 10 === num) {
        return num;
    }
  
    return num % 10 + sumDigits(Math.floor(num / 10));
  }
  
  
  function recursiveSums(num) {
    let sum = sumDigits(num); 
    if (sum % 10 === sum) {
        return sum;
    }
  
    return recursiveSums(sum);
  }
  
  
  console.log(recursiveSums(123));