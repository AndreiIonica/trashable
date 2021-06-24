// DB connection to be reused
const knex = require('knex');
const pg = require('pg');
const { Model } = require('objection');

// IMPORTANT
// Without this line,floats are returned as strings(issue with pg)
pg.types.setTypeParser(pg.types.builtins.NUMERIC, (value) => {
	return parseFloat(value);
});

const enviroment = process.env.NODE_ENV || 'development';
const config = require('../knexfile');

const envConfig = config[enviroment];
const connection = knex(envConfig);

Model.knex(connection);
module.exports = connection;
