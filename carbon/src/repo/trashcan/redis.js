const redis = require('../../redis');

class TrashcanRepoRedis {
	static async getAll() {
		const raw = await redis.get('trashcan_all');
		if (raw === null) return undefined;
		return JSON.parse(raw);
	}

	static async writeAll(trashcan) {
		// redis.set can set expire time in seconds: 60*10 means 10 minutes
		await redis.set(
			'trashcan_all',
			JSON.stringify(trashcan),
			'ex',
			process.env.CACHE_EXPIRE_TIME
		);
	}

	static async getById(id) {
		const raw = await redis.get(`trashcan_${id}`);
		if (raw === null) return undefined;
		return JSON.parse(raw);
	}

	static async writeById(id, trashcan) {
		await redis.set(
			`trashcan_${id}`,
			JSON.stringify(trashcan),
			'ex',
			process.env.CACHE_EXPIRE_TIME
		);
	}
}

module.exports = { TrashcanRepoRedis };
