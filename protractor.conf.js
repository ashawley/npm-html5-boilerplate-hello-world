//jshint strict: false
exports.config = {

  framework: 'jasmine',

  specs: ['test/e2e/**/*.js'],

  baseUrl: 'http://localhost:8080/',

  seleniumAddress: 'http://localhost:4444/wd/hub',

  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }]

};
