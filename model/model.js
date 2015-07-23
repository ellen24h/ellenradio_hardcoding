var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var radioLog = new Schema({
	weather: String,
	emotion: String,
	from: String,
	to: String,
	music: String
});

exports.radioLog = mongoose.model('radioLog', radioLog);
