const a = 10;
// a = 9; // can not re assign

const arr = { x: 10 };
arr.x = 9;

console.log(arr.x); //9

function fun() {
  if (1) {
    const a = 10;
  }
}

fun();
