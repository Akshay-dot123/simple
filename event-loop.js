const fs = require("fs");
let a = 90;
fs.readFile("./file.txt", "utf-8", () => {
  setTimeout(() => console.log("fs-->SetTimeout"), 0);
  setImmediate(() => console.log("fs-->SetImmediate"));
  Promise.resolve().then(() => console.log("fs-->Promise Resolve"));
  console.log("fs-->FIle Read Operation ");
});
setImmediate(() => console.log("SetImmediate"));
setTimeout(() => console.log("SetTimeout"), 0);
// Promise.resolve().then(() => console.log("Promise Resolve"));
// process.nextTick(() => console.log("process NextTick"));
// console.log("a=", a);
// console.log("Last line of the file");
