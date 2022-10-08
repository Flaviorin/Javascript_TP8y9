// 13.Una función que dado el radio de un círculo devuelva el área del
// círculo.

function areaCirculo(valorRadio) {
    var area = (Math.PI*(valorRadio**=2));
    return (area);
}

function calcularAreaCirculo() {
    let LeeNumero = Number(prompt("Ingrese un valor entero del radio de un círculo entre 1 a max(100), para calcular su área", ""));
    if ( !isNaN(parseFloat(LeeNumero)) && isFinite(LeeNumero) && LeeNumero > 0 && LeeNumero <= 100) {
        document.write("El círculo cuyo radio es "+ parseInt(LeeNumero) +", tiene una área con valor: "+ areaCirculo(parseInt(LeeNumero)));
    } else {
        alert("Error, el valor ingresado no es válido");
        calcularAreaCirculo()
    }
}
calcularAreaCirculo()
