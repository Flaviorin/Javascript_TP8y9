// 9. Una función que se denomine
// imprimirElDobleDelSiguienteAlCuadrado que dado un número por
// parámetro, imprima cual es el valor siguiente al el doble. Usando las
// funciones definidas en los puntos 5) , 6) y 7) : siguiente, el doble y el
// cuadrado
function Siguiente(numeroAnterior) {
    return parseInt(++numeroAnterior);
}

function Doble(numeroAnterior) {
    return parseInt(numeroAnterior*=2);
}

function cuadrado(numeroAnterior) {
    return parseInt(numeroAnterior**=2);
}
function imprimirElDobleDelSiguienteAlCuadrado() {
    let LeeNumero = Number(prompt("Ingrese un número entre 1 a max(100), para calcular el doble de su valor siguiente al cuadrado", ""));
    if ( !isNaN(parseFloat(LeeNumero)) && isFinite(LeeNumero) && LeeNumero > 0 && LeeNumero <= 100) {
        document.write("El número ("+ parseInt(LeeNumero) +"), tiene como doble de su siguiente al cuadrado: "+ cuadrado(parseInt(Doble(parseInt(Siguiente(parseInt(LeeNumero)))))));
    } else {
        alert("Error, el número ingresado no es válido");
        imprimirElDobleDelSiguienteAlCuadrado()
    }
}
imprimirElDobleDelSiguienteAlCuadrado()
