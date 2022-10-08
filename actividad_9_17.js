// 17.Una función que reciba día, mes y año y devuelva el día anterior

// ojo si pones 1ero deberia de traer el mes anterior...
function diaAyerAnioMesDia(valorDia,valorMes,valorAnio) {
    var y= parseInt(valorAnio);
    var m= parseInt(valorMes)-1;
    var d= parseInt(valorDia);
    var date= new Date(Date.UTC(y, m, d));
    var validaFechaExiste= date.getUTCFullYear()===y && date.getUTCMonth()===m && date.getUTCDate()===d;
    // console.log(validaFechaExiste);   // es para ver en pantalla de consola el valor boolean de verificar la existencia
    if (validaFechaExiste && d > '0' && d < '32' && m > '0' && m < '13' && y > '999' && y < '10000') {
        var diaIngresado = new Date(y,m,d);
        var diaAyer = new Date(diaIngresado.setDate(diaIngresado.getDate() - 1));
        console.log(diaAyer);
        return (diaAyer);
    } else {
        console.log("La fecha ingresada no existe o alguno de los valores ingresados es incorrecto");
    }
}
diaAyerAnioMesDia(07,02,2002); // valor correcto int
diaAyerAnioMesDia('x',02,2002); // valor incorrecto
diaAyerAnioMesDia('27',02,2002); // valor mix de datos int y str
diaAyerAnioMesDia('29',02,2002); // fecha no existe 
diaAyerAnioMesDia('29','09','2022'); // valor correcto str
