// We are using ioredis because the redis package doesn't support promises
const Redis = require('ioredis');

const redis = new Redis();

module.exports = redis;
