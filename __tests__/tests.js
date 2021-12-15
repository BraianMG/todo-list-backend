const { login } = require("../controllers/auth");


// Last 8 digits
const unique = Date.now().toString().slice(-8);
const user = {
    name: unique,
    email: `${unique}@${unique}.com`,
    password: unique
}

describe('API performance tests', () => {

    test('Create a new user', async () => {

        expect.assertions(1)
        const result = await login(user);
        expect(result.status).toBe(200);
    });

    user.name = 'test';
    user.email = 'test@test.com';
    user.password = '123456789';
    
    test('It should not allow creating a user with an existing email', () => {

        axiosClient.post('/users', user)
            .then( result => {
                expect(result.status).toBe(400);
            });
    });
});