// 1. Realizar una función, a la que se le pase como parámetro un número N,
// y muestre por consola N veces, el siguiente mensaje: “Bienvenidos al
// curso Full Stack”


function BienvenidosFullStack() {
    let CantNro = Number(prompt("Ingresa un número para repetir (Bienvenidos Full Stack) entre 1 a max(100)"));
    if ( !isNaN(parseFloat(CantNro)) && isFinite(CantNro) && CantNro > 0 && CantNro <= 100) {
        for (let index = 0; index < CantNro; index++) {
            console.log("Bienvenidos al curso Full Stack");
        }
    } else {
        alert("Error no es un número válido");
        BienvenidosFullStack()
    }
}
BienvenidosFullStack()
