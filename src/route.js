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
    }, 
    abstract: true,
    template: '<ui-view/>'
  });
  $stateProvider.state({
    name: 'explorer.view',
    params:{
      view: null
    },
    url:'/view/',
    controller: function ($scope, $stateParams, data) {
      const view = $stateParams.view
      if (view) {
        $scope.items = data.byType[view.selector.selector]
      }

    },
    template:'<div><ul><li ng-repeat="item in items">{{item.name}}</li></ul></div>'
  });
  $urlRouterProvider.otherwise('/');
  console.log('Test')
})
 