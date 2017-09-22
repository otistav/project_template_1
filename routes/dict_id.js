var express = require('express');
var dict_service = require('../dict_service');
var router = express.Router();
var db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {

});

router.post('/:dict_code_name', function(req, res, next) {
	console.log(req.params)
	dict_service.create(req.params.dict_code_name, req.body.attributes).then(() => {
		res.send('OK')
	}).catch(err => {
		next(err);
	})

})

router.delete('/:dict_code_name', function(req, res, next) {
	dict_service.delete(req.body.item_id).then(() => {
		res.send("deleted");
	}).catch(err => {
		next(err);
	})
})

router.patch('/:dict_code_name/:id', function(req, res, next) {
	dict_service.update(req.params.id, req.body.dict_id, req.body.new_values).then(result => {
		res.send(result);
	}).catch(err => {
		next(err);
	})
})

module.exports = router;