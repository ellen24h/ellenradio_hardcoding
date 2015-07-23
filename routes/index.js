var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../model/model.js');
var path = require('path');

var url = 'mongodb://localhost:27017/hello';

// db.radioLog.save({weather:1, emotion:1, from:1, to:1, music: "music"})
router.get('/find', function(req, res, next) {
	mongoose.connect(url, function (err) {
		if (err) {console.log(err)};
		model.radioLog.find({}, function (err, data) {
			res.json(data);
			mongoose.disconnect();
		});
	})

});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/emotion/:weather', function(req, res, next) {
  res.render('emotion', req.params);
});

router.get('/from/:weather/:emotion', function(req, res, next) {
  res.render('from', req.params);
});

router.get('/to/:weather/:emotion/:from', function(req, res, next) {
  res.render('to', req.params);
});

router.get('/result/:weather/:emotion/:from/:to', function(req, res, next) {
	console.log(req.params);
	res.redirect('https://www.youtube.com/watch?v=G4P18ROfI_E')
	// mongoose.connect(url, function (err) {
	// 	console.log("hello");
	// 	if (err) {console.log(err)};
	// 		var radioLog = new model.radioLog(req.params);
	// 		radioLog.save(function (err, data) {
	// 			if (err) {console.log("Danger user err :"+err)};
	// 		  	res.json(data);
	// 		  	// res.redirect('/');
	// 		  	mongoose.disconnect();
	// 		})
			
		
	// });

  res.render('to', req.params);
});

module.exports = router;
