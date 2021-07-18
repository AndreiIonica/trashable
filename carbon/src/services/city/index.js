const { CityRepoDB, CityRepoRedis } = require('../../repo/city');

class CityService {
	static async getAll() {
		let cities = await CityRepoRedis.getAll();
		// It's in cache
		if (cities !== undefined) return cities;

		// Cache miss
		cities = await CityRepoDB.query().where('deleted_at', null);
		// Update in background
		CityRepoRedis.writeAll(cities);
		return cities;
	}

	static async getById(id) {
		const cities = await CityRepoDB.query()
			.where('deleted_at', null)
			.findById(id);

		return cities;
	}
}

module.exports = { CityService };
