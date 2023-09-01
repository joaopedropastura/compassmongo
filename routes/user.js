const express = require('express');
const user = require('../controllers/userController')
const router = express.Router()


router
	.post('/register', user.register)
	.get('/', user.get)

module.exports = router