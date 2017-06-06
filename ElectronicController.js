// module.exports =function (yazi) {
//     console.log('Electronic Controller called '+yazi)
// }
var path = require('path');
var express = require('express');
var router = express.Router();

module.exports.index = function (req,res) {
    res.sendFile(path.join(__dirname,'index.html'));
}
module.exports.computer =function (req,res) {
res.sendFile(path.join(__dirname,'about.html'));
}

router.get('/electronic', module.exports.index);
router.get('/electronic/computer', module.exports.computer);
module.exports = router;