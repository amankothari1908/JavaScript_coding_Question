// print ell even number from 1 to 25

// using for loop
for (let i = 1; i <= 25; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// using while loop
let i = 1;
while (i <= 25) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// without modulo
for (let i = 2; i <= 25; i += 2) {
  console.log(i);
}
