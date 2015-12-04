describe('ToDoController', function() {
  beforeEach(module('ToDo'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initializes with an empty list of tasks', function() {
    expect(ctrl.toDoList).toBeUndefined();
  });

  describe('when displaying toDo list', function() {
    var tasks = [
      {
        "description": "Complete the challenge",
        "completed": false,
      },
      {
        "description": "Install OS X El Capitan",
        "completed": false,
      }
    ];

    it('display tasks', function() {
        expect(ctrl.toDoList.tasks).toEqual(tasks);
    });
  });
});