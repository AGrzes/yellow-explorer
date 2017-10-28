const angular = require('angular')
angular.module('yellow-explorer')

.config(function($stateProvider,$urlRouterProvider) {


  $stateProvider.state({
    name: 'explorer',
    resolve: {
      config:(configService)=>configService,
      data:(dataService)=>dataService
    },
    controller: function($scope, config,data) {
      $scope.config=config
      $scope.data=data
    }, 
    abstract: true,
    template: '<ui-view/>'
  });
  $stateProvider.state({
    name: 'explorer.view',
    params:{
      view: null
    },resolve: {
      view:($stateParams)=>$stateParams.view
    },
    url:'/view/',
    controller: function($scope,view){
      $scope.view=view
    },
    template:'<div>{{view.selector.selector}}</div>'
  });
  $urlRouterProvider.otherwise('/');
  console.log('Test')
})
 