// const mysql = require('mysql');
// const Sequelize = require('sequelize');
const db = require('../models.js');
// const connect = require('../index.js');

const listData = [{
  name: 'To Do Liszt'
}];

const todoData = [{
  name: 'To Do Liszt',
  listName: 'walk dalg'
},
{
  name:'To Do Liszt',
  listName: 'clean shoes'
},{
  name: 'TO DO Liszt',
  listName: 'cook in park'
}];

db.list.sync({force:false}).then(()=>{
  db.list.bulkCreate(listData).then(()=>{
    db.todo.sync({force:false}).then(()=>{
      db.todo.bulkCreate(todoData).then(()=>{
        console.log(' finished syncin extra bro');
      })
    })
  })
})
