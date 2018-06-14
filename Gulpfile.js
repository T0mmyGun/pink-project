'use strict';

var gulp = require('gulp');
var less = require('gulp-less');


gulp.task('style', function(){
    gulp.src("app/less/style.less")
    .pipe(less())
    .pipe(gulp.dest("app/css"))
  });

gulp.task('watch', function(){
    gulp.watch('app/less/**/*.less', ['style'])
})
