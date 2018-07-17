var db = require('../database-mysql/models.js');

module.exports = {
  fetch: (req, res) => {
    console.log('this is the error your getting', req.body, 'heres req.query', req.query);
    db.todo.findAll({
      where: {name: req.query.listName}
    })
    .then(results => {if(results){
      res.status(200).send(results);
    } else {
      res.status(400).send('failed to find items in database');
    }})
    .catch(err=>console.log('error getting in controller', err));
  },
  post: (req, res) => {
    db.todo.create({name:req.body.name, listName:req.body.listName})
    .then(results=> {console.log('got results from controller', results); res.status(201).send(results)})
  },
  delete: (req, res) => {
    console.log('heres req.body in controller', req.body,'now query', req.query);
    db.todo.destroy({
      where: {listName:req.query.listName}
    })
    .then(()=>res.status(202).send('deleted'))
  }
};
