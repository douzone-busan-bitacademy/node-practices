const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    'webdb', 'webdb', 'webdb', {
        host: '192.168.80.101',
        port: 3307,
        dialect: 'mysql'
    }
);

const User = require('./User')(sequelize);

User.sync({
    force: false,
    alter: false
});

module.exports = { User }