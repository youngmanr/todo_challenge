toDo.controller('ToDoController', [function() {
  var self = this;

  self.toDoList = {
    "tasks": [
      {
        "description": "Complete the challenge",
        "completed": false,
      },
      {
        "description": "Install OS X El Capitan",
        "completed": false,
      }
    ]
  };
}]);