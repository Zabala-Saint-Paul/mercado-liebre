const express = require('express');

const path = require('path');

const app = express();

//detener servidor es ctrl + c
/*app.listen(3000, ()=> {
    console.log('El servidor esta prendido')
})
*/
app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor corriendo en el puerto 3000')
})

app.use(express.static(path.join(__dirname, './public'))); 


app.get('', (req,res) =>{
   
    res.sendFile((__dirname + '/views/home.html'));  // Permite enviar un archivo HTML
});
app.get('/1', (req,res) =>{
   
    res.sendFile((__dirname + '/views/formulario.html'));  // Permite enviar un archivo HTML
});

app.get('/register', (req,res) =>{
   
    res.sendFile((__dirname + '/views/register.html'));  // Permite enviar un archivo HTML
});
app.get('/login', (req,res) =>{
   
    res.sendFile((__dirname + '/views/login.html'));  // Permite enviar un archivo HTML
});