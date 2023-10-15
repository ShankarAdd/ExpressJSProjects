const path=require('path');

const shopDir = require('../util/path');

exports.shop = (req,res,next) =>{
    res.sendFile(path.join(shopDir,'views','shop.html'))
}