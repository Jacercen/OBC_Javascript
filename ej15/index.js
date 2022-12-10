var nombre = "Ja"
var apellido = "Cer"

var  nombreCompleto = {
    nombre,
    apellido
}

// sessionStorage.setItem("sessionData",JSON.stringify(nombreCompleto))

// localStorage.setItem("localData",JSON.stringify(nombreCompleto))

const dateexpire = new Date()
dateexpire.setTime(dateexpire.getTime()+2*60*1000)
// document.cookie = `cookieData= ${JSON.stringify(nombreCompleto)}; expires =  ${dateexpire}`