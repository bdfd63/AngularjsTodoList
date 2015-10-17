angular.module('todoApp', ['ngStorage']).controller('TodoListController', ['$localStorage', '$sessionStorage', function($localStorage, $sessionStorage) {
    var todoList = this;
    todoList.todos = [];
	
    if ($localStorage.todos != null){
	todoList.todos = $localStorage.todos;
    }
	
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
      $localStorage.todos = todoList.todos;
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    todoList.clear = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
      $localStorage.todos = todoList.todos;
    };
}]);

