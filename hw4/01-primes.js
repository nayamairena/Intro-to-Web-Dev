function primeCheck(num) {
  if (num === 1) return false;
  for (let j = 2; j < num; j++) {
    if (num % j == 0) return false;
  }
  return true;
}

const getPrimes = () => {
  // Add your code here
  for (let i = 1; i <= 100; i++) {
    if (primeCheck(i)) console.log(i);
  }
};

getPrimes();
// 2
// 3
// 5
// 7
// 11
// 13
// 19
// 23
// 29
// 31
// 37
// 41
// 43
// ...
