(function(){
    'use strict';

    angular.module('BlurAdmin.pages.meeting')
        .controller('timepickerpopupCtrl', timepickerpopupCtrl);

    /** @ngInject */
    function timepickerpopupCtrl($scope) {

        $scope.open = open;
        $scope.opened = false;
        $scope.formats = ['HH:ii', 'HH:ii:ss', 'shortTime'];
        $scope.format = $scope.formats[0];
        $scope.desktopSetting = {
            showexternalSettings: false
        };

        function open() {
            $scope.opened = true;
        }
    }
})();