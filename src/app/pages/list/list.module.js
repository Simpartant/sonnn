(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.list', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('list', {
            url: '/list',
            templateUrl: 'app/pages/list/list.html',
            title: 'List',
            sidebarMeta: {
              icon: 'ion-battery-low',
              order: 0,
            },
          });
    }
  
  })();