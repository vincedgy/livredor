(function() {
  'use strict';

  angular
    .module('livredor')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('new', {
        url: '/new',
        templateUrl: 'app/new/new.html',
        controller: 'NewController',
        controllerAs: 'vm'
      })      
      .state('book', {
        url: '/book',
        templateUrl: 'app/book/book.html',
        controller: 'BookController',
        controllerAs: 'vm'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      ;

    $urlRouterProvider.otherwise('/');
  }

})();
