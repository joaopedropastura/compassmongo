const mongoose = require('mongoose');

const Extract = mongoose.model('Extrato', {
    date: Date,
    wallet: String,
    value: Number
})

module.exports = Extract;