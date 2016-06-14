// MODEL Inscription
var mongoose = require('mongoose');


var inscriptionSchema = new mongoose.Schema({
  nom: String,
  prenom: String
});

var Inscription = {
    
    model: mongoose.model('Inscription', inscriptionSchema),
    
    create: function(req, res) {
    	console.log('test')
		Inscription.model.create({
			nom: req.body.nom,
			prenom: req.body.prenom
		}, function(err){
			if (err){
				res.send(err);
			}
			res.sendStatus(200);
		});
	},

	findAll: function(req, res) {
		Inscription.model.find(function (err, data) {
			res.send(data);
		});
	},

	update: function(req, res){
		Inscription.model.findByIdAndUpdate(req.params.id, {
			nom: req.body.nom,
			prenom: req.body.prenom
		}, function(){
			res.sendStatus(200);
		})
	},

	delete: function(req, res){
		Inscription.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	} 
}

module.exports = Inscription;
