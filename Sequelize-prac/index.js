const Sequelize = require("./db/config");
const customer=require("./models/customer")
const order=require("./models/order")

Sequelize.sync().then(()=>{
    console.log("Success");
    
}).catch((err)=>{
    console.log(err);
    
})