const angular = require('angular')
const _ = require('lodash')
const metadata = require('yellow/src/metadata/main')
angular.module('yellow-explorer')

.factory('metadataService',($http)=>{
  return $http.get('/metadata').then((response) => new metadata.Metadata(response.data))
})

.controller('metadata',($scope,metadataService)=>{
  metadataService.then((metadata)=>{
    $scope.metadata = metadata
  })
})
