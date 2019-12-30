(function () {
  'use strict';

  angular.module('BlurAdmin.pages.meeting', ['ui.select', 'ngSanitize'])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('meeting', {
          url: '/meeting',
          template : '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'Meeitng',
          sidebarMeta: {
            icon: 'ion-compose',
            order: 250,
          }

})();