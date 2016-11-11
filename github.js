(function() {

	var github = function($http) {
		$http.defaults.headers.common['Authorization'] = 'Basic cmJ1c3F1ZXQ6bW9udGVTaW5haTEy';
		var getUser = function(username) {
			return $http.get('https://api.github.com/users/' + username)
						.then(function(response) {
							return response.data;
						});
		};

		var getRepos = function(user) {
			return $http.get(user.repos_url)
						.then(function(response) {
							return response.data;
						});
		};

		return {
			getUser: getUser,
			getRepos: getRepos
		};
	}
	var module = angular.module('githubViewer');
	module.factory('github', github);

}());