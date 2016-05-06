angular.module('todolist.todos', [])
  .controller('TodoController', function ($scope, TodoService){
    var main = this;
    main.newTodo = '';


    var loadData = function(){
      main.todos = TodoService.getFromStorage();
    }

    main.addTodo = function(){
      var newTodo = {
        title: main.newTodo.trim(),
        completed: false
      }

      TodoService.addToStorage(newTodo);
      main.newTodo = '';
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
      main.getTodos()
    }

    loadData();
  })
