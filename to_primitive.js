const obj = {};

console.log(obj); // {}

console.log(obj.toString()); // by deafult it will return [object Object]
// it can be override by explictly defining it
console.log(obj.valueOf()); // by deafult it will return [object]

const obj1 = { x: 9 };
console.log(10 - obj1); // NaN

const obj2 = {
  x: 19,
  valueOf() {
    return 8;
  },
};
console.log(10 - obj2); // 2

const obj3 = {
  x: 19,
  toString() {
    return "8";
  },
};
console.log(10 - obj3); // 2
