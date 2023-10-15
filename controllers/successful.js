const path=require('path');

const dir=require('../util/path')

exports.getsuccess = (req,res,next) =>{
    res.sendFile(path.join(dir,'views','success.html'))
}
exports.postSuccess = (req,res,next) =>{
    res.redirect('/success');
}