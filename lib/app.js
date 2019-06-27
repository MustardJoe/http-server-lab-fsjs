const { createServer } = require('http');
const { getFilePath } = require('./utils/filePath');
const fs = require('fs');
const { parse } = requite('url');


const app = createrServer((req, res) => {
  const { pathname } = parse(req.url);
  fs.readFile(getFilePath(pathname), { encoding: 'utf8' }, (err, content) => {
    if(err && err.code === 'ENOENT') {
      console.log(err);
      res.statusCode = 404;
      res.end('NotFount');
    }
    res.end(content);
  });
});

module.exports = app;

