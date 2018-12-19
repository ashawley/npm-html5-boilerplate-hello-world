'use strict';

describe('css/index', function() {

  beforeEach(function() {

    jasmine.getStyleFixtures().fixturesPath = 'base/app';

    loadStyleFixtures('dist/css/index.css');

  });

  describe('main', function() {

    it('h1', function() {
      setFixtures('<h1 id="main-h1">Title<h1/>');
      expect($('h1#main-h1')).toHaveCss({'margin-right': '0px'});

    });

    it('p', function() {
      setFixtures('<p id="main-p">Text<h1/>');
      expect($('p#main-p')).toHaveCss({'margin-top': '0px'});

    });

  });

  describe('normalize', function() {

    it('h1', function() {
      setFixtures('<h1 id="normalize-h1">Title<h1/>');
      expect($('h1#normalize-h1')).toHaveCss({'margin-right': '0px'});

    });

  });

});
