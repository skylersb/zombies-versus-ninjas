"use strict";

var Mongoose = require('mongoose');
	var Schema = Mongoose.Schema
	var ObjectId = Mongoose.Schema.Types.ObjectId;

var schema = new Schema({
	name: { type: String, required: true, uniqueness: true},
	health: { type: Number, required: true, min: 0, max: 50, default: 50},
	head: { type: Number, required: true, min: 0, max: 1, default: 1},
	arms: { type: Number, required: true, min: 0, max: 2, default: 2},
	legs: { type: Number, required: true, min: 0, max: 2, default: 2},
	attackLevel: { type: Number, required: true, min: 1, max: 5, default: 1},
	NinjasConsumed: {type: Number, required: true, min: 0, default: 0}
})

module.exports = Mongoose.model('Zombie', schema);