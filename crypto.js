const express = require("express");
const app = express();
app.use(express.json())
let CryptoJS = require("crypto-js");
// let data=["sadsd",34];
// // let data = [{id: 1}, {id: 2}]
// let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();
// console.log("ciphertext=======>",ciphertext);

// // Decrypt
// let bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
// let originalText = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
// console.log("originalText======>",originalText);


// Below method using api
app.post("/encrypt", (req, res) => {
  const { data, key } = req.body;
  const encryption = CryptoJS.AES.encrypt(data, key).toString();

  res.send(encryption);
});
app.post("/decrypt", (req, res) => {
    const { encryptData, key } = req.body;
    const decrypt = CryptoJS.AES.decrypt(encryptData, key);
    let originalText = decrypt.toString(CryptoJS.enc.Utf8);
    console.log({ originalText });
  });
app.listen(3000, () => {
  console.log("Server listen to port 3000");
});
