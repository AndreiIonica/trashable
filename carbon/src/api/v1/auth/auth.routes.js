const express = require('express');
const passport = require('passport');

const { AuthService } = require('../../../services/auth');

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

		const token = await AuthService.sign(payload);
		res.cookie('auth-token', token);
		res.end();
	}
);

router.get('/protected', AuthService.isLoggedIn, (req, res) => {
	res.json(req.user);
});

module.exports = router;
