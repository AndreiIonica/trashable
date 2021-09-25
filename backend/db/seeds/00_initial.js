// Loads a list of counties(In Romania) from a json file, they are pre-cleaned
// eslint-disable-next-line no-unused-vars
const Knex = require('knex');
require('dotenv').config();
const fs = require('fs');

const tableNames = require('../../src/constants/tableNames.json');
const regionSource = require('../sources/regions.json');
const citySource = require('../sources/cities.json');
const typesSource = require('../sources/type.json');

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
	await knex(tableNames.region).insert(regionSource);

	// CITIES SEED
	await knex(tableNames.city).insert(citySource);

	// TRASHCAN_TYPE SEED
	await knex(tableNames.trashcan_type).insert(typesSource);
	/* ********************************************************* */

	// USERS SEED
	await userSeed(knex);
};
