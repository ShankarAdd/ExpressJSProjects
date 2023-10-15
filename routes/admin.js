const express=require('express');

const router=express.Router();

const adminController = require('../controllers/products')

router.get('/add-product', adminController.getAddProducts);

router.post('/add-product', adminController.postAddPoducts);

module.exports=router;