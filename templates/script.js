angular.module('portfolio.templates', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.
		when('/main', {
			templateUrl: 'templates/main.html',
			controller:'MainCtrl',

		}).
		when('/about', {
			templateUrl: 'templates/about.html',
			controller:'AboutCtrl',

		}).
		when('/projects', {
			templateUrl: 'templates/projects.html',
			controller:'ProjectsCtrl',

		}).
		when('/contact', {
			templateUrl: 'templates/contact.html',
			controller:'ContactCtrl',

		}).
		otherwise({
			redirectTo: '/main'
		});

	}])

	.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
		$http.get('????????').then(function(response){
			$scope.main = response.data;
		});
	}])
	.controller('AboutCtrl', ['$scope', '$http', function($scope, $http){
		$http.get('????????').then(function(response){
			$scope.about = response.data;
		});
	}])
	.controller('ProjectsCtrl', ['$scope', '$http', function($scope, $http){
		$http.get('????').then(function(response){
			$scope.projects = response.data;
		});
	}])
	.controller('ContactCtrl', ['$scope', '$http', function($scope, $http){
		$http.get('??????').then(function(response){
			$scope.contact = response.data;
		});
	}])