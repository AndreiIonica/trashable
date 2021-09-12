// The model Objection.js uses for validation
const { Model } = require('objection');

const schema = require('./schema.json');
const tableNames = require('../../constants/tableNames.json');

class TrashcanRepoDB extends Model {
	static get tableName() {
		return tableNames.trashcan;
	}

	static get jsonSchema() {
		return schema;
	}
}

module.exports = { TrashcanRepoDB };
