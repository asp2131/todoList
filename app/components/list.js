angular.module('todo-list')
  .component('list', {
    // TODO
    bindings: {
      // One way data binding is how we pass data from parent to child
      todos: "<",
    },
    templateUrl:  `app/templates/list.html`,
    controller: function () {
    },

  });