var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {

  db.Dictionary.findAll().then(result => {
  	res.send(result);
  })
  
});

router.post('/', function(req, res, next) {

	db.Dictionary.create({
		name: req.body.name
	}).then((dictionary) => {
		res.send(dictionary);
	})

})

module.exports = router;
