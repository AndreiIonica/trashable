const redis = require('../../redis');

class CityRepoRedis {
	static async getAll() {
		const raw = await redis.get('cities_all');
		if (raw === null) return undefined;
		return JSON.parse(raw);
	}

	static async writeAll(cities) {
		redis.set('cities_all', JSON.stringify(cities));
	}
}

module.exports = { CityRepoRedis };
