var fs = require('fs')

var httpServerExample = 'var http = require(\'http\')\n\n' +  
    'var PORT = 1337\n\n' +
    'http.createServer(function (req, res) {\n' +
    '    res.writeHead(200, {\'Content-Type\': \'text/plain\'})\n' +
    '    res.end(\'Hello World!\')\n' +
    '}).listen(PORT, \'127.0.0.1\')\n' +
    'console.log(\'Server running on port: \' + PORT)'

var cwd = process.cwd(),  
    name = cwd.split('/').pop(),
    mainFile = '/index.js'

// Write a new index.js if one doesn't exist already
try {  
    fs.lstatSync(cwd + mainFile)
} catch(err) {
    fs.writeFileSync(cwd + mainFile, httpServerExample)
}

module.exports = {  
    version: '0.1.0',
    name: name,
    main: 'index.js',
    description: "Test project",  
    repository: "https://github.com/dmitriz",
    scripts: {
        start: 'node index.js',
        test: "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "Dmitri Zaitsev <dmitri14@gmail.com> (https://github.com/dmitriz)",
    "license": "MIT"
}
