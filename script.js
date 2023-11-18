function fibonacci(num) {
// your code here
	function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    let prevPrev = 0;
    let prev = 1;
    let current = 0;
    for (let i = 2; i <= num; i++) {
      current = prev + prevPrev;
      prevPrev = prev;
      prev = current;
    }
    return prevPrev;
  }
}

// Test cases
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(5)); // Output: 3

}

module.exports = fibonacci;
