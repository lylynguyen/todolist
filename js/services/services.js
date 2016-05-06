angular.module('todolist.service', [])
.factory('TodoService', function () {
  var ID = 'todos';
  var store = [];
  var addToStorage = function(todos){
    store.push(todos);
    var value = JSON.stringify(store);
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
