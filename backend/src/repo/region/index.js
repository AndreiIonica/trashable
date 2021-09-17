// The model Objection.js uses for validation
const { RegionRepoDB } = require('./db');
const { RegionRepoRedis } = require('./redis');

module.exports = { RegionRepoDB, RegionRepoRedis };
