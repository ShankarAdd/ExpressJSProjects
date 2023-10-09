const express=require('express');

const app=express();

app.use((req,res,next) =>{
    console.log('In middleware');
    next();
}); 
app.use((req,res,next) =>{
    console.log('In another middleware');
    res.send('<h1 style="background-color:red">This is from ExpressJS')
});

app.listen(4000);