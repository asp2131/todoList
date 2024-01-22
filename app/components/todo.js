angular.module('todo-list')
  .component('todo', {
    // TODO
    bindings: {
      // One way data binding is how we pass data from parent to child
      item: "<",
    },
    templateUrl:  `app/templates/todo.html`,
    controller: function ()  {
      console.log(this)
    }

  });