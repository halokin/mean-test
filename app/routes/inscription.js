// ROUTES inscriptionS
var Inscription = require('../models/inscription.js');
module.exports 	= function(app) {

	app.get('/inscription', Inscription.findAll);
	app.post('/inscription', Inscription.create);
	app.put('/inscription/:id', Inscription.update);
	app.delete('/inscription/:id', Inscription.delete);
    
}
