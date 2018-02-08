var gulp =require('gulp');
var browserify =require('browserify');
var source = require('vinyl-source-stream');
var concat =require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var del =require('del');
var jshint =require('gulp-jshint');
var buildProduction = utilities.env.production;
var babelify = require("babelify");

gulp.task('build',function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start ('jsBrowserify');
  }
})

gulp.task('jsBrowserify',['concat'], function() {
  return browserify({ entries: ['./tmp/allConcat.js']})
    .transform(babelify.configure({
      presets: ["es2015"]
    }))
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'))
});
gulp.task('concat', function() {
  return gulp.src(['./js/haiku-interface.js'])
  .pipe(concat('allConcat.js'))
  .pipe(gulp.dest("./tmp"));
});
gulp.task("minifyScripts",["jsBrowserify"],function(){
  return gulp.src(".build/js/app.js")
  .pipe(uglify())
  .pipe(gulp.dest("./build/js"));
});

gulp.task("clean", function() {
  return del(['build','tmp']);
});

gulp.task('build', ['clean'], function() {
  if(buildProduction){
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
});
gulp.task('jshint',function(){
  return gulp.src(['js/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});
