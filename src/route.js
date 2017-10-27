const angular = require('angular')
angular.module('yellow-explorer')

.config(function($stateProvider,$urlRouterProvider) {


  $stateProvider.state({
    name: 'explorer',
    resolve: {
      config:(configService)=>configService,
      data:(dataService)=>dataService
    },
    abstract: true,
    template: '<ui-view/>'
  });
  $stateProvider.state({
    name: 'explorer.view',
    url:'/view/{viewName}',
    template:'<div>Test{{viewName}}</div>'
  });
  $urlRouterProvider.otherwise('/view/aaa');
  console.log('Test')
})
