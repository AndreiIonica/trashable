const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const { UserService } = require('./services/user');

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: `${process.env.HOST}/api/v1/auth/google/callback`
		},
		async (accessToken, refreshToken, profile, done) => {
			const raw = {
				googleId: profile.id,
				email: profile.emails[0],
				name: profile.displayName
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
