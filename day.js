const dayjs = require("dayjs");
const toArray = require("dayjs/plugin/toArray");
const quarterOfYear= require("dayjs/plugin/quarterOfYear")
dayjs.extend(toArray);
dayjs.extend(quarterOfYear);
const c = dayjs();
console.log(c.format());
console.log(c.hour(), c.minute(), c.second(), c.day());
console.log(c.toArray());
console.log(c.startOf("month").format("DD-MMM-YYYY")); // Fomrat should be capital letters otherwise won't work

const day=dayjs("2000-12-11")
console.log(day.diff(c,"year"));  // Difference in day or month or year

console.log(day.quarter());
