function recursiveNum(n) {
  if (n === 0) {
      return 0;
  }

  return n * n + recursiveNum(n - 1);
}


console.log(recursiveNum(4));