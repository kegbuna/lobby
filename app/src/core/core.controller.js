(function () {
    'use strict';

    angular
        .module('lobby.core')
        .controller('CoreController', CoreController);

    CoreController.$inject = ['$state', '$rootScope'];

    /* @ngInject */
    function CoreController($state, $rootScope) {
        var vm = this;
        $rootScope.$state = $state;

        vm.navItems = [
        {
            label: "Home",
            value: "home"
        },
        {
            label: "Chat",
            value: "chat"
        }];

        activate();

        ////////////////

        function activate() {
            console.assert(true);
        }
    }

})();

