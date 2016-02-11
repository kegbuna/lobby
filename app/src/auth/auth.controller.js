/**
 * Created by kegbuna on 2/9/16.
 */
(function () {
    'use strict';

    angular
        .module('lobby.auth')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['$firebaseAuth','FirebaseRef'];

    /* @ngInject */
    function AuthController($firebaseAuth, FirebaseRef) {
        var vm = this;
        vm.title = 'AuthController';

        activate();

        ////////////////

        function activate() {

        }


        FirebaseRef.onAuth(function (authData) {
            console.log('%c ' + JSON.stringify(authData), 'color: blue');
            console.dir(authData);
        });
    }

})();

