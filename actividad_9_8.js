// 8. Una función que se denomine imprimirElDobleDelSiguiente que dado
// un número por parámetro, imprima cual es el valor siguiente al el doble.
// Usando las funciones definidas en los puntos 5) , 6) : siguiente, el
// doble .

function Siguiente(numeroAnterior) {
    return parseInt(++numeroAnterior);
}

function Doble(numeroAnterior) {
    return parseInt(numeroAnterior*=2);
}

function cuadrado(numeroAnterior) {
    return parseInt(numeroAnterior**=2);
}

function imprimirElDobleDelSiguiente() {
    let LeeNumero = Number(prompt("Ingrese un número entre 1 a max(100), para calcular el doble de su valor siguiente", ""));
    if ( !isNaN(parseFloat(LeeNumero)) && isFinite(LeeNumero) && LeeNumero > 0 && LeeNumero <= 100) {
        document.write("El número ("+ parseInt(LeeNumero) +"), tiene como doble de su siguiente: "+ Doble(parseInt(Siguiente(parseInt(LeeNumero)))));
    } else {
        alert("Error, el número ingresado no es válido");
        imprimirElDobleDelSiguiente()
    }
}
imprimirElDobleDelSiguiente()

