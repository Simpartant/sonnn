/**
 * @author Nguyen Huu Tuan
 * created on 14.01.2019
 */
(function() {
  "use strict";

  //declare controller
  angular.module("BlurAdmin.pages.myPage").controller("myPageCtrl", myPageCtrl);

  /******************************************/
  /*******start controller*******/
  /******************************************/
  function myPageCtrl($scope, $state) {
    $scope.open = open;
    $scope.opened = false;
    $scope.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "dd.MM.yyyy", "d MMM, y", "shortDate"];
    $scope.format = $scope.formats[0];
    $scope.options = {
      showWeeks: false
    };

    function open() {
      $scope.opened = true;
    }

    $scope.uploadFile = function(){
      var file = $scope.myFile; // $scope.myFile is set buy the directive
      console.log('file is ' + $scope.myFile.name ); 
      var uploadUrl = "/fileUpload";
      fileUpload.uploadFileToUrl(file, uploadUrl);
  };

    $scope.DataDemos = [];
    if (
      sessionStorage.DataDemos != undefined &&
      sessionStorage.DataDemos != "undefined"
    )
      $scope.DataDemos = JSON.parse(sessionStorage.getItem("DataDemos"));

    if (
      sessionStorage.itemID != undefined &&
      sessionStorage.itemID != "undefined"
    ) {
      $scope.Title = "Thay đổi dữ liệu";
    } else {
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
          $scope.inputGioBatDau = $scope.DataDemos[n].GioBatDau;
          $scope.inputGioKetThuc = $scope.DataDemos[n].GioKetThuc;
          $scope.inputThuKy = $scope.DataDemos[n].ThuKy;
          $scope.inputAddress = $scope.DataDemos[n].Address;
          $scope.inputUpload = $scope.DataDemos[n].Upload;
          // $scope.checkBatBuoc = $scope.DataDemos[n].BatBuoc;
          // $scope.checkKoBatBuoc = $scope.DataDemos[n].KoBatBuoc;
          $scope.inputArea = $scope.DataDemos[n].Area;
        }
      }
    }

    $scope.backPage = function() {
      location.href = "#/myList";
    };

    $scope.Save = function() {
      var NgayThang = angular.element(document).find("#inputNgayThang")[0];
      var Contend = angular.element(document).find("#inputContend")[0];
      var Boss = angular.element(document).find("#inputBoss")[0];
      var Phong = angular.element(document).find("#inputPhong")[0];
      var DonVi = angular.element(document).find("#inputDonVi")[0];
      var PhongBan = angular.element(document).find("#inputPhongBan")[0];
      var GioBatDau = angular.element(document).find("#inputGioBatDau")[0];
      var GioKetThuc = angular.element(document).find("#inputGioKetThuc")[0];
      var ThuKy = angular.element(document).find("#inputThuKy")[0];
      var Address = angular.element(document).find("#inputAddress")[0];
      var Upload = angular.element(document).find("#inputUpload")[0];
      // var BatBuoc = angular.element(document).find('#checkBatBuoc')[0];
      // var KoBatBuoc = angular.element(document).find('#checkKoBatBuoc')[0];
      var Area = angular.element(document).find("#inputArea")[0];

      //check Ngày tháng
      if (NgayThang.value == "") {
        swal({
          title: "Thông tin ngày tháng",
          text: "không được để trống!",
          icon: "warning",
          button: "Đóng"
        }).then(function() {
          NgayThang.focus();
        });
        return;
      }

      //check thoi gian
      if (GioBatDau.value == "") {
        swal({
          title: "Giờ họp",
          text: "không được để trống!",
          icon: "warning",
          button: "Đóng"
        }).then(function() {
          GioBatDau.focus();
        });
        return;
      }
      if (GioKetThuc.value == "") {
        swal({
          title: "Giờ họp",
          text: "không được để trống!",
          icon: "warning",
          button: "Đóng"
        }).then(function() {
          GioKetThuc.focus();
        });
        return;
      }

      if (Phong.value == "") {
        swal({
          title: "Thông tin phòng họp",
          text: "không được để trống!",
          icon: "warning",
          button: "Đóng"
        }).then(function() {
          Phong.focus();
        });
        return;
      }

      if (Contend.value == "") {
        swal({
          title: "Thông tin chủ đề",
          text: "không được để trống!",
          icon: "warning",
          button: "Đóng"
        }).then(function() {
          Contend.focus();
        });
        return;
      }

      //check chủ trì
      if (Boss.value == "") {
        swal({
          title: "Thông tin chủ trì",
          text: "không được để trống!",
          icon: "warning",
          button: "Đóng"
        }).then(function() {
          Boss.focus();
        });
        return;
      }

      // if (ThuKy.value == "") {
      //   swal({
      //     title: "Thông tin thư ký",
      //     text: "không được để trống!",
      //     icon: "warning",
      //     button: "Đóng"
      //   }).then(function() {
      //     ThuKy.focus();
      //   });
      //   return;
      // }

      // if (DonVi.value == "") {
      //   swal({
      //     title: "Thông tin đơn vị",
      //     text: "không được để trống!",
      //     icon: "warning",
      //     button: "Đóng"
      //   }).then(function() {
      //     DonVi.focus();
      //   });
      //   return;
      // }

      if (PhongBan.value == "") {
        swal({
          title: "Thông tin phòng ban",
          text: "không được để trống!",
          icon: "warning",
          button: "Đóng"
        }).then(function() {
          PhongBan.focus();
        });
        return;
      }
      // if (Upload.value == "") {
      //   swal({
      //     title: "Thông tin đính kèm",
      //     text: "không được để trống!",
      //     icon: "warning",
      //     button: "Đóng"
      //   }).then(function() {
      //     Upload.focus();
      //   });
      //   return;
      // }

      if (
        sessionStorage.itemID != undefined &&
        sessionStorage.itemID != "undefined"
      ) {
        //MODIFIED
        for (var n = 0; n < $scope.DataDemos.length; n++) {
          if ($scope.DataDemos[n].Boss == sessionStorage.itemID) {
            $scope.DataDemos[n].NgayThang = NgayThang.value;
            $scope.DataDemos[n].Contend = Contend.value;
            $scope.DataDemos[n].Boss = Boss.value;
            $scope.DataDemos[n].Phong = Phong.value;
            $scope.DataDemos[n].DonVi = DonVi.value;
            $scope.DataDemos[n].PhongBan = PhongBan.value;
            $scope.DataDemos[n].GioBatDau = GioBatDau.value;
            $scope.DataDemos[n].GioKetThuc = GioKetThuc.value;
            $scope.DataDemos[n].ThuKy = ThuKy.value;
            $scope.DataDemos[n].Address = Address.value;
            $scope.DataDemos[n].Upload = Upload.value;
            // $scope.DataDemos[n].BatBuoc = BatBuoc.value;
            // $scope.DataDemos[n].KoBatBuoc = KoBatBuoc.value;
            $scope.DataDemos[n].Area = Area.value;
          }
        }
      } else {
        //ADD NEW
        $scope.DataDemo = {
          NgayThang: NgayThang.value,
          Contend: Contend.value,
          Boss: Boss.value,
          Phong: Phong.value,
          DonVi: DonVi.value,
          PhongBan: PhongBan.value,
          GioBatDau: GioBatDau.value,
          GioKetThuc: GioKetThuc.value,
          ThuKy: ThuKy.value,
          Address: Address.value,
          Upload: Upload.value,
          // "BatBuoc": true,
          // "KoBatBuoc": false,
          Area: Area.value,
          isActive: true
        };

        $scope.DataDemos.push($scope.DataDemo);
      }

      sessionStorage.setItem("DataDemos", JSON.stringify($scope.DataDemos));

      // console.log(JSON.parse(sessionStorage.getItem('DataDemos')));

      swal({
        title: "Thông báo",
        text: "Lưu dữ liệu thành công!",
        icon: "success",
        button: "Đóng"
      }).then(function() {
        location.href = "#/myList";
      });
    };
  }
  /**##### End controller #####******/
})();
