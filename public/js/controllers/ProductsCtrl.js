angular.module('ProductsCtrl', []).controller('ProductsController', function($scope, Customer) {

	$scope.data = Customer.getList().$object;
	$scope.tagline = 'Products coming soon..!!';	

});