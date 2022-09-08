const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const NinjaSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	weapon: {
		type: String,
		required: true
	},
	level: {
		type: Number,
		required: true
	}
	// add in geo location
})

module.exports = mongoose.model('NinjasModel', NinjaSchema);