(function() {
  'use strict';

  angular
    .module('livredor')
    .controller('BookController', BookController);

  /** @ngInject */
  function BookController($scope, $log, FirebaseService,toastr,$timeout) {
    var vm = this;
    vm.posts = [];
    
    FirebaseService.getPosts("posts")
      .on("value", function(snapshot) {
               
        
        $timeout(function() {
          vm.posts = snapshot.val(); 
        }, 0);
        
        //$scope.$apply();
        return;
      });


  }
})();
