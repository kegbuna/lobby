(function () {
    'use strict';

    angular
        .module('lobby.chat')
        .controller('ChatController', ChatController);

    ChatController.$inject = ['FirebaseRef'];

    /* @ngInject */
    function ChatController(FirebaseRef) {
        var vm = this;
        vm.title = 'ChatController';

        activate();

        ////////////////

        function activate() {
            console.log("Chat reached.");
        }
    }

})();

