// 15.Una función que reciba como parámetro un año y diga si ese año es
// bisiesto.


function biciestoAnio(valorAnio) {
    var biciesto = new Date(valorAnio, 1, 29).getMonth() == 1;
    return (biciesto);
}

function calcularAnioBisiesto() {
    let LeeAnio = Number(prompt("Ingrese el año entre 1000 y 9999, para calcular si es o no bisiesto", ""));
    if ( !isNaN(parseFloat(LeeAnio)) && isFinite(LeeAnio) && LeeAnio > 999 && LeeAnio <= 9999) {
        if (biciestoAnio(parseInt(LeeAnio))) {
            document.write("El año ingresado "+ parseInt(LeeAnio) +" ES bisiesto.");
        } else {
            document.write("El año ingresado "+ parseInt(LeeAnio) +" NO ES bisiesto.");
        }
    } else {
        alert("Error, el valor ingresado del año no es válido");
        calcularAnioBisiesto()
    }
}
calcularAnioBisiesto()
