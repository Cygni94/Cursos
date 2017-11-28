// gulpfile.js
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');

//npm rum gulp build-img
gulp.task('build-img', ['copy'], () =>
    gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
);

gulp.task('copy', ['clean'], function () {
 return gulp.src('src/**/*')
    .pipe(gulp.dest('dist')
)});

gulp.task('clean', function () {
    return gulp.src('dist')
        .pipe(clean());
});
