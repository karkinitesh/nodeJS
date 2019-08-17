

const express = require('express');
const app = express();

const bodyParser = require("body-parser");

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

const path = require('path');



app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use((req,res, next) => 
{
    res.status(404).sendFile(path.join(__dirname, 'htmlFiles', '404.html'));
})

app.listen(3000);