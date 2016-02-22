(function () {
    'use strict';

    angular
        .module('lobby.user')
        .service('UserService', UserService);

    UserService.$inject = ['FirebaseRef'];

    /* @ngInject */
    function UserService(FirebaseRef) {
        initiate();
        this.getUser = getUser;

        ////////////////

        function getUser() {
            return null;
        }

        function initiate() {

            FirebaseRef.onAuth(function (authData) {

            });
        }
    }

})();
