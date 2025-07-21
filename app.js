/**
 * Created by Saul Bompart on 29-09-2017.
 */
var express = require('express');
var app = express();
var redis = require('redis').createClient();

redis.on('connect', function() {
    console.log('Conectado a Redis Server');
    require('./app/cities/cities.boot')(redis);
});

require('./app/routes')(app);

app.get('/', function (_, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
