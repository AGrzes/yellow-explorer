const angular = require('angular')
const _ = require('lodash')
const yellowData = require('yellow/src/data/main')
angular.module('yellow-explorer')

.factory('dataService',($http,metadataService)=>{
  return $http.get('/data').then((response) => metadataService.then((metadata) => new yellowData.Data(response.data, metadata)))
})

.controller('data',($scope,dataService)=>{
  dataService.then((data)=>{
    $scope.data = data
  })
})
