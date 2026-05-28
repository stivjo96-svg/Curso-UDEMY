// ARRAY DE NOTAS

let notas = [5, 7, 8, 9, 10];


// IF ELSE

let promedioInicial = 6;

if (promedioInicial >= 7) {
    console.log("El estudiante APRUEBA");
} else {
    console.log("El estudiante REPRUEBA");
}


// SWITCH

let materia = "Diseño";

switch (materia) {

    case "Programacion":
        console.log("Materia de Programación");
        break;

    case "Desarrollo":
        console.log("Materia de Desarrollo Web");
        break;

    case "Diseño":
        console.log("Materia de Diseño Gráfico");
        break;

    default:
        console.log("Materia no encontrada");
}


// FOR

console.log("Notas usando FOR");

for (let i = 0; i < notas.length; i++) {
    console.log(notas[i]);
}


// FOREACH

console.log("Notas usando FOREACH");

notas.forEach(function(nota) {
    console.log(nota);
});


// MAP

let nuevasNotas = notas.map(function(nota) {
    return nota + 2;
});

console.log("Notas aumentadas:");
console.log(nuevasNotas);


// REDUCE

let sumaNotas = notas.reduce(function(acumulador, nota) {
    return acumulador + nota;
}, 0);

let promedio = sumaNotas / notas.length;

console.log("Promedio final:");
console.log(promedio);
