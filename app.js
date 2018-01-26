"use strict";
const shroomApp = angular.module("ShroomSorter", []);

shroomApp.controller("ShroomCtrl", function ($scope, ShroomFactory) {
  ShroomFactory.getShrooms()
  .then( shroomsData => {
    $scope.mushroomList = [];
    for(let mushroom in shroomsData.data){
      $scope.mushroomList.push(shroomsData.data[mushroom]);
    };
  })
});


shroomApp.factory("ShroomFactory", function($q, $http) {
  let getShrooms = ()=>{
    return $q( (resolve, reject)=> {
      $http.get("https://testetization.firebaseio.com/mushroom.json")
      .then( (shrooms) => {
        resolve(shrooms);
      }) 
      .catch( err => {
        reject(err)
      });
    });
  };
  return { getShrooms };
});

