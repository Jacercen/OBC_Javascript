// funcion true

function verdadero(){
    return true
}

function asincrona(){
    setTimeout(function(){
        console.log("Hola soy una promesa");
    }, 5000)
}

asincrona();

function* generaIdpares(){
    let id = 0;
    while(true){
        yield id=+2   
    }
}
