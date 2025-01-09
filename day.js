const dayjs = require("dayjs");
const toArray = require("dayjs/plugin/toArray");
const quarterOfYear= require("dayjs/plugin/quarterOfYear")
const relativeTime=require("dayjs/plugin/relativeTime")
const weekday=require("dayjs/plugin/weekday")
dayjs.extend(toArray);
dayjs.extend(quarterOfYear);
dayjs.extend(relativeTime);
dayjs.extend(weekday);
const c = dayjs();
console.log(c.format());
console.log(c.hour(), c.minute(), c.second(), c.day());
console.log(c.toArray());
console.log(c.startOf("month").format("DD-MMM-YYYY")); // Fomrat should be capital letters otherwise won't work

const day=dayjs("2000-12-11")
console.log(day.diff(c,"year"));  // Difference in day or month or year

// quarterOfYear
console.log(day.quarter());

// relativeTime
console.log(dayjs("2000-12-11").fromNow()) // How many days or months or years ago
console.log(dayjs("2000-12-11").from("2001-05-25"))

// weekday
console.log(day.weekday(5).format("ddd DD MMM YYYY"));
