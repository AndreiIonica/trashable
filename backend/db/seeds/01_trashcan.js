// eslint-disable-next-line no-unused-vars
const Knex = require('knex');

const tableNames = require('../../src/constants/tableNames.json');
const trashcanSource = require('../sources/trashcans.json');

/**
 * @param {Knex} knex
 */
exports.seed = async (knex) => {
	await knex(tableNames.trashcan).insert(trashcanSource);
};
