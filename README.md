Hello, HTML5 boilerplate
==========================

[![Build Status](https://travis-ci.org/ashawley/npm-html5-boilerplate-hello-world.svg?branch=master)](https://travis-ci.org/ashawley/npm-html5-boilerplate-hello-world)

Getting started with the [HTML5 boilerplate] for [Node.js] using [beefy], [browserify], [budo], [jshint], [karma], [jasmine], [less] and [uglify-js].

Clone the repository:

    $ git clone git@github.com/ashawley/npm-html5-boilerplate-hello-world.git -o upstream

Initialize project:

    $ npm init

    package name: npm-html5-boilerplate-hello-world
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
    
    
    Is this ok? (yes) yes

Install package dependencies:

    $ npm install
    up to date in 0.102s

Add dependencies:

    $ npm install html5-boilerplate jquery modernizr --save-prod

Add development dependencies:

    $ npm install beefy browserify browserify-shim \
                   budo http-server jshint \
                  less less-plugin-clean-css \
                  uglify-js watch \
                  watchify --save-dev

Copy artifacts from html5-boilerplate:

    $ cp -a ./node_modules/html5-boilerplate/dist ./app

Build task:

    $ npm run build
    
    > npm-html5-boilerplate-hello-world@0.0.0 prebuild ./
    > npm install && npm run lint
    
    
    > npm-html5-boilerplate-hello-world@0.0.0 postinstall ./
    > npm run copy-libs
    
    > npm-html5-boilerplate-hello-world@0.0.0 copy-libs ./
    > node scripts/copy-libs.js
    
    up to date in 7.17s
    
    > npm-html5-boilerplate-hello-world@0.0.0 lint ./
    > jshint ./app/js --exclude ./app/dist
    
    > npm-html5-boilerplate-hello-world@0.0.0 build ./
    > npm run build:browserify && npm run build:uglify && npm run build:less
    
    > npm-html5-boilerplate-hello-world@0.0.0 build:browserify ./
    > browserify ./app/js/index.js -o ./app/dist/js/index.js

    > npm-html5-boilerplate-hello-world@0.0.0 build:uglify ./
    > uglifyjs ./app/dist/js/index.js -c -o ./app/dist/js/index.min.js
    
    > npm-html5-boilerplate-hello-world@0.0.0 build:less ./
    > lessc --clean-css ./app/css/index.less ./app/dist/css/index.css

End-to-end testing requires protractor:

You can start the server with:

    $ npm run watch:start
    
    > npm-html5-boilerplate-hello-world@0.0.0 watch:start ./npm-html5-boilerplate-hello-world
    > npm run start:budo
    
    
    > npm-html5-boilerplate-hello-world@0.0.0 start:budo ./npm-html5-boilerplate-hello-world
    > budo app/js/index.js:dist/js/index.js -v -H localhost -p 8080 -d ./app --open --live -- -o app/dist/js/index.js
    
    [0002] info  Server running at http://localhost:8080/ (connect)
    [0002] info  LiveReload running
    [0003] 222ms         0B GET    200 /

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
