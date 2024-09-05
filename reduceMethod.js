// Reduce Function
function sum(accumlator, current) {
  return accumlator + current;
}

const arr = [1, 2, 3, 4];
console.log(arr.reduce(sum));
