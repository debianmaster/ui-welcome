/*  Dummy comments */
var app = angular.module('myApp', []);
app.controller('appController', function($scope,$http) { 
	$scope.friends=[];
	$scope.getFriendsList=function(){
	    $http.get($scope.userTarget+"/api/users?token="+$scope.token).success(function(data, status) {
	            console.log(data);
	            $scope.friends=data;
	            $scope.currentPage='friends';
            });	
	};
});
