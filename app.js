"use strict";
const shroomApp = angular.module("ShroomSorter", ["ngRoute"]);

shroomApp.controller("ShroomCtrl", function ($scope, ShroomFactory) {
  ShroomFactory.getShrooms()
  .then( shroomsData => {
    $scope.mushroomList = Object.values(shroomsData.data);
    console.log('mushroomList',$scope.mushroomList);
  })
});

shroomApp.config( ($routeProvider)=>{
  $routeProvider
  .when("/", {
    templateUrl: "partials/template.html",
    controller: "ShroomCtrl"
  });
});