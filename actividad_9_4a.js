// 2da Parte del ejercicio
// Una función que se llame siguiente, que reciba como
// parámetro un valor entero, y devuelva el siguiente del número
// ingresado como parámetro

function Siguiente(numeroAnterior) {
    return parseInt(++numeroAnterior);
}

function LeeNroCalculaSiguiente() {
    let LeeNumero = Number(prompt("Ingrese un número entre 1 a max(100), para calcular el siguiente", ""));
    if ( !isNaN(parseFloat(LeeNumero)) && isFinite(LeeNumero) && LeeNumero > 0 && LeeNumero <= 100) {
        document.write("El número siguiente al que ingreso es: ", Siguiente(parseInt(LeeNumero)));
    } else {
        alert("Error, el número ingresado no es válido");
        LeeNroCalculaSiguiente()
    }
}
LeeNroCalculaSiguiente()

