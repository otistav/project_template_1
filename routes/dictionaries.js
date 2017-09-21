var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {

  db.Dictionary.findAll().then(result => {
  	res.send(result);
  }).catch(err => {
  	next(err);
  })

});

router.post('/', function(req, res, next) {

	db.Dictionary.create({
		name: req.body.name
	}).then((dictionary) => {
		res.send(dictionary);
	}).catch(err => {
		next(err);
	})

})



router.post('/:id/attributes', function(req, res, next) {

	db.DictionaryAttribute.create({
		name: req.body.name,
		dictionary_id: req.body.dictionary_id,
		type_id: req.body.type_id
	}).then((dictionaryAttribute) => {
		res.send(dictionaryAttribute);
	}).catch(err => {
		next(err);
	})

})


module.exports = router;
