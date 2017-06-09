// var http = require('http');
// var fs = require('fs');

// in nodejs there is no sequence of compiling
// because of that we use call-back functions to control
// the content

var express = require('express');
var path = require('path');
var ejsLayouts = require('express-ejs-layouts');
// ctrlElectronic became router after we exported it in EC.js file
//var routeElectronic = require('./ElectronicController');
//var routeElectronic = require('./ElectronicRoute');
var app = express();

//var objectOfElectronic = ctrlElectronic('Hello ');

app.set('view engine','ejs');
app.use(ejsLayouts);
var routeElectronic = require('./server/routes/ElectronicRoute');
app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('views',path.join(__dirname,'/server/views/'));
app.use('/electronic', routeElectronic);



app.use(function(req,res,next){
console.log('url ...:'+req.originalUrl);
console.log('time...: '+Date.now());
next();

})



var listener = app.listen(2000,function () {
    console.log('The server is running on '+listener.address().port);
});





//app.get('/',indexController);
// app.get('/electronic', ctrlElectronic.index);
// app.get('/electronic/computer', ctrlElectronic.computer);


    //  fs.readFile('index.html', function(err, data) {
    //         res.write(data);
    //         res.end(' Mesaj Bitti');
    //         console.log('homeController')
    //     });


// app.get('/login',loginController);
    //  fs.readFile('about.html', function(err, data) {
    //         res.write(data);
    //         res.end(' Mesaj Bitti');
    //         console.log('loginController')
    //     });



// After we added express , we do not need these


// var server = http.createServer(function(req, res) {
//     // if (req.url == '/') {
//     //     homeController(req,res);
//     //   } else if (req.url == '/about') {
//     //         loginController(req,res);
//     // }
//     if(req.url in routers)
//     routers[req.url](req,res);

//     console.log(req.url);

// });


// var homeController = function(req,res){
// //  fs.readFile('index.html', function(err, data) {
// //             res.write(data);
// //             res.end(' Mesaj Bitti');
// //             console.log('homeController')
// //         });
// }

// var loginController = function(req,res){
// // fs.readFile('about.html', function(err, data) {
// //             res.write(data);
// //             res.end();
// //             console.log('homeController')
// //         });

// }
// // Parameters are kept in hash table
// var routers = new Object();
// routers['/']=homeController;
// routers['/login']=loginController;