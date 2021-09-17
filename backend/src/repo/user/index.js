// The model Objection.js uses for validation
const { Model } = require('objection');

const schema = require('./schema.json');
const tableNames = require('../../constants/tableNames.json');

class UserRepoDB extends Model {
	static get tableName() {
		return tableNames.user;
	}

	static get jsonSchema() {
		return schema;
	}
}

module.exports = { UserRepoDB };
