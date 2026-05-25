// OBJETO

let estudiante = {
    nombre: "Stiven",
    edad: 29,
    carrera: "Desarrollo de Software",
    activo: true
};


// ARRAY

let materias = [
    "Programación Web",
    "Creacion de Aplicaciones",
    "Diseño Web"
];


// MOSTRAR SOLO DATOS

console.log("Nombre:", estudiante.nombre);

console.log("Edad:", estudiante.edad);

console.log("Carrera:", estudiante.carrera);

console.log("Activo:", estudiante.activo);


// MOSTRAR MATERIAS

console.log("Materia 1:", materias[0]);

console.log("Materia 2:", materias[1]);

console.log("Materia 3:", materias[2]);


// AGREGAR NUEVA MATERIA

materias.push("Base de Datos");

console.log("Nueva materia agregada:",
materias[3]);


// JSON

let estudianteJSON = JSON.stringify(estudiante);

console.log("JSON:");
console.log(estudianteJSON);

