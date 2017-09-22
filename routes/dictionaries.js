var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {

  db.Dictionary.findAll().then(dicts => {
  	res.send(dicts);
  }).catch(err => {
  	next(err);
  })

});


router.get('/:id', (req, res, next) => {

	db.Dictionary.findById(req.params.id).then(dict => {
		res.send(dict);
	}).catch(err => {
		next(err);
	})

})


router.get('/:id/attributes', function(req, res, next) {

	db.DictionaryAttribute.findAll({where: {dictionary_id: req.params.id}}).then(attrs => {
		req.send(attrs);
	})
})


router.post('/', function(req, res, next) {

	db.Dictionary.create({
		name: req.body.name,
		code_name: req.body.code_name
	}).then((dictionary) => {
		res.send(dictionary);
	}).catch(err => {
		next(err);
	})

})


router.post('/:id/attributes', function(req, res, next) {

	db.DictionaryAttribute.create({
		name: req.body.name,
		dictionary_id: req.params.id,
		type_id: req.body.type_id
	}).then((dictionaryAttribute) => {
		res.send(dictionaryAttribute);
	}).catch(err => {
		next(err);
	})

})



module.exports = router;
