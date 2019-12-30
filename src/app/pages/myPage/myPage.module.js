/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.myPage', ['ui.select', 'ngSanitize'])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('myPage', {
            url: '^/myPage',
            template : '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
            abstract: true,
            title: 'My Page',
            sidebarMeta: {
              icon: 'ion-compose',
              order: 150,
            },
          })
          .state('myPage.myNew', {
            url: '^/myNew',
            templateUrl: 'app/pages/myPage/myPage.html',
            title: 'Create New',
            controller: "myPageCtrl",
            sidebarMeta: {
              order: 10,
            },
          })
          .state('myPage.myList', {
            url: '^/myList',
            templateUrl: 'app/pages/myPage/myList.html',
            title: 'Lists',
            controller: "myListCtrl",
            sidebarMeta: {
              order: 0,
            },
          });
    }
  })();
  