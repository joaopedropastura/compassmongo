db.carteira.insertOne({
    Nome: "Teste",
    DataCriacao: "01/01/2023",
    Descricao: "Revisando os conceitos",
    Saldo: 0.00,
    Historico: {
        Data: "01/01/2023",
        valor: 10.00
    }
})

db.carteira.find({ Nome: /test/ })

db.carteira.updateOne(
    {_id: ObjectId('64f5c82b6b920a572b1b62bd')}, 
    { $set: { Nome: "teste alterado" }}
)

db.carteira.deleteOne({ _id: ObjectId('64f5c82b6b920a572b1b62bd')})