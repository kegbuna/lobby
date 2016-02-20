(function () {
    'use strict';
    angular
        .module('lobby.app')
        .config(lobbyConfig);

    lobbyConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    /* @ngInject */
    function lobbyConfig($stateProvider, $urlRouterProvider, $locationProvider) {

        // If url not recognized, send them home
        $urlRouterProvider.otherwise('/home');

        $locationProvider.html5Mode(true);

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
            })
            .state('chat', {
                url: '/chat',
                templateUrl: 'src/chat/chat.tpl.html',
                controller: 'ChatController',
                controllerAs: 'chat'
            })
    }
})();