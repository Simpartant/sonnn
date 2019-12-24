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
          title: 'Tạo cuộc họp',
          sidebarMeta: {
            icon: 'ion-ios-briefcase',
            order: 0,
          },
        });
  }

})();