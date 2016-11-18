/// <reference path="typings/angularjs/angular.d.ts" />

(function() {
	var app = angular.module('githubViewer');
	var MainCtrl = function($scope, $interval, $location) {
		$scope.search = function(username) {
			if (countDownInterval) {
				$interval.cancel(countDownInterval);
			};
			$location.path('/user/' + username);
		};

		$scope.username = "rbusquet";

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
	app.controller('MainCtrl', ["$scope", '$interval', '$location', MainCtrl]);
}());