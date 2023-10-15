const path=require('path');

const utilDir = require('../util/path');

exports.getAddProducts = (req,res,next) =>{
    res.sendFile(path.join(utilDir,'views','admin.html'))
}
exports.postAddPoducts = (req,res,next) =>{
    console.log(req.body);
    res.redirect('/');
}
