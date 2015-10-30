var jasonMiguelApp = angular.module('jasonMiguelApp', ['ngRoute', 'ngAnimate']);

jasonMiguelApp.config(function($routeProvider) {

    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
        .when('/home', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // route for the blog page
        .when('/blog', {
            templateUrl : 'pages/blog.html',
            controller  : 'blogController'
        })

});

jasonMiguelApp.controller('mainController', function($scope){
    $scope.message = 'A work in progress...Stay tuned!';
});

jasonMiguelApp.controller('aboutController', function($scope){
    $scope.message = '// TODO';
});

jasonMiguelApp.controller('blogController', function($scope){
    $scope.message = '// TODO';
});


