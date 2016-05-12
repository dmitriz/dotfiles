// .npm-init.js
// config used for `npm init`

var cwd = process.cwd(),  
    name = cwd.split('/').pop(),
    mainFile = '/index.js'

module.exports = {  
    version: '0.1.0',
    name: name,
    main: 'index.js',
    description: 'Test project',  
    repository: 'https://github.com/dmitriz',
    scripts: {
        start: 'nr dev',
        test: 'karma start',
        dev: 'open http://localhost:8080/ && webpack-dev-server'
    },
    keywords: [],
    author: 'Dmitri Zaitsev <dmitri14@gmail.com> (https://github.com/dmitriz)',
    license: 'MIT'
}
