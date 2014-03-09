var asaSoftPhone = angular.module('asterGUIApp', [
    'asterGUIControllers',
  'ngRoute'
]);
asaSoftPhone.config(['$routeProvider',
  function ($routeProvider) {

      $routeProvider.
        when('/dashboard', {
            templateUrl: 'views/dashboard.html',
            controller: 'dashboardController'
        }).
        when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        }).
        otherwise({
            redirectTo: '/dashboard'
        });

  }]);

