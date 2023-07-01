const pool = require('./utils/database.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const express = require('express')
const { v4: uuidv4 } = require('uuid');

const app = express()
const PORT = process.env.PORT || 54321;

const corsConfig = {
    origin: 'http://localhost:3000',
}

app.use(cors(corsConfig));
app.use(express.json());

app.get('/tasks', (req, res) => {
    try {
        pool.query('SELECT * FROM tasks', (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

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

app.post("/tasks" , async(req,res) => {
    const { username, title, description, urgency, date } = req.body
  
    try {
        const id = uuidv4();
        const newTask = await pool.query(
            "INSERT INTO tasks (username, title, description, urgency, date) VALUES ($1, $2, $3, $4, $5) RETURNING *", 
            [username, title, description, urgency, date]
        );
        res.json(newTask.rows[0]);
    } catch (err) {
      console.error(err.message)
    }
});

app.put("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { username, title, description, urgency, date } = req.body;

        await pool.query(
            "UPDATE tasks SET username = $1, title = $2, description = $3, urgency = $4, date = $5 WHERE id = $6",
            [username, title, description, urgency, date, id]
        );

        res.json("Task was updated!");
    } catch (err) {
        console.error(err.message);
    }
});
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})