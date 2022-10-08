// 11. Una función que dado la longitud de un lado de un cuadrado devuelva
// la superficie.

function superficieCuadrado(valorLado) {
    return parseInt(valorLado**=2);
}

function calcularSuperficieCuadrado() {
    let LeeNumero = Number(prompt("Ingrese un valor entero del lado de un cuadrado entre 1 a max(100), para calcular su superficie", ""));
    if ( !isNaN(parseFloat(LeeNumero)) && isFinite(LeeNumero) && LeeNumero > 0 && LeeNumero <= 100) {
        document.write("El cuadrado cuyo valor del lado es "+ parseInt(LeeNumero) +", tiene una superficie con valor: "+ superficieCuadrado(parseInt(LeeNumero)));
    } else {
        alert("Error, el valor ingresado no es válido");
        calcularSuperficieCuadrado()
    }
}
calcularSuperficieCuadrado()
