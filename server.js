var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var fs = require('fs');
var app = new require('express')();
var port = 5000;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/word', function(req, res) {
  getRandomLine(__dirname + '/assets/wordlist.js', res);
});

function getRandomLine(filename, res) {
  fs.readFile(filename, function(err, data) {
    if (err) {
      throw err;
    }

    console.log(data);
    var lines = data.split('\n');
    res.send(lines[Math.floor(Math.random()*lines.length)]);
  });
}

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
