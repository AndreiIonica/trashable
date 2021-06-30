const { TrashcanTypeRepoDB } = require('../../repo/trashcanType');

class TrashcanTypeService {
	static async getAll() {
		const types = await TrashcanTypeRepoDB.query()
			.select('id', 'name', 'created_at', 'updated_at')
			.where('deleted_at', null);

		return types;
	}

	static async getById(id) {
		const types = await TrashcanTypeRepoDB.query()
			.select('id', 'name', 'created_at', 'updated_at')
			.where('deleted_at', null)
			.findById(id);

		return types;
	}
}

module.exports = { TrashcanTypeService };
