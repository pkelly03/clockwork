'use strict';

describe('Controller: About-UsCtrl', function() {

  // load the controller's module
  beforeEach(module('clockworkApp'));

  var About-UsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    About-UsCtrl = $controller('About-UsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
