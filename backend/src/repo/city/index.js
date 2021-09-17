// The model Objection.js uses for validation
const { CityRepoDB } = require('./db');
const { CityRepoRedis } = require('./redis');

module.exports = { CityRepoDB, CityRepoRedis };
