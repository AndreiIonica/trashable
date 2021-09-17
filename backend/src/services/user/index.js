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

	static async findOrCreate(raw) {
		const [user] = await UserRepoDB.query()
			.select()
			.where('email', raw.email)
			.where('deleted_at', null);
		if (user) return user;

		// No created user
		// Creating one now
		const ins = {
			email: raw.email,
			name: raw.name,
			role: 'normal'
		};

		const insertedUser = await UserRepoDB.query().insert(ins);
		return insertedUser;
	}
}

module.exports = { UserService };
