module.exports = function(config) {
  config.set({

    basePath: '.',

    plugins: [
      'karma-*',
      '@metahub/karma-jasmine-jquery'
    ],

    frameworks: [
      'browserify',
      'jasmine-jquery',
      'jasmine'
    ],

    files: [
      'app/js/index.js',
      'app/css/index.less',
      'test/js/**/*Spec.js'
    ],

    exclude: [
      '**/*~'
    ],

    preprocessors: {
      'app/js/**/*.js': [ 'browserify' ],
      'app/css/**/*.less': [ 'less' ]
    },

    reporters: [
      'progress',
      'junit'
    ],

    junitReporter: {
      'outputDir': 'test/reports',
      'outputFile': 'junit_results.xml',
      'useBrowserName': true
    },

    lessPreprocessor: {
      options: {
        save: true,
        paths: [ 'app/css' ]
      },
      transformPath: function(path) {
        return path.replace(/app/, 'app/dist').replace(/\.less$/, '.css');
      }
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/js/'
    },

    browsers: [
      'Chrome',
      'Firefox',
      'PhantomJS'
    ],

    concurrency: 1,

    browserify: {
      debug: true
    }

  })
}
