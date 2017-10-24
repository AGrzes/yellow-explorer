const angular = require('angular')
angular.module('yellow-explorer')

.factory('configService',($http)=>{
  return $http.get('/config').then((response)=> response.data)
})

.controller('config',($scope,configService)=>{
  configService.then((config)=>{
    $scope.config = config
  })
})
