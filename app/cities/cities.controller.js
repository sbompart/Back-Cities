/**
 * Created by Saul Bompart on 29-09-2017.
 */
'use strict';
var redis = require('redis').createClient();
var https =  require('https');

exports.get = function (req, res) {
    var range = Math.floor(Math.random() * 100) + 1;
    var rangeLimite = 10
    if (range < rangeLimite){
        return res.status(500).json({
          error: true,
          message: `El Rango es menor al limite ${rangeLimite}`,
          code: 'ERROR_0001'
        });
    }
    redis.hgetall("city:"+req.params.id, function(err, city) {
      if (err) {
        return res.status(500).json({
          error: true,
          message: `Error al buscar la ciudad ${err}`,
          code: 'ERROR_0002'
        });
      }
      if (city) {
        var reqCity = JSON.parse(city[Object.keys(city)[0]]);
        return res.status(200).json(reqCity);
      }else{
        return res.status(404).json({
          message: `La id no existe ${req.params.id}`
        });
      }
    });
};

exports.list = function (req, res) {
    var range = Math.floor(Math.random() * 100) + 1;
    var rangeLimite = 10
    if (range < rangeLimite){
        return res.status(500).json({
          error: true,
          message: `El Rango es menor al limite ${rangeLimite}`,
          code: 'ERROR_0001'
        });
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