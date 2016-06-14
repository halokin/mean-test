function inscriptionController ($scope, inscriptionService, $window) {
	$scope.test = 'ca marche';
	function load () {
		inscriptionService.findAll().then(function(res){
			$scope.users = res.data;
		})
	}
	load();
	 // a=2;
	$scope.valider = function (){
		var data = {};
		data.nom = $scope.nom;
		data.prenom = $scope.prenom;
		inscriptionService.ajouter(data).then(function(res){
			$scope.nom="";
			$scope.prenom = "";
			load();
		});
	}


	$scope.update = function (user) {
		inscriptionService.update(user._id, user).then(function(res){
			load();
		});
	}

	$scope.delete = function (id) {
		inscriptionService.delete(id).then(function(res){
			load();
		});
	}
}