const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    publishedDate: {
        type: DataTypes.DATEONLY, // Use DATEONLY for just the date
        allowNull: false,
    },
    numberOfPages: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'books',
    timestamps: false,
});

module.exports = Book;