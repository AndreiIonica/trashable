const supertest = require('supertest');
const { expect } = require('chai');

const db = require('../src/db');

const app = require('../src/app');

describe('GET all counties', () => {
	it('should get all counties', async () => {
		const response = await supertest(app)
			.get('/api/v1/region/')
			.expect('Content-Type', /json/)
			.expect(200);

		expect(response.body.length).not.to.equal(0);
	});
});
describe('GET one countie', () => {
	it('should  get one region', async () => {
		const response = await supertest(app)
			.get('/api/v1/region/1')
			.expect('Content-Type', /json/)
			.expect(200);
		// un oras trb sa aiba proprietatile astea
		expect(response.body).to.have.property('id');
		expect(response.body).to.have.property('name');
		expect(response.body).to.have.property('created_at');
		expect(response.body).to.have.property('updated_at');
		expect(response.body).to.have.property('code');
	});
});
