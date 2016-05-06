angular.module('todolist.service', [])
.factory('TodoService', function () {
  var ID = 'todos';
  var addToStorage = function(todos){;
    var value = JSON.stringify(todos);
    localStorage.setItem(ID, value);
  };

  var getFromStorage = function(){
    return localStorage;
  };

  var clearAll = function(){
    localStorage.clear();
  }

  return {
    addToStorage: addToStorage,
    getFromStorage: getFromStorage,
    clearAll: clearAll
  };


})
