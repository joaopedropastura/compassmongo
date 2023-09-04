const User = require('../models/user')

class newUser {
	static async register(req, res) {
		const { name, lastName, age} = req.body
		console.log("chegou")
		const user = new User({
			name,
			lastName,
			age
		})

		try {
			await user.save()
			return res.status(201).send( {message: "user created"} )
		} catch (error) {
			return res.status(500).send( {message: "something wrong"} )
		}
	}

	static async get(req, res) {
		try {
			const data = await User.find()
			return res.status(200).send( data )
		}catch (error) {
			return res.status(500).send( {message: "something wrong"} )
		}
	}
}

module.exports = newUser