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

app.put("/tasks/:id/complete", async (req, res) => {
    try {
        const { id } = req.params;
        const { completed } = req.body;

        await pool.query(
            "UPDATE tasks SET completed = $2 WHERE id = $1",
            [id, completed]
        );

        res.json("Task was completed!");
    } catch (err) {
        console.error(err.message);
    }
});

app.delete("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
        res.json("Task was deleted!");
    } catch (err) {
        console.error(err.message);
    }
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await pool.query(
            "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *", 
            [username, hashedPassword]
        );
        res.json(newUser.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
});


app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await pool.query(
            "SELECT * FROM users WHERE username = $1",
            [username]
        );

        if(user.rows.length === 0) {
            return res.status(401).json("Invalid Credentials / User does not exist");
        }

        const validPassword = await bcrypt.compare(password, user.rows[0].password);

        if(!validPassword) {
            return res.status(401).json("Invalid Credentials / Password is incorrect");
        }

        const token = jwt.sign({ username: user.rows[0].username }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ username, token});
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/user/:username', async (req, res) => {
    const { username } = req.params;

    try {
        const user = await pool.query(
            "SELECT * FROM users WHERE username = $1",
            [username]
        );

        if(user.rows.length === 1) {
            return res.status(200).json(user.rows[0]);
        } else {
            return res.status(404).json("Wrong request");
        }
    } catch (err) {
        console.error(err.message);
    }
});

app.post('/user/:username', async (req, res) => {
    const { username } = req.params;
    const { email, first_name, last_name, date_of_birth } = req.body;

    try {
        const updateUser = await pool.query(
            "UPDATE users SET email = $1, first_name = $2, last_name = $3, date_of_birth = $4 WHERE username = $5",
            [email, first_name, last_name, date_of_birth, username]
        );

        res.json("User was updated!");
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