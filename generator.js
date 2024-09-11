function* fetchNextElement() {
  console.log("inside generator");
  const x = 10;
  yield 20;
  console.log("entering after the yield");
  const y = x + (yield 30);
  console.log("value after evaluation is ", y);
}
console.log("start");
const iter = fetchNextElement();
console.log("called generator");
console.log("first", iter.next());
console.log("second", iter.next());
console.log("third", iter.next()); // didn't pass
console.log("fourth", iter.next());
