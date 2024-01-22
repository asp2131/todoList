// getting access my module
angular.module('todo-list')
  .component('app', {
    // TODO
    templateUrl:  `app/templates/app.html`,
    controller: function ()  {
      //1. using this
      this.todos = [
        {id: 0, text: "Clean kitchen", completed: false},
        {id: 1, text: "Clean bathroom", completed: false},
        {id: 2, text: "Clean living room", completed: false},
        {id: 3, text: "Clean bedroom", completed: false},
      ];

      this.updateItem = (todo) => {
        this.todos = this.todos.map((item) => {
          if (item.id === todo.id) {
            return todo;
          } else {
            return item;
          }
        })
      }


      this.addItem = () => {
        console.log(this.todos);
        // const todo = {
        //   text,
        //   id: this.length + 1,
        //   completed: false
        // }

        // this.todos.push(todo)
      }

      this.toggleCompletion = (reference) => {
        //filter the particular todo
        //change its completed property to opposite of whatever it is
        //update this.list
      }

      //2. use $scope
    }
  });