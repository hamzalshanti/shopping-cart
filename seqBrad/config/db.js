const { Sequelize } = require('sequelize');

module.exports = new Sequelize('gig', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
//   define: {
//       freezeTableName: true // for make model name same as db table
//   }
});

