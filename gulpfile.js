var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('myTask', function() {
  console.log('hello gulp');
  // I am the inner anonymous function that is a parameter of gulp.task()!
});
