
"use strict";

angular.module("ShroomSorter")
.factory("ShroomFactory", function($q, $http) {
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