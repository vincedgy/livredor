(function() {
  'use strict';

  angular
    .module('livredor')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');

    
  }

})();
