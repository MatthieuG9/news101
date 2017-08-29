'use strict';

describe('Service: newsLoader', function () {

  // load the service's module
  beforeEach(module('news101App'));

  // instantiate service
  var newsLoader;
  beforeEach(inject(function (_newsLoader_) {
    newsLoader = _newsLoader_;
  }));

  it('should do something', function () {
    expect(!!newsLoader).toBe(true);
  });

});
