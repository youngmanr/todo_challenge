toDo.controller('ToDoController', [function() {
  var self = this;

  self.newTask  = '';
  self.filter   = null;
  self.toDoList = [
     {
        "description": "Complete the challenge",
        "isCompleted": true,
      },
      {
        "description": "Install OS X El Capitan",
        "isCompleted": false,
      },
      {
        "description": "Read Angular docs",
        "isCompleted": false,
      }
    ];

  self.doAddTask = function() {
    console.log("hello doAddTask");
    var task = {
      description: self.newTask,
      isCompleted: false
    }
    self.toDoList.push(task)
  };

  self.doDeleteTask = function(index) {
    console.log("hello doDeleteTask");
    self.toDoList.splice(index,1);
  };

  self.doToggleCompleted = function(task) {
    var completed = task.isCompleted;
    console.log("hello doToggleCompleted");
    console.log(task.isCompleted ? "Completed":"Not Completed");
    // task.isCompleted = !completed;
    // console.log(task.isCompleted ? "Completed":"Not Completed");
  };

  self.doShowAllTasks = function() {
    console.log("hello doShowAllTasks");
  };

  self.doShowActiveTasks = function() {
    console.log("hello doShowActiveTasks");
  };

  self.doShowCompletedTasks = function() {
    console.log("hello doShowCompletedTasks");
  };

  self.doClearCompletedTasks = function() {
    console.log("hello doClearCompletedTasks");
  };

}]);