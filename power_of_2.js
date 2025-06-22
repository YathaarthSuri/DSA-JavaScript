// recursion
function pow_2(n) {
    if(n === 1) return true;
    if(n < 1 || n % 2 !== 0) return false;
    return pow_2(n/2);
}

console.log(pow_2(16)); // true
console.log(pow_2(6)); // false
console.log(pow_2(3)); // false

// bit manipulation
var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n - 1)) === 0;
};
