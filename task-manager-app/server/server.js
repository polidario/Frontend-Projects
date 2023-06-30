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
    const { username, title, urgency, date } = req.body
  
    try {
        const id = uuidv4();
        const newTask = await pool.query(
            "INSERT INTO tasks (username, title, urgency, date) VALUES ($1, $2, $3, $4) RETURNING *", 
            [username, title, urgency, date]
        );
        res.json(newTask.rows[0]);
    } catch (err) {
      console.error(err.message)
    }
});

app.put("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { user_email, title, urgency, date } = req.body;

        await pool.query(
            "UPDATE tasks SET username = $1, title = $2, urgency = $3, date = $4 WHERE id = $5",
            [user_email, title, urgency, date, id]
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