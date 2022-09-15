const app = require('./index');
const expect = require('chai').expect;
const request = require('supertest');
const db = require('./database/db')





describe("group", () => {
  

    it('add 1 + 2 to equal 3', async () => {
        expect(1 + 2).to.eql(3);
    
    })
    
    });
    

describe("GET /", () => {

 


    it("it should get the items ",  async() => {
        const res = await request(app)
        .get('/items')
        //  console.log('res',res)
        expect(res.statusCode).to.eql(200);
    
    });

    it("it create new item", async() => {
        const res2 = await request(app)
        .post('/addItem')
        // console.log('res', res2)
        expect(res2.statusCode).to.eql(201)

    });

    it("it updates an item", async() => {
        const res3 = await request(app)
        .put('/updateItem/1')
        // console.log('res', res3)
        expect(res3.statusCode).to.eql(200)

    });

    it("it delete an item", async() => {
        const res4 = await request(app)
        .delete('/deleteItem/1')
        // console.log('res', res4)
        expect(res4.statusCode).to.eql(200)

    });


});