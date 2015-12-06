describe('ToDoController', function() {
  beforeEach(module('ToDo'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initializes with an empty list of tasks', function() {
    expect(ctrl.toDoList).toEqual([]);
    expect(ctrl.newTask).toEqual('');
  });

  describe('when adding a new task', function() {
    var list = [
      {
        "description": "Eat Breakfast",
        "isCompleted": false,
      }
    ];

    it('add a new task', function() {
      ctrl.newTask = "Eat Breakfast";
      ctrl.doAddTask();
      expect(ctrl.toDoList).toEqual(list);
    });
  });

  describe('when deleting a new task', function() {
    var list = [
      {
        "description": "Eat Breakfast",
        "isCompleted": false,
      },
      {
        "description": "Eat Lunch",
        "isCompleted": false,
      }
    ];

    var index = 1;

    it('deletes a task', function() {
      var list = [
        {
          "description": "Eat Breakfast",
          "isCompleted": false,
        }
      ];
      index = 1;

      ctrl.newTask = "Eat Breakfast";
      ctrl.doAddTask();
      ctrl.newTask = "Eat Lunch";
      ctrl.doAddTask();
      ctrl.doDeleteTask(index);
      expect(ctrl.toDoList).toEqual(list);
    });
  });

});