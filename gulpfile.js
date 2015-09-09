var gulp = require('gulp');
var coffee = require('gulp-coffee');
var coffeeStream = coffee({bare: true});

coffeeStream.on('error',function(err){});

gulp.task('coffee', function() {
	gulp.src('.src/js/*.coffee')
	.pipe(coffee({bare:true}).on('error',gutil.log))
	.pipe(gulp.dest('./public'))
})
gulp.task('default', function() {
    gulp.watch('.src/js/*.coffee', ['coffee']);
});
