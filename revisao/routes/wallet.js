const express = require('express')
const walletController = require('../controllers/walletController')
const router = express.Router()


router
    .get('/', walletController.getAll)
    .post('/', walletController.NovaCarteira)


module.exports = router