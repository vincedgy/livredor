(function() {
  'use strict';

  angular
    .module('livredor', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'mgcrea.ngStrap', 'firebase', 'toastr'])
    .constant("CONFIG", {
        VERSION: "0.0.1b",
        FIREBASE_URL: "https://vincedgy-livredor.firebaseio.com/"
    });

})();
