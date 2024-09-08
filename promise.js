console.log("starting");
function createPromise() {
  return new Promise(function exectutePromise(resolve, reject) {
    console.log("Inside Promise");
    setTimeout(() => {
      console.log("setTimeOut Inside Promise");
    }, 0);
    resolve("resolved");
    console.log("Promise completed");
  });
}
const p = createPromise();
p.then(function fullFillHandler1(value) {
  console.log(`Promise1 is ${value}`);
});
setTimeout(() => {
  console.log("setTimeOut outside Promise");
}, 0);
for (let i = 0; i < 1000000000; i++) {}
p.then(function fullFillHandler2(value) {
  console.log(`Promise2 is ${value}`);
});
console.log("Done");

/**
 * starting
 * Inside Promise
 * Promise completed
 * Done
 * Promise1 is resolved
 * Promise2 is resolved
 * setTimeOut Inside Promise
 * setTimeOut outside Promise
 */
