/// <reference path="typings/angularjs/angular.d.ts" />

(function() {
	var app = angular.module('githubViewer');

	var RepoCtrl = function($scope, github, $routeParams) {

		var onRepoContributors = function(contributors) {
			$scope.contributors = contributors;
		};
		var onRepoComplete = function(repo) {
			$scope.repo = repo;
			$scope.error = '';
			github.getRepoContributors(repo).then(onRepoContributors, onError);
		};

		var onError = function(reason) {
			$scope.error = "Hey, problem :(";
		};

		$scope.reponame = $routeParams.reponame;
		$scope.username = $routeParams.username;
		github.getRepo($scope.username, $scope.reponame).then(onRepoComplete, onError);
	}
	app.controller('RepoCtrl', ["$scope", "github", "$routeParams", RepoCtrl]);
}());