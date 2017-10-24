const angular = require('angular')
angular.module('yellow-explorer')

.factory('dataService',($http)=>{
  return $http.get('/data').then((response)=> response.data)
})

.controller('data',($scope,dataService)=>{
  dataService.then((data)=>{
    $scope.data = data
  })
})
