var express = require('express');
var router = express.Router();
var db = require('./models');
var [Dictionary, Item, ItemValue] = [db.Dictionary, db.Item, db.ItemValue];

function addItemId(values, item_id) {
	values.forEach(item => {
		item.item_id = item_id;
	})
	console.log(values)
	return values
}

exports.create = (dict_code_name, values) => {
	return db.sequelize.transaction(t => {
		return Dictionary.findOne({where: {code_name: dict_code_name}}, {transaction: t}).then(dict => {
			return Item.create({dictionary_id: dict.uuid}, {transaction: t}).then((item) => {
				ItemValue.bulkCreate(addItemId(values, item.uuid))
			})
		})
		
	})
}