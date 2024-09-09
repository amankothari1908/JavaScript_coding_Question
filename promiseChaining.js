const p = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve("resolve");
  }, 1000)
);
p.then((value) => {
  console.log("first promise resolve with value ", value);
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve("resolve2");
    }, 1000)
  );
})
  .then((value1) => {
    console.log("promise resolve with value ", value1);
    return "promise3";
  })
  .then((value2) => {
    console.log("waiting for promise to resolved", value2);
  });
