const { UserRepoDB } = require('../../repo/user');

class UserService {
	static async getAll() {
		const users = await UserRepoDB.query()
			.select('name', 'role', 'last_login', 'id')
			.where('deleted_at', null);

		return users;
	}

	static async getById(id) {
		const user = await UserRepoDB.query()
			.select('name', 'role', 'last_login', 'id')
			.where('deleted_at', null)
			.findById(id);

		return user;
	}
}

module.exports = { UserService };
