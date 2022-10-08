// 14.Una función que dado un número de mes y me devuelva la cantidad de
// días de ese mes (suponiendo que no es un año bisiesto).


function diasMes(valorMes) {
    var dias = new Date(new Date().getFullYear(), valorMes, 0).getDate();
    // Otra opcion seria con un if de acuerdo al numero de mes informar 30 31 0 29 y devolverlo
    return (dias);
}

function calcularDiasDelMes() {
    let LeeMes = Number(prompt("Ingrese el día del mes entre 1 y 12, para calcular la cantidad de dias que tiene", ""));
    if ( !isNaN(parseFloat(LeeMes)) && isFinite(LeeMes) && LeeMes > 0 && LeeMes <= 12) {
        document.write("El mes ingresado es "+ parseInt(LeeMes) +", tiene una cantidad de días: "+ diasMes(parseInt(LeeMes)));
    } else {
        alert("Error, el valor ingresado del Mes no es válido");
        calcularDiasDelMes()
    }
}
calcularDiasDelMes()
