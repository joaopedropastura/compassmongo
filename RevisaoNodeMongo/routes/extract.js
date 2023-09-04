const express = require('express');
const router = express.Router();
const ExtractController = require('../controllers/Extract');

router
    .get('/', ExtractController.getAll)

module.exports = router;