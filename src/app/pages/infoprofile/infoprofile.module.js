(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.infoprofile', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('infoprofile', {
            url: '/infoprofile',
            templateUrl: 'app/pages/infoprofile/infoprofile.html',
            title: 'Profile',
            sidebarMeta: {
              icon: 'ion-ios-home',
              order: 0,
            },
          });
    }
  
  })();