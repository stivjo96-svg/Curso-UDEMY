var permitido = "usuario permitido"
var miFuncion = acceso => acceso

var persona = {
    nombre: "Rosa",
    miAutomovil: [
        pintura = {
            marca: "Marca",
            precio: 50000,
            color: "Rojo"
        },

        vendedor = {
            nombre: "Stiven",
            edad: 2,

            ayudante: {
                nombre: "Anderson"
            }
        }
    ]
}

var miArray = [
    "Stiven",
    2025,
    34.9,
    true,
    ["Otro Array", "Array", 7900],
    miFuncion(permitido),
    persona
]

console.log(miArray[6].miAutomovil[1].ayudante.nombre)
