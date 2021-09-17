const { RegionRepoDB, RegionRepoRedis } = require('../../repo/region');

class RegionService {
	static async getAll() {
		let regions = await RegionRepoRedis.getAll();
		// It's in cache
		if (regions !== undefined) return regions;

		// Cache miss
		regions = await RegionRepoDB.query().where('deleted_at', null);
		// Update in background
		RegionRepoRedis.writeAll(regions);
		return regions;
	}

	static async getById(id) {
		let region = await RegionRepoRedis.getById(id);

		// Found in cache
		if (region !== undefined) return region;

		// Cache miss
		region = await RegionRepoDB.query().where('deleted_at', null).findById(id);
		// Update in background
		RegionRepoRedis.writeById(id, region);

		return region;
	}
}

module.exports = { RegionService };
