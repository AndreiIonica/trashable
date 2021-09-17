const { TrashcanRepoDB, TrashcanRepoRedis } = require('../../repo/trashcan');

class TrashcanService {
	static async getAll() {
		let trashcans = await TrashcanRepoRedis.getAll();
		// Cache hit
		if (trashcans !== undefined) return trashcans;

		// Cache miss
		trashcans = await TrashcanRepoDB.query().where('deleted_at', null);

		// Update cache
		await TrashcanRepoRedis.writeAll(trashcans);

		return trashcans;
	}

	static async getById(id) {
		let trashcan = await TrashcanRepoRedis.getById(id);
		// Cache hit
		if (trashcan !== undefined) return trashcan;

		// Cache miss
		trashcan = await TrashcanRepoDB.query()
			.findById(id)
			.where('deleted_at', null);

		// Update cache
		await TrashcanRepoRedis.writeById(id, trashcan);

		return trashcan;
	}

	static async create(trashcan) {
		// TODO: expire cache/update here
		const created = await TrashcanRepoDB.query()
			.insert(trashcan)
			.returning('*');

		return created;
	}

	static async update(id, trashcan) {
		// TODO: expire cache/update here
		return TrashcanRepoDB.query().findById(id).patch(trashcan);
	}
}

module.exports = { TrashcanService };
