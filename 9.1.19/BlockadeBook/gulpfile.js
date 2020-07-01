var gulp = require('gulp')
var sass = require('gulp-sass')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var plumber = require('gulp-plumber')
var autoprefixer = require('gulp-autoprefixer')
var cssnano = require('gulp-cssnano')
var wait = require('gulp-wait')

gulp.task('sass', function() {
		return gulp.src(['dist/assets/sass/main.sass', 'dist/assets/sass/darktheme.sass'])
			.pipe(wait(200))
			.pipe(plumber())
			.pipe(sass({
				outputStyle: 'nested'
			}).on('error', sass.logError))
			.pipe(autoprefixer({
				browsers: ['last 25 versions']
			}))
			.pipe(cssnano())
			.pipe(plumber.stop())
			.pipe(gulp.dest('dist/assets/css/'))
})
gulp.task('js-libs', function(cb) {
		return gulp.src('dist/assets/libs/**/*.js')
			.pipe(plumber())
			.pipe(concat('libs.js'))
			.pipe(uglify())
			.pipe(plumber.stop())
			.pipe(gulp.dest('dist/assets/js/'))
			cb()
})


gulp.task('watch', gulp.series('sass', 'js-libs', function(cb) {

	gulp.watch('dist/**/*.sass', gulp.series('sass'))
	gulp.watch('dist/assets/libs/**/*.js', gulp.series('js-libs'))
	cb()

}))

gulp.task('default', gulp.series('watch'))
