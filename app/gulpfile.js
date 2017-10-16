var gulp = require('gulp'),
    wiredep = require('wiredep').stream,
    sass = require('gulp-sass'),

    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-clean-css'),
    sftp = require('gulp-sftp');
 
gulp.task('sftp', function () {
    return gulp.src('../dist/**/*')
        .pipe(sftp({
            host: '95.211.148.86',
            user: 'yurik',
            pass: '9L3u2I0w',
            
        }));
});
//useref 
gulp.task('html', function () {
    return gulp.src('./*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('../dist'));
});
//
gulp.task('image:build', function () {
    gulp.src(path.img) 
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.dist.img))
        .pipe(reload({stream: true}));
});
// SCSS 
gulp.task('sass', function () {
  return gulp.src('./components/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./components/**/*.scss', ['sass']);
});


// BOWER 
gulp.task('bower', function () {
  gulp.src('./index.html')
    .pipe(wiredep({
      directory: "./bower_componennts"
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function(){
    gulp.watch("bower.json", ['bower']);
});