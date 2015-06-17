angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutController'
		})

		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'	
		})
		
		.when('/products', {
			templateUrl: 'views/products.html',
			controller: 'ProductsController'	
		});

	$locationProvider.html5Mode(true);

}]);