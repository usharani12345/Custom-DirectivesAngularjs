var app = angular.module("myApp",[]);

app.directive("myFirstDirective",function(){
	return{
		restrict:'EACM',
		template:"<div><h1>Customer Directive</h1><p>This Is My Paragrapg</p></div>",
		replace:true
		
	}
})
app.controller("myController",["$scope",function($scope){
	$scope.message="Good Morning ";
}])