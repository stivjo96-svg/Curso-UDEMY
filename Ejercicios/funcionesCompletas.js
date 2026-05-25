// FUNCIÓN NORMAL

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

let resultadoSuma = sumar(30, 15);

console.log("La suma es:", resultadoSuma);


// ARROW FUNCTION

const multiplicar = (a, b) => {
    return a * b;
};

let resultadoMultiplicacion = multiplicar(3, 7);

console.log("La multiplicación es:", resultadoMultiplicacion);


// FUNCIONES NUMÉRICAS

let numeroDecimal = 5.25;

console.log("Número original:", numeroDecimal);

console.log("Redondeado:", Math.round(numeroDecimal));

console.log("Raíz cuadrada:", Math.sqrt(25));

console.log("Número máximo:", Math.max(3, 70, 100));

console.log("Número mínimo:", Math.min(3, 70, 100));


// OTRA FUNCIÓN

function calcularPromedio(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

let promedio = calcularPromedio(8, 9, 7);

console.log("El promedio es:", promedio);