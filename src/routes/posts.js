const express = require('express');
const pool = require('../db/connection');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM posts ORDER BY id'
        );

        res.json(result.rows);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: 'Error al obtener los posts'
        });
    }
});


router.get('/author/:authorId', async (req, res) => {
    try {
        const { authorId } = req.params;

        const result = await pool.query(
            'SELECT * FROM posts WHERE author_id = $1 ORDER BY id',
            [authorId]
        );

        res.json(result.rows);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: 'Error al obtener los posts del autor'
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            'SELECT * FROM posts WHERE id = $1',
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                error: 'Post no encontrado'
            });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: 'Error al obtener el post'
        });
    }
});


router.post('/', async (req, res) => {
    try {
        const { title, content, author_id, published } = req.body;

        if (!title || !content || !author_id) {
            return res.status(400).json({
                error: 'El título, contenido y author_id son obligatorios'
            });
        }

        const result = await pool.query(
            `INSERT INTO posts (title, content, author_id, published)
             VALUES ($1, $2, $3, $4)
             RETURNING *`,
            [title, content, author_id, published ?? false]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);

        if (error.code === '23503') {
            return res.status(400).json({
                error: 'El autor indicado no existe'
            });
        }

        res.status(500).json({
            error: 'Error al crear el post'
        });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, author_id, published } = req.body;

        if (!title || !content || !author_id) {
            return res.status(400).json({
                error: 'El título, contenido y author_id son obligatorios'
            });
        }

        const result = await pool.query(
            `UPDATE posts
             SET title = $1, content = $2, author_id = $3, published = $4
             WHERE id = $5
             RETURNING *`,
            [title, content, author_id, published ?? false, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                error: 'Post no encontrado'
            });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);

        if (error.code === '23503') {
            return res.status(400).json({
                error: 'El autor indicado no existe'
            });
        }

        res.status(500).json({
            error: 'Error al actualizar el post'
        });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            'DELETE FROM posts WHERE id = $1 RETURNING *',
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                error: 'Post no encontrado'
            });
        }

        res.status(204).send();
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: 'Error al eliminar el post'
        });
    }
});


module.exports = router;