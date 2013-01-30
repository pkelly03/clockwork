'use strict';

var clockworkApp = angular.module('clockworkApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about-us', {
        templateUrl: 'views/about-us.html',
        controller: 'About-UsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
