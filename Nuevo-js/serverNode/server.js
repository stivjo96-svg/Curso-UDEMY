var express = require("express")
var app = express()

app.get('/home', (req, res) => res.send('Hola Stiven'))
app.post('/login', (req, res) => res.send('Bienvenido Usuario'))
app.patch('/actualizar', (req, res) => res.send('Usuario actualizado'))
app.delete('/borrar', (req, res) => res.send('Usuario eliminado'))

app.listen(3000, () => console.log("Escuchando en el puerto 3000"))
