// Gulp modules
const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();


// CSS files order
const cssFiles = [
	'./src/css/main.css',
	'./src/css/media.css'
]

// JS files order
const jsFiles = [
	'./src/js/lib.js',
	'./src/js/main.js'
]
// Task for css styles
function styles() {
	// Template for search CSS files
	// All files with template './src/css/**/*.css'
	return gulp.src(cssFiles)
	// Conacat into one
	// This css in html head link
	.pipe(concat('style.css'))
	//autoprefixer
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	//clean css
	.pipe(cleanCSS({
		level: 2
	}))
	// Output folder for styles
	.pipe(gulp.dest('./build/css'))
	.pipe(browserSync.stream());
}

// Task for js scripts
function scripts() {
	// templates for search JS files
	// all files with template './src/js/**/*.js'
	return gulp.src(jsFiles)
	// Conacat into one
	// This JS in html script src
	.pipe(concat('script.js'))
	// uglify
	.pipe(uglify({
		toplevel: true
	}))
	// Output folder for scripts
	.pipe(gulp.dest('./build/js'))
	.pipe(browserSync.stream());
}

// delete files in folder
function clean() {
	return del(['build/*'])
}

// watch files and changes
function watch() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	//watch CSS files
	gulp.watch('./src/css/**/*.css', styles)
	//watch JS files
	gulp.watch('./src/js/**/*.js', scripts)
	//watch html files
	gulp.watch("./*.html").on('change', browserSync.reload);
}

// Task for invoking Styles func
gulp.task('styles', styles);
// Task for invoking scripts func
gulp.task('scripts', scripts);
// task del
gulp.task('del', clean); 
//task watch concat all tasks
gulp.task('watch', watch);
//task for delete files from build folder
gulp.task('build', gulp.series(clean, gulp.parallel(styles, scripts)));

gulp.task('dev', gulp.series('build', 'watch'));






