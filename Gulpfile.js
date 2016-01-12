var os = require('os');
var path = require('path');
var gulp = require('gulp');

var root = os.homedir();

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
  return gulp.src(dotFiles.map(function(file){
	  console.log("Copying", file);
  	return path.resolve(root, file);
  }))
  .pipe(gulp.dest('.'));
});
