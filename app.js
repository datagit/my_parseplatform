let ParseServer = require('parse-server').ParseServer;
var api = new ParseServer({
  appName: 'MyParseplatform',
  databaseURI: 'mongodb://127.0.0.1:27017/parse',
  cloud: './cloud/main.js',
  appId: 'AeWrrJJKMf1SWHJYMuI2ypZvIZ7QidUEfRmKT6cW',
  masterKey: 'qKm3C8my8M34lsg3PvYdcCrYCuafcaBMjJG9uO4y',
  // fileKey: 'myFileKey',
  // push: { ... }, // See the Push wiki page
  // filesAdapter: ...,
  cloud: './cloud/main',
  liveQuery: {
    classNames: ['People'],
    // redisURL: 'redis://localhost:6379/1'
  },
});

var express = require('express');

var app = express();

// Serve the Parse API at /parse URL prefix
app.use('/parse', api);

var port = 1337;

var httpServer = require('http').createServer(app);
httpServer.listen(port, function () {
	console.log('parse-server-example running on port ' + port + '.');
});


// This will enable the Live Query real-time server
ParseServer.createLiveQueryServer(httpServer);