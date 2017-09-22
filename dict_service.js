var express = require('express');
var router = express.Router();
var db = require('./models');
var [Dictionary, Item, ItemValue, DictionaryAttribute] = [db.Dictionary, db.Item, db.ItemValue, db.DictionaryAttribute];
// TODO эту функцию тоже надо изменить, изменить решение.
function addItemFields(values, item_id) {					// Функция для добавления к запросу айди айтема и замены поля value на поле вида "type_value", которое есть в таблице ItemValues
	values.forEach(item => {
		item.item_id = item_id;
		let type_field = selectValueType(item.value);
		item[type_field] = item.value;
		delete item.value;
	})
	return values
}

function selectValueType(value) {									// Функция для выбора типа поля в зависимости от входных данных
	if (value instanceof Date) return "date_value"
	switch(typeof value) {
		case 'string': return "string_value";
		case 'number': return "number_value";
	}
}

exports.create = (dict_code_name, values) => {
	return db.sequelize.transaction(t => {
		return Dictionary.findOne({where: {code_name: dict_code_name}}, {transaction: t}).then(dict => {
			return Item.create({dictionary_id: dict.uuid}, {transaction: t});
		}).then(item => {
			ItemValue.bulkCreate(addItemFields(values, item.uuid));
		})
	})
}

exports.delete = (item_id) => {
	return db.sequelize.transaction(t => {
		return ItemValue.destroy({where: {item_id: item_id}}, {transaction: t}).then(itemValues => {
			if (!itemValues) throw new Error();
			console.log(itemValues, "<=====this is itemValues");
			return Item.destroy({where: {uuid: item_id}}, {transaction: t});

		}).then(result => {
				if (!result) throw new Error();
				console.log(result);
			})
	})
}

// TODO Доделать функцию, там куча ошибок
exports.update = (item_id, dict_id, values) => {																															//функция для изменения данных айтема
	return db.sequelize.transaction(t => {
		return DictionaryAttribute.findAll({where: {dictionary_id: dict_id}}, {transaction: t}).then(result => {	// Ищем все аттрибуты, которые соответсвуют словарю, в котором находится айтем, который хотим поменять
			result.forEach(attr => {																																								
				ItemValue.findOne({where: {item_id: item_id}}, {transaction: t}).then(itemValue => {						// Для каждого аттрибута ищем значения
					if(values[attr.name]) {																																				// если значение есть в запросе, то идем дальше
						valueType = selectValueType(values[attr.name]);																							// Получаем поле, которое нужно изменить
						console.log(values[attr.name]);
						console.log(itemValue[valueType]);
						itemValue[valueType] = values[attr.name];																										// Присваиваем нужное значение, после этого надо сохранить
						itemValue.save();
					}
				})
			})
		})
	})
}