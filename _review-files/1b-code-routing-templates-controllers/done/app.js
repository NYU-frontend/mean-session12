var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

    $scope.name = 'Main';

    $log.main = 'property from main';
    $log.log($scope);
    
}]);

myApp.controller('secondController', ['$scope', '$log', function($scope, $log) {

    $scope.name = 'Second';

    $log.second = 'property from second';
    $log.log($scope);

    
}]);




















