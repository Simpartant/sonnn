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
                if ($scope.DataDemos[n].FullName == sessionStorage.itemID) {
                    $scope.inputFullName = $scope.DataDemos[n].FullName;
                    $scope.inputDateOfBirth = $scope.DataDemos[n].DateOfBirth;
                }
            }
        }

        $scope.backPage = function() {
            location.href = "#/myList";
        }

        $scope.Save = function() {

            var FullName = angular.element(document).find('#inputFullName')[0];
            var DateOfBirth = angular.element(document).find('#inputDateOfBirth')[0];

            if (sessionStorage.itemID != undefined && sessionStorage.itemID != "undefined") { //MODIFIED
                for (var n = 0; n < $scope.DataDemos.length; n++) {
                    if ($scope.DataDemos[n].FullName == sessionStorage.itemID) {
                        $scope.DataDemos[n].FullName = FullName.value;
                        $scope.DataDemos[n].DateOfBirth = DateOfBirth.value;
                    }
                }
            }
            else { //ADD NEW 
                $scope.DataDemo = {"FullName" : FullName.value, "DateOfBirth" : DateOfBirth.value, "isActive" : true};

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
