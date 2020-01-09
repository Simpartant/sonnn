(function() {
  "use strict";

  angular
    .module("BlurAdmin.pages.myPage")
    .controller("uploadFileCtrl", uploadFileCtrl);

  function uploadFileCtrl($scope, uploadFileServices) {
    $scope.uploadFile = function() {
      var file = $scope.myFile;
      var uploadUrl = "~/text/", //Url of webservice/api/server
        promise = uploadFileServices.uploadFileToUrl(file, uploadUrl);

      promise.then(
        function(response) {
          $scope.serverResponse = response;
        },
        function() {
          $scope.serverResponse = "An error has occurred";
        }
      );
    };
  }
})();
