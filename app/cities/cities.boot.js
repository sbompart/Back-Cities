'use strict';

module.exports = function(redis) {
    var cities = [
        {
            id: 'CL',
            name: 'Santiago',
            lat: '-33.45',
            lng: '-70.6667'
        },
        {
            id: 'CH',
            name: 'Zurich',
            lat: '47.3686',
            lng: '8.5392'
        },
        {
            id: 'NZ',
            name: 'Auckland',
            lat: '-36.8485',
            lng: '174.7633'
        },
        {
            id: 'AU',
            name: 'Sydney',
            lat: '-33.8678500',
            lng: '151.2073200'
        },
        {
            id: 'UK',
            name: 'Londres',
            lat: '51.5072',
            lng: '-0.1275'
        },
        {
            id: 'USA',
            name: 'Georgia',
            lat: '42.0000000',
            lng: '43.5000000'
        }
    ];

    cities.forEach(function(city) {
        var key = 'city:'+city.id;
        redis.hmset(key,city.id, JSON.stringify(city));
    });
};