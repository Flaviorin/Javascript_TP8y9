// 16.Una función que reciba el día, mes y año y me devuelva la cantidad de
// días de ese mes

function diasAnioMesDia(valorAnio,valorMes,valorDia) {
    var diasDelDiaMesAño = new Date(new Date().getFullYear(valorAnio), valorMes, valorDia).getDate();
    return (diasDelDiaMesAño);
}

function calcularDiasDelMesDelAño() {
    let LeeAnio = Number(prompt("Ingrese el año entre 1000 y 9999", ""));
    let LeeMes = Number(prompt("Ingrese el número del mes entre 1 y 12", ""));
    let LeeDia = Number(prompt("Ingrese el número del día entre 1 y 31", ""));
    if ( !isNaN(parseFloat(LeeAnio)) && isFinite(LeeAnio) && LeeAnio > 999 && LeeAnio <= 9999 && !isNaN(parseFloat(LeeMes)) && isFinite(LeeMes) && LeeMes > 0 && LeeMes <= 12 && !isNaN(parseFloat(LeeDia)) && isFinite(LeeDia) && LeeDia > 0 && LeeDia <= 31) {
        document.write("El año/mes/día ingresado "+ parseInt(LeeAnio) +"/"+ parseInt(LeeMes) +"/"+ parseInt(LeeDia) +" tiene para el mes una cantidad de: ", parseInt(diasAnioMesDia(LeeAnio,LeeMes,0)) ,"días.");
    } else {
        alert("Error, alguno de los valores ingresados no es válido");
        calcularDiasDelMesDelAño()
    }
}
calcularDiasDelMesDelAño()
