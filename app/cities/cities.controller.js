/**
 * Created by Saul Bompart on 29-09-2017.
 */
'use strict';
var redis = require('redis').createClient();
var https =  require('https');

exports.get = function (req, res) {
    var range = Math.floor(Math.random() * 100) + 1;
    if (range < 10){
        throw new Error('How unfortunate! The API Request Failed');
    }
    redis.hgetall("city:"+req.params.id, function(err, city) {
        var reqCity = JSON.parse(city[Object.keys(city)[0]]);
        getTime(reqCity, function (resp) {
          res.json(resp);
        });
    });
};

exports.list = function (req, res) {
    var range = Math.floor(Math.random() * 100) + 1;
    if (range < 10){
        throw new Error('How unfortunate! The API Request Failed');
    }
    redis.keys('city:*', function (err, cities) {
        getAllCities(cities, function (response) {
            var respList = response.map(function (cityRedisData) {
                return JSON.parse(cityRedisData[Object.keys(cityRedisData)[0]])
            });
            res.json(respList);
        });
    });
};


/*************************
/** Internal Functions **/

function getAllCities(cities, callback) {
    var citiesAll = [];
    cities.forEach(function (key, index) {
        redis.hgetall(key, function (err, city) {
            citiesAll.push(city);
            if(index === cities.length-1)
                callback (citiesAll);
        });
    });
}

function getTime(city, callback) {
  var options = {
    host: 'api.darksky.net',
    path: "/forecast/468b06763858d448a298765dd907b9ed/"+city.lat+","+city.lng+"?lang=es"
  };

  https.get(options, function (resp) {
    var data = '';

    resp.on('data', function(chunk) {
      data += chunk;
    });

    resp.on('end', function() {
      callback(JSON.parse(data));
    });

  }).on("error", function(err) {
    console.log("Error: " + err.message);
  });
}