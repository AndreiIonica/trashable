// The model Objection.js uses for validation
const { Model } = require('objection');

// For relation mapping
const { CityRepoDB } = require('../city');
const { TrashcanTypeRepoDB } = require('../trashcanType');

const schema = require('./schema.json');
const tableNames = require('../../constants/tableNames.json');

class TrashcanRepoDB extends Model {
	static get tableName() {
		return tableNames.trashcan;
	}

	static get jsonSchema() {
		return schema;
	}

	static get relationMappings() {
		return {
			city: {
				// Relation: ONE city has MANY trashcans
				// so a trashcan belongs to a city
				relation: Model.BelongsToOneRelation,
				modelClass: CityRepoDB,
				// Property by which to join them
				join: {
					from: 'city.id',
					to: 'trashcan.city_id'
				}
			},
			type: {
				// Relation: ONE type has MANY trashcans
				// so a trashcan belongs to one type
				relation: Model.BelongsToOneRelation,
				modelClass: TrashcanTypeRepoDB,
				// Property by which to join them
				join: {
					from: 'trashcan_type.id',
					to: 'trashcan.type_id'
				}
			}
		};
	}
}

module.exports = { TrashcanRepoDB };
