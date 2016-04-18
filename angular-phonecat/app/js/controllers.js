'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatApp.controller('PhoneListCtrl',
  function ($scope) {
    $scope.phones = [
      {'name': 'Junjie Li',
       'snippet': 'hhhhhhh'},
      {'name': 'Shabi',
       'snippet': 'ooooooo'},
      {'name': 'yoyoyoyo',
       'snippet': 'ggggggg'}
    ];
  });

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
