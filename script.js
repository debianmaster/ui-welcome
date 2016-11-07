/*  Dummy comments */
var app = angular.module('myApp', []);
app.controller('appController', function($scope,$http) { 
	$scope.customers=[];
	$scope.getCustomerList=function(){
	    var host="https://gist.githubusercontent.com/debianmaster/382ef954a1f0d9922d32a804a4bd2183/raw/0958078235bfaf8be096033ba544864791435756/data.json";
	    $http.get(host).success(function(data, status) {
	            console.log(data);
	            $scope.customers=data;
            });	
	};
	$scope.getCustomerList();
});







//var host2="https://gist.githubusercontent.com/debianmaster/382ef954a1f0d9922d32a804a4bd2183/raw/e1dab8b9ed64fa8eea53772e23d8a8abe1349e59/data.json";
