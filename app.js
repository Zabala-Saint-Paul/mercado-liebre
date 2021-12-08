const express = require('express');

const path = require('path');

const app = express();

//detener servidor es ctrl + c
app.listen(3000, ()=> {
    console.log('El servidor esta prendido')
})


app.use(express.static(path.join(__dirname, './public'))); 


app.get('', (req,res) =>{
   
    res.sendFile((__dirname + '/views/home.html'));  // Permite enviar un archivo HTML
});