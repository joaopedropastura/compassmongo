const mongoose = require('mongoose')

const carteira = mongoose.model('wallet', {
    nome: String,
    data_criacao: Date,
    descricao: String,
    balanco: Number 
})

module.exports = carteira