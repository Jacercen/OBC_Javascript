// cadenas de texto eejercicio

let nombre = "Javi"
let apellido = "Cervera"

let estudiante = nombre + " "  + apellido
console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

let caracteres = estudiante.length
console.log(caracteres)

let firstnombre = nombre[0]
console.log(firstnombre)

let lastapellido = apellido[apellido.length-1]
console.log(lastapellido)

let noespaceestudiante = estudiante.replace(/ /g,"")
console.log(noespaceestudiante)

let isNombre = estudiante.includes(nombre)
console.log(isNombre)