// Promise All example
function download(url) {
  return new Promise(function exec(resolve) {
    console.log("starting download data from url", url);
    setTimeout(function exec() {
      console.log("downloading completed");
      const content = "ABCDEF";
      resolve(content);
    }, 1000);
  });
}

const p1 = download("www.xyz1.com");
const p2 = download("www.xyz2.com");
const p3 = download("www.xyz3.com");

Promise.all([p1, p2, p3]).then(function (values) {
  console.log("values", values);
});
