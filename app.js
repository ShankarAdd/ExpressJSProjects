const express=require('express');

const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended : false}));

app.use('/add-product',(req,res,next) =>{
    res.send('<form action="/product" method="POST"><label for="title">Name of product</label><br><input type="text" name="title"><br><label for="title">Price of product</label><br><input type="text" name="price"><br><br><button type="submit">Add Product</button></form>')
});
app.use('/product',(req,res,next) =>{
    console.log(req.body);
    res.redirect('/');
})
app.use('/',(req,res,next) =>{
    res.send('<h1 style="background-color:red">This is from ExpressJS')
});

app.listen(4000);