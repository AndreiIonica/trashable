const supertest = require('supertest');
const { expect } = require('chai');
const db = require('../src/db');

const app = require('../src/app');

describe('GET all trashcan types', () => {
	it('should respond with an array', async () => {
		const response = await supertest(app)
			.get('/api/v1/trashcanType/')
			.expect('Content-Type', /json/)
			.expect(200);
		// Test if array
		expect(response.body).to.have.property('length');
	});
});
