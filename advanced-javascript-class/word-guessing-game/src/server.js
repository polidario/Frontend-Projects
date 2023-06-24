const express = require('express')
const app = express()
const helmet = require('helmet')
const port = 9001

app.use(helmet())
app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/game', (req, res) => {
    return res.status(200).json({
        message: 'Game route'
    })
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})