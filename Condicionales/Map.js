let pelicula1 = { titulo: "Toy Story", anio: 1995, valoracion: 5 }
let pelicula2 = { titulo: "Sing", anio: 2016, valoracion: 5 }
let pelicula3 = { titulo: "Spirit", anio: 2002, valoracion: 4 }
let pelicula4 = { titulo: "Mario Bross", anio: 2023, valoracion: 5 }
let pelicula5 = { titulo: "Super-Man", anio: 1978, valoracion: 4 }

let peliculas = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5]

let nuevoObjeto = ({valoracion}) => {

    valoracion >= 5 ? valoracion += 1 : valoracion += 0

    let objeto = {}
    objeto["valoracion"] = valoracion

    return objeto
}

let miNuevaValoracion = peliculas.map(nuevoObjeto)

console.log(peliculas)
console.log(miNuevaValoracion)

let reducirValoracion = (acum, {valoracion}) => acum + valoracion

let miTotalValoracion = peliculas.reduce(reducirValoracion,0)

console.log(miTotalValoracion)

let sumarValoracion = ({ valoracion }) => valoracion >= 5 ? valoracion += 1 : valoracion += 0

let valorado = peliculas.map(sumarValoracion)

console.log(valorado)
