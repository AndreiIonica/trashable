// Use the ORM to query, here it is is simple,
// but on tables with many relationships it will  create objects automatically
const express = require('express');

const { Region } = require('./region.model');

const router = express.Router();

// this is prefixed with /api/0.1/region
// so we put '/' as the route

// Get all route
router.get('/', async (req, res, next) => {
	try {
		// auto-filter
		const regions = await Region.query()
			.select('id', 'name', 'code', 'created_at', 'updated_at')
			.where('deleted_at', null)
			.where('deleted_at', null);

		// Send back the object
		res.json(regions);
	} catch (err) {
		// forward the error to the error handler
		next(err);
	}
});

// Get one route
router.get('/:id', async (req, res, next) => {
	try {
		const region = await Region.query()
			.select('id', 'name', 'code', 'created_at', 'updated_at')
			.findById(req.params.id)
			.where('deleted_at', null);

		// Send back the object
		res.json(region);
	} catch (err) {
		// forward the error to the error handler
		next(err);
	}
});

module.exports = router;
