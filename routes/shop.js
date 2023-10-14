const path=require('path')

const express = require('express');

const utilDir=require('../util/path');

const router=express.Router();

router.get('/',(req,res,next) =>{
    res.sendFile(path.join(utilDir,'views','shop.html'))
});

module.exports = router;