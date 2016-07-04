(function() {
  'use strict';

  angular
    .module('livredor')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $state, FirebaseService,$scope) {
    var main = this;

    main.awesomeThings = [];
    main.classAnimation = '';
    main.creationDate = 1467231302300;

    main.postsCount = 0;
    var posts = FirebaseService.getPosts();
    FirebaseService.getPosts("posts")
      .on("value", function(snapshot) {

         $timeout(function() {
          main.postsCount = snapshot.numChildren();
        }, 0);

        return;
      });
    

    activate();
    function activate() {
      $timeout(function() {
        main.classAnimation = 'rubberBand';
      }, 4000);
    }

    main.showNew = function () {      
      $state.go('new');
    }
    


  }
})();
