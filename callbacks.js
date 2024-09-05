function fun(gun) {
  console.log("fun"); // THIS fun function is
  gun(); // Higher Order Function
}

fun(function gun() {
  console.log("gun"); // the function we passed
}); // is called callback function
