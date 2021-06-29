// The model Objection.js uses for validation
const { Model } = require('objection');

// For relation mapping
const { RegionRepoDB } = require('../region');

const schema = require('./schema.json');
const tableNames = require('../../constants/tableNames.json');

class CityRepoDB extends Model {
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
				modelClass: RegionRepoDB,
				join: {
					from: 'region.id',
					to: 'city.region_id'
				}
			}
		};
	}
}

module.exports = { CityRepoDB };
