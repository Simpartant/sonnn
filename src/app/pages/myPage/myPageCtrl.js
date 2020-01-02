/**
 * @author Nguyen Huu Tuan
 * created on 14.01.2019
 */
(function () {
    'use strict';

    //declare controller
    angular.module('BlurAdmin.pages.myPage')
        .controller('myPageCtrl', myPageCtrl);

    /******************************************/
    /*******start controller*******/
    /******************************************/
    function myPageCtrl($scope, $state) {
        $scope.open = open;
        $scope.opened = false;
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.options = {
            showWeeks: false
        };

        function open() {
            $scope.opened = true;
        }
    
 
        $scope.DataDemos = [];
        if (sessionStorage.DataDemos != undefined && sessionStorage.DataDemos != "undefined")
            $scope.DataDemos = JSON.parse(sessionStorage.getItem('DataDemos'));

        if (sessionStorage.itemID != undefined && sessionStorage.itemID != "undefined") {
            $scope.Title = "Thay đổi dữ liệu";
        }
        else {
            $scope.Title = "Tạo mới dữ liệu";
        }

        init();
        function init() {
            for (var n = 0; n < $scope.DataDemos.length; n++) {
                if ($scope.DataDemos[n].Boss == sessionStorage.itemID) {
                    $scope.inputNgayThang = $scope.DataDemos[n].NgayThang;
                    $scope.inputContend = $scope.DataDemos[n].Contend;
                    $scope.inputBoss = $scope.DataDemos[n].Boss;
                    $scope.inputPhong = $scope.DataDemos[n].Phong;
                    $scope.inputDonVi = $scope.DataDemos[n].DonVi;
                    $scope.inputPhongBan = $scope.DataDemos[n].PhongBan;
                }
            }
        }

        $scope.backPage = function() {
            location.href = "#/myList";
        }

        $scope.Save = function() {

            var NgayThang = angular.element(document).find('#inputNgayThang')[0];
            var Contend = angular.element(document).find('#inputContend')[0];
            var Boss = angular.element(document).find('#inputBoss')[0];
            var Phong = angular.element(document).find('#inputPhong')[0];
            var DonVi = angular.element(document).find('#inputDonVi')[0];
            var PhongBan = angular.element(document).find('#inputPhongBan')[0];

            if (sessionStorage.itemID != undefined && sessionStorage.itemID != "undefined") { //MODIFIED
                for (var n = 0; n < $scope.DataDemos.length; n++) {
                    if ($scope.DataDemos[n].Boss == sessionStorage.itemID) {
                        $scope.DataDemos[n].NgayThang = NgayThang.value;
                        $scope.DataDemos[n].Contend = Contend.value;
                        $scope.DataDemos[n].Boss = Boss.value;
                        $scope.DataDemos[n].Phong = Phong.value;
                        $scope.DataDemos[n].DonVi = DonVi.value;
                        $scope.DataDemos[n].PhongBan = PhongBan.value;
                    }
                }
            }
            else { //ADD NEW 
                $scope.DataDemo = { "NgayThang": NgayThang.value, "Contend": Contend.value,"Boss": Boss.value, "Phong": Phong.value, "DonVi": DonVi.value, "PhongBan": PhongBan.value, "isActive" : true};

                $scope.DataDemos.push($scope.DataDemo);
            }

            sessionStorage.setItem('DataDemos', JSON.stringify($scope.DataDemos))

            //console.log(JSON.parse(sessionStorage.getItem('DataDemos')));
            swal({
                title: "Thông báo",
                text: "Lưu dữ liệu thành công!",
                icon: "success",
                button: "Đóng",
            }).then(function(){
                $state.reload();
            });

        }
        
    };
    /**##### End controller #####******/

})();
