angular.module('todolist.todos', [])
  .controller('TodoController', function ($scope, TodoService){
    var main = this;
    main.newTodo = '';
    main.todos = [];

    main.addTodo = function(){
      var newTodo = {
        title: main.newTodo,
        completed: false
      }
      main.todos.push(newTodo);

      TodoService.addToStorage(main.todos);
      main.newTodo = '';
    }

    main.getTodos = function(){
      var list = TodoService.getFromStorage();
    }

    main.markCompleted = function(todo){
      var item = todo;
      console.log(item);
      for(var key in todo){
        if(key === 'completed'){
          !todo[key];
        }
      }
      TodoService.addToStorage(main.todos);
    }

    main.removeTodo = function(idx){
      var itemToDelete = main.todos[idx];
      main.todos.splice(idx, 1);
      TodoService.addToStorage(main.todos);
      console.log(main.todos.length);
    }

    var clearAll = function(){
      if(main.todos.length === 0){
        TodoService.clearAll();
      }
    }

    clearAll();
  })
