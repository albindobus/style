
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var livereload = require('gulp-livereload');
var sassGlob = require('gulp-sass-glob');

var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/app.scss')
    .pipe(sassGlob())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(livereload());
});

gulp.task('autoprefixer', function() {
	return gulp.src('./src/css/app.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/css/app.css'))
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});
