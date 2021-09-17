module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/essential', '@vue/airbnb'],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		// Using alerts to notify the user
		'no-alert': 0,
		// Airbnb is strange with import rules
		import: 0,
		// switch to tabs
		indent: ['error', 'tab'],
		'no-tabs': 0,
	},
};
