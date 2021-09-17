// The model Objection.js uses for validation
const { Model } = require('objection');

const schema = require('./schema.json');
const tableNames = require('../../constants/tableNames.json');

class TrashcanTypeRepoDB extends Model {
	static get tableName() {
		return tableNames.trashcan_type;
	}

	static get jsonSchema() {
		return schema;
	}
}

module.exports = { TrashcanTypeRepoDB };
