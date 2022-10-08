// 10.Una función que dado la longitud de un lado de un cuadrado devuelva
// el perímetro

function perimetroCuadrado(valorLado) {
    return parseInt(valorLado*=4);
}

function calcularPerimetroCuadrado() {
    let LeeNumero = Number(prompt("Ingrese un valor entero del lado de un cuadrado entre 1 a max(100), para calcular su perímetro", ""));
    if ( !isNaN(parseFloat(LeeNumero)) && isFinite(LeeNumero) && LeeNumero > 0 && LeeNumero <= 100) {
        document.write("El cuadrado cuyo valor del lado es "+ parseInt(LeeNumero) +", tiene un perímetro con valor: "+ perimetroCuadrado(parseInt(LeeNumero)));
    } else {
        alert("Error, el valor ingresado no es válido");
        calcularPerimetroCuadrado()
    }
}
calcularPerimetroCuadrado()
