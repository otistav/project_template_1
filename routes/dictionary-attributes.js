var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {

  db.DictionaryAttributes.findAll().then(result => {
  	res.send(result);
  }).catch(err => {
  	next(err);
  })

});


module.exports = router;
