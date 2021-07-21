const redis = require('../../redis');

class TrashcanTypeRepoRedis {
	static async getAll() {
		const raw = await redis.get('type_all');
		if (raw === null) return undefined;
		return JSON.parse(raw);
	}

	static async writeAll(cities) {
		// redis.set can set expire time in seconds: 60*10 means 10 minutes
		await redis.set(
			'type_all',
			JSON.stringify(cities),
			'ex',
			process.env.CACHE_EXPIRE_TIME
		);
	}

	static async getById(id) {
		const raw = await redis.get(`type_${id}`);
		if (raw === null) return undefined;
		return JSON.parse(raw);
	}

	static async writeById(id, city) {
		await redis.set(
			`type_${id}`,
			JSON.stringify(city),
			'ex',
			process.env.CACHE_EXPIRE_TIME
		);
	}
}

module.exports = { TrashcanTypeRepoRedis };
