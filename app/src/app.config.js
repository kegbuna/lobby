(function () {
    'use strict';
    angular
        .module('lobby.app')
        .config(lobbyConfig);

    lobbyConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    /* @ngInject */
    function lobbyConfig($stateProvider, $urlRouterProvider) {

        // If url not recognized, send them home
        //$urlRouterProvider.otherwise('/home');

        // Set up the routes
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "src/home/home.tpl.html",
                controller: "HomeController",
                controllerAs: "home"
            })
            .state('auth', {
                url: '/auth',
                templateUrl: 'src/auth/auth.tpl.html',
                controller: 'AuthController',
                controllerAs: "auth"
            });
    }
})();