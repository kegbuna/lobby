(function () {
    'use strict';

    angular
        .module('lobby.auth')
        .service('AuthService', AuthService);

    AuthService.$inject = ['FirebaseRef', '$firebaseAuth', 'Firebase'];

    /* @ngInject */
    function AuthService(FirebaseRef, $firebaseAuth, Firebase) {
        this.getFireBaseAuth = getFireBaseAuth;

        ////////////////

        function getFireBaseAuth() {
            return $firebaseAuth(FirebaseRef);
        }
    }

})();

