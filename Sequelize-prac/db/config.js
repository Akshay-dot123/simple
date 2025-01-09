const Sequelize=require("sequelize")
const sequelize=new Sequelize("DB_Name","root","password",{
    dialect:"mysql",
    host:"localhost"
})
module.exports=sequelize;