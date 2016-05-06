
var routerApp = angular.module('todolist', ['todolist.service', 'todolist.todos', 'ui.router', ]);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/todos');
    $stateProvider
      .state('todos', {
          url: '/todos',
          templateUrl: 'partials/todos.html',
          controller: 'TodoController'
      })
});
