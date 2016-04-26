// .npm-init.js

/**
 * This script is automatically run by `npm init`
 */

var fs = require('fs')

// Get local directory name
var cwd = process.cwd()
var name = cwd.split('/').pop()

var PORT = '8001'
var mainFile = '/server.js'

// Generate basic server
var basicServer = [
  '// Basic Server: Generated from `.npm-init.js`\n',
  'var fs = require(\'fs\')\n',
  'var http = require(\'http\')\n',
  '\n',
  'var PORT = ' + PORT + '\n',
  '\n',
  'http.createServer(function (req, res) {\n',
  '  //  res.writeHead(200, {\'Content-Type\': \'text/plain\'})\n',
  '  //  res.end(\'Hello World!\')\n',
  '  res.end(fs.readFileSync(\'index.html\'))\n',
  '}).listen(PORT)\n',
  '\n',
  'console.log(\'Server running on port: \' + PORT)',
  '\n'
].join('')

// Write a new index.js if one doesnt exist already
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
        dev: "open http://localhost:8080/ && webpack-dev-server",
        test: "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "Dmitri Zaitsev <dmitri14@gmail.com> (https://github.com/dmitriz)",
    "license": "MIT"
}
