'use strict';

describe('index', function() {

  beforeEach(function() {
  });

  it('title', function() {
    browser.get('index.html');
    expect(browser.getTitle()).toBe('Hello, World');
  });

  it('h1', function() {
    browser.get('index.html');
    expect(browser.get('h1')).toBe('Hello, World');
  });

});
