const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const DiscordStrategy = require('passport-discord').Strategy;

const { UserService } = require('./services/user');

const scopes = ['identify', 'email'];

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: `${process.env.HOST}/api/v1/auth/google/callback`
		},
		async (accessToken, refreshToken, profile, done) => {
			const raw = {
				provider: 'google',
				providerID: profile.id,
				email: profile.emails[0].value,
				name: profile.displayName
			};

			const user = await UserService.findOrCreate(raw);
			return done(null, user);
		}
	)
);

passport.use(
	new DiscordStrategy(
		{
			clientID: process.env.DISCORD_CLIENT_ID,
			clientSecret: process.env.DISCORD_CLIENT_SECRET,
			callbackURL: `${process.env.HOST}/api/v1/auth/discord/callback`,
			scope: scopes
		},
		async (accessToken, refreshToken, profile, done) => {
			const raw = {
				provider: 'discord',
				providerID: profile.id,
				email: profile.email,
				name: profile.username
			};
			const user = await UserService.findOrCreate(raw);
			return done(null, user);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
