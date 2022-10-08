// 18. Una función que se llame ultimoDiaDelMes que reciba día, mes y año y
// devuelva el último día del mes.

function ultimoDiaDelMes(valorDia,valorMes,valorAnio) {
    var y= parseInt(valorAnio);
    var m= parseInt(valorMes)-1; // antes -1
    var d= parseInt(valorDia);
    var date= new Date(Date.UTC(y, m, d));
    var validaFechaExiste= date.getUTCFullYear()===y && date.getUTCMonth()===m && date.getUTCDate()===d;
    var cantDiasMesdelAnio = new Date(new Date().getFullYear(y), m+1, 0).getDate();
    var bisiesto = new Date(y, 1, 29).getMonth() == 1; //significa que es bisiesto
    if (validaFechaExiste && d > '0' && d < '32' && m > '0' && m < '13' && y > '999' && y < '10000') {
        if (bisiesto && m == 1) {
            console.log("Tiene 29");
            return (29);            
        } else {
            console.log(parseInt(cantDiasMesdelAnio));
            return (parseInt(cantDiasMesdelAnio));
        } 
    } else {
        console.log("La fecha ingresada no existe o alguno de los valores ingresados es incorrecto");
    }
}
ultimoDiaDelMes(7,4,2002); // valor correcto int
ultimoDiaDelMes('x',02,2002); // valor incorrecto
ultimoDiaDelMes('27',05,2002); // valor mix de datos int y str
ultimoDiaDelMes('29',02,2002); // fecha no existe 
ultimoDiaDelMes('29','09',2022); // valor correcto str
ultimoDiaDelMes('22','2','1991'); // valor correcto NO bisiesto
ultimoDiaDelMes('22','2','1988'); // valor correcto bisiesto

