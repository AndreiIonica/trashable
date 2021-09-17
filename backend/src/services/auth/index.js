const jwt = require('jsonwebtoken');

class AuthService {
	static async sign(payload) {
		return new Promise((resolve, reject) => {
			jwt.sign(
				payload,
				process.env.JWT_SECRET,
				{
					expiresIn: process.env.NODE_ENV === 'production' ? '1h' : '1y'
				},
				(err, token) => {
					if (err) reject(err);
					return resolve(token);
				}
			);
		});
	}

	// express middleware
	static isLoggedIn(req, res, next) {
		try {
			const user = jwt.verify(
				req.cookies['auth-token'],
				process.env.JWT_SECRET
			);
			req.user = user;
			next();
		} catch (e) {
			res.status(401);
			next(e);
		}
	}
}

module.exports = { AuthService };
