var express = require('express');

var router = express.Router();

//var electronicController = require('./ElectronicController');
var electronicController = require('../controller/ElectronicController')

router.use(function(req,res,next){
    req.deneme ='Merhaba';
    next();
})

router.get('/', electronicController.index);

router.get('/computer', electronicController.computer);

module.exports = router;