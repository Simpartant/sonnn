(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.infoprofile')
        .controller('infoprofileCtrl', infoprofileCtrl);
  
    /** @ngInject */
    function infoprofileCtrl($scope, baConfig) {
        $scope.transparent = baConfig.theme.blur;
    var dashboardColors = baConfig.colors.dashboard;
    var colors = [];
    for (var key in dashboardColors) {
      colors.push(dashboardColors[key]);
    }

    function getRandomColor() {
      var i = Math.floor(Math.random() * (colors.length - 1));
      return colors[i];
    }
  }
})();