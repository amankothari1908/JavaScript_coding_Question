// given three number check if we can form a triangle
// logic : any one side should be less than sum of other two sides
var a = 10;
var b = 12;
var c = 5;

if (a < b + c && b < a + c && c < a + b) {
  console.log("Yes");
} else {
  console.log("No");
}
