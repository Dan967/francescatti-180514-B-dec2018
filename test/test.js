const request = require('supertest');
const server = require('../api.js');

test('it should return success', async () => {
	var response = await request(server).get('/play?player1=3')
	expect(response.status).toBe(200);
});

test('it should return a error', async () => {
	var response = await request(server).get('/play?player1=7')
	expect(response.status).toBe(400);
});

// close the server after the test
afterAll(() => {
    server.close();
});
