const express=require('express');

const router=express.Router();

router.get('/add-product',(req,res,next) =>{
    res.send('<form action="/admin/add-product" method="POST"><label for="title">Name of product</label><br><input type="text" name="title"><br><label for="title">Price of product</label><br><input type="text" name="price"><br><br><button type="submit">Add Product</button></form>')
});
router.post('/add-product',(req,res,next) =>{
    console.log(req.body);
    res.redirect('/');
});

module.exports=router;