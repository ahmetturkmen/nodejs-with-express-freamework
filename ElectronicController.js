// module.exports =function (yazi) {
//     console.log('Electronic Controller called '+yazi)
// }
var path = require('path');
module.exports.index = function (req,res) {
    res.sendFile(path.join(__dirname,'index.html'));
}
module.exports.computer =function (req,res) {
res.sendFile(path.join(__dirname,'about.html'));
}
