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
          firstName: 'Mark',
          lastName: 'Otto',
          username: '@mdo',
          email: 'mdo@gmail.com',
          age: '28',
          status: 'info'
        },
        {
          id: 2,
          firstName: 'Jacob',
          lastName: 'Thornton',
          username: '@fat',
          email: 'fat@yandex.ru',
          age: '45',
          status: 'primary'
        },
        {
          id: 3,
          firstName: 'Larry',
          lastName: 'Bird',
          username: '@twitter',
          email: 'twitter@outlook.com',
          age: '18',
          status: 'success'
        },
        {
          id: 4,
          firstName: 'John',
          lastName: 'Snow',
          username: '@snow',
          email: 'snow@gmail.com',
          age: '20',
          status: 'danger'
        },
        {
          id: 5,
          firstName: 'Son',
          lastName: 'Sparrow',
          username: '@jack',
          email: 'jack@yandex.ru',
          age: '30',
          status: 'warning'
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
  