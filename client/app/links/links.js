angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
   $scope.Auth = Auth;
   $scope.data = {};

   $scope.getLinks = function(){
      Links.fetchLinks()
      .then(function(links){
         $scope.data.links = links;
      });
   };

   $scope.getLinks();
});