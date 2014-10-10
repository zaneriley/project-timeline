var gulp          = require('gulp');
var autoprefixer  = require('gulp-autoprefixer');
var browserSync   = require('browser-sync');
var concat        = require('gulp-concat');
var cssmin        = require("gulp-minify-css");
var handlebars    = require('gulp-compile-handlebars');  // Compiles handlebar templating
var jsValidate    = require('gulp-jsvalidate');          
var notify        = require('gulp-notify');              // Better alerts for Gulp
var plumber       = require('gulp-plumber');             // Fixes Gulp streaming issue when it hits an error
var reload        = browserSync.reload;
var rename        = require('gulp-rename');              // can rename files
var sass          = require('gulp-sass');                // CSS preprocessor
var uglify        = require('gulp-uglify');              // JS minifier
var watch         = require('gulp-watch');

var projectData = require('./project-timeline-information.json'); //pulling in our project data

var paths = {
  js: ['dev/js/*.js'],
  scss: ['dev/**/*.scss'],
  templates: ['dev/templates/*.hbs'],
  data: ['project-timeline-information.json']
}

// DEFAULT task 
gulp.task('default', ['scss', 'templates', 'browser-sync', 'watch'], function () {
    gulp.watch(paths.scss, ['scss']);
});


// Compiles SCSS, autoprefixes it, minifies it and puts it in our production folder
gulp.task('scss', function() {
  return gulp.src('dev/scss/main.scss')
    .pipe(sass({ style: 'compressed' }))
    .pipe(autoprefixer('last 2 version'))
    .pipe(cssmin())
    .pipe(gulp.dest('app/css'))
    .pipe(reload({stream:true}));
});

// Validates our JS, minifies it, concatenates it and puts it in our production folder
gulp.task('js', function () {
  console.log("Validate all the javascript files in the content/javascript folder");
  return gulp.src(["dev/js/**.js"])
  	.pipe(jsValidate())
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('app/js'))
});

// Takes our handlebar templates and inserts the project-hub-information.json, compiles them into .html files in /app.
gulp.task('templates', function () {
    options = {
        batch : ['dev/templates/partials']
    }
    return gulp.src('dev/templates/*.hbs')
        .pipe(handlebars(projectData, options))
        .pipe(rename(function (path) {
            path.extname = ".html"
        })) 
        .pipe(gulp.dest('app/'))
        .pipe(reload({stream:true}))
});

// WATCH for file changes, then runs tasks.
gulp.task('watch', ['browser-sync'], function() {
    gulp.watch(paths.scss, ['scss']);
    gulp.watch(paths.js, ['js']);
    gulp.watch(paths.templates, ['templates']);
    gulp.watch(paths.data, ['templates'])
    gulp.watch("app/**/*.html"), [browserSync.reload];
});

// BROWSER-SYNC reloads your browsers and devices so you don't have to.  
gulp.task('browser-sync', function() {
  var files = [
    'app/css/*.css',
    'app/js/*.js',
    'app/**/*.html',
    'project-timeline-information.json'
  ];
  browserSync.init(files, {
    server: {
      baseDir: 'app',     
    }
  });
});