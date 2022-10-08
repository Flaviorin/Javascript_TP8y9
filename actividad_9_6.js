// 6. Una función que se llame cuadrado, que reciba como parámetro un
// valor, y devuelva el valor del numero ingresado como parámetro
// elevado al cuadrado.

function cuadrado(numeroAnterior) {
    return parseInt(numeroAnterior**=2);
}

function LeeNroCalculaCuadrado() {
    let LeeNumero = Number(prompt("Ingrese un número entre 1 a max(100), para calcular su valor al cuadrado", ""));
    if ( !isNaN(parseFloat(LeeNumero)) && isFinite(LeeNumero) && LeeNumero > 0 && LeeNumero <= 100) {
        document.write("El Cuadrado del número ("+ parseInt(LeeNumero) +") que ingresó es: ", cuadrado(parseInt(LeeNumero)));
    } else {
        alert("Error, el número ingresado no es válido");
        LeeNroCalculaCuadrado()
    }
}
LeeNroCalculaCuadrado()
