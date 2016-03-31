const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const changed = require('gulp-changed');

var files = {
    libs: 'libs/**/*.js'
};

var babelConfig = [
    'es2015-node5',
    'stage-3'
];

gulp.task('libs', () => {
    gulp.src(files.libs)
    .pipe(changed('build'))
    .pipe(babel({
            presets: babelConfig
     }))
     .pipe(gulp.dest('build'));
});

gulp.task('test', () => {

});

gulp.task('watch', ['libs'], () => {
    gulp.watch(file.libs, ['libs']);
});

gulp.task('lint', () => {
    gulp.src(files.libs)
    .pipe(eslint())
    .pipe(eslint.formatEach('compact', process.stderr))
    .pipe(eslint.failAfterError());
});

gulp.task('default', ['watch'], () => {

});
