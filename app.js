const { calculateSum, multiply } = require("./Calculate/index");
console.log(global);
console.log(this); // Empty Object
console.log(globalThis);

let a = "90";
let b = true;
function ab() {
  let b = 45;
  console.log("==========>", b);
}
ab();
console.log(b);

calculateSum(a, b);
