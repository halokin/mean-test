// ROUTES inscriptionS
var Test = require('../models/test.js');
module.exports 	= function(app) {

	app.get('/test', Test.findAll);
	app.post('/test', Test.create);
	app.put('/test/:id', Test.update);
	app.delete('/test/:id', Test.delete);
    
}
