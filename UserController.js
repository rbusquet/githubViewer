/// <reference path="typings/angularjs/angular.d.ts" />

(function() {
	var app = angular.module('githubViewer');

	var UserCtrl = function($scope, github, $routeParams) {

		var onUserComplete = function(user) {
			$scope.user = user;
			$scope.error = '';
			github.getRepos(user).then(onRepos, onError);
		};

		var onRepos	= function(repos) {
			$scope.repos = repos;
		};
		var onError = function(reason) {
			$scope.error = "Hey, problem :(";
		};

		$scope.username = $routeParams.username;
		$scope.repoSortOrder = 'language';
		github.getUser($scope.username).then(onUserComplete, onError);
	}
	app.controller('UserCtrl', ["$scope", "github", "$routeParams", UserCtrl]);
}());