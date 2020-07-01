var gulp = require('gulp')
var sass = require('gulp-sass')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var plumber = require('gulp-plumber')
var autoprefixer = require('gulp-autoprefixer')
var cssnano = require('gulp-cssnano')
var wait = require('gulp-wait')
var color = require('gulp-color')

gulp.task('sass-promo', function () {

	console.log(color('\nPromo is compiling!\n', 'BLUE'))

	return gulp.src('dist/assets/sass/promo.sass')
	.pipe(wait(200))
	.pipe(plumber())
	.pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 25 versions']
	}))
		.pipe(cssnano())
	.pipe(plumber.stop())
	.pipe(gulp.dest('dist/assets/css/promo/'))


});

gulp.task('sass-promo-44', function () {

	console.log(color('\nPromo-44 is compiling!\n', 'GREEN'))

	return gulp.src('dist/assets/sass/promo44.sass')
		.pipe(wait(200))
		.pipe(plumber())
		.pipe(sass({ outputStyle: 'nested' }).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 25 versions']
		}))
		.pipe(cssnano())
		.pipe(plumber.stop())
		.pipe(gulp.dest('dist/assets/css/promo/44/'))


});

gulp.task('sass-promo-76', function () {

	console.log(color('\nPromo-76 is compiling!\n', 'RED'))

	return gulp.src('dist/assets/sass/promo76.sass')
		.pipe(wait(200))
		.pipe(plumber())
		.pipe(sass({ outputStyle: 'nested' }).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 25 versions']
		}))
		.pipe(cssnano())
		.pipe(plumber.stop())
		.pipe(gulp.dest('dist/assets/css/promo/76/'))


});

gulp.task('sass-theory-37', function() {

	console.log(color('\nTheory-37 is compiling!\n', 'BLUE'))

	return gulp.src('dist/assets/sass/theory37.sass')
	.pipe(wait(200))
	.pipe(plumber())
	.pipe(sass({ outputStyle: 'nested' }).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 25 versions']
		}))
		.pipe(cssnano())
	.pipe(plumber.stop())
	.pipe(gulp.dest('dist/assets/css/theory/37/'))
});

gulp.task('sass-theory-44', function () {

	console.log(color('\nTheory-44 is compiling!\n', 'GREEN'))

	return gulp.src(['dist/assets/sass/theory44.sass'])
		.pipe(wait(200))
		.pipe(plumber())
		.pipe(sass({ outputStyle: 'nested' }).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 25 versions']
		}))
		.pipe(cssnano())
		.pipe(plumber.stop())
		.pipe(gulp.dest('dist/assets/css/theory/44/'))
});

gulp.task('sass-theory-76', function () {

	console.log(color('\nTheory-76 is compiling!\n', 'RED'))

	return gulp.src(['dist/assets/sass/theory76.sass'])
		.pipe(wait(200))
		.pipe(plumber())
		.pipe(sass({ outputStyle: 'nested' }).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 25 versions']
		}))
		.pipe(cssnano())
		.pipe(plumber.stop())
		.pipe(gulp.dest('dist/assets/css/theory/76/'))
});

gulp.task('sass-test-37', function () {

	console.log(color('\nTest-37 is compiling!\n', 'BLUE'))

	return gulp.src(['dist/assets/sass/test37.sass'])
		.pipe(wait(200))
		.pipe(plumber())
		.pipe(sass({ outputStyle: 'nested' }).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 25 versions']
		}))
		.pipe(cssnano())
		.pipe(plumber.stop())
		.pipe(gulp.dest('dist/assets/css/test/37/'))
});

gulp.task('sass-test-44', function () {

	console.log(color('\nTest-44 is compiling!\n', 'GREEN'))

	return gulp.src(['dist/assets/sass/test44.sass'])
		.pipe(wait(200))
		.pipe(plumber())
		.pipe(sass({ outputStyle: 'nested' }).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 25 versions']
		}))
		.pipe(cssnano())
		.pipe(plumber.stop())
		.pipe(gulp.dest('dist/assets/css/test/44/'))
});

gulp.task('sass-test-76', function () {

	console.log(color('\nTest-76 is compiling!\n', 'RED'))

	return gulp.src(['dist/assets/sass/test76.sass'])
		.pipe(wait(200))
		.pipe(plumber())
		.pipe(sass({ outputStyle: 'nested' }).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 25 versions']
		}))
		.pipe(cssnano())
		.pipe(plumber.stop())
		.pipe(gulp.dest('dist/assets/css/test/76/'))
});



gulp.task('js-libs', function() {

	console.log(color('\nJs-libs is compiling!\n', 'YELLOW'))


	return gulp.src('dist/assets/libs/**/*.js')
		.pipe(plumber())
		.pipe(concat('libs.js'))
		.pipe(uglify())
		.pipe(plumber.stop())
		.pipe(gulp.dest('dist/assets/js/'))


}) 

gulp.task('sass', function() {

	console.log(color('\nGlobal styles is compiling!\n', 'MAGENTA'))

	gulp.start('sass-promo')
	gulp.start('sass-promo-44')
	gulp.start('sass-promo-76')
	gulp.start('sass-theory-37')
	gulp.start('sass-theory-44')
	gulp.start('sass-theory-76')
	gulp.start('sass-test-37')
	gulp.start('sass-test-44')
	gulp.start('sass-test-76')

})

gulp.task('watch', ['sass', 'js-libs'], function() {

	gulp.watch(['dist/**/theory/parts/*.sass', 'dist/**/theory*.sass'], ['sass-theory-37', 'sass-theory-44', 'sass-theory-76'])
	gulp.watch(['dist/**/promo/parts/*.sass', 'dist/**/promo*.sass'], ['sass-promo', 'sass-promo-44', 'sass-promo-76'])
	gulp.watch(['dist/**/test/parts/*.sass', 'dist/**/test*.sass'], ['sass-test-37', 'sass-test-44', 'sass-test-76'])
	gulp.watch(['dist/**/custom/**/*.sass', 'dist/**/base/*.sass'], ['sass'])
	gulp.watch('dist/assets/libs/**/*.js', ['js-libs'])

})

gulp.task('default', ['watch'])
