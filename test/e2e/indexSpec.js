'use strict';

describe('index', function() {

  beforeEach(function() {
    browser.waitForAngularEnabled(false);
  });

  it('title', function() {
    browser.get('index.html');
    expect(browser.getTitle()).toBe('Hello, world!');
  });

  it('h1', function() {
    browser.get('index.html');
    expect(element(by.tagName('h1')).getText()).toBe('Hello, world!');
  });

});
