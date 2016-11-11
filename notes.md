ng-controller directive

controller are functions invoked

```html
<div ng-app>
    <div ng-controller="MainController">
    </div>
</div>
```

```js
var MainController = function($scope) {
    $scope.message = "Hello!";
}
```


controller builds models to `$scope` variable

larger applications - multiple controllers
complex objects
nest controllers


$http service

- GET, POST, PUT, DELETE
- $http methods returns Promises

```javascript
var PersonController = function($scope, $http) {
    $http.get('/users/123')
         .then(function(response) {
            $scope.user = response.data;
         });
}
```

GitHub API

Modules

- Controllers live in modules
- Container for the code
- Avoid global namespace
- Angular API
    - Create module with a name

```javascript
var app = angular.module('githubViewer', []);
```


Directives

Data Binding Directives
= moves model data to view

  directives allow view and model work together without direct interaction


Services

- Create usable logic
- Create shared data
- Manage complexit
