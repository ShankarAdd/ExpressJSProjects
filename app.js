const express=require('express');

const path=require('path');

const adminRoutes=require('./routes/admin')

const shopRoutes=require('./routes/shop')

const contactroutes=require('./routes/contact')

const success=require('./routes/success');

const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use('/admin',contactroutes);

app.use(success);

app.use((req,res,next) =>{
    //Because we need not to specify uplevel ('../') and we are in the root folder
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})


app.listen(4000);