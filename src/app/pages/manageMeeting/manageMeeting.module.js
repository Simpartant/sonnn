(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.manageMeeting', [])
      .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
          .state('manageMeeting', {
            url: '^/manageMeeting',
            template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
            abstract: true,
            controller: 'ManageCtrl',
            title: 'Quản lý cuộc họp',
            sidebarMeta: {
              icon: 'ion-grid',
              order: 300,
            },
          }).state('manageMeeting.basic', {
            url: '/basic',
            templateUrl: 'app/pages/manageMeeting/basic/tables.html',
            title: 'Tim kiếm',
            sidebarMeta: {
              order: 0,
            },
          })
          
      $urlRouterProvider.when('/manageMeeting','/manageMeeting/basic');
    }
  
  })();
  