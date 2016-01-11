var path = require('path');
var gulp = require('gulp');

var root = '/Users/dmitrizaitsev/';

var dotFiles = [
	'.bash_profile',
	'.bashrc',
	'.zshrc',
	'.gitignore_global',
	'.npmrc',
	'.jshintrc',
];

gulp.task('default', ['collect']);

// collect dot files 
gulp.task('collect', function(){
  return gulp.src(dotFiles.map(function(file){return root + file}))
  .pipe(gulp.dest('.'));
});
