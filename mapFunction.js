// Custom Map() function  in Js
function square(x) {
  return x * x;
}
const arr = [1, 2, 3, 4, 5];
function customMapper(arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i]));
  }
  return newArray;
}
let resArray = customMapper(arr, square);
