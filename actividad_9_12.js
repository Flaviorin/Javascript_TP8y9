// 12.Una función que dado el radio de un círculo devuelva la circunferencia
// (perímetro del círculo)

function perimetroCirculo(valorRadio) {
    var Perimetro = 2*(Math.PI*valorRadio);
    return (Perimetro);
}

function calcularperimetroCirculo() {
    let LeeNumero = Number(prompt("Ingrese un valor entero del radio de un círculo entre 1 a max(100), para calcular su circunferencia", ""));
    if ( !isNaN(parseFloat(LeeNumero)) && isFinite(LeeNumero) && LeeNumero > 0 && LeeNumero <= 100) {
        document.write("El círculo cuyo radio es "+ parseInt(LeeNumero) +", tiene una circunferencia con valor: "+ perimetroCirculo(parseInt(LeeNumero)));
    } else {
        alert("Error, el valor ingresado no es válido");
        calcularperimetroCirculo()
    }
}
calcularperimetroCirculo()
