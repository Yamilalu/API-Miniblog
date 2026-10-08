const request = require('supertest');
const app = require('../src/app');

const pool = require('../src/db/connection');

afterAll(async () => {
    await pool.end();
});

describe('Posts API', () => {
    test('POST /posts - debe crear un post', async () => {
        const response = await request(app)
            .post('/posts')
            .send({
                title: 'Post de prueba',
                content: 'Contenido del post de prueba',
                author_id: 1,
                published: false
            });

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.title).toBe('Post de prueba');
        expect(response.body.author_id).toBe(1);
    });
});


    test('DELETE /posts/:id - debe devolver 404 si no existe', async () => {
        const response = await request(app)
            .delete('/posts/99999');

        expect(response.statusCode).toBe(404);
        expect(response.body.error).toBe('Post no encontrado');
    });