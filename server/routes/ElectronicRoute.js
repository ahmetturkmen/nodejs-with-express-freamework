var express = require('express');

var router = express.Router();

//var electronicController = require('./ElectronicController');
var electronicController = require('../controller/ElectronicController')
router.get('/', electronicController.index);

router.get('/computer', electronicController.computer);

module.exports = router;