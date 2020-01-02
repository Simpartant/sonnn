/**
 * @author Nguyen Huu Tuan
 * created on 14.01.2019
 */
(function () {
    'use strict';

    //declare controller
    angular.module('BlurAdmin.pages.myPage')
        .controller('myListCtrl', myListCtrl);

    /******************************************/
    /*******start controller*******/
    /******************************************/
    function myListCtrl($scope, $state) {

        $scope.smartTablePageSize = 10;

        sessionStorage.itemID = undefined;
        var arrData = [];
        var vm = this;
        vm.rowCollection = [];
        if (sessionStorage.DataDemos != undefined && sessionStorage.DataDemos != "undefined")
            arrData = JSON.parse(sessionStorage.getItem('DataDemos'));

        init();
        function init() {
            for (var n = 0; n < arrData.length; n++) {
                vm.rowCollection[n] = {"No" : n + 1, 
                                    "NgayThang" : arrData[n].NgayThang,
                                    "Contend" : arrData[n].Contend,
                                    "Boss" : arrData[n].Boss,
                                    "Phong" : arrData[n].Phong,
                                    "DonVi" : arrData[n].DonVi,
                                    "PhongBan" : arrData[n].PhongBan,
                                    "GioBatDau": arrData[n].GioBatDau,
                                    "GioKetThuc": arrData[n].GioKetThuc, 
                                    "ThuKy": arrData[n].ThuKy, 
                                    "Address": arrData[n].Address, 
                                    // "BatBuoc": arrData[n].BatBuoc, 
                                    // "KoBatBuoc": arrData[n].KoBatBuoc, 
                                    "Area": arrData[n].Area.value
                                    , "isActive" : arrData[n].isActive == true ? "Chuẩn bị" : "Đã bắt đầu"};
            }
        }

        $scope.createNew = function() {
            location.href = "#/myNew";
        }
        
        $scope.editData = function(itemID) {
            sessionStorage.itemID = itemID;
            location.href = "#/myNew";
        }

        $scope.activeData = function(itemID) {
            $scope.DataDemos = JSON.parse(sessionStorage.getItem('DataDemos'));

            for (var n = 0; n < $scope.DataDemos.length; n++) {
                if ($scope.DataDemos[n].Boss == itemID) {
                    $scope.DataDemos[n].isActive = !$scope.DataDemos[n].isActive;
                }
            }

            sessionStorage.setItem('DataDemos', JSON.stringify($scope.DataDemos))

            $state.reload();
        }
      

    };
    /**##### End controller #####******/

})();
