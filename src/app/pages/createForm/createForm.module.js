(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.createForm', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('createForm', {
            url: '/createForm',
            templateUrl: 'app/pages/createForm/createForm.html',
            title: 'CreateForm',
            sidebarMeta: {
              icon: 'ion-android-home',
              order: 0,
            },
          });
    }
  
  })();