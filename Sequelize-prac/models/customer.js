const Sequelize = require("sequelize");
const sequelize = require("../db/config");

const Customer = sequelize.define("customer", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: true
    },
}, {
    timestamps: false 
});

module.exports = Customer;
