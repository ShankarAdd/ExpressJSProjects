const express=require('express');

const router=express.Router();

const successController = require('../controllers/successful')

router.get('/success',successController.getsuccess);
router.post('/success',successController.postSuccess)

module.exports=router;