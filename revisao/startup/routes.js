const express = require('express')
const wallet = require('../routes/wallet')


module.exports = (app) => {
    app.use(express.json())
    app.use('/banco/wallets', wallet)
}