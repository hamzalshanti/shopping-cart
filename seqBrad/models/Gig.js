const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Gig = db.define('gigs', {
    title: {
        type: DataTypes.STRING
    },
    tech: {
        type: DataTypes.STRING
    },

    budget: {
        type: DataTypes.STRING,
        defaultValue: 'Unknown'
    },
    desc: {
        type: DataTypes.STRING
    },

    contact_email: {
        type: DataTypes.STRING
    },
}, {});
module.exports = Gig;