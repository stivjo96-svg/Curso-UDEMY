var express = require("express")
var app = express()
app.use('/',(req,res) => res.send('Hola Stiven'))

app.listen(3000,()=>console.log("Escuchando en el puerto 3000"))
