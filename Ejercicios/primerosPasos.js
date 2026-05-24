// VARIABLES

let nombre = "Stiven";
let apellido = "Vallejo";
let edad = 29;
let carrera = "Desarrollo de Software";
let promedio = 9.5;
let estudianteActivo = true;

// STRINGS Y MÉTODOS

let nombreCompleto = nombre + " " + apellido;

console.log("Nombre completo:", nombreCompleto);

console.log("Nombre en mayúsculas:", nombreCompleto.toUpperCase());

console.log("Carrera en minúsculas:", carrera.toLowerCase());

console.log("Cantidad de letras del nombre:",
nombreCompleto.length);

// OPERADORES

let edadFutura = edad + 5;
let promedioFinal = promedio * 2;

console.log("Edad dentro de 5 años:", edadFutura);

console.log("Promedio multiplicado por 2:", promedioFinal);

// TIPO DE VARIABLES

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof promedio);
console.log(typeof estudianteActivo);
