angular.module('sci-oneApp', ['ngRoute', 'sci-oneApp.controllers', 'sci-oneApp.directives', 'ngDialog', 'angular-spinkit'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html',
                controller: 'mainCtrl'
            })
            .when('/allvideos', {
                templateUrl: 'partials/allvideos.html',
                controller: 'allVideosCtrl'
            })
            .when('/projects', {
                templateUrl: 'partials/projects.html',
                controller: 'projectsCtrl'
            })
            .when('/category', {
                templateUrl: 'partials/category.html',
                controller: 'categoryCtrl'
            })
            .when('/bookmarks', {
                templateUrl: 'partials/bookmarks.html',
                controller: 'bookmarksCtrl'
            })
            .when('/profile', {
                templateUrl: 'partials/profile.html',
                controller: 'profileCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider
            .hashPrefix('!')
            .html5Mode(true);
    })
    .run(function($rootScope, $location){
        var path = function() {
            return $location.path();
        };
        $rootScope.$watch(path, function(newVal, oldVal){
            $rootScope.isMenuOpen = false;
            $rootScope.activeNav = newVal;
        });
    });