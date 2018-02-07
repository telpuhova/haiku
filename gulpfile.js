var gulp =require('gulp');
var browserify =require('browserify');
var source = require('vinyl-source-stream');
// var concat =require('gulp-concat');
// var utilities =require('gulp-util');
// var del =require('del');
// var jshint =require('gulp-jshint');
// var buildProduction =utilites.env.production;
var babelify = require("babelify");



gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/haiku.js']})
    .transform(babelify.configure({
      presets: ["es2015"]
    }))
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'))
});
