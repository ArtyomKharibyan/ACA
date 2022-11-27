function findMaxNum(A, n) {
    if (n === 1) return A[0];
  
    return Math.max(A[n - 1], findMaxNum(A, n - 1));
  }
  let A = [1, 2, 3, 4];
  let n = A.length;
  
  console.log(findMaxNum([1, 2, 3, 4, 5], n));
  