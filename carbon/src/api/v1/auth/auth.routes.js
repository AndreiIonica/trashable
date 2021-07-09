const express = require('express');
const passport = require('passport');

const jwt = require('../../../lib/jwt');

const router = express.Router();

router.get(
	'/google',
	passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
	'/google/callback',
	passport.authenticate('google'),
	async (req, res) => {
		const payload = { ...req.user };
		req.logOut();

		const token = await jwt.sign(payload);
		res.cookie('auth-token', token);
		// res.redirect('https://www.google.com/');
		res.end();
	}
);

router.get('/protected', jwt.isLoggedIn, (req, res) => {
	res.json(req.user);
});

module.exports = router;
