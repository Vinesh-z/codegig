const Sequelize = require('sequelize');
const db = require('../config/database');

const Gig = db.define('gig', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    technologies: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    budget: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contact_email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Gig;