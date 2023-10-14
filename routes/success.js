const path=require('path')

const express=require('express');

const utilDir=require('../util/path')

const router=express.Router();

router.get('/success',(req,res,next) =>{
    res.sendFile(path.join(utilDir,'views','success.html'))
});
router.post('/success',(req,res,next) =>{
    res.redirect('/success');
})

module.exports=router;