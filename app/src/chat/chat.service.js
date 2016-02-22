(function () {
    'use strict';

    angular
        .module('lobby.chat')
        .service('ChatService', ChatService);

    ChatService.$inject = ['FirebaseRef'];

    /* @ngInject */
    function ChatService(FirebaseRef) {

        var service = this;

        //Some private vars
        this._activeRoom = null; //The user's active room
        this._rooms = {}; //Collection of rooms the user is currently in

        // Function declarations
        this.submit = submit;

        ////////////////

        /**
         * Submits a new line of chat
         * @param {string} message The message body
         */
        function submit(message) {
            //Submits a new line of chat
            var roomRef = getRoom();

            roomRef.put()


        }

        /**
         * Sets the user's active room
         * @param {string} room The room's ID
         */
        function setRoom(room) {
            if (!room || typeof room !== 'string') throw new Error("Can't go there.");
            service._activeRoom = room;
        }

        /**
         * Retrieves the firebase ref for the room denoted by the room variable
         */
        function getRoom() {
            return FirebaseRef.child('/rooms/' + service._activeRoom);
        }


    }

})();

