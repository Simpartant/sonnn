
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.meeting')
      .controller('uploadFile', uploadFileCtrl);

  /** @ngInject */
  function uploadFileCtrl() {
   
    $scope.uploadFile = function(){
      var file = $scope.myFile; // $scope.myFile is set buy the directive
      console.log('file is ' + $scope.myFile.name ); 
      var uploadUrl = "/fileUpload";
      fileUpload.uploadFileToUrl(file, uploadUrl);
  };
    
  }

})();
