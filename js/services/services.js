angular.module('todolist.service', [])
.factory('TodoService', function () {
  var ID = 'todos';
  var addToStorage = function(todos){
    var value = JSON.stringify(todos);
    localStorage.setItem(ID, value);
  };

  var getFromStorage = function(){
    return localStorage.getItem('todos')
  };

  return {
    addToStorage: addToStorage,
    getFromStorage: getFromStorage
  };


})
