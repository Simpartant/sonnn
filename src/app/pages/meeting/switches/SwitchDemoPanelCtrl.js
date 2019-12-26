
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.meeting')
      .controller('SwitchDemoPanelCtrl', SwitchDemoPanelCtrl);

  /** @ngInject */
  function SwitchDemoPanelCtrl() {
    var vm = this;
    vm.switches = {
    
      s1: false,
    
    };
  }

})();
