const listaCompra = ["arroz", "leche", "pan", "tomates", "agua"];
console.log(listaCompra);

listaCompra.push("aceite de girasol");
console.log(listaCompra);

listaCompra.pop();
console.log(listaCompra);

const listaPeliculas = [
    {titulo: "El señor de los anillos", director: "Peter Jackson", fecha: new Date(2001,11,19) },
    {titulo: "Origen", director: "Nolan", fecha: new Date(2010,7,6)},
    {titulo: "Interestelar", director: "Nolan", fecha: new Date(2014,10,7)}
]
console.log(listaPeliculas);

const peliculasPosteriores = listaPeliculas.filter(obj => obj.fecha > new Date(2010,0,1))
console.log(peliculasPosteriores);

const peliculasTitulo = listaPeliculas.map(objeto =>{
    return objeto.titulo
})
console.log(peliculasTitulo);

const peliculasDirectores = listaPeliculas.map(objeto =>{
    return objeto.director
})

const peliDir = peliculasDirectores.concat(peliculasTitulo)
console.log(peliDir);

const peliDir2 = [...peliculasDirectores,...peliculasTitulo]
console.log(peliDir2);