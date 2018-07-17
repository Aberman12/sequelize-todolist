// const mysql = require('mysql');
const Sequelize = require('sequelize');
const connection = require('./');

const list = connection.sequelize.define('list', {
  name:{
    type: Sequelize.STRING,
    allowNull: false
  }
},{timestamps:false});

const todo = connection.sequelize.define('todo', {
  name: {
    type:Sequelize.STRING,
    allowNull:false
  },
  listName: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps:false
});

connection.sequelize.sync({force:false})
.then(()=> console.log('successfully synced database'))
.catch(err=>console.log('error syncing database', err));

module.exports = {
  list, todo
};
