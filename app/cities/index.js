/**
 * Created by Saul Bompart on 29-09-2017.
 */

var express = require('express');
var controller = require('./cities.controller');

var router = express.Router();

router.get('/:id', controller.get);
router.get('/', controller.list);

module.exports = router;