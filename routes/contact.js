const express = require('express');

const router=express.Router();

const adminController = require('../controllers/contactus');

router.get('/contactus',adminController.getcontact)

router.post('/contactus',adminController.postcontactSuccess)

module.exports=router;