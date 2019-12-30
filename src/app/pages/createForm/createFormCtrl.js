(function () {
    'use strict';

    //declare controller
    angular.module('BlurAdmin.pages.createFormCtrl')
        .controller('createFormCtrl', createFormCtrl);

    /******************************************/
    /*******start controller*******/
    /******************************************/
    function createFormCtrl($scope, $state) {
        
        
        $scope.backPage = function() {
            location.href = "#/List";
        }


    };
    /**##### End controller #####******/

})();