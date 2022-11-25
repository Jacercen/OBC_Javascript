
const datos = {
    nombre: "Javi",
    apellido: "Cer",
    edad: 49,
    altura: 180,
    eresDesarrollador: true
}

const edad = datos.edad;
console.log(edad);

const personas = [
    {
        ...datos
    },
    {
    nombre: "Ser",
    apellido: "Lo",
    edad: 59,
    altura: 190,
    eresDesarrollador: true
    },
    {
    nombre: "Da",
    apellido: "Can",
    edad: 48,
    altura: 188,
    eresDesarrollador: false
    }
]
console.log(personas);

const edadPersonas = personas.sort((a,b)=> a.edad-b.edad)
console.log(personas);