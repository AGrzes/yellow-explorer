import '@uirouter/angularjs'
const angular = require('angular')
angular.module('yellow-explorer',['ui.router'])
const config = require('./config')
const data = require('./data')
const metadata = require('./metadata')
require('./route')