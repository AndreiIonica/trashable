const { TrashcanRepoDB } = require('../../repo/trashcan');

class TrashcanService {
	static async getAll() {
		const trashcans = await TrashcanRepoDB.query().where('deleted_at', null);

		return trashcans;
	}

	static async getById(id) {
		const trashcan = await TrashcanRepoDB.query()
			.findById(id)
			.where('deleted_at', null);

		return trashcan;
	}

	static async create(trashcan) {
		const created = await TrashcanRepoDB.query()
			.insert(trashcan)
			.returning('*');

		return created;
	}

	static async update(id, trashcan) {
		return TrashcanRepoDB.query().findById(id).patch(trashcan);
	}
}

module.exports = { TrashcanService };
