const pool = require('./utils/database.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const express = require('express')
const { v4: uuidv4 } = require('uuid');

const app = express()
const PORT = process.env.PORT || 54321;

const corsConfig = {
    origin: 'http://localhost:54321',
}

app.use(cors(corsConfig));
app.use(express.json());

app.get('/tasks/:user', (req, res) => {
    const { user } = req.params;

    try {
        pool.query('SELECT * FROM tasks WHERE username = $1', [user], (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        });
    } catch (error) {
         res.status(500).json({ error: error.message });
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})