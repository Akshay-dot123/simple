let CryptoJS = require("crypto-js");
let data=["sadsd",34];
// let data = [{id: 1}, {id: 2}]
var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();
// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
var originalText = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

console.log(originalText);