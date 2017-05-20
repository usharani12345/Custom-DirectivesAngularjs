var app = angular.module("myApp",[]);

app.directive("myFirstDirective",function(){
	return{
		restrict:'EACM',
		templateUrl:'EmployeeDetails.html',
		replace:true,
		scope:{
			headerName:'@',
			employeeDetails: '=',
			changeEmployeeName:'&'
			
		},
	
				link:function(scope,elem,attrs){
					console.log("inside post method");
					console.log(elem);
					console.log(attrs);

				}
				

	}
})


app.controller("myController",["$scope",function($scope){
	$scope.message="Good Morning ";
	$scope.header="Techminds Learinings";
	$scope.employeeData= [{
		name:"usha",
		email:"usha@gmail.com"
	},
	{
		name:"john",
		email:"john@gmail.com"
	},
	{
		name:"deo",
		email:"deo@gmail.com"
	}]
	$scope.changeEmployeeName = function(){
		$scope.header= "Techminds Solutions";
		
	}
	$scope.customer=["john","deo",25];


}])