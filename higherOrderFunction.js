// Higher Order Function
function fun(a, fn) {
  console.log(a); // a
  console.log(fn); //[Function: gun]
  fn();
}

fun(10, function gun() {
  console.log("This is an fn expression ");
});
