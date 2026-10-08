const request = require('supertest');
const app = require('../src/app');

const pool = require('../src/db/connection');

afterAll(async () => {
    await pool.end();
});

describe('Authors API', () => {
    test('POST /authors - debe crear un autor', async () => {
        const response = await request(app)
            .post('/authors')
            .send({
                name: 'Test Usuario',
                email: `test${Date.now()}@example.com`,
                bio: 'Autor de prueba'
            });

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe('Test Usuario');
    });
});

    test('GET /authors/:id - debe obtener un autor', async () => {
        const response = await request(app)
            .get('/authors/1');

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id', 1);
        expect(response.body).toHaveProperty('name');
        expect(response.body).toHaveProperty('email');
    });

        test('GET /authors/:id - debe devolver 404 si no existe', async () => {
        const response = await request(app)
            .get('/authors/99999');

        expect(response.statusCode).toBe(404);
        expect(response.body.error).toBe('Autor no encontrado');
    });