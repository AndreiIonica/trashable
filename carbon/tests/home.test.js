// Tests for the app

const supertest = require('supertest');
const { expect } = require('chai');
const db = require('../src/db');

const app = require('../src/app');

describe('GET /', () => {
	it('should respond with a message', async () => {
		const response = await supertest(app)
			.get('/')
			.expect('Content-Type', /json/)
			.expect(200);

		expect(response.body.message).to.equal('Trashable Backend!');
	});
});

describe('GET /api/v1/', () => {
	it('should respond with message', async () => {
		const response = await supertest(app)
			.get('/api/v1/')
			.expect('Content-Type', /json/)
			.expect(200);
		expect(response.body.message).to.equal('API');
	});
});
