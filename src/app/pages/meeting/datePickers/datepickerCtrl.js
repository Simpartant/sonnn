/**
 * Created by n.poltoratsky
 * on 23.06.2016.
 */
(function(){
    'use strict';

    angular.module('BlurAdmin.pages.meeting')
        .controller('datepickerCtrl', datepickerCtrl);

    /** @ngInject */
    function datepickerCtrl($scope) {

        $scope.dt = new Date();
        $scope.options = {
            showWeeks: false
        };
        
       ;
      function DatepickerDemoCtrl($scope) {
        vm = this;
        vm.today = function() {
          if (vm.today) {
            vm.day = new Date();
          }
        };
        vm.options = {
          minDate: new Date(),
          showWeeks: true
        };
      }
    }
})();