var user = "Stiven"

var persona = {
    nombre: "Stiven",
    sexo: "Masculino"
}

var miObjeto = {
    

    nombre: "joseph",
    edad: 29,
    importante: true,
    texto: `Usuario ${user}`,

    miFuncion: (a, b) => a + b,

    otroObjeto: persona,

    fecha: new Date()
}

var { nombre } = miObjeto

console.log(miObjeto.fecha.getFullYear())


var otraFuncion = (text, { otroObjeto }) => {

    console.log(otroObjeto.sexo)

    console.log(text)
}

otraFuncion(miObjeto.texto, miObjeto)