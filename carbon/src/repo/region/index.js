// The model Objection.js uses for validation
const { Model } = require('objection');

const schema = require('./schema.json');
const tableNames = require('../../constants/tableNames.json');

class RegionRepoDB extends Model {
	static get tableName() {
		return tableNames.region;
	}

	static get jsonSchema() {
		return schema;
	}
}

module.exports = { RegionRepoDB };
