var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {

  db.Type.findAll().then(result => {
  	res.send(result);
  }).catch(err => {
  	next(err);
  })
  
	  
});

router.post('/', function(req, res, next) {

	db.Type.create({
		type_name: req.body.type_name
	}).then((type) => {
		res.send(type);
	}).catch(err => {
		next(err);
	})



})

module.exports = router;
