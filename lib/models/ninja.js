"use strict";

var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var schema = new Schema({
	name: { type: String, required: true, uniqueness: true},
	health: { type: Number, required: true, min: 0, max: 50, default: 50},
	weapons: { type: String, enum: ['sword', 'ninja-star', 'Numchucks', 'club'], required: true, uniqueness: true, lowercase: true},
	skills: { type: String, enum: ['wall climbing', 'Stealth', 'hold breath'], required: true, uniqueness: true, lowercase: true},
	abilities: { type: String, required: true, uniqueness: true, lowercase: true},
	zombiesKilled: {type: Number, min: 0, default: 0}
});

module.exports = Mongoose.model('Ninja', schema);

