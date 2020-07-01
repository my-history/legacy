var autoprefixer = require('autoprefixer'),
	browsersync = require('browser-sync').create(),
	cache = require('gulp-cache'),
	composer = require('gulp-uglify/composer'),
	concat = require('gulp-concat'),
	cssnano = require('cssnano'),
	uglifyjs = require('uglify-es'),
	imagemin = require('gulp-imagemin'),
	minify = composer(uglifyjs, console)
	mqpacker = require('css-mqpacker'),
	pipeline = require('readable-stream').pipeline,
	plumber = require('gulp-plumber'),
	pngquant = require('imagemin-pngquant'),
	postcss = require('gulp-postcss'),
	sass = require('gulp-sass'),
	wait = require('gulp-wait'),
	webp = require('imagemin-webp'),
	{src, dest, watch, task, series, parallel} = require('gulp'),

	config = {
		server: {
				server: "./",
				watch: true,
				notify: false,
		},
		processors: [
			autoprefixer({
				grid: true,
				browsers: ['>5%']
			}),
			cssnano(),
			mqpacker({
				sort: true
			})
		],
		imagemin: [
			imagemin.gifsicle({
				interlaced: true
			}),
			imagemin.jpegtran({
				progressive: true
			}),
			imagemin.optipng({
				optimizationLevel: 6
			}),
			imagemin.svgo({
				plugins: [{
						removeViewBox: true
					},
					{
						cleanupIDs: false
					}
				]
			}),
		],
		plugins: [
			webp({
				quality: 65 // Quality setting from 0 to 100
			})
		]
	};

task('scss', () => {
	return pipeline(
		src(['./src/scss/main.scss', './src/scss/Layout/Landings/landings.scss']),
		wait(200),
		plumber(),
		sass(),
		postcss(config.processors),
		plumber.stop(),
		dest('./public/dist/css'),
		browsersync.stream()
	)

})

task('images', () => {
	return pipeline(
		src('./src/images/**/*'),
		cache(imagemin(config.imagemin)),
		dest('./public/dist/images'),
	)

});

task('js', () => {
	return pipeline(
		src([
			'./src/js/hotkeys.js',
			'./src/js/jquery.min.js',
			'./src/js/js.cookie.js',
			'./src/js/modernizr.webp.js',
			'./src/js/common.js'
		]),
		minify(),
		concat('common.js'),
		dest('./public/dist/js')
	)
});

task('examinest', () => {
	return pipeline(
		src([
			'./src/js/examinest.js',
			'./src/js/examinest-legacy.js',
			'./src/js/examinest-new.js'
		]),
		minify(),
		dest('./public/dist/js')
	)
})

task('fonts', () => {
	return pipeline(
		src('src/fonts/**/*'),
		dest('./public/dist/fonts'),
	)
})


task('watch', () => {
	watch('./src/scss/**/*.scss', series('scss'));
	watch('./src/js/*.js', series('js', 'examinest'));
	watch('./src/fonts/**/*', series('fonts'));

});

task('serve', series('scss', 'js', () => {
	browsersync.init(config.server);
	// watch('./src/scss/**/*.scss', series('scss'));
	watch('./src/js/**/*.js', series('js', 'examinest'));
	watch('./public/**/*.html').on('change', browsersync.reload);
}))

task('default', series('scss', 'js', 'examinest', 'fonts', 'serve', 'watch'));
task('build', series('scss', 'js', 'fonts', 'images'))
