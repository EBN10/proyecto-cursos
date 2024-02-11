const express= require('express')
const app = express()
const path = require ('path')

app.set('view engine','ejs')

app.get('/',(req,res) => {
    res.render('index')
})

app.listen(3000,()=>{
    console.log('El servidor esta corriendo de manera correcta en http://localhost:3000');
})