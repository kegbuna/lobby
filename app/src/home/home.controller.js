(function () {
    'use strict';

    angular
        .module('lobby.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    /* @ngInject */
    function HomeController() {
        var vm = this;
        vm.title = 'Welcome';


        activate();

        ////////////////

        function activate() {

        }
    }

})();
