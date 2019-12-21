/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.charts.addchart', [])
      .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('charts.addchart', {
            url: '/addchart',
            templateUrl: 'app/pages/charts/addChart.html',
            title: 'addchart',
            sidebarMeta: {
              order: 100,
            },
          });
    }
  
  })();