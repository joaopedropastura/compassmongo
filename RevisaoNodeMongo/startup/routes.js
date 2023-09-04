const express = require('express');
const extract = require('../routes/extract');

module.exports = (app) => {
    app
        .use(express.json())
        .use(extract);
}