// Here the use of an ORM makes things easier.
// This object has a many to one relationship to the region id
const express = require('express');

const router = express.Router();

// const { CityRepoDB } = require('../../../repo/city');
const { CityService } = require('../../../services/city');

router.get('/', async (req, res, next) => {
	try {
		// TODO: secure way to implement filtering
		const cities = await CityService.getAll();

		res.json(cities);
	} catch (err) {
		next(err);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const city = await CityService.getById(req.params.id);

		res.json(city);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
