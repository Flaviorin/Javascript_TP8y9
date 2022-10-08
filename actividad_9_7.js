// 7. Una función que se denomine imprimirValores que dado un número
// por parámetro, imprima cual es el valor siguiente, el doble y el
// cuadrado. Usando las funciones definidas en los puntos 5) , 6) y 7) :
// siguiente, el doble y el cuadrado.

function Siguiente(numeroAnterior) {
    return parseInt(++numeroAnterior);
}

function Doble(numeroAnterior) {
    return parseInt(numeroAnterior*=2);
}

function cuadrado(numeroAnterior) {
    return parseInt(numeroAnterior**=2);
}

function imprimirValores() {
    let LeeNumero = Number(prompt("Ingrese un número entre 1 a max(100), para calcular su valor siguiente, doble y cuadrado", ""));
    if ( !isNaN(parseFloat(LeeNumero)) && isFinite(LeeNumero) && LeeNumero > 0 && LeeNumero <= 100) {
        document.write("El número ("+ parseInt(LeeNumero) +"), tiene a su siguiente: " + Siguiente(parseInt(LeeNumero)) + ", su doble es: "+ Doble(parseInt(LeeNumero)) +" y su cuadrado es: ", cuadrado(parseInt(LeeNumero)));
    } else {
        alert("Error, el número ingresado no es válido");
        imprimirValores()
    }
}
imprimirValores()
