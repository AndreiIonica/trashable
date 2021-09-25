// eslint-disable-next-line no-unused-vars
const Knex = require('knex');

const tableNames = require('../../src/constants/tableNames.json');
const trashcanSource = require('../sources/trashcans.json');

/**
 * @param {Knex} knex
 */
exports.seed = async (knex) => {
	const trashacans = [];
	await Promise.all(
		trashcanSource.map(async (t) => {
			trashacans.push({
				user_id: t.user_id,
				latitude: t.latitude,
				longitude: t.longitude,
				street_address: t.address,
				city_id: t.city_id,
				type_id: t.type_id
			});
		})
	);
	await knex(tableNames.trashcan).insert(trashacans);
};
