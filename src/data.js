const angular = require('angular')
const _ = require('lodash')
angular.module('yellow-explorer')

.factory('dataService',($http)=>{
  return $http.get('/data').then((response)=> {    
    const data = response.data
    data.byType = _.groupBy(data,'type')
    return data
  }
  )
})

.controller('data',($scope,dataService)=>{
  dataService.then((data)=>{
    $scope.data = data
  })
})
