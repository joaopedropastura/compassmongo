const Wallet = require('../models/wallet')

class WalletController {
    static async NovaCarteira(req, res){
        const {nome, data_criacao, descricao, balanco} = req.body

        const newWallet = new Wallet({
            nome,
            data_criacao,
            descricao,
            balanco
        })

        try {
            const w = await Wallet.create(newWallet)
            return res.status(201).send({message: "wallet addend sucessfully", body: w})
        } catch (error) {
            return res.status(500).send({error:error})
        }
    }


    static async getAll(req, res){
        
        const { id } = req.params

        if(!id){
            const wallets = await Wallet.find()
            return res.status(200).send({data : wallets})
        }
    }
}

module.exports = WalletController