const angular = require('angular')
const Handlebars = require('handlebars')
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
        $scope.handlebarsTemplate = Handlebars.compile(view.template.template)
      }     
    },
    template:'<div><ul><li ng-repeat="item in items" ng-bind-html="item|handlebars:handlebarsTemplate"></li></ul></div>'
  });
  $urlRouterProvider.otherwise('/');
  console.log('Test')
})
 
.filter('handlebars', function($sce) {
  return function(data, template) {
    return $sce.trustAsHtml(template(data))
  };
})
