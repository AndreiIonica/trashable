const {
	TrashcanTypeRepoDB,
	TrashcanTypeRepoRedis
} = require('../../repo/trashcanType');

class TrashcanTypeService {
	static async getAll() {
		let types = await TrashcanTypeRepoRedis.getAll();
		// It's in cache
		if (types !== undefined) return types;

		// Cache miss
		types = await TrashcanTypeRepoDB.query().where('deleted_at', null);
		// Update in background
		TrashcanTypeRepoRedis.writeAll(types);
		return types;
	}

	static async getById(id) {
		let type = await TrashcanTypeRepoRedis.getById(id);

		// Found in cache
		if (type !== undefined) return type;

		// Cache miss
		type = await TrashcanTypeRepoDB.query()
			.where('deleted_at', null)
			.findById(id);
		// Update in background
		TrashcanTypeRepoRedis.writeById(id, type);

		return type;
	}
}

module.exports = { TrashcanTypeService };
