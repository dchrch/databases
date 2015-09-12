var mysql = require('mysql');
var Sequelize = require("sequelize");

exports.sequelize = sequelize = new Sequelize('chat', 'root', 'davidmike', {
    host: "127.0.0.1",
    dialect: 'mysql',
    define: {
        timestamps: false,
    }
});

exports.Message = Message = sequelize.define('messages', {
  username: {type: Sequelize.STRING, primaryKey: true},
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

Message.sync();
