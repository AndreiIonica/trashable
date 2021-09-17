const redis = require('../../redis');

class TrashcanTypeRepoRedis {
	static async getAll() {
		const raw = await redis.get('type_all');
		if (raw === null) return undefined;
		return JSON.parse(raw);
	}

	static async writeAll(types) {
		// redis.set can set expire time in seconds: 60*10 means 10 minutes
		await redis.set(
			'type_all',
			JSON.stringify(types),
			'ex',
			process.env.CACHE_EXPIRE_TIME
		);
	}

	static async getById(id) {
		const raw = await redis.get(`type_${id}`);
		if (raw === null) return undefined;
		return JSON.parse(raw);
	}

	static async writeById(id, type) {
		await redis.set(
			`type_${id}`,
			JSON.stringify(type),
			'ex',
			process.env.CACHE_EXPIRE_TIME
		);
	}
}

module.exports = { TrashcanTypeRepoRedis };
