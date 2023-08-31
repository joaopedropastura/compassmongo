const User = require('../models/user')


class newUser {
	static async register(req, res) {
		const { name, lastName, age} = req.body


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
}

module.exports = newUser