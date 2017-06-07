// module.exports =function (yazi) {
//     console.log('Electronic Controller called '+yazi)
// }
var path = require('path');

   var brands = ['Fujitsu-Siemens','Apple','Dell','Lenovo'];

   var FORMATTED_JSON={ message:'Hello I am controller',
                  someBrands:brands };

    var equipments =['Mouse','Computer','Keyboard','WebCam','Cable'];
   
    var FORMATTED_ELECTRONIC_EQUIP = {
        message:'This part is belongs to electronic area ',
        equipments_elec:equipments
    };
    

module.exports.index = function (req,res) {
   // console.log(req.deneme);
    res.render('electronic',FORMATTED_ELECTRONIC_EQUIP );
 
 //   res.render('computer',FORMATTED_JSON);
 // res.sendFile(path.join(__dirname,'../../index.html'));
}
module.exports.computer =function (req,res) {
    res.render('computer',FORMATTED_JSON);
//res.sendFile(path.join(__dirname,'../../about.html'));
}
