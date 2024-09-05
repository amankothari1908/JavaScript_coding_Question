// Filter() Method
function checkEven(x) {
  return x % 2 == 0;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const newArray = arr.filter(checkEven);
console.log(newArray); // [ 2, 4, 6, 8 ]
