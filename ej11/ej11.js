 class Estudiante {
    nombre = "Jacer"
    asignaturas =["Lengua","Matemáticas","Filosofía"]
    obtenDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
 }

 const estudiante = new Estudiante()
 console.log(estudiante.obtenDatos());