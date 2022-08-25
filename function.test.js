
const request = require('supertest');
const app = require('./index');
const db = require ('./controller/query.js');



describe("group", () => {

test('add 1 + 2 to equal 3', async () => {
    expect(1 + 2).toBe(3);

})

})

describe("GET /", () => {

    afterEach(() => app.close());
    test("it should respond with a 200 status code ", async () => {
        const res = await request(app).get('/items');
        console.log('res',res)
        expect(res.statusCode).toEqual(200);

    })
})

