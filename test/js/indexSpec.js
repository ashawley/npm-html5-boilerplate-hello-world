'use strict';

describe('index', function() {

  it('jQuery', function() {
    expect($).toBeDefined();
    expect($().jquery).toBe('3.3.1');
  });

  it('Modernizr', function() {
    expect(Modernizr).toBeDefined();
    expect(Modernizr._version).toBe('3.6.0');
  });

});
