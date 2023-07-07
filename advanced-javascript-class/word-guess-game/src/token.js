const jwt = require('jsonwebtoken');

const generateAccessToken = (payload) => {
    return jwt.sign(payload, process.env.SECRET || 'secret', { expiresIn: '1h' });
}

const generateRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.SECRET || 'secret', { expiresIn: '7d' });
}

export {
    generateAccessToken,
    generateRefreshToken
} 