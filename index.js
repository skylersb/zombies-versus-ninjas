"use strict";

var express = require('express');
var mongo = require('mongo');
var Mongoose = require('mongoose');
Mongoose.connect('mongodb://localhost/nvzgame');
var Ninja = require('./lib/models/ninja');
var Zombie = require('./lib/models/zombie');

var app = express();

var joe = new Zombie ({name: "JoeDead", health: 30, NinjasConsumed: 1});
var timmy = new Zombie ({name: "timmy", health: 40, NinjasConsumed: 20});

var ninja1 = new Ninja ({name: "unknown", health: 40, zombiesKilled: 20});
var ninja2 = new Ninja ({name: "goodLuck", health: 50, zombiesKilled: 50});

joe.save();
timmy.save();
ninja1.save();
ninja2.save();

app.get('/zombies', function(req, res){
	Zombie.find().exec(function(err, zombies){
		res.send(zombies);
	});
});

app.get('/ninjas', function(req, res){
	Ninja.find({name: 'goodLuck'}).exec(function(err, ninjas){
		if(err){
			res.send(err);
		} else {
			res.send(ninjas);
		}	
	});
})


console.log(joe);


app.listen(8888);