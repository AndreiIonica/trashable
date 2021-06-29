// The model Objection.js uses for validation
const { Model } = require('objection');

const schema = require('./region.schema.json');
const tableNames = require('../../../constants/tableNames.json');

class Region extends Model {
	static get tableName() {
		return tableNames.region;
	}

	static get jsonSchema() {
		return schema;
	}
}

module.exports = { Region };
