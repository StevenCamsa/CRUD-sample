
const db = require('./query');
describe("group", () => {

test('add 1 + 2 to equal 3', async () => {
    expect(1 + 2).toBe(3);

})

})

describe('configuration testing', () => {
    it('database file should exist', async() => {
        let dbfile = './db.js'
        let result = db.checkFileExistSync(dbfile);
        expect(result).toBe(true);
})
})
