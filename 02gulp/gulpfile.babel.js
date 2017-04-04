import gulp from 'gulp'
import ts from 'gulp-typescript'

const tsProject = ts.createProject('tsconfig.json')

gulp.task('default', () => 
    tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(gulp.dest('dist')))

