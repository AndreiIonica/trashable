const express = require('express');
const passport = require('passport');

const { AuthService } = require('../../../services/auth');

const router = express.Router();

// FUTURE NOTE: dont try and refactor the callback route.
// for some reason passport doesn't work with multiple providers in the same route
// even if it works with each provider separately

const authCallback = async (req, res) => {
	const payload = { ...req.user };
	req.logOut();

	const token = await AuthService.sign(payload);
	res.cookie('auth-token', token);
	res.redirect('https://trashable.vercel.app/');
};

router.get(
	'/google',
	passport.authenticate('google', { scope: ['profile', 'email'] })
);
router.get('/google/callback', passport.authenticate('google'), authCallback);

router.get('/discord', passport.authenticate('discord'));
router.get('/discord/callback', passport.authenticate('discord'), authCallback);

router.get('/protected', AuthService.isLoggedIn, (req, res) => {
	res.json(req.user);
});

module.exports = router;
