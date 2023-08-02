const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('restaurant-db', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost',
    logging: console.log,
});

module.exports = sequelize;
