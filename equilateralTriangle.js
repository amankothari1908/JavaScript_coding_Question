// given three number which always forms a triangle check whether it is isosles or equilateral or sclaer

// LOGIC:
// if all three side are equal then equilateral
// if two are same and one is other then isoscles
// otherwise scaler

var a = 10;
var b = 1;
var c = 8;

if (a === b && b === c && c === a) {
  console.log("equilateral");
} else if (a !== b && b !== c && c !== a) {
  console.log("scaler");
} else {
  console.log("isoscles");
}
