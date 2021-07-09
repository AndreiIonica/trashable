const express = require('express');

const { TrashcanRepoDB } = require('../../../repo/trashcan');
const { AuthService } = require('../../../services/auth');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const trashcans = await TrashcanRepoDB.query().where('deleted_at', null);

		res.json(trashcans);
	} catch (err) {
		next(err);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const trashcan = await TrashcanRepoDB.query()
			.findById(req.params.id)
			.where('deleted_at', null);

		res.json(trashcan);
	} catch (err) {
		next(err);
	}
});

router.post('/', AuthService.isLoggedIn, async (req, res, next) => {
	try {
		req.body.user_id = req.user.id;
		const trashcan = await TrashcanRepoDB.query()
			.insert(req.body)
			.returning('*');

		res.json(trashcan);
	} catch (err) {
		next(err);
	}
});

router.put('/:id', AuthService.isLoggedIn, async (req, res, next) => {
	try {
		const trashcan = await TrashcanRepoDB.query().findById(req.params.id);
		if (
			!(req.user.id === trashcan.user_id || req.user.role === 'admin') ||
			req.body.user_id
		) {
			res.status(403);
			const err = new Error('You are not a mod or admin!');
			throw err;
		} else {
			// update the trashcan
			await TrashcanRepoDB.query().findById(req.params.id).patch(req.body);
		}

		// Send back a generic message to let the client know it was succesful
		res.json({
			message: 'Executed correctly'
		});
	} catch (err) {
		next(err);
	}
});

router.delete('/:id', AuthService.isLoggedIn, async (req, res, next) => {
	try {
		const trashcan = await TrashcanRepoDB.query().findById(req.params.id);
		if (
			!(req.user.id === trashcan.user_id || req.user.role === 'admin') ||
			req.body.user_id
		) {
			res.status(403);
			const err = new Error('You are not a mod or admin!');
			throw err;
		} else {
			// Soft deletes
			await TrashcanRepoDB.query().findById(req.params.id).patch({
				deleted_at: new Date().toISOString()
			});
		}

		// Send back a generic message to let the client know it was succesful
		res.json({
			message: 'Executed correctly'
		});
	} catch (err) {
		next(err);
	}
});

module.exports = router;
