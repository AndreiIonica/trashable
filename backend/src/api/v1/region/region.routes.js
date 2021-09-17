// Use the ORM to query, here it is is simple,
// but on tables with many relationships it will  create objects automatically
const express = require('express');

const { RegionService } = require('../../../services/region');

const router = express.Router();

// this is prefixed with /api/0.1/region
// so we put '/' as the route

// Get all route
router.get('/', async (req, res, next) => {
	try {
		const regions = await RegionService.getAll();

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
		const region = await RegionService.getById(req.params.id);

		// Send back the object
		res.json(region);
	} catch (err) {
		// forward the error to the error handler
		next(err);
	}
});

module.exports = router;
