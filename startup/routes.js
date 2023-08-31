const express = require('express')
const user = require('../routes/user')

module.exports = (app) => {
    app.use(express.json())
    app.use('/db/produtos-esportivos', prodEsportivos)
    app.use('/db/auth', auth)
}