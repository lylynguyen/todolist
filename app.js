// angular.module.('todolist', ['ngRoute', 'ngResource'])
//   .config(function($routeProvider) {
//     'use strict';

//     var routes = {
//       controller: 'TodoCtrl',
//       templateURL: 'index.html',
//       resolve: {
//         localStore: function(todoStorage){
//           return todoStorage.then(function(data){
//             data.get();
//             return data;
//           });
//         }
//       }
//     };

//     $routeProvider
//       .when ('/', routes)
//       // .when('/: status', routes)
//       .otherwise({
//         redirectTo: '/'
//       });
//   })
