
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',
    
    // 'BlurAdmin.pages.dashboard',
    // 'BlurAdmin.pages.ui',
    // 'BlurAdmin.pages.components',
    // 'BlurAdmin.pages.form',
    // 'BlurAdmin.pages.tables',
    // // 'BlurAdmin.pages.charts',
    // // 'BlurAdmin.pages.maps',
    // // 'BlurAdmin.pages.profile',
    // // 'BlurAdmin.pages.category',
    'BlurAdmin.pages.infoprofile',
    // // 'BlurAdmin.pages.createForm',
    'BlurAdmin.pages.meeting'
    
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('infoprofile');

    // baSidebarServiceProvider.addStaticItem({
    //   title: 'Pages',
    //   icon: 'ion-document',
    //   subMenu: [{
    //     title: 'Sign In',
    //     fixedHref: 'auth.html',
    //     blank: true
    //   }, {
    //     title: 'Sign Up',
    //     fixedHref: 'auth.html',
    //     blank: true
    //   }, {
    //     title: 'User Profile',
    //     stateRef: 'profile'
    //   },{
    //     title: 'Hello',
    //     fixedHref: 'son.html',
    //     blank: true
    //   }, {
    //     title: '404 Page',
    //     fixedHref: '404.html',
    //     blank: true
    //   }]
      
    // });
//   //   baSidebarServiceProvider.addStaticItem({
//   //     title: 'Hoang Son',
//   //     icon: 'ion-ios-more',
//   //     subMenu: [{
//   //       title: 'Info',
//   //       disabled: true
//   //     }, {
//   //       title: 'Phone number',
//   //       disabled: true
//   //     },{
//   //         title: 'Address',
//   //         disabled: true

//   //     }]
//   //   });
  }

})();
