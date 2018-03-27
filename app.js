const angular = require('angular.js-server')

var app = angular.module('shortUrlApp',[]);

app.controller ('shortAppCtrl',($scope) => {
$scope.test = "Hello world";
})