/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.demo', ['ui.select', 'ngSanitize'])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('demo', {
            url: '^/demo',
            template : '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
            abstract: true,
            title: 'Demo',
            sidebarMeta: {
              icon: 'ion-compose',
              order: 150,
            },
          })
          .state('demo.CreateNew', {
            url: '^/CreateNew',
            templateUrl: 'app/pages/demo/demo.html',
            title: 'Create New',
            controller: "demoCtrl",
            sidebarMeta: {
              order: 10,
            },
          })
          .state('demo.List', {
            url: '^/List',
            templateUrl: 'app/pages/demo/listDemo.html',
            title: 'Lists',
            controller: "listDemoCtrl",
            sidebarMeta: {
              order: 0,
            },
          });
    }
  })();
  