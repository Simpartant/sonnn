(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.infoprofile')
        .directive('infoprofile', infoprofile);
  
    /** @ngInject */
    function dashboardTodo() {
      return {
        restrict: 'EA',
        controller: 'infoprofileCtrl',
        templateUrl: 'app/pages/infoprofile/infoprofile.html'
      };
    }
  })();