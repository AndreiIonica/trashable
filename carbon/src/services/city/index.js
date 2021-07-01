const { CityRepoDB } = require('../../repo/city');

class CityService {
	static async getAll() {
		const cities = await CityRepoDB.query()
			.select('id', 'name', 'region_id', 'created_at', 'updated_at')
			.where('deleted_at', null);
		return cities;
	}

	static async getById(id) {
		const cities = await CityRepoDB.query()
			.select('id', 'name', 'region_id', 'created_at', 'updated_at')
			.where('deleted_at', null)
			.findById(id);

		return cities;
	}
}

module.exports = { CityService };
