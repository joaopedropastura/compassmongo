const mongoose = require('mongoose')


const user = mongoose.model('User', {
	name: String,
	lastName: String,
	age: Number
})

module.exports = user