// Loads a list of counties(In Romania) from a json file, they are pre-cleaned
// eslint-disable-next-line no-unused-vars
const Knex = require('knex');
require('dotenv').config();
const fs = require('fs');

const tableNames = require('../../src/constants/tableNames.json');
const judete = require('../sources/regions.json');
const oraseJSON = require('../sources/cities.json');
const types = require('../sources/type.json');

const citySeed = async (knex) => {
	const cities = [];
	// Get the id of Arges region
	const { id } = await knex(tableNames.region)
		.select('id')
		.where('code', 'AG')
		.first();
	// JS fuckery to do it in parallel
	// Explanation: map returns a new array with the return of the function applied to every element
	// the async function returns a promise and we put that into
	// Promise.all so it is done in parallel
	await Promise.all(
		oraseJSON.map(async (oras) => {
			cities.push({
				name: oras.name,
				region_id: id
			});
		})
	);
	await knex(tableNames.city).insert(cities);
};

const userSeed = async (knex) => {
	const user = {
		email: process.env.ADMIN_EMAIL,
		name: 'Trasable Team',
		role: 'admin'
	};

	const [createdUser] = await knex(tableNames.user).insert(user).returning('*');

	fs.writeFileSync('./utilizator.json', JSON.stringify(createdUser, null, 2));
};

/**
 * @param {Knex} knex
 */
exports.seed = async (knex) => {
	// Deletes it in the other in the file(thank god JSON is consistent this time)
	await Promise.all(Object.keys(tableNames).map((name) => knex(name).del()));

	// COUNTIES SEED
	await knex(tableNames.region).insert(judete);

	// CITIES SEED
	await citySeed(knex);

	// TRASHCAN_TYPE SEED
	await knex(tableNames.trashcan_type).insert(types);
	/* ********************************************************* */

	// USERS SEED
	await userSeed(knex);
};
