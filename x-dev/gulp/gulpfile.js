//======================================================================
// gulpfile.js
//======================================================================
const gulp = require('gulp');

//----------------------------------------------------------------------
// Config
//----------------------------------------------------------------------
const isDev = process.env.IS_DEV || false;

const app = '../..';
const src = app+'/hugo/static-src';
const dst = app+'/hugo/static/assets';
const css_all = [src+'/css/style.scss'];
const css_watch = [src+'/css/**/*.scss'];
const js_init = [src+'/js/app.init.js'];
const js_rest = [src+'/js/*.app.js', app+'/content/**/*.app.js', src+'/js/app.last.js'];
//const js_all = js_init.concat(js_rest);

//----------------------------------------------------------------------
// Tasks - Exported
//----------------------------------------------------------------------
exports.build = gulp.parallel(t_css_all /*, t_js_init, t_js_rest*/);
exports.watch = gulp.series(exports.build, t_watch);
exports.default = exports.build;

//----------------------------------------------------------------------
// Tasks - Local
//----------------------------------------------------------------------
function t_css_all(cb) {
    build_css(css_all, 'style.bundle.css', dst+'/css/', cb);
}
function t_js_init(cb) {
    build_js(js_init, 'app.init.js', dst+'/js/', cb);
}
function t_js_rest(cb) {
    build_js(js_rest, 'bundle.js', dst+'/js/', cb);
}
function t_watch(cb) {
    gulp.watch(css_watch, t_css_all);
    //gulp.watch(js_init, t_js_init);
    //gulp.watch(js_rest, t_js_rest);
    cb();
}

//----------------------------------------------------------------------
// Modules - Other GulpJS / NodeJS
//----------------------------------------------------------------------
const rename = require('gulp-rename');
const pump = require('pump');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const sourcemaps = require( 'gulp-sourcemaps' );
//const filter = require('gulp-filter');
//const tar = require('gulp-tar');
//const gzip = require('gulp-gzip');

//----------------------------------------------------------------------
// Standard Builds
//    - Ref: gulp examples: https://gist.github.com/bappi-d-great/598699df608ce13bbb3c
//    - Ref: why pump?: https://github.com/gulpjs/gulp/tree/master/docs/why-use-pump
//----------------------------------------------------------------------
function build_css(src_files, concat_file, dest_dir, callback) {
    pump([
        gulp.src(src_files),
        concat(concat_file),
        sass({
            outputStyle: isDev ? 'nested' : 'compressed'
        }),
        autoprefixer(),
        rename({suffix: '.min'}),
        gulp.dest(dest_dir)
    ], callback);
}

function build_js(src_files, concat_file, dest_dir, callback) {
    pump([
        gulp.src(src_files),
        sourcemaps.init(),
        concat(concat_file),
        //sourcemaps.write(),
        gulp.dest(dest_dir),
        uglify(),
        rename({suffix: '.min'}),
        sourcemaps.write('.'),
        gulp.dest(dest_dir)
    ], callback);
}

function build_concat(src_files, concat_file, dest_dir, callback) {
    pump([
        gulp.src(src_files),
        concat(concat_file),
        gulp.dest(dest_dir)
    ], callback);
}
