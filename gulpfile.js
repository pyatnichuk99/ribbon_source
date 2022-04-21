var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass')(require('sass'));
var server = require('gulp-server-livereload');
var plumberNotifier = require('gulp-plumber-notifier');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('webserver', function() {
    gulp.src('result')
      .pipe(server({
        livereload: true,
        directoryListing: false,
        open: true
      }));
  });

 gulp.task("default",async ()=>{
    gulp.src("./source/*.pug")
    .pipe(pug({
        pretty: true
    }
    ))
    .pipe(plumberNotifier())
    .pipe(gulp.dest("./result/"))
})
  gulp.task('css', async function(){
    gulp.src('./source/sass/*.sass')
    .pipe(plumberNotifier())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))     
    .pipe(gulp.dest('./result/css/'))
  })
  gulp.task('img', async function(){
    gulp.src('./source/img/*')
      .pipe(gulp.dest('./result/img/'))
  });
  gulp.task('fonts', async function(){
    gulp.src('./source/fonts/*')
      .pipe(gulp.dest('./result/fonts/'))
  });
  gulp.task('js', async function(){
    gulp.src('./source/js/*.js')
      .pipe(gulp.dest('./result/js/'))
  });
  gulp.task('watcher', async function(){
    gulp.watch('./source/sass/*.sass', gulp.series('css'));
    gulp.watch('./source/*.pug', gulp.series("default"));
    gulp.watch('./source/img/', gulp.series('img'));
    gulp.watch('./source/fonts/', gulp.series('fonts'));
    gulp.watch('./source/js/*.js', gulp.series('js'));
  })
  gulp.task('serve', gulp.parallel('watcher', 'webserver'))