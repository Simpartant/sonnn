(function () {
  'use strict';

  angular.module('BlurAdmin.pages.meeting', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('meeting', {
          url: '/meeting',
          templateUrl: 'app/pages/meeting/meeting.html',
          title: 'Cuộc Họp',
          sidebarMeta: {
            icon: 'ion-battery-low',
            order: 0,
          },
        });
  }

})();