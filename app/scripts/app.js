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
}).controller('LoginCtrl', function($scope, Restangular) {
  $scope.loginMethod = function () { 
      var loginObj = {
          UserName: $scope.UserName,
          Password: $scope.Password
      };
      // test
      var login = Restangular.one("users/login").customPOST({ UserName: "david", Password: "david" }).then(function (data) {
          alert(data.Token);
      });;


      

  }
});
