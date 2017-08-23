const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
 
gulp.task('default', () =>
    gulp.src('assets/collage/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/collage'))
);