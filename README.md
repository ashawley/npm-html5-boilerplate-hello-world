Hello, HTML5 boilerplate
==========================

[![Build Status](https://travis-ci.org/ashawley/npm-html5-boilerplate-hello-world.svg?branch=master)](https://travis-ci.org/ashawley/npm-html5-boilerplate-hello-world)

Getting started with the [HTML5 boilerplate] for [Node.js] using [beefy], [browserify], [budo], [jshint], [karma], [jasmine], [less] and [uglify-js].

Clone the repository:

    $ git clone git@github.com/ashawley/npm-html5-boilerplate-hello-world.git -o upstream

Initialize project:

    $ npm init

    package name: hello-html5-boilerplate
    version: 0.0.0
    description: Hello, HTML5 boilerplate
    entry point: app/js/index.js
    test command: karma start --single-run
    git repository: git@github.com:ashawley/npm-html5-boilerplate-hello-world.git
    keywords: html5
    author: Aaron S. Hawley
    license: MIT
    About to write to package.json:
    
    {
      "name": "npm-html5-boilerplate-hello-world",
      "version": "0.0.0",
      "description": "Hello, HTML5 boilerplate",
      "main": "app/js/index.js",
      "directories": {
        "test": "test"
      },
      "dependencies": {},
      "devDependencies": {},
      "scripts": {
        "test": "karma start --single-run"
      },
      "repository": {
        "type": "git",
        "url": "git+ssh://git@github.com/ashawley/npm-html5-boilerplate-hello-world.git"
      },
      "keywords": [
        "html5"
      ],
      "author": "Aaron S. Hawley",
      "license": "MIT",
      "bugs": {
        "url": "https://github.com/ashawley/npm-html5-boilerplate-hello-world/issues"
      },
      "homepage": "https://github.com/ashawley/npm-html5-boilerplate-hello-world#readme"
    }
    
    
    Is this OK? (yes) yes

Install package dependencies:

    $ npm install html5-boilerplate --save-prod
    + html5-boilerplate@6.1.0
    added 1 package and audited 1 package in 2.974s
    found 0 vulnerabilities

Add development dependencies:

    $ npm install beefy browserify browserify-shim \
                  budo http-server jshint \
                  less less-plugin-clean-css \
                  uglify-js --save-dev
    + http-server@0.11.1
    + browserify-shim@3.8.14
    + browserify@16.2.3
    + jshint@2.9.7
    + less-plugin-clean-css@1.5.1
    + less@3.9.0
    + uglify-js@3.4.9
    + beefy@2.1.8
    + budo@11.5.0
    added 675 packages from 417 contributors and audited 6600 packages in 39.384s

Copy artifacts from html5-boilerplate:

    $ cp -a ./node_modules/html5-boilerplate/dist ./app

Build task:

    $ npm run build
    
    > hello-html5-boilerplate@0.0.0 prebuild ./
    > npm install && npm run lint
    
    audited 5395 packages in 7.602s
    found 0 vulnerabilities
    
    > hello-html5-boilerplate@0.0.0 lint ./
    > jshint ./app/js --exclude ./app/dist
    
    > hello-html5-boilerplate@0.0.0 build ./
    > npm run build:browserify && npm run build:uglify && npm run build:less
    
    > hello-html5-boilerplate@0.0.0 build:browserify ./
    > browserify ./app/js/index.js -o ./app/dist/js/index.js

    > hello-html5-boilerplate@0.0.0 build:uglify ./
    > uglifyjs ./app/dist/js/index.js -c -o ./app/dist/js/index.min.js
    
    > hello-html5-boilerplate@0.0.0 build:less ./
    > lessc --clean-css ./app/css/index.less ./app/dist/css/index.css

Testing:

    $ npm install jasmine-core jasmine-jquery karma karma-browserify \
                  karma-chrome-launcher karma-coverage \
                  karma-firefox-launcher karma-jasmine \
                  karma-jasmine-jquery karma-junit-reporter \
                  karma-less-preprocessor \
                  karma-ng-html2js-preprocessor \
                  karma-phantomjs-launcher --save-dev
    + karma-coverage@1.1.2
    + jasmine-jquery@2.1.1
    + karma-chrome-launcher@2.2.0
    + @metahub/karma-jasmine-jquery@2.0.1
    + karma-firefox-launcher@1.1.0
    + karma-junit-reporter@1.2.0
    + jasmine-core@3.3.0
    + karma-browserify@6.0.0
    + karma@3.1.4
    + karma-jasmine@2.0.1
    + karma-ng-html2js-preprocessor@1.0.0
    + karma-phantomjs-launcher@1.0.4
    + karma-less-preprocessor@0.3.3

End-to-end testing requires protractor:

    $ npm install protractor phantomjs-prebuilt --save-dev
    $ webdriver-manager update
    $ webdriver-manager start --detach
    $ protractor ./protractor.conf.js

You can start the server with:

    $ npm run watch:start
    
    > hello-html5-boilerplate@0.0.0 watch:start ./
    > npm run start:budo
    
    
    > hello-html5-boilerplate@0.0.0 start:budo ./
    > budo app/js/index.js:dist/js/index.js -v -H localhost -p 8080 -d ./app --open --live -- -o app/dist/js/index.js
    
    [0002] info  Server running at http://localhost:8080/ (connect)
    [0002] info  LiveReload running
    [0003] 222ms         0B GET    200 /

When you're done with end-to-end testing:

    $ webdriver-manager shutdown

[beefy]: http://didact.us/beefy/
[browserify]: http://browserify.org/
[budo]: http://github.com/mattdesl/budo
[HTML5 boilerplate]: https://html5boilerplate.com/
[jasmine]: http://jasmine.github.io/
[jshint]: http://jshint.com/
[karma]: http://karma-runner.github.io/
[less]: http://lesscss.org/
[Node.js]: http://nodejs.org/
[uglify-js]: http://lisperator.net/uglifyjs/
