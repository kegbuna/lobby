/**
 * Created by kegbuna on 2/9/16.
 */
(function () {
    'use strict';

    angular
        .module('lobby.vendors', [])
        .constant('FirebaseRef', new Firebase("https://whereugoing.firebaseio.com/"));
})();