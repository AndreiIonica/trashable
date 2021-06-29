const express = require('express');
const { UserRepoDB } = require('../../../repo/user');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const fields = ['name', 'role', 'last_login', 'id'];

		const users = await UserRepoDB.query()
			.select(fields)
			.where('deleted_at', null);

		res.json(users);
	} catch (e) {
		next(e);
	}
});

module.exports = router;
