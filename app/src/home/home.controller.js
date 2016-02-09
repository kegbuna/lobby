(function () {
    'use strict';

    angular
        .module('lobby.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$firebaseAuth', 'FirebaseRef'];

    /* @ngInject */
    function HomeController($firebaseAuth, ref) {
        var vm = this;
        vm.title = 'Welcome';


        activate();

        ////////////////

        function activate() {
            var auth = $firebaseAuth(ref);

            auth.$authWithOAuthPopup("facebook");
        }
    }

})();

