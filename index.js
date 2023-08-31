const express = require('express')
const routes = require('./routes')
const app = express()

app.use(express.json())
require('./startup/db')()

routes(app)


const PORT = 8080

console.log(PORT)

const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

module.exports = server;
