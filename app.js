var jasonMiguelApp = angular.module('jasonMiguelApp', ['ngRoute']);

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

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        });

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

jasonMiguelApp.controller('contactController', function($scope){
    $scope.message = 'If you\'d like to connect personally or professionally, you can reach me on any of the above social networks.';
});

