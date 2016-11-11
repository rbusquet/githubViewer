/// <reference path="typings/angularjs/angular.d.ts" />

(function() {
	var app = angular.module('githubViewer', []);

	var SIGN_CLASS = {
		'+': 'plus',
		'-': 'minus',
	}
	var MainCtrl = function($scope, github, $interval, $anchorScroll, $location) {

		var onUserComplete = function(user) {
			$scope.user = user;
			$scope.error = '';
			github.getRepos(user).then(onRepos, onError);
		};

		var onRepos	= function(repos) {
			$scope.repos = repos;
			$location.hash("userDetails");
			$anchorScroll();
		};
		var onError = function(reason) {
			$scope.error = "Hey, problem :(";
		};

		$scope.search = function(username) {
			github.getUser(username).then(onUserComplete, onError);
			if (countDownInterval) {
				$interval.cancel(countDownInterval);
			};
		};

		$scope.message = "Github Viewer";
		$scope.username = "rbusquet";
		$scope.repoSortOrder = 'language';
		var sign = '+';
		$scope.orderColBy = function(by, $event) {
			$event.preventDefault();
			if (sign == '+')
				sign = '-';
			else
				sign = '+';
			$scope.repoSortOrder = sign + by;
			$scope.signClass = SIGN_CLASS[sign];
		}

		$scope.orderingBy = function(by) {
			return $scope.repoSortOrder == sign + by;
		}

		$scope.countdown = 5;

		var decrementCountdown = function() {
			$scope.countdown -= 1;
			if ($scope.countdown < 1) {
				$scope.search($scope.username);
			}
		};

		var countDownInterval = null;
		var startCountDown = function() {
			countDownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
		};
		startCountDown();
	}
	app.controller('MainCtrl', ["$scope", "github", '$interval', '$anchorScroll', '$location', MainCtrl]);
}());