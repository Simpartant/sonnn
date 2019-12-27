(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.manageMeeting')
        .controller('ManageCtrl', ManageCtrl);
  
    /** @ngInject */
    function ManageCtrl($scope, $filter, editableOptions, editableThemes) {
  
      $scope.smartTablePageSize = 10;
      $scope.smartTableData = [
        
      ];
  
      $scope.editableTableData = $scope.smartTableData.slice(0, 36);
  
      $scope.peopleTableData = [
        {
          id: 1,
          title: 'Họp triển khai công việc',
          time: '02:00 pm',
          date: '30/12/2019',
          room: '101',
          boss: 'Chủ tịch',
          status: 'success'
        },
        {
          id: 2,
          title: 'Họp giải quyết vấn đề',
          time: '08:00 am',
          date: '10/12/2019',
          room: '102',
          boss: 'Giám đốc',
          status: 'success'
        },
        {
          id: 3,
          title: 'Họp lấy ý kiến, phiếu bầu',
          time: '05:00 pm',
          date: '15/12/2019',
          room: '103',
          boss: 'Chủ tịch',
          status: 'pending'
        },
        {
          id: 4,
          title: 'Họp triển khai công việc',
          time: '09:00 am',
          date: '20/12/2019',
          room: '104',
          boss: 'Trưởng phòng',
          status: 'pending'
        },
        {
          id: 5,
          title: 'Họp trao đổi thông tin',
          time: '10:00 am',
          date: '25/12/2019',
          room: '105',
          boss: 'Team leader',
          status: 'pending'
        },
        {
          id: 6,
          title: 'Họp triển khai công việc',
          time: '02:00 pm',
          date: '30/12/2019',
          room: '101',
          boss: 'Chủ tịch',
          status: 'pending'
        },
        {
          id: 7,
          title: 'Họp giải quyết vấn đề',
          time: '08:00 am',
          date: '10/12/2019',
          room: '102',
          boss: 'Giám đốc',
          status: 'success'
        },
        {
          id: 8,
          title: 'Họp lấy ý kiến, phiếu bầu',
          time: '05:00 pm',
          date: '15/12/2019',
          room: '103',
          boss: 'Chủ tịch',
          status: 'pending'
        },
        {
          id: 9,
          title: 'Họp triển khai công việc',
          time: '09:00 am',
          date: '20/12/2019',
          room: '104',
          boss: 'Trưởng phòng',
          status: 'pending'
        },
        {
          id: 10,
          title: 'Họp trao đổi thông tin',
          time: '10:00 am',
          date: '25/12/2019',
          room: '105',
          boss: 'Team leader',
          status: 'success'
        }
      ];
  
     
  
      
  
      $scope.statuses = [
        {value: 1, text: 'Good'},
        {value: 2, text: 'Awesome'},
        {value: 3, text: 'Excellent'},
      ];
  
      $scope.groups = [
        {id: 1, text: 'user'},
        {id: 2, text: 'customer'},
        {id: 3, text: 'vip'},
        {id: 4, text: 'admin'}
      ];
  
      var vm = this;
      vm.rowCollection = [];

      $scope.showGroup = function(user) {
        if(user.group && $scope.groups.length) {
          var selected = $filter('filter')($scope.groups, {id: user.group});
          return selected.length ? selected[0].text : 'Not set';
        } else return 'Not set'
      };
  
      $scope.showStatus = function(user) {
        var selected = [];
        if(user.status) {
          selected = $filter('filter')($scope.statuses, {value: user.status});
        }
        return selected.length ? selected[0].text : 'Not set';
      };
  
  
      $scope.removeUser = function(index) {
        $scope.users.splice(index, 1);
      };
  
      $scope.addUser = function() {
        $scope.inserted = {
          id: $scope.users.length+1,
          name: '',
          status: null,
          group: null
        };
        $scope.users.push($scope.inserted);
      };
  
      editableOptions.theme = 'bs3';
      editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
      editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';
  
  
    }
  
  })();
  