(function () {
    'use strict';

    angular
        .module('lobby.chat')
        .directive('messages', MessagesDirective);

    //MessagesDirective.$inject = [];

    /* @ngInject */
    function MessagesDirective() {
        var directive = {
            bindToController: true,
            controller: messagesController,
            controllerAs: 'vm',
            link: link,
            templateUrl: '/app/src/chat/messages.tpl.html',
            restrict: 'E',
            scope: {

            }
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

    messagesController.$inject = ['ChatService'];

    /* @ngInject */
    function messagesController(dependency) {

    }

})();

