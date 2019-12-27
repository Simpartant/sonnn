(function(){
    'use strict';

    angular.module('BlurAdmin.pages.meeting')
        .controller('timepickerCtrl', timepickerCtrl);

    /** @ngInject */
    function timepickerCtrl($scope) {

        var now = new Date();

        $scope.mobile = now;
        $scope.desktop = now;
        $scope.h12 = now;
        $scope.h24 = now;
        $scope.hms = now;
        $scope.nonform = now;
        $scope.external = now;

        $scope.desktopSettings = {
            touchUi: false
        };

        $scope.h12Settings = {
            timeFormat: 'hh:ii A'
        };

        $scope.h24Settings = {
            timeFormat: 'HH:ii'
        };

        $scope.hmsSettings = {
            timeFormat: 'HH:ii:ss',
            headerText: 'Time: {value}'
        };

        $scope.externalSettings = {
            showOnTap: false,
            showOnFocus: false
        };
        }
})();