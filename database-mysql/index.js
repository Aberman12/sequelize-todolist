var mysql = require('mysql');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('test', 'root','',{
  host:'localhost',
  dialect:'mysql'
});

sequelize.authenticate()
.then(()=>console.log('connection established successfully!'))
.catch(err=>console.log('connection to database failed: ', err))
.done()

// var selectAll = function(callback) {
// sequelize.findAll({
//
// })
// };
//
// var insertToDatabase = function(params, callback){
//
// }
//
// var deleter = function(){
//
// }

module.exports = {
sequelize
};
