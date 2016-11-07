/*  Dummy comments */
var app = angular.module('myApp', []);
app.controller('appController', function($scope,$http) { 
	$scope.customers=[];
	$scope.getCustomerList=function(){
	    $http.get("http://localhost:3000/dbtest").success(function(data, status) {
	            console.log(data);
	            $scope.customers=data;
            });	
	};
	$scope.getCustomerList();
});
