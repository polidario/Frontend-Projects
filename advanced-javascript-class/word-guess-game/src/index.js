const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require ('mongoose');
const session = require('express-session');

// Routes
const GameRoutes = require('./routes/game');
const WordRoutes = require('./routes/word');
const AuthRoutes = require('./routes/auth');

const PORT = process.env.PORT || 3000;

try {
    mongoose.connect(process.env.MONGODB);
    console.log("Connected to the db");
} catch(error) {
    console.error('Can\'t connect to the db');
}

const app = express();
app.use(helmet());
app.use(morgan('common'));
app.use(express.json());
app.use(session({
    secret: process.env.SECRET || 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false,
        httpOnly: true
    }
}));

app.get('/', (request, response) => {
    return response.status(200).send('<h1>Root GET /</h1>');
});

app.post('/', (request, response) => {
    return response.status(200).send('<h1>Root POST /</h1>');
});

app.use('/game', GameRoutes);
app.use('/word', WordRoutes);
app.use('/auth', AuthRoutes);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));