const express = require('express');

const router=express.Router();

router.get('/',(req,res,next) =>{
    res.send('<h1 style="background-color:red">This is from ExpressJS')
});

module.exports = router;