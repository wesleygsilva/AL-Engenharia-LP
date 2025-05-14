var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var uglify  = require('gulp-uglify');
var concat  = require('gulp-concat');
var rename  = require('gulp-rename');

//Source path
var js_src = './src/js/*.js';
var css_src = './src/css/components/*.css';

//Dist Path
var js_dist = './build/js/';
var js_dist_name = 'script.js';
var css_dist = './build/css/';
var css_dist_name = 'style.css';

//Minify and Concat Scripts
gulp.task('script', function() {
    return gulp.src(js_src)
        .pipe(plumber())
        .pipe(uglify())
        .pipe(concat(js_dist_name))
        .pipe(gulp.dest(js_dist));
});

gulp.task('style', function() {
    return gulp.src(css_src)
        .pipe(plumber())
        .pipe(concat(css_dist_name))
        .pipe(gulp.dest(css_dist));
});

gulp.task('watch', function() {
    gulp.watch([js_src], gulp.series('script'));
    gulp.watch([css_src], gulp.series('style'));
});

