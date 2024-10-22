const { Sequelize } = require('sequelize');

// Set up your database connection
const sequelize = new Sequelize('express_api', 'root', 'saud', {
    host: 'localhost',
    dialect: 'mysql', // Specify MySQL as the dialect
});

module.exports = sequelize; 