(function () {
    'use strict';

    angular
        .module('lobby.user')
        .service('UserService', UserService);

    UserService.$inject = ['FirebaseRef'];

    /* @ngInject */
    function UserService(FirebaseRef) {
        initiate();
        this.getUserData = getUserData;

        ////////////////

        function getUserData() {
            return null;
        }

        function initiate() {

            FirebaseRef.onAuth(function (authData) {

            });
        }
    }

})();
