'use strict';

// Declare app level module which depends on views, and components
angular.module('PatentApp', [
  'ngRoute',
  'PatentApp.views',
  'PatentApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/wallet'});
}]);
