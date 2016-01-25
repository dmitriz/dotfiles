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

// Write a new server.js if one doesn't exist already
try {
  fs.lstatSync(cwd + mainFile)
} catch (err) {
  fs.writeFileSync(cwd + mainFile, basicServer)
}

// Variables to be exported into `package.json`
module.exports = {
  name: name,
  version: '0.1.0',
  main: 'server.js',
  description: 'My project',
  license: 'ISC',
  repository: 'https://github.com/dmitriz/' + name,
  author: 'Dmitri Zaitsev <dmitri14@gmail.com> (https://github.com/dmitriz)',
  config: {
    port: PORT
  },
  scripts: {
    start: 'node server',
    pub: 'npm version patch && npm publish && git push'
  },
  keywords: [
    name
  ]
}
