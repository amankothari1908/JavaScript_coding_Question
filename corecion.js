console.log(7 - 2); // 5
console.log(7 - null); // (7 - null) --> (7 - 0) --> 7
console.log(7 - undefined); // (7 - undefined) --> (7 - NaN) --> NaN

console.log(7 - "235"); //( 7 - "235") --> (7 - 235) --> -228
console.log(7 - "45a"); //( 7 - "45a") --> (7 - NaN) --> NaN
