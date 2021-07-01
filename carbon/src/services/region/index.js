const { RegionRepoDB } = require('../../repo/region');

class RegionService {
	static async getAll() {
		const regions = await RegionRepoDB.query()
			.select('id', 'name', 'code', 'created_at', 'updated_at')
			.where('deleted_at', null);
		return regions;
	}

	static async getById(id) {
		const region = await RegionRepoDB.query()
			.select('id', 'name', 'code', 'created_at', 'updated_at')
			.where('deleted_at', null)
			.findById(id);

		return region;
	}
}

module.exports = { RegionService };
