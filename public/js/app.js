angular.module('sampleApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'AboutCtrl', 'AboutService', 'ContactCtrl', 'ProductsCtrl', 'AppDirectives', 'ContactService', 'restangular'])
.config(function ($routeProvider, RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:8080');
})
.factory('CustomerRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setRestangularFields({
      id: '_id'
    });
  });
})
.factory('Customer', function(CustomerRestangular) {
  return CustomerRestangular.service('customer');
});