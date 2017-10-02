var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload');

gulp.task('sass', function() {
  return gulp.src('scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'expanded',
        sourceComments: 'map'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src'))
    .pipe(livereload());

})
gulp.task('watch', function(){

  livereload.listen();

  gulp.watch('scss/**/*.scss', ['sass']);
})

gulp.task('default', ['sass', 'watch']);
