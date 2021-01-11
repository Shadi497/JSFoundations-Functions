/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  // Your code here
  console.log(`Hello ${name}`)
}
greet ("Shadi");
/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  // Your code here
  if (n%2!==0){
    return true;
} else {
  return false;
}
}
const result = isOdd(14);
console.log(result)
/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  // Your code here
  let l=n-0;
  if(l%2===0){
    return l/2;
  }
  else{
    //l++;
    return Math.trunc(l/2);
  }
}
const ans = oddsSmallerThan(20);;
console.log(ans)


/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  if (n%2!==0){
    console.log(n*n)
} else {
  console.log(n*2)
}}
squareOrDouble(9);

module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
