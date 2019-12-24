(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.search', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('search', {
            url: '/search',
            templateUrl: 'app/pages/search/search.html',
            title: 'Quản lý cuộc họp',
            sidebarMeta: {
              icon: 'ion-ios-home',
              order: 0,
            },
          });
    }
  
  })();