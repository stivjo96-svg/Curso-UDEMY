var miArray = ["Hola", 2026, "Adios"]

var persona1 = {
    nombre : "Stiven",
    edad : 19
}

var persona2 = {
    nombre : "Anderson",
    edad : 31
}

var persona3 = {
    nombre : "Jefferson",
    edad : 33
}

var personas = [persona1, persona2, persona3]

for (let index = 0; index < miArray.length; index++) {
    if(personas[index].edad >= 20){
        break;
    }
    const element = personas[index].nombre;
    console.log(element)
}

personas.forEach( element => console.log(element.edad))
/*personas.forEach( element => console.log(miArray))
miArray.forEach( element => console.log(element))
miArray.forEach( (element,i) => {
    console.log(i)
    //console.log(element)
})*/


/*for( i=1; i <= 10; i++ ){
    if(i==1){
        console.log("Hola " + i + " vez")
    }else{
        console.log("Hola " + i + " veces")
    }
}*/
