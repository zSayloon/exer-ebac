const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); 
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimiImagem(){
    return gulp.src('./source/images/*', {encoding: false})
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function comprimiJavaScript(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sass({
            outputStyle:"compressed"
        }))
        .pipe(gulp.dest('./build/styles'))

}

exports.sass = compilaSass;
exports.javascript = comprimiJavaScript;
exports.images = comprimiImagem;