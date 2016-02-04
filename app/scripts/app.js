'use strict';

/**
 * @ngdoc overview
 * @name onAtripApp
 * @description
 * # onAtripApp
 *
 * Main module of the application.
 */
angular
  .module('onAtripApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'restangular',
	'ui.router'
  ])
  .config(function ($stateProvider,RestangularProvider) {
      RestangularProvider.setBaseUrl('http://localhost/TripAdv/api');
		$stateProvider
		  .state('home', {
			url: '/',
			templateUrl: 'views/main.html',
			controller: function ($scope) {
      }
		  }).state('about', {
			url: '/about',
			templateUrl: 'views/about.html',
			controller: function ($scope) {
      }
		  }).state('login', {
			url: '/login',
			templateUrl: 'views/login.html',
			controller: 'LoginCtrl'
		  });
	})
  .controller('MainCtrl', function($scope, Restangular) {
  // ...
  }).controller('LoginCtrl', function ($scope, Restangular) {
      $scope.user = {};
  $scope.loginMethod = function () { 
      
      var o = {Username:$scope.user.userName, Password:$scope.user.password};
      
      var login = Restangular.one("login");
      login.post('', o).then(function (data) {
          
            // po prihlaseni se nastavi automaticky authorization header
          Restangular.withConfig(function (RestangularConfigurer) {
              RestangularConfigurer.setDefaultHeaders({ Authorization: data.Token });
              alert(data.Token);
          });



      });;


      

  }
});
