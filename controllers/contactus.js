const path=require('path');

const rootDir=require('../util/path')

exports.getcontact = (req,res) =>{
    res.sendFile(path.join(rootDir,'views','contactus.html'))
}
exports.postcontactSuccess = (req,res,next) =>{
    res.redirect('/success')
}