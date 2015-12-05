describe('ToDoController', function() {
  beforeEach(module('ToDo'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initializes with an empty list of tasks', function() {
    expect(ctrl.toDoList).toBeUndefined();
    expect(ctrl.newTask).toBeUndefined();
  });

  describe('when displaying toDo list', function() {
    var list = [
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

    it('displays all tasks', function() {
      expect(ctrl.toDoList).toEqual(list);
    });
  });

  describe('when adding a new task', function() {
    var list = [
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
      },
      {
        "description": "Read Node docs",
        "isCompleted": false,
      }
    ];

    it('add a new task', function() {
      ctrl.newTask = "Read Node docs";
      ctrl.doAddTask();
      expect(ctrl.toDoList).toEqual(list);
    });
  });
  describe('when deleting a new task', function() {

    var list = [
      {
        "description": "Complete the challenge",
        "isCompleted": true,
      },
      {
        "description": "Read Angular docs",
        "isCompleted": false,
      }
    ];

    var index = 1;

    it('deletes a task', function() {
      ctrl.doDeleteTask(index);
      expect(ctrl.toDoList).toEqual(list);
    });
  });

});