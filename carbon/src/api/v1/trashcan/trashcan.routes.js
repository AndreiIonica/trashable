const express = require('express');

const { TrashcanService } = require('../../../services/trashcan');
const { AuthService } = require('../../../services/auth');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const trashcans = await TrashcanService.getAll();

		res.json(trashcans);
	} catch (err) {
		next(err);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const trashcan = await TrashcanService.getById(req.params.id);

		if (trashcan === undefined) {
			res.status(404);
			throw new Error('invalid id');
		}

		res.json(trashcan);
	} catch (err) {
		next(err);
	}
});

router.post('/', AuthService.isLoggedIn, async (req, res, next) => {
	try {
		req.body.user_id = req.user.id;
		const trashcan = await TrashcanService.create(req.body);

		res.json(trashcan);
	} catch (err) {
		next(err);
	}
});

router.put('/:id', AuthService.isLoggedIn, async (req, res, next) => {
	try {
		const trashcan = await TrashcanService.getById(req.params.id);
		if (trashcan === undefined) {
			res.status(404);
			throw new Error('trashcan not found');
		}
		if (
			!(req.user.id === trashcan.user_id || req.user.role === 'admin') ||
			req.body.user_id
		) {
			res.status(403);
			throw new Error('You are not a mod or admin!');
		} else {
			// update the trashcan
			await TrashcanService.update(req.params.id, req.body);
			// Send back a generic message to let the client know it was succesful
			res.json({
				message: 'Executed correctly'
			});
		}
	} catch (err) {
		next(err);
	}
});

router.delete('/:id', AuthService.isLoggedIn, async (req, res, next) => {
	try {
		const trashcan = await TrashcanService.getById(req.params.id);
		if (trashcan === undefined) {
			res.status(404);
			throw new Error('trashcan not found');
		}
		if (
			!(req.user.id === trashcan.user_id || req.user.role === 'admin') ||
			req.body.user_id
		) {
			res.status(403);
			throw new Error('You are not a mod or admin!');
		} else {
			// update the trashcan
			await TrashcanService.update(req.params.id, {
				deleted_at: new Date().toISOString()
			});
			// Send back a generic message to let the client know it was succesful
			res.json({
				message: 'Executed correctly'
			});
		}
	} catch (err) {
		next(err);
	}
});

module.exports = router;
