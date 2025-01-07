const bcrypt = require("bcrypt");
async function hashPassword(password) {
  // const passwordHash=await bcrypt.hash(password);
  // We can solve error in above by below line of code by specifying salt rounds
  const passwordHash = await bcrypt.hash(password, 8);
  console.log(passwordHash);
  return passwordHash;
}
async function comparePassword(password, passwordHash) {
  const result = await bcrypt.compare(password, passwordHash);
  return result;
}
async function main() {
  const userPassword = "password";
  const passwordHash = await hashPassword(userPassword);
  const comparedPassword = await comparePassword(userPassword, passwordHash);
  console.log(comparedPassword);
  
}
main();
