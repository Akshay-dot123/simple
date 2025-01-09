const Sequelize = require("sequelize");
const sequelize = require("../db/config");
const Customer = require("./customer"); // Assuming you have the customer model defined in another file

const Order = sequelize.define("order", {
    order_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    total_amount: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    // customer_id: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: Customer,
    //         key: "id"
    //     },
    //     allowNull: true
    // }
}, {
    timestamps: false 
});

// Define the relationship (Associations)
// Order.belongsTo(Customer, { foreignKey: 'customer_id' }); // Each order belongs to a customer

module.exports = Order;
