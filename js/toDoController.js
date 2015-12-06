toDo.controller('ToDoController', [function() {
  var self = this;

  self.newTask  = '';
  self.filter   = null;
  self.toDoList = [];

  self.doAddTask = function() {
    var task = {
      description: self.newTask,
      isCompleted: false
    }
    self.toDoList.push(task)
    self.newTask = '';
  };

  self.doDeleteTask = function(index) {
    self.toDoList.splice(index,1);
  };

  self.doToggleCompleted = function(task) {
    var completed = task.isCompleted;
  };

  self.doShowAllTasks = function() {
  };

  self.doShowActiveTasks = function() {
  };

  self.doShowCompletedTasks = function() {
  };

  self.doClearCompletedTasks = function() {
  };

}]);