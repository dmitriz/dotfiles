var gulp = require('gulp')

var root = '/Users/dmitrizaitsev/';
//var root = '~';

var dotFiles = [
	'.bash_profile',
	'.bashrc',
	'.zshrc',
	'.gitignore_global',
	'.npmrc',
	'.jshintrc',
	'log.txt'
];

gulp.task('default', ['collect']);

// collect dot files 
gulp.task('collect', function(){
  return gulp.src(dotFiles.map(function(file){return root + file}))
  .pipe(gulp.dest('.'));
});

gulp.task('test', function(){
	return gulp.src('/Users/dmitrizaitsev/log.txt')
		.pipe(gulp.dest('.'))
});
