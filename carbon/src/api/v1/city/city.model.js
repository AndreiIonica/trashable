// The model Objection.js uses for validation
const { Model } = require('objection');

// For relation mapping
const { Region } = require('../region/region.model');

const schema = require('./city.schema.json');
const tableNames = require('../../../constants/tableNames.json');

class City extends Model {
	static get tableName() {
		return tableNames.city;
	}

	static get jsonSchema() {
		return schema;
	}

	static get relationMappings() {
		return {
			region: {
				// Relation: ONE counnty has MANY cities
				relation: Model.BelongsToOneRelation,
				modelClass: Region,
				join: {
					from: 'region.id',
					to: 'city.region_id'
				}
			}
		};
	}
}

module.exports = { City };
