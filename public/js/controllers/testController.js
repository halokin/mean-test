function testController ($scope, testService) {
	function load () {
		testService.findAll().then(function(res){
			$scope.tests = res.data;
		})
	}
	load(); 
	 // a=2;
	$scope.valider = function (){
		var data = {};
		data.champ1 = $scope.champ1;
		data.champ2 = $scope.champ2;
		testService.ajouter(data).then(function(res){
			$scope.champ1="";
			$scope.champ2 = "";
			load();
		});
	}


	$scope.update = function (test) {
		testService.update(test._id, test).then(function(res){
			load();
		});
	}

	$scope.delete = function (id) {
		testService.delete(id).then(function(res){
			load();
		});
	}
}