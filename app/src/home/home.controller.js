(function () {
    'use strict';

    angular
        .module('lobby.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$firebaseAuth', 'FirebaseRef'];

    /* @ngInject */
    function HomeController($firebaseAuth, FirebaseRef) {
        var vm = this;
        vm.title = 'Welcome';


        activate();

        ////////////////

        function activate() {
            var auth = $firebaseAuth(FirebaseRef);

            auth.$authWithOAuthPopup("facebook");
        }
    }

})();

