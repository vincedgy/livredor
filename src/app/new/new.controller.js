(function() {
  'use strict';

  angular
    .module('livredor')
    .controller('NewController', NewController);

  /** @ngInject */
  function NewController($state, $log, FirebaseService, toastr, $sanitize) {
    var vm = this;
    vm.name = "";
    vm.message = "";
    vm.timestamp = "";
   vm.save = function() {
     if (vm.name === "" ) {
      toastr['error']("Le nom est vide !");
    } else if (vm.message === "") {
      toastr['error']("Le message est vide !");
    } else {
      FirebaseService.push("posts",
            { 
              "name":$sanitize(vm.name), 
              "message": $sanitize(vm.message),
              "timestamp": Math.floor(Date.now() / 1000)          
          })
                  .then(
                      // Success
                      function(object) {
                          toastr['success']("Le message a été posté");
                          $state.go('book')
                          return;
                      },
                      // Error
                      function(reason) {
                          toastr['error']("Le message n'a pu être posté");
                          return;
                      }
                  );
          
        }

   }
  }
})();
