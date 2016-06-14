function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'mainController'
		})
		.when('/about', {
			templateUrl: 'views/about.html'
		})
		.when('/inscription', {
			templateUrl: 'views/inscription.html',
			controller: 'inscriptionController'
		})
		.when('/test', {
			templateUrl: 'views/test.html',
			controller: 'testController'
		})
		.otherwise({
			redirectTo: '/'
		});
}
function run($rootScope, $location){
	var path = function() { return $location.path(); };
	$rootScope.$watch(path, function(newVal, oldVal){
		$rootScope.activetab = newVal;
	});
}
angular.module('app', ['ngRoute'])
    .config(config)
    .controller('mainController', mainController)
    .controller('inscriptionController', inscriptionController)
    .controller('testController', testController)
    .service('todoService', todoService)
    .service('inscriptionService', inscriptionService)
    .service('testService', testService)
    /*.factory('', )*/
    .run(run);

