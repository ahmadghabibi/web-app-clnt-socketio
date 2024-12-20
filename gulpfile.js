const gulp = require('gulp')

gulp.task('cp:clnt-app', function () {
    return gulp
        .src('./embedded-clnt-app/build/**/*.*')
        .pipe(gulp.dest('./wwwroot'))
})
gulp.task('default', gulp.series(['cp:clnt-app']), function () { });