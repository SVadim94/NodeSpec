const gulp = require('gulp');
const babel = require('gulp-babel');
const changed = require('gulp-changed');

gulp.task('libs', () => {
    gulp.src('libs/**/*.js')
    .pipe(changed('build'))
    .pipe(babel({
            presets: [
                'es2015-node5',
                'stage-3'
            ]
     }))
     .pipe(gulp.dest('build'));
});

gulp.task('test', () => {

});

gulp.task('watch', ['libs'], () => {
    gulp.watch('libs/**/*.js', ['libs']);
});

gulp.task('default', ['watch'], () => {

});
