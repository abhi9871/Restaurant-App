const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Restaurant = sequelize.define('restaurant', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    dish: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    table: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Restaurant;