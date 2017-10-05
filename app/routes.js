/**
 * Created by Saul Bompart on 29-09-2017.
 */
'use strict';

module.exports = function(app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        next();
    });

    app.use('/api/cities', require('./cities'));

    // application -------------------------------------------------------------
    /*app.get('*', function(req, res) {
        res.sendfile('./index.html'); // Carga única de la vista
    });*/
};