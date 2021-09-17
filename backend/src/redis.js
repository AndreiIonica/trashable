// We are using ioredis because the redis package doesn't support promises
const Redis = require('ioredis');
require('dotenv').config();

const redis = new Redis({
	host: process.env.REDIS_HOST,
	port: process.env.REDIS_PORT,
	password: process.env.REDIS_PASSWORD
});

module.exports = redis;
