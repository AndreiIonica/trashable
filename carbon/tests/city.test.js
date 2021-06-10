const supertest = require('supertest');
const { expect } = require('chai');
const db = require('../src/db');

const app = require('../src/app');

describe('GET all cities', () => {
  it('should respond with all the cities', async () => {
    const response = await supertest(app)
      .get('/api/0.1/city/')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.body).to.have.property('length');
  });
});

describe('GET one city', () => {
  it('should respond with one city', async () => {
    const response = await supertest(app)
      .get('/api/0.1/city/1')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.body).to.have.property('id');
    expect(response.body).to.have.property('name');
    expect(response.body).to.have.property('county_id');
    expect(response.body).to.have.property('updated_at');
    expect(response.body).to.have.property('created_at');
  });
});
