const express = require('express');

const { UserService } = require('../../../services/user');

const router = express.Router();

// Get all route
router.get('/', async (req, res, next) => {
	try {
		const users = await UserService.getAll();

		res.json(users);
	} catch (e) {
		next(e);
	}
});

// Get one route
router.get('/:id', async (req, res, next) => {
	try {
		const user = await UserService.getById(req.params.id);

		if (user === undefined) {
			res.status(404);
			throw new Error('invalid id');
		}
		// Send back the object
		res.json(user);
	} catch (err) {
		// forward the error to the error handler
		next(err);
	}
});

module.exports = router;
