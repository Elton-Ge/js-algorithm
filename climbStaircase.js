function climbStaircase(n) {
  const numOfways = [1, 2];
  for (let i = 2; i <= n; i++) {
    numOfways[i] = numOfways[i - 1] + numOfways[i - 2];
  }
  return numOfways[n - 1];
}

//O(n)
console.log(climbStaircase(6));
console.log(climbStaircase(5));
console.log(climbStaircase(4));
console.log(climbStaircase(3));
console.log(climbStaircase(2));
console.log(climbStaircase(1));
