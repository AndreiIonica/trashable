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
		let city = await CityRepoRedis.getById(id);

		// Found in cache
		if (city !== undefined) return city;

		// Cache miss
		city = await CityRepoDB.query().where('deleted_at', null).findById(id);
		// Update in background
		CityRepoRedis.writeById(id, city);

		return city;
	}
}

module.exports = { CityService };
