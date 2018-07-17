var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./router.js');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
require('../database-mysql');
require('../database-mysql/models.js');
require('../database-mysql/bin/seed-data.js');
// var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/../react-client/dist'));
app.use('/api', routes);
// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

// app.get('/todo', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

// app.post('/items', function(req, res){
//   items.insertToDatabase(req.body, function(err){
//     if(err){
//       console.log('posting error: ', err);
//     } else {
//       console.log('posted from server successfully');
//     }
//   })
// })

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
