// MODEL Inscription
var mongoose = require('mongoose');


var testSchema = new mongoose.Schema({
  champ1: String,
  champ2: String
});

var Test = {
    
    model: mongoose.model('Test', testSchema),
    
    create: function(req, res) {
		Test.model.create({
			champ1: req.body.champ1,
			champ2: req.body.champ2
		}, function(err){
			if (err){
				res.send(err);
			}
			res.sendStatus(200);
		});
	},

	findAll: function(req, res) {
		Test.model.find(function (err, data) {
			res.send(data);
		});
	},

	update: function(req, res){
		Test.model.findByIdAndUpdate(req.params.id, {
			champ1: req.body.champ1,
			champ2: req.body.champ2
		}, function(){
			res.sendStatus(200);
		})
	},

	delete: function(req, res){
		Test.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	} 
}

module.exports = Test;
