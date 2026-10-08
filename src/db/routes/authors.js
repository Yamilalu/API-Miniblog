const express = require('express');
const pool = require('../db/connection');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM authors ORDER BY id');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error al obtener los autores'
        });
    }
});

module.exports = router;