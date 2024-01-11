const request = require('supertest');
const app = require("../app");

describe('API demo test suite', () => {
    it('tests demo api', async() => {
        const response = await request(app).get("/space/destinations");
        expect(response.body).toEqual(["Mars", "Moon", "Earth", "Mercury", "Venus", "Jupiter"]);
        expect(response.body).toHaveLength(6);
        expect(response.statusCode).toBe(200);
        // Testing a single element in the array
        expect(response.body).toEqual(expect.arrayContaining(['Earth']));

    });
});