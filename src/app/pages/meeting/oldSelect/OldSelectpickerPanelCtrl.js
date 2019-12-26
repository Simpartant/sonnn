/**
 * @author v.lugovsky
 * created on 22.04.2016
 * @deprecated
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.meeting')
      .controller('OldSelectpickerPanelCtrl', OldSelectpickerPanelCtrl);

  /** @ngInject */
  function OldSelectpickerPanelCtrl() {
    var vm = this;

    vm.standardSelectItems = [
      { label: 'Họp triển khai công việc', value: 1 },
      { label: 'Họp giải quyết vấn đề', value: 2 },
      { label: 'Họp lấy ý kiến, phiếu bầu', value: 3 },
      { label: 'Họp triển khai công việc', value: 4 },
      { label: 'Họp trao đổi thông tin', value: 4 },
      { label: 'Họp mở rộng dân chủ', value: 4 },

    ];
    vm.phonghop = [
      { label: '101', value: 1 },
      { label: '102', value: 2 },
      { label: '103', value: 3 },
      { label: '104', value: 4 },
      { label: '105', value: 4 },
      { label: '106', value: 4 },

    ];
    vm.donvi = [
      { label: 'VietInfo Corp', value: 1 },
      { label: 'Creatory', value: 2 },
      { label: 'Vin Group', value: 3 },
      { label: 'Parkson', value: 4 },
      { label: 'Bitexco', value: 4 },
      { label: 'Landmark 81', value: 4 },

    ];
    vm.phongban = [
      { label: 'Chủ tịch', value: 1 },
      { label: 'Giám đốc', value: 2 },
      { label: 'Phòng nhân sự', value: 3 },
      { label: 'Phòng marketing', value: 4 },
      { label: 'Phòng kế toán', value: 4 },
      { label: 'Phòng IT', value: 4 },

    ];

    vm.selectWithSearchItems = [
      { label: 'Hot Dog, Fries and a Soda', value: 1 },
      { label: 'Burger, Shake and a Smile', value: 2 },
      { label: 'Sugar, Spice and all things nice', value: 3 },
      { label: 'Baby Back Ribs', value: 4 },
    ];

    vm.groupedSelectItems = [
      { label: 'Group 1 - Option 1', value: 1, group: 'Group 1' },
      { label: 'Group 2 - Option 2', value: 2, group: 'Group 2' },
      { label: 'Group 1 - Option 3', value: 3, group: 'Group 1' },
      { label: 'Group 2 - Option 4', value: 4, group: 'Group 2' },
    ];

  }

})();
