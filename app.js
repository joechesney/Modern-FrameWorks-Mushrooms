"use strict";

const shroomApp = angular.module("ShroomSorter", []);


shroomApp.controller("ShroomCtrl", function ($scope, ShroomFactory) {
  let tester = "wadupu";
  // console.log('hellloo',tester);
  ShroomFactory.getShrooms()
  .then( shroomsData => {
    console.log('shrooms2',shroomsData.data);
    // $scope.mushroomList = shroomsData.data;
    $scope.mushroomList = [];
    for(let mushroom in shroomsData.data){
      $scope.mushroomList.push(shroomsData.data[mushroom]);
    };
    
    console.log('shrooms3',$scope.mushroomList);
  })

  const togler = function(){
    
  };
});


shroomApp.factory("ShroomFactory", function($q, $http) {
  let getShrooms = ()=>{
    return $q( (resolve, reject)=> {
      $http.get("https://testetization.firebaseio.com/mushroom.json")
      .then( (shrooms) => {
        console.log('shrooms1',shrooms);
        resolve(shrooms);
      }) 
      .catch( err => {
        reject(err)
      });
    });
  };
  return { getShrooms };
});

