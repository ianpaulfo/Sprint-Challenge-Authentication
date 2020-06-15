const Users = require('./users-model');
const db = require('../database/dbConfig');

describe('users model', function() {




    describe('add()', function() {
        beforeEach(async () => {
            await db('users').truncate();
        })

        it('adds new user to the database', async function() {
            await Users.add({ username: 'gigi', password: "gigi123"});
            await Users.add({ username: 'kobe', password: 'kobe123'});

            const users = await db('users');

            expect(users).toHaveLength(2)
        })
    })
})